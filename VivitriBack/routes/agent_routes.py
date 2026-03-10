from fastapi import APIRouter
from agents.agent2_compliance import run_compliance

router = APIRouter()

@router.get("/run_compliance")

def run(application_id: str):

    result = run_compliance(application_id)

    return result