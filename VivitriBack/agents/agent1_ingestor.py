from utils.ocr_utils import extract_text
from services.file_service import save_file_metadata
from services.vector_service import store_document_embeddings

def ingest_document(file_bytes, filename, application_id):

    text = extract_text(file_bytes)

    doc_id = save_file_metadata(
        application_id,
        filename,
        text
    )

    store_document_embeddings(doc_id, text)

    return {
        "doc_id": doc_id,
        "text_length": len(text)
    }