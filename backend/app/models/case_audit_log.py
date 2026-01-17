from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from datetime import datetime
from app.models.base import Base

class CaseAuditLog(Base):
    __tablename__ = "case_audit_logs"

    id = Column(Integer, primary_key=True, index=True)

    case_id = Column(Integer, ForeignKey("cases.id"), nullable=False)

    action = Column(String, nullable=False)  
    performed_by = Column(String, nullable=False)  # FEDEX / DCA / SYSTEM
    remarks = Column(String, nullable=True)

    created_at = Column(DateTime, default=datetime.utcnow)
