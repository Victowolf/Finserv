def compute_financial(financial):

    revenue = financial["revenue"]
    debt = financial["debt"]
    equity = financial["equity"]
    cashflow = financial["cashflow"]
    interest = financial["interest"]

    debt_equity = debt / equity if equity else 0
    dscr = cashflow / interest if interest else 0

    current_ratio = cashflow / debt if debt else 0

    return {
        "debt_equity_ratio": debt_equity,
        "dscr": dscr,
        "current_ratio": current_ratio
    }