import pinecone
from config import PINECONE_API_KEY, PINECONE_ENV, PINECONE_INDEX

pinecone.init(
    api_key=PINECONE_API_KEY,
    environment=PINECONE_ENV
)

index = pinecone.Index(PINECONE_INDEX)