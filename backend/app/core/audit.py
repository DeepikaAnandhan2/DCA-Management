from app.models.case_audit_log import CaseAuditLog

def log_case_action(
    db,
    case_id: int,
    action: str,
    performed_by: str,
    remarks: str = None
):
    log = CaseAuditLog(
        case_id=case_id,
        action=action,
        performed_by=performed_by,
        remarks=remarks
    )
    db.add(log)
