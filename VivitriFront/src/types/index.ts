export type UserRole = 'company' | 'bank';

export type ApplicationStatus = 'draft' | 'submitted' | 'under_review' | 'approved' | 'rejected' | 'modified';

export type StageStatus = 'pending' | 'processing' | 'completed';

export interface Stage {
  id: string;
  name: string;
  status: StageStatus;
  description?: string;
}

export interface LoanApplication {
  id: string;
  companyName: string;
  bankName: string;
  branchName: string;
  loanAmount: number;
  loanType: string;
  loanPurpose: string;
  status: ApplicationStatus;
  createdAt: string;
  updatedAt: string;
  stages: Stage[];
  currentStage: number;
}

export interface ChatMessage {
  id: string;
  sender: 'company' | 'bank';
  senderName: string;
  message: string;
  timestamp: string;
}

export interface Executive {
  id: string;
  name: string;
  position: string;
  aadhaarFile?: File | null;
  panFile?: File | null;
}

export interface BankAccount {
  id: string;
  bankName: string;
  accountNumber: string;
  ifscCode: string;
}

export interface UploadedDocument {
  id: string;
  name: string;
  type: string;
  size: number;
  uploadedAt: string;
  category: 'raw' | 'processed';
}

export const PROCESSING_STAGES: Stage[] = [
  { id: 'kyc', name: 'KYC & Compliance', status: 'pending' },
  { id: 'credibility', name: 'Credibility Check', status: 'pending' },
  { id: 'financial', name: 'Financial Analysis', status: 'pending' },
  { id: 'industry', name: 'Industry & Market Analysis', status: 'pending' },
  { id: 'sitevisit', name: 'Site Visit & Management', status: 'pending' },
  { id: 'risk', name: 'Risk Analysis', status: 'pending' },
  { id: 'decision', name: 'Decision & Update', status: 'pending' },
];
