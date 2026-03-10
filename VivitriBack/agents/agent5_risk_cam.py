def generate_cam(credibility, financial, industry):

    score = 0

    if financial["dscr"] > 1.5:
        score += 40

    if financial["debt_equity_ratio"] < 2:
        score += 30

    if not credibility["flags"]:
        score += 20

    risk = "LOW"

    if score < 50:
        risk = "HIGH"
    elif score < 70:
        risk = "MEDIUM"

    return {
        "risk_score": score,
        "risk_level": risk,
        "recommendation": "APPROVE" if risk == "LOW" else "REVIEW"
    }