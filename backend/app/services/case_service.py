from app.models.case import Case
from app.workflows.sop_rules import eligible_for_dca

def create_case(db, data):
    case = Case(**data)

    if not eligible_for_dca(case):
        case.status = "BILLING_REVIEW"
    else:
        case.status = "NEW"

    db.add(case)
    db.commit()
    return case
