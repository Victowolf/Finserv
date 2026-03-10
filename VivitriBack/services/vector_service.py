from sentence_transformers import SentenceTransformer
from database.pinecone_db import index
from utils.parser_utils import chunk_document
from config import EMBED_MODEL

model = SentenceTransformer(EMBED_MODEL)

def store_document_embeddings(doc_id, text):

    chunks = chunk_document(text)

    vectors = []

    for i, chunk in enumerate(chunks):

        embedding = model.encode(chunk).tolist()

        vector_id = f"{doc_id}_{i}"

        vectors.append(
            (vector_id, embedding, {"text": chunk})
        )

    index.upsert(vectors)


def query_vector_db(query, top_k=5):

    embedding = model.encode(query).tolist()

    results = index.query(
        vector=embedding,
        top_k=top_k,
        include_metadata=True
    )

    return results