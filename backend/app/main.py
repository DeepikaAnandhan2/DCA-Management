from fastapi import FastAPI
from app.core.database import engine
from app.models.base import Base

# 🔥 IMPORT MODELS (DO NOT DELETE)
from app.models import user
from app.models import case
from app.models import erp_invoice
from app.models import dca_agency


from app.api.v1 import rpa
from app.api.v1 import rpa, cases




app = FastAPI()

Base.metadata.create_all(bind=engine)

app.include_router(rpa.router)
app.include_router(cases.router)
@app.get("/")
def root():
    return {"status": "DCA Backend Running"}
