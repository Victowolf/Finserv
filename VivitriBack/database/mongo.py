from pymongo import MongoClient
from config import MONGO_URI, DB_NAME

client = MongoClient(MONGO_URI)

db = client[DB_NAME]

applications = db["applications"]
documents = db["documents"]
reports = db["reports"]
financials = db["financials"]
audit_logs = db["audit_logs"]