from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from datetime import datetime
from app.models.base import Base

class Case(Base):
    __tablename__ = "cases"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)

    status = Column(String, default="PENDING_APPROVAL")

    assigned_to = Column(Integer, ForeignKey("dca_agencies.id"), nullable=True)

    created_at = Column(DateTime, default=datetime.utcnow)
    approved_at = Column(DateTime, nullable=True)
    assigned_at = Column(DateTime, nullable=True)
    sla_due_at = Column(DateTime, nullable=True)
