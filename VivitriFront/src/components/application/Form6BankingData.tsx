import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus, Trash2, Building } from 'lucide-react';
import DocumentUpload from '@/components/shared/DocumentUpload';
import type { BankAccount } from '@/types';
import { mockBankAccounts } from '@/data/mockData';

const Form6BankingData: React.FC = () => {
  const [accounts, setAccounts] = useState<BankAccount[]>(mockBankAccounts);

  const addAccount = () => {
    setAccounts(prev => [...prev, { id: String(Date.now()), bankName: '', accountNumber: '', ifscCode: '' }]);
  };

  const removeAccount = (id: string) => {
    setAccounts(prev => prev.filter(a => a.id !== id));
  };

  return (
    <div className="space-y-6">
      <h2 className="font-display text-xl font-semibold">Banking Data</h2>
      <p className="text-sm text-muted-foreground">Provide bank account details and statements</p>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium">Bank Accounts</h3>
            <Button variant="outline" size="sm" onClick={addAccount}><Plus className="mr-1 h-4 w-4" /> Add Account</Button>
          </div>
          {accounts.map((acc) => (
            <Card key={acc.id}>
              <CardContent className="pt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">{acc.bankName || 'New Account'}</span>
                  </div>
                  <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => removeAccount(acc.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="grid gap-3">
                  <div className="space-y-1"><Label className="text-xs">Bank Name</Label><Input defaultValue={acc.bankName} placeholder="Bank name" /></div>
                  <div className="space-y-1"><Label className="text-xs">Account Number</Label><Input defaultValue={acc.accountNumber} placeholder="Account number" /></div>
                  <div className="space-y-1"><Label className="text-xs">IFSC Code</Label><Input defaultValue={acc.ifscCode} placeholder="IFSC" /></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <DocumentUpload label="Bank Statements (6-12 months)" description="Upload statements for all listed accounts" multiple />
        </div>
      </div>
    </div>
  );
};

export default Form6BankingData;
