import React from 'react';
import DocumentUpload from '@/components/shared/DocumentUpload';

const Form3CompanyDocuments: React.FC = () => (
  <div className="space-y-6">
    <h2 className="font-display text-xl font-semibold">Company Documents</h2>
    <p className="text-sm text-muted-foreground">Upload required company documents</p>
    <div className="grid gap-6 md:grid-cols-2">
      <DocumentUpload label="Certificate of Incorporation" />
      <DocumentUpload label="Memorandum of Association (MoA)" />
      <DocumentUpload label="Articles of Association (AoA)" />
      <DocumentUpload label="Shareholding Structure" />
      <DocumentUpload label="Board Resolutions" />
    </div>
  </div>
);

export default Form3CompanyDocuments;
