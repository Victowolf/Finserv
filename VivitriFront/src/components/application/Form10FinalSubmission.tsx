import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Send, Loader2 } from 'lucide-react';
import OTPVerification from '@/components/shared/OTPVerification';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

const Form10FinalSubmission: React.FC = () => {
  const [panVerified, setPanVerified] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const bothVerified = panVerified && emailVerified;

  const handleSubmit = () => {
    setSubmitting(true);
    setTimeout(() => {
      toast({ title: 'Application Submitted!', description: 'Your loan application has been submitted successfully. A confirmation email has been sent to the CEO.' });
      navigate('/company/applications');
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <h2 className="font-display text-xl font-semibold">Final Submission</h2>
      <p className="text-sm text-muted-foreground">Complete dual verification to submit your application</p>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border p-4">
          <OTPVerification label="PAN Verification" description="Verify PAN-linked mobile number" onVerified={() => setPanVerified(true)} />
        </div>
        <div className="rounded-lg border p-4">
          <OTPVerification label="CEO Email Verification" description="Verify CEO email address" onVerified={() => setEmailVerified(true)} />
        </div>
      </div>

      {bothVerified && (
        <div className="flex items-center gap-2 rounded-lg border border-success/30 bg-success/10 p-4">
          <CheckCircle className="h-5 w-5 text-success" />
          <span className="text-sm font-medium text-success">Both verifications complete. You can now submit.</span>
        </div>
      )}

      <Button className="w-full" size="lg" disabled={!bothVerified || submitting} onClick={handleSubmit}>
        {submitting ? (
          <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</>
        ) : (
          <><Send className="mr-2 h-4 w-4" /> Submit Application</>
        )}
      </Button>
    </div>
  );
};

export default Form10FinalSubmission;
