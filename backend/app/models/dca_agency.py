# app/models/dca_agency.py
from sqlalchemy import Column, Integer, String
from app.models.base import Base

class DCAAgency(Base):
    __tablename__ = "dca_agencies"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=True)
    email = Column(String, nullable=True)
