from fastapi import APIRouter
from pipeline.workflow import run_pipeline

router = APIRouter()

@router.post("/process_application")

def process_application(application: dict):

    cam = run_pipeline(application)

    return cam