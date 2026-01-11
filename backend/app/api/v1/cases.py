from typing import List
from datetime import datetime
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.models.case import Case
from app.models.dca_agency import DCAAgency

from datetime import datetime, timedelta
from fastapi import HTTPException

router = APIRouter(prefix="/cases", tags=["Cases"])

@router.get("/")
def list_cases(db: Session = Depends(get_db)):
    cases = db.query(Case).all()
    
@router.post("/{case_id}/approve")
def approve_case(case_id: int, db: Session = Depends(get_db)):
    case = db.query(Case).filter(Case.id == case_id).first()
    if not case:
        raise HTTPException(status_code=404, detail="Case not found")

    case.status = "APPROVED"
    case.approved_at = datetime.utcnow()

    db.commit()

    return {
        "message": "Case approved",
        "case_id": case.id,
        "approved_at": case.approved_at
    }


@router.post("/{case_id}/assign/{dca_id}")
def assign_case(case_id: int, dca_id: int, db: Session = Depends(get_db)):
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

    db.commit()

    return {
        "message": "Case assigned successfully",
        "case_id": case.id,
        "assigned_to": dca.name,
        "sla_due_at": case.sla_due_at
    }
