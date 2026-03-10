import { LoanApplication, ChatMessage, UploadedDocument, BankAccount } from '@/types';

export const mockApplications: LoanApplication[] = [
  {
    id: 'APP-2026-001',
    companyName: 'TechVentures Pvt Ltd',
    bankName: 'State Bank of India',
    branchName: 'Connaught Place, New Delhi',
    loanAmount: 5000000,
    loanType: 'Term Loan',
    loanPurpose: 'Business Expansion',
    status: 'under_review',
    createdAt: '2026-02-15',
    updatedAt: '2026-03-05',
    currentStage: 3,
    stages: [
      { id: 'kyc', name: 'KYC & Compliance', status: 'completed' },
      { id: 'credibility', name: 'Credibility Check', status: 'completed' },
      { id: 'financial', name: 'Financial Analysis', status: 'processing' },
      { id: 'industry', name: 'Industry & Market Analysis', status: 'pending' },
      { id: 'sitevisit', name: 'Site Visit & Management', status: 'pending' },
      { id: 'risk', name: 'Risk Analysis', status: 'pending' },
      { id: 'decision', name: 'Decision & Update', status: 'pending' },
    ],
  },
  {
    id: 'APP-2026-002',
    companyName: 'GreenEnergy Solutions',
    bankName: 'HDFC Bank',
    branchName: 'Bandra West, Mumbai',
    loanAmount: 12000000,
    loanType: 'Working Capital',
    loanPurpose: 'Inventory Purchase',
    status: 'submitted',
    createdAt: '2026-03-01',
    updatedAt: '2026-03-08',
    currentStage: 1,
    stages: [
      { id: 'kyc', name: 'KYC & Compliance', status: 'processing' },
      { id: 'credibility', name: 'Credibility Check', status: 'pending' },
      { id: 'financial', name: 'Financial Analysis', status: 'pending' },
      { id: 'industry', name: 'Industry & Market Analysis', status: 'pending' },
      { id: 'sitevisit', name: 'Site Visit & Management', status: 'pending' },
      { id: 'risk', name: 'Risk Analysis', status: 'pending' },
      { id: 'decision', name: 'Decision & Update', status: 'pending' },
    ],
  },
  {
    id: 'APP-2026-003',
    companyName: 'AutoParts India Ltd',
    bankName: 'ICICI Bank',
    branchName: 'MG Road, Bangalore',
    loanAmount: 8500000,
    loanType: 'Equipment Financing',
    loanPurpose: 'Machinery Purchase',
    status: 'approved',
    createdAt: '2026-01-10',
    updatedAt: '2026-02-28',
    currentStage: 7,
    stages: [
      { id: 'kyc', name: 'KYC & Compliance', status: 'completed' },
      { id: 'credibility', name: 'Credibility Check', status: 'completed' },
      { id: 'financial', name: 'Financial Analysis', status: 'completed' },
      { id: 'industry', name: 'Industry & Market Analysis', status: 'completed' },
      { id: 'sitevisit', name: 'Site Visit & Management', status: 'completed' },
      { id: 'risk', name: 'Risk Analysis', status: 'completed' },
      { id: 'decision', name: 'Decision & Update', status: 'completed' },
    ],
  },
];

export const mockChatMessages: ChatMessage[] = [
  { id: '1', sender: 'bank', senderName: 'Rajesh Kumar (SBI)', message: 'We have received your application. KYC verification is in progress.', timestamp: '2026-03-05 10:30 AM' },
  { id: '2', sender: 'company', senderName: 'Amit Sharma (TechVentures)', message: 'Thank you. Please let us know if any additional documents are needed.', timestamp: '2026-03-05 11:15 AM' },
  { id: '3', sender: 'bank', senderName: 'Rajesh Kumar (SBI)', message: 'Could you please provide the latest bank statements for the last 12 months?', timestamp: '2026-03-06 09:00 AM' },
  { id: '4', sender: 'company', senderName: 'Amit Sharma (TechVentures)', message: 'Sure, I will upload them by end of day today.', timestamp: '2026-03-06 09:45 AM' },
  { id: '5', sender: 'company', senderName: 'Amit Sharma (TechVentures)', message: 'Bank statements have been uploaded. Please check the documents section.', timestamp: '2026-03-06 05:30 PM' },
];

export const mockDocuments: UploadedDocument[] = [
  { id: '1', name: 'Certificate_of_Incorporation.pdf', type: 'application/pdf', size: 2048000, uploadedAt: '2026-02-15', category: 'raw' },
  { id: '2', name: 'MoA.pdf', type: 'application/pdf', size: 1536000, uploadedAt: '2026-02-15', category: 'raw' },
  { id: '3', name: 'AoA.pdf', type: 'application/pdf', size: 1024000, uploadedAt: '2026-02-15', category: 'raw' },
  { id: '4', name: 'GSTR1_2025.xlsx', type: 'application/vnd.ms-excel', size: 512000, uploadedAt: '2026-02-16', category: 'raw' },
  { id: '5', name: 'ITR_2024.pdf', type: 'application/pdf', size: 3072000, uploadedAt: '2026-02-16', category: 'raw' },
  { id: '6', name: 'Bank_Statement_SBI.pdf', type: 'application/pdf', size: 4096000, uploadedAt: '2026-03-06', category: 'raw' },
  { id: '7', name: 'KYC_Verified_Report.pdf', type: 'application/pdf', size: 1024000, uploadedAt: '2026-03-07', category: 'processed' },
  { id: '8', name: 'Financial_Analysis_OCR.pdf', type: 'application/pdf', size: 2048000, uploadedAt: '2026-03-08', category: 'processed' },
];

export const mockBankAccounts: BankAccount[] = [
  { id: '1', bankName: 'State Bank of India', accountNumber: 'XXXX XXXX 4521', ifscCode: 'SBIN0001234' },
  { id: '2', bankName: 'HDFC Bank', accountNumber: 'XXXX XXXX 7890', ifscCode: 'HDFC0005678' },
];
