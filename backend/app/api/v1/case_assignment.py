from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from datetime import datetime, timedelta
from app.core.database import get_db
from app.models.case import Case

router = APIRouter(prefix="/cases", tags=["DCA Assignment"])

@router.post("/{case_id}/assign/{dca_id}")
def assign_case(case_id: int, dca_id: int, db: Session = Depends(get_db)):
    case = db.query(Case).filter(Case.id == case_id).first()

    if not case or case.status != "APPROVED":
        return {"error": "Case not approved or not found"}

    case.assigned_to = dca_id
    case.status = "ASSIGNED"
    case.assigned_at = datetime.utcnow()

    # SLA starts ONLY NOW
    case.sla_due_at = datetime.utcnow() + timedelta(days=14)

    db.commit()

    return {"message": "Case assigned to DCA"}
