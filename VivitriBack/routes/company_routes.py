from fastapi import APIRouter, UploadFile
from agents.agent1_ingestor import ingest_document

router = APIRouter()

@router.post("/upload_document")

async def upload_document(
        application_id: str,
        file: UploadFile):

    data = await file.read()

    result = ingest_document(
        data,
        file.filename,
        application_id
    )

    return result