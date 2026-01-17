from datetime import datetime, timedelta
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

# Internal Imports
from app.schemas.case import CaseNoteRequest
from app.core.auth import require_fedex, require_dca, require_fedex_or_dca
from app.core.audit import log_case_action
from app.core.database import get_db
from app.models.case import Case
from app.models.dca_agency import DCAAgency
from app.models.case_audit_log import CaseAuditLog

router = APIRouter(prefix="/cases", tags=["Cases"])

# =========================
#  GET CASE DETAIL (DCA / FEDEX)
# =========================
@router.get("/{case_id}")
def get_case_detail(
    case_id: int,
    db: Session = Depends(get_db),
    payload: dict = Depends(require_fedex_or_dca)
):
    case = db.query(Case).filter(Case.id == case_id).first()
    if not case:
        raise HTTPException(status_code=404, detail="Case not found")
    return case

# =========================
# LIST ALL CASES HISTORY (AUDIT LOG)
# =========================

@router.get("/{case_id}/history")
def case_history(
    case_id: int,
    db: Session = Depends(get_db),
    _: dict = Depends(require_fedex_or_dca)
):
    return (
        db.query(CaseAuditLog)
        .filter(CaseAuditLog.case_id == case_id)
        .order_by(CaseAuditLog.created_at.desc())
        .all()
    )
# =========================
# LIST ALL CASES
# =========================
@router.get("/")
def list_cases(
    db: Session = Depends(get_db),
    payload: dict = Depends(require_fedex_or_dca)
):
    return db.query(Case).all()

# =========================
#  SLA BREACH CHECKER
# =========================
@router.get("/sla/breached")
def breached_cases(
    db: Session = Depends(get_db),
    payload: dict = Depends(require_fedex)
):
    now = datetime.utcnow()
    return db.query(Case).filter(
        Case.sla_due_at != None,
        Case.sla_due_at < now,
        Case.status == "ASSIGNED"
    ).all()

# =========================
# SLA ALERT (24H Warning)
# =========================
@router.get("/sla/warning")
def sla_warning_cases(
    db: Session = Depends(get_db),
    payload: dict = Depends(require_fedex)
):
    now = datetime.utcnow()
    warning_time = now + timedelta(hours=24)

    return db.query(Case).filter(
        Case.sla_due_at <= warning_time,
        Case.sla_due_at > now,
        Case.status == "ASSIGNED"
    ).all()

# =========================
# PRIORITY LEVEL (FedEx)
# =========================
@router.get("/priority/{level}")
def cases_by_priority(
    level: str, 
    db: Session = Depends(get_db),
    payload: dict = Depends(require_fedex)
):
    level = level.upper()
    if level not in ["HIGH", "MEDIUM", "LOW"]:
        raise HTTPException(status_code=400, detail="Invalid priority level")

    return db.query(Case).filter(Case.priority == level).all()

@router.get("/dashboard")
def fedex_dashboard(
    db: Session = Depends(get_db),
    payload: dict = Depends(require_fedex)
):
    return (
        db.query(Case)
        .order_by(
            Case.priority.desc(),   # HIGH first
            Case.created_at.desc()
        )
        .all()
    )

@router.get("/dca/my-cases")
def dca_cases(
    db: Session = Depends(get_db),
    payload: dict = Depends(require_dca)
):
    return db.query(Case).filter(
        Case.status == "ASSIGNED"
    ).all()

# =========================
#  APPROVE CASE (FedEx)
# =========================
@router.post("/{case_id}/approve")
def approve_case(
    case_id: int, 
    db: Session = Depends(get_db), 
    payload: dict = Depends(require_fedex)
):
    case = db.query(Case).filter(Case.id == case_id).first()
    if not case:
        raise HTTPException(status_code=404, detail="Case not found")

    if case.status == "APPROVED":
        raise HTTPException(status_code=400, detail="Case already approved")

    case.status = "APPROVED"
    case.approved_at = datetime.utcnow()
    
    log_case_action(
        db,
        case_id=case.id,
        action="APPROVED",
        performed_by="FEDEX",
        remarks="Case approved by FedEx operations"
    )
    db.commit()

    return {
        "message": "Case approved",
        "case_id": case.id,
        "approved_at": case.approved_at
    }

# =========================
#  ASSIGN CASE TO DCA
# =========================
@router.post("/{case_id}/assign/{dca_id}")
def assign_case(
    case_id: int, 
    dca_id: int, 
    db: Session = Depends(get_db),
    payload: dict = Depends(require_fedex)
):
    case = db.query(Case).filter(Case.id == case_id).first()
    if not case:
        raise HTTPException(status_code=404, detail="Case not found")

    if case.status != "APPROVED":
        raise HTTPException(
            status_code=400,
            detail="Case must be approved before assignment"
        )

    dca = db.query(DCAAgency).filter(DCAAgency.id == dca_id).first()
    if not dca:
        raise HTTPException(status_code=404, detail="DCA not found")

    case.assigned_to = dca.id
    case.assigned_at = datetime.utcnow()
    case.sla_due_at = datetime.utcnow() + timedelta(days=7)
    case.status = "ASSIGNED"

    log_case_action(
        db,
        case_id=case.id,
        action="ASSIGNED",
        performed_by="FEDEX",
        remarks=f"Assigned to DCA ID {dca.id}"
    )

    db.commit()

    return {
        "message": "Case assigned successfully",
        "case_id": case.id,
        "assigned_to": dca.name,
        "sla_due_at": case.sla_due_at
    }

# =========================
#  ESCALATE CASE
# =========================
@router.post("/{case_id}/escalate")
def escalate_case(
    case_id: int, 
    db: Session = Depends(get_db),
    payload: dict = Depends(require_fedex)
):
    case = db.query(Case).filter(Case.id == case_id).first()
    if not case:
        raise HTTPException(status_code=404, detail="Case not found")

    case.status = "ESCALATED"

    log_case_action(
        db,
        case_id=case.id,
        action="ESCALATED",
        performed_by="FEDEX",
        remarks="Manual escalation"
    )

    db.commit()

    return {
        "message": "Case escalated to FedEx operations",
        "case_id": case.id
    }

@router.post("/sla/auto-escalate")
def auto_escalate_cases(
    db: Session = Depends(get_db),
    payload: dict = Depends(require_fedex)
):
    now = datetime.utcnow()
    breached = db.query(Case).filter(
        Case.sla_due_at < now,
        Case.status == "ASSIGNED"
    ).all()

    for case in breached:
        case.status = "ESCALATED"
        log_case_action(
            db,
            case_id=case.id,
            action="AUTO_ESCALATED",
            performed_by="SYSTEM",
            remarks="SLA breached"
        )

    db.commit()
    return {
        "message": "Auto escalation completed",
        "escalated_cases": len(breached)
    }

# =========================
#  MARK CASE AS PAID (DCA)
# =========================
@router.post("/{case_id}/mark-paid")
def mark_case_paid(
    case_id: int,
    db: Session = Depends(get_db),
    payload: dict = Depends(require_dca)
):
    case = db.query(Case).filter(Case.id == case_id).first()
    if not case:
        raise HTTPException(status_code=404, detail="Case not found")

    if case.status != "ASSIGNED":
        raise HTTPException(
            status_code=400,
            detail="Only assigned cases can be marked as paid"
        )

    case.status = "PAID"
    case.closed_at = datetime.utcnow()

    log_case_action(
        db,
        case_id=case.id,
        action="PAID",
        performed_by="DCA",
        remarks="Payment collected and case closed"
    )

    db.commit()

    return {
        "message": "Case marked as paid",
        "case_id": case.id,
        "closed_at": case.closed_at
    }

# =========================
#  ADD CASE NOTE (DCA)
# =========================
@router.post("/{case_id}/notes")
def add_case_note(
    case_id: int,
    payload: CaseNoteRequest, # The JSON body
    db: Session = Depends(get_db),
    auth_user: dict = Depends(require_dca) # The JWT role check
):
    case = db.query(Case).filter(Case.id == case_id).first()
    if not case:
        raise HTTPException(status_code=404, detail="Case not found")

    log_case_action(
        db,
        case_id=case.id,
        action="NOTE_ADDED",
        performed_by="DCA",
        remarks=payload.note
    )

    db.commit()

    return {"message": "Note added successfully"}
