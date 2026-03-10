from agents.agent2_compliance import run_compliance
from agents.agent3_financial import compute_financial
from agents.agent4_industry import analyze_industry
from agents.agent5_risk_cam import generate_cam

def run_pipeline(application):

    credibility = run_compliance(application["id"])

    financial = compute_financial(application["financial"])

    industry = analyze_industry(application["industry"])

    cam = generate_cam(
        credibility,
        financial,
        industry
    )

    return cam