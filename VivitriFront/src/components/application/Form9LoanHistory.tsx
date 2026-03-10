import React from 'react';
import DocumentUpload from '@/components/shared/DocumentUpload';
import { Badge } from '@/components/ui/badge';

const Form9LoanHistory: React.FC = () => (
  <div className="space-y-6">
    <div className="flex items-center gap-3">
      <h2 className="font-display text-xl font-semibold">Loan History</h2>
      <Badge variant="outline">Optional</Badge>
    </div>
    <p className="text-sm text-muted-foreground">Upload previous loan documentation if applicable</p>
    <div className="grid gap-6 md:grid-cols-2">
      <DocumentUpload label="Previous Sanction Letters" description="Upload sanction letters from prior loans" multiple />
      <DocumentUpload label="Repayment History" description="Upload repayment track records" multiple />
    </div>
  </div>
);

export default Form9LoanHistory;
