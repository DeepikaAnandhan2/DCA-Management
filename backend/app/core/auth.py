from datetime import datetime, timedelta
from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from jose import jwt, JWTError

# ======================
# CONFIG
# ======================
SECRET_KEY = "super-secret-key-change-this"  # move to env later
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60

security = HTTPBearer()

# ======================
# TOKEN CREATION
# ======================
def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()

    expire = datetime.utcnow() + (
        expires_delta or timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    )
    to_encode.update({"exp": expire})

    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

# ======================
# TOKEN DECODER
# ======================
def decode_token(
    credentials: HTTPAuthorizationCredentials = Depends(security)
):
    token = credentials.credentials

    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except JWTError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid or expired token",
            headers={"WWW-Authenticate": "Bearer"},
        )

# ======================
# ROLE GUARDS
# ======================
def require_fedex(payload: dict = Depends(decode_token)):
    if payload.get("role") != "fedex":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="FedEx access only",
        )
    return payload


def require_dca(payload: dict = Depends(decode_token)):
    if payload.get("role") != "dca":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="DCA access only",
        )
    return payload


def require_fedex_or_dca(payload: dict = Depends(decode_token)):
    if payload.get("role") not in ["fedex", "dca"]:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not authorized",
        )
    return payload
