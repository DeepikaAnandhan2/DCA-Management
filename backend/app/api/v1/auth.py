from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.core.security import create_access_token

router = APIRouter(prefix="/api/v1/auth", tags=["Auth"])

class LoginRequest(BaseModel):
    email: str

class LoginResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    role: str

@router.post("/login", response_model=LoginResponse)
def login(payload: LoginRequest):

    # 🔹 TEMP role detection logic
    if payload.email.endswith("@fedex.com"):
        role = "fedex"
    elif payload.email.endswith("@dca.com"):
        role = "dca"
    else:
        raise HTTPException(status_code=401, detail="Unauthorized user")

    token_data = {
        "sub": payload.email,
        "role": role
    }

    token = create_access_token(token_data)

    return {
        "access_token": token,
        "token_type": "bearer",
        "role": role
    }
