import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Form1BankSelection: React.FC = () => (
  <div className="space-y-4">
    <h2 className="font-display text-xl font-semibold">Bank Selection</h2>
    <p className="text-sm text-muted-foreground">Select the bank and branch for your loan application</p>
    <div className="grid gap-4 md:grid-cols-2">
      <div className="space-y-2">
        <Label>Bank Name</Label>
        <Input placeholder="e.g. State Bank of India" />
      </div>
      <div className="space-y-2">
        <Label>Branch Name</Label>
        <Input placeholder="e.g. Connaught Place" />
      </div>
      <div className="space-y-2 md:col-span-2">
        <Label>Branch Address</Label>
        <Input placeholder="Full branch address" />
      </div>
      <div className="space-y-2">
        <Label>IFSC Code</Label>
        <Input placeholder="e.g. SBIN0001234" />
      </div>
    </div>
  </div>
);

export default Form1BankSelection;
