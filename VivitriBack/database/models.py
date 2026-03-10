from pydantic import BaseModel
from typing import Optional, List

class LoanApplication(BaseModel):
    company_name: str
    gst_number: str
    crn: str
    loan_amount: float
    industry: str


class FinancialInput(BaseModel):
    revenue: float
    debt: float
    equity: float
    cashflow: float
    interest: float


class CAMRequest(BaseModel):
    application_id: str