import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import DocumentUpload from '@/components/shared/DocumentUpload';

const Form8LoanRequestDetails: React.FC = () => (
  <div className="space-y-6">
    <h2 className="font-display text-xl font-semibold">Loan Request Details</h2>
    <p className="text-sm text-muted-foreground">Provide details about the loan you are requesting</p>

    <div className="grid gap-4 md:grid-cols-2">
      <div className="space-y-2">
        <Label>Loan Amount (₹)</Label>
        <Input type="number" placeholder="e.g. 5000000" />
      </div>
      <div className="space-y-2">
        <Label>Loan Type</Label>
        <Select>
          <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="term">Term Loan</SelectItem>
            <SelectItem value="working_capital">Working Capital</SelectItem>
            <SelectItem value="equipment">Equipment Financing</SelectItem>
            <SelectItem value="trade">Trade Finance</SelectItem>
            <SelectItem value="project">Project Finance</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>

    <div className="space-y-2">
      <Label>Loan Purpose</Label>
      <Textarea placeholder="Describe the purpose of the loan..." />
    </div>

    <div className="grid gap-4 md:grid-cols-2">
      <DocumentUpload label="Supporting Documents" multiple />
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Collateral Description</Label>
          <Textarea placeholder="Describe collateral if any..." />
        </div>
        <DocumentUpload label="Collateral Documents" multiple />
      </div>
    </div>

    <div className="grid gap-4 md:grid-cols-3">
      <div className="space-y-2">
        <Label>Loan Tenure (months)</Label>
        <Input type="number" placeholder="e.g. 60" />
      </div>
      <div className="space-y-2">
        <Label>Preferred Interest Rate (%)</Label>
        <Input type="number" step="0.01" placeholder="e.g. 8.5" />
      </div>
      <div className="space-y-2">
        <Label>Repayment Schedule</Label>
        <Select>
          <SelectTrigger><SelectValue placeholder="Select schedule" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="monthly">Monthly</SelectItem>
            <SelectItem value="quarterly">Quarterly</SelectItem>
            <SelectItem value="half_yearly">Half Yearly</SelectItem>
            <SelectItem value="annually">Annually</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  </div>
);

export default Form8LoanRequestDetails;
