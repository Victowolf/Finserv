import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import ApplicationProgressBar from '@/components/application/ApplicationProgressBar';
import FormNavigationButtons from '@/components/shared/FormNavigationButtons';
import Form1BankSelection from '@/components/application/Form1BankSelection';
import Form2CompanyIdentification from '@/components/application/Form2CompanyIdentification';
import Form3CompanyDocuments from '@/components/application/Form3CompanyDocuments';
import Form4GSTFilings from '@/components/application/Form4GSTFilings';
import Form5IncomeTaxReturns from '@/components/application/Form5IncomeTaxReturns';
import Form6BankingData from '@/components/application/Form6BankingData';
import Form7ExecutiveBoardDetails from '@/components/application/Form7ExecutiveBoardDetails';
import Form8LoanRequestDetails from '@/components/application/Form8LoanRequestDetails';
import Form9LoanHistory from '@/components/application/Form9LoanHistory';
import Form10FinalSubmission from '@/components/application/Form10FinalSubmission';
import { useToast } from '@/hooks/use-toast';

const STEP_LABELS = [
  'Bank Selection',
  'Company Identification',
  'Company Documents',
  'GST Filings',
  'Income Tax Returns',
  'Banking Data',
  'Executive & Board Details',
  'Loan Request Details',
  'Loan History',
  'Final Submission',
];

const ApplicationWizard: React.FC = () => {
  const [step, setStep] = useState(0);
  const { toast } = useToast();

  const steps = [
    <Form1BankSelection />,
    <Form2CompanyIdentification />,
    <Form3CompanyDocuments />,
    <Form4GSTFilings />,
    <Form5IncomeTaxReturns />,
    <Form6BankingData />,
    <Form7ExecutiveBoardDetails />,
    <Form8LoanRequestDetails />,
    <Form9LoanHistory />,
    <Form10FinalSubmission />,
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">New Loan Application</h1>
        <p className="text-muted-foreground">Complete all steps to submit your application</p>
      </div>

      <ApplicationProgressBar currentStep={step} totalSteps={STEP_LABELS.length} stepLabels={STEP_LABELS} />

      <Card>
        <CardContent className="pt-6">
          {steps[step]}
          {step < 9 && (
            <FormNavigationButtons
              currentStep={step}
              totalSteps={STEP_LABELS.length}
              onPrevious={() => setStep(Math.max(0, step - 1))}
              onNext={() => setStep(Math.min(STEP_LABELS.length - 1, step + 1))}
              onSaveDraft={() => toast({ title: 'Draft Saved', description: 'Your progress has been saved.' })}
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ApplicationWizard;
