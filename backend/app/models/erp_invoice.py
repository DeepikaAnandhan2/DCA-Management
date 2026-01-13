from sqlalchemy import Column, Integer, String
from app.models.base import Base

class ERPInvoice(Base):
    __tablename__ = "erp_invoices"

    id = Column(Integer, primary_key=True, index=True)
    invoice_id = Column(String, unique=True, nullable=False)
    customer_name = Column(String)
    email = Column(String)
    phone = Column(String)
    overdue_days = Column(Integer)
    amount_due = Column(Integer)
    status = Column(String)
