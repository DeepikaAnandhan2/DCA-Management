from fastapi import FastAPI
from app.core.database import engine
from app.models.base import Base
from fastapi.middleware.cors import CORSMiddleware

from app.models import user
from app.models import case
from app.models import erp_invoice
from app.models import dca_agency
from app.models import case_audit_log




from app.api.v1 import rpa, cases, dcas, auth


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",  # Vite frontend
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],  # IMPORTANT
    allow_headers=["*"],  # IMPORTANT
)

Base.metadata.create_all(bind=engine)
app.include_router(auth.router)
app.include_router(rpa.router, prefix="/api/v1")
app.include_router(cases.router, prefix="/api/v1")
app.include_router(dcas.router, prefix="/api/v1")

@app.get("/")
def root():
    return {"status": "DCA Backend Running"}
