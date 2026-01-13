from fastapi import APIRouter
from app.core.security import create_token

router = APIRouter()

@router.post("/login")
def login(role: str):
    token = create_token({"role": role})
    return {"access_token": token}
