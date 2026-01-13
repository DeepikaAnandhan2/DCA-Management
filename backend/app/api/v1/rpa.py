from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.services.rpa_service import run_rpa_job

router = APIRouter(
    prefix="/api/v1/rpa",
    tags=["RPA"]
)

@router.post("/run")
def run_rpa(threshold_days: int = 30, db: Session = Depends(get_db)):
    picked = run_rpa_job(db, threshold_days)
    return {
        "picked_invoices": picked,
        "count": len(picked)
    }
