def eligible_for_dca(case):
    if case.amount < 20:
        return False
    if not case.invoice_no:
        return False
    return True
