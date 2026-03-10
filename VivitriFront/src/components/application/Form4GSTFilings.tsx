import React from 'react';
import DocumentUpload from '@/components/shared/DocumentUpload';

const Form4GSTFilings: React.FC = () => (
  <div className="space-y-6">
    <h2 className="font-display text-xl font-semibold">GST Filings</h2>
    <p className="text-sm text-muted-foreground">Upload your GST returns</p>
    <div className="grid gap-6 md:grid-cols-3">
      <DocumentUpload label="GSTR-1" description="Outward supplies" />
      <DocumentUpload label="GSTR-2A" description="Auto-drafted inward supplies" />
      <DocumentUpload label="GSTR-3B" description="Summary return" />
    </div>
  </div>
);

export default Form4GSTFilings;
