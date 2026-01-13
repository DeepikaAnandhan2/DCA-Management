from app.services.priority_engine import calculate_priority
from sqlalchemy.orm import Session
from app.models.case import Case
from app.models.erp_invoice import ERPInvoice

def run_rpa_job(db: Session, threshold_days: int = 30):
    invoices = (
        db.query(ERPInvoice)
        .filter(
            ERPInvoice.overdue_days >= threshold_days,
            ERPInvoice.status == "OPEN"
        )
        .all()
    )

    picked = []

    for inv in invoices:
        case = Case(
            title=f"Recovery for {inv.invoice_id}",
            status="PENDING_APPROVAL",
            priority=calculate_priority(
            overdue_days=inv.overdue_days,
            amount_due=inv.amount_due
    )
        )
        db.add(case)
        inv.status = "SENT_FOR_APPROVAL"
        picked.append(inv.invoice_id)

    db.commit()
    return picked