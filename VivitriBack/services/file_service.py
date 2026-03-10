import uuid
from database.mongo import documents

def save_file_metadata(application_id, filename, text):

    doc_id = str(uuid.uuid4())

    data = {
        "doc_id": doc_id,
        "application_id": application_id,
        "filename": filename,
        "text": text
    }

    documents.insert_one(data)

    return doc_id