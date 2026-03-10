import React from 'react';
import { cn } from '@/lib/utils';
import { Check, Clock, Loader2 } from 'lucide-react';
import type { Stage, StageStatus } from '@/types';

interface ProcessingStagesPanelProps {
  stages: Stage[];
  activeStage: number;
  onStageSelect: (index: number) => void;
}

const statusIcon = (status: StageStatus) => {
  switch (status) {
    case 'completed': return <Check className="h-3.5 w-3.5" />;
    case 'processing': return <Loader2 className="h-3.5 w-3.5 animate-spin" />;
    default: return <Clock className="h-3.5 w-3.5" />;
  }
};

const ProcessingStagesPanel: React.FC<ProcessingStagesPanelProps> = ({ stages, activeStage, onStageSelect }) => (
  <div className="space-y-1 p-3">
    <h3 className="font-display text-sm font-semibold mb-3 px-2">Processing Stages</h3>
    {stages.map((stage, index) => (
      <button
        key={stage.id}
        onClick={() => onStageSelect(index)}
        className={cn(
          'flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left text-sm transition-colors',
          activeStage === index ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-muted text-muted-foreground'
        )}
      >
        <div className={cn(
          'flex h-6 w-6 shrink-0 items-center justify-center rounded-full border',
          stage.status === 'completed' && 'bg-success text-success-foreground border-success',
          stage.status === 'processing' && 'bg-primary text-primary-foreground border-primary',
          stage.status === 'pending' && 'bg-muted text-muted-foreground border-border',
        )}>
          {statusIcon(stage.status)}
        </div>
        <span className="truncate">{stage.name}</span>
      </button>
    ))}
  </div>
);

export default ProcessingStagesPanel;
