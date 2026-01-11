from pydantic import BaseModel


class CaseCreate(BaseModel):
    title: str
    assigned_to: int


class CaseResponse(CaseCreate):
    id: int
    status: str

    class Config:
        from_attributes = True
