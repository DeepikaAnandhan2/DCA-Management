from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.database import SessionLocal
from app.services.case_service import create_case

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/cases")
def create(data: dict, db: Session = Depends(get_db)):
    return create_case(db, data)

@router.get("/cases")
def list_cases(db: Session = Depends(get_db)):
    return db.execute("select * from cases").fetchall()
