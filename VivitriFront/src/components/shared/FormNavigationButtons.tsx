import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Save } from 'lucide-react';

interface FormNavigationButtonsProps {
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext: () => void;
  onSaveDraft?: () => void;
  nextLabel?: string;
  disableNext?: boolean;
}

const FormNavigationButtons: React.FC<FormNavigationButtonsProps> = ({
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
  onSaveDraft,
  nextLabel,
  disableNext = false,
}) => {
  return (
    <div className="flex items-center justify-between border-t pt-6 mt-6">
      <Button
        variant="outline"
        onClick={onPrevious}
        disabled={currentStep === 0}
      >
        <ChevronLeft className="mr-1 h-4 w-4" /> Previous
      </Button>

      <div className="flex gap-2">
        {onSaveDraft && (
          <Button variant="outline" onClick={onSaveDraft}>
            <Save className="mr-1 h-4 w-4" /> Save Draft
          </Button>
        )}
        <Button onClick={onNext} disabled={disableNext}>
          {nextLabel || (currentStep === totalSteps - 1 ? 'Submit' : 'Next')}
          {currentStep < totalSteps - 1 && <ChevronRight className="ml-1 h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
};

export default FormNavigationButtons;
