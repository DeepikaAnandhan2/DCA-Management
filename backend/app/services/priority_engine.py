def calculate_priority(overdue_days: int, amount_due: float):
    """
    Simple rule-based priority engine
    """

    if overdue_days >= 60 or amount_due >= 30000:
        return "HIGH"

    if overdue_days >= 30:
        return "MEDIUM"

    return "LOW"
