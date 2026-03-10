import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Building2, Landmark, ArrowRight } from 'lucide-react';
import OTPVerification from '@/components/shared/OTPVerification';
import FacialSignatureCapture from '@/components/shared/FacialSignatureCapture';
import { useToast } from '@/hooks/use-toast';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  // Company login state
  const [companyStep, setCompanyStep] = useState(0); // 0=PAN, 1=OTP, 2=Face
  const [pan, setPan] = useState('');

  // Bank login state
  const [bankStep, setBankStep] = useState(0); // 0=creds, 1=OTP
  const [bankEmail, setBankEmail] = useState('');
  const [bankPassword, setBankPassword] = useState('');

  const handleCompanyPanSubmit = () => {
    if (pan.length === 10) setCompanyStep(1);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="font-display text-3xl font-bold">
            LoanFlow<span className="text-primary">Pro</span>
          </h1>
          <p className="mt-2 text-muted-foreground">Business Loan Processing Platform</p>
        </div>

        <Tabs defaultValue="company" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="company" className="gap-2">
              <Building2 className="h-4 w-4" /> Company
            </TabsTrigger>
            <TabsTrigger value="bank" className="gap-2">
              <Landmark className="h-4 w-4" /> Bank
            </TabsTrigger>
          </TabsList>

          <TabsContent value="company">
            <Card>
              <CardHeader>
                <CardTitle className="font-display">Company Login</CardTitle>
                <CardDescription>
                  {companyStep === 0 && 'Enter your PAN number to get started'}
                  {companyStep === 1 && 'Verify your identity with OTP'}
                  {companyStep === 2 && 'Complete facial verification'}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {companyStep === 0 && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>PAN Number</Label>
                      <Input
                        placeholder="ABCDE1234F"
                        value={pan}
                        onChange={(e) => setPan(e.target.value.toUpperCase())}
                        maxLength={10}
                      />
                    </div>
                    <Button className="w-full" onClick={handleCompanyPanSubmit} disabled={pan.length !== 10}>
                      Continue <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                )}

                {companyStep === 1 && (
                  <OTPVerification
                    label="PAN Verification OTP"
                    description={`OTP sent to mobile linked with PAN ${pan}`}
                    onVerified={() => setCompanyStep(2)}
                  />
                )}

                {companyStep === 2 && (
                  <FacialSignatureCapture
                    onCaptured={() => {
                      toast({ title: 'Login Successful', description: 'Welcome to your Company Dashboard' });
                      navigate('/company/dashboard');
                    }}
                  />
                )}

                {companyStep > 0 && (
                  <Button variant="ghost" size="sm" onClick={() => setCompanyStep(Math.max(0, companyStep - 1))}>
                    ← Back
                  </Button>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bank">
            <Card>
              <CardHeader>
                <CardTitle className="font-display">Bank Officer Login</CardTitle>
                <CardDescription>
                  {bankStep === 0 ? 'Enter your credentials' : 'Verify with OTP'}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {bankStep === 0 && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Email</Label>
                      <Input
                        type="email"
                        placeholder="officer@bank.com"
                        value={bankEmail}
                        onChange={(e) => setBankEmail(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Password</Label>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        value={bankPassword}
                        onChange={(e) => setBankPassword(e.target.value)}
                      />
                    </div>
                    <Button className="w-full" onClick={() => setBankStep(1)} disabled={!bankEmail || !bankPassword}>
                      Continue <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                )}

                {bankStep === 1 && (
                  <OTPVerification
                    label="Email Verification OTP"
                    description={`OTP sent to ${bankEmail}`}
                    onVerified={() => {
                      toast({ title: 'Login Successful', description: 'Welcome to the Bank Dashboard' });
                      navigate('/bank/dashboard');
                    }}
                  />
                )}

                {bankStep > 0 && (
                  <Button variant="ghost" size="sm" onClick={() => setBankStep(0)}>
                    ← Back
                  </Button>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LoginPage;
