from fastapi import FastAPI
from routes.company_routes import router as company_router
from routes.bank_routes import router as bank_router
from routes.agent_routes import router as agent_router

app = FastAPI(
    title="Intelli Credit AI Engine",
    version="1.0"
)

app.include_router(
    company_router,
    prefix="/company"
)

app.include_router(
    bank_router,
    prefix="/bank"
)

app.include_router(
    agent_router,
    prefix="/agents"
)

@app.get("/")
def root():
    return {"status": "Intelli Credit Backend Running"}