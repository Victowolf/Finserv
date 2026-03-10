import React, { useState, useEffect } from 'react';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { Button } from '@/components/ui/button';
import { CheckCircle, Loader2 } from 'lucide-react';

interface OTPVerificationProps {
  label?: string;
  onVerified: () => void;
  description?: string;
}

const OTPVerification: React.FC<OTPVerificationProps> = ({ label = 'Enter OTP', onVerified, description }) => {
  const [otp, setOtp] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'verifying' | 'verified'>('idle');

  const handleSendOTP = () => {
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 1500);
  };

  const handleVerify = () => {
    setStatus('verifying');
    setTimeout(() => {
      setStatus('verified');
      onVerified();
    }, 1500);
  };

  if (status === 'verified') {
    return (
      <div className="flex items-center gap-2 rounded-lg border border-success/30 bg-success/10 p-4">
        <CheckCircle className="h-5 w-5 text-success" />
        <span className="text-sm font-medium text-success">{label} — Verified</span>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-sm font-medium">{label}</p>
      {description && <p className="text-xs text-muted-foreground">{description}</p>}

      {status === 'idle' && (
        <Button onClick={handleSendOTP} variant="outline" size="sm">
          Send OTP
        </Button>
      )}

      {status === 'sending' && (
        <Button disabled variant="outline" size="sm">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </Button>
      )}

      {(status === 'sent' || status === 'verifying') && (
        <div className="space-y-3">
          <InputOTP maxLength={6} value={otp} onChange={setOtp}>
            <InputOTPGroup>
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <InputOTPSlot key={i} index={i} />
              ))}
            </InputOTPGroup>
          </InputOTP>
          <Button
            onClick={handleVerify}
            disabled={otp.length < 6 || status === 'verifying'}
            size="sm"
          >
            {status === 'verifying' ? (
              <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Verifying...</>
            ) : (
              'Verify OTP'
            )}
          </Button>
        </div>
      )}
    </div>
  );
};

export default OTPVerification;
