from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.models.dca_agency import DCAAgency

router = APIRouter(prefix="/dcas", tags=["DCAs"])

@router.get("/")
def list_dcas(db: Session = Depends(get_db)):
    return db.query(DCAAgency).all()

@router.post("/")
def create_dca(name: str, location: str, db: Session = Depends(get_db)):
    dca = DCAAgency(name=name, location=location)
    db.add(dca)
    db.commit()
    return dca
