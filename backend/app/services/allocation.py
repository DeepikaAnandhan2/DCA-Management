def assign_dca(case):
    if case.amount > 1000:
        return "Top_DCA"
    return "Regional_DCA"
