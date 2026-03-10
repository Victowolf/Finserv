import React from 'react';
import { cn } from '@/lib/utils';

interface ApplicationProgressBarProps {
  currentStep: number;
  totalSteps: number;
  stepLabels: string[];
}

const ApplicationProgressBar: React.FC<ApplicationProgressBarProps> = ({ currentStep, totalSteps, stepLabels }) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium">Step {currentStep + 1} of {totalSteps}</span>
        <span className="text-sm text-muted-foreground">{stepLabels[currentStep]}</span>
      </div>
      <div className="flex gap-1">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i}
            className={cn(
              'h-1.5 flex-1 rounded-full transition-colors',
              i <= currentStep ? 'bg-primary' : 'bg-muted'
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default ApplicationProgressBar;
