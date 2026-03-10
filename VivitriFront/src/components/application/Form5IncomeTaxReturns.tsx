import React from 'react';
import DocumentUpload from '@/components/shared/DocumentUpload';

const Form5IncomeTaxReturns: React.FC = () => (
  <div className="space-y-6">
    <h2 className="font-display text-xl font-semibold">Income Tax Returns</h2>
    <p className="text-sm text-muted-foreground">Upload ITR for the last 3 years</p>
    <div className="grid gap-6 md:grid-cols-3">
      <DocumentUpload label="ITR — Year 1 (Latest)" description="Most recent financial year" />
      <DocumentUpload label="ITR — Year 2" description="Previous financial year" />
      <DocumentUpload label="ITR — Year 3" description="Two years prior" />
    </div>
  </div>
);

export default Form5IncomeTaxReturns;
