import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { CheckCircle, Loader2 } from 'lucide-react';
import OTPVerification from '@/components/shared/OTPVerification';

const VerifiableField: React.FC<{ label: string; placeholder: string; otpLabel: string }> = ({ label, placeholder, otpLabel }) => {
  const [value, setValue] = useState('');
  const [verifying, setVerifying] = useState(false);
  const [verified, setVerified] = useState(false);

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="flex gap-2">
        <Input placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} disabled={verified} />
        {!verified && !verifying && (
          <Button variant="outline" size="sm" onClick={() => setVerifying(true)} disabled={!value}>
            Verify
          </Button>
        )}
        {verified && <CheckCircle className="h-5 w-5 text-success self-center" />}
      </div>
      {verifying && !verified && (
        <OTPVerification label={otpLabel} onVerified={() => { setVerified(true); setVerifying(false); }} />
      )}
    </div>
  );
};

const Form2CompanyIdentification: React.FC = () => (
  <div className="space-y-6">
    <h2 className="font-display text-xl font-semibold">Company Identification</h2>
    <p className="text-sm text-muted-foreground">Verify your company details</p>
    <VerifiableField label="GST Number" placeholder="e.g. 29ABCDE1234F1Z5" otpLabel="GST Verification OTP" />
    <VerifiableField label="Company Registration Number (CRN)" placeholder="e.g. U12345MH2020PTC123456" otpLabel="CRN Verification OTP" />
    <VerifiableField label="Chief Executive Authority Email" placeholder="ceo@company.com" otpLabel="CEO Email Verification OTP" />
  </div>
);

export default Form2CompanyIdentification;
