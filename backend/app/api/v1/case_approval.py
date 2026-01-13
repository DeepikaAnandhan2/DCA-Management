from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from datetime import datetime
from app.core.database import get_db
from app.models.case import Case

router = APIRouter(prefix="/cases", tags=["Case Approval"])

@router.post("/{case_id}/approve")
def approve_case(case_id: int, db: Session = Depends(get_db)):
    case = db.query(Case).filter(Case.id == case_id).first()

    if not case:
        return {"error": "Case not found"}

    case.status = "APPROVED"
    case.approved_at = datetime.utcnow()
    db.commit()

    return {"message": "Case approved"}
