import React from 'react';
import { cn } from '@/lib/utils';
import { Check, Clock, Loader2 } from 'lucide-react';
import type { Stage, StageStatus } from '@/types';

interface ProgressTrackerProps {
  stages: Stage[];
  currentStage?: number;
  orientation?: 'horizontal' | 'vertical';
  onStageClick?: (index: number) => void;
}

const statusIcon = (status: StageStatus) => {
  switch (status) {
    case 'completed': return <Check className="h-4 w-4" />;
    case 'processing': return <Loader2 className="h-4 w-4 animate-spin" />;
    default: return <Clock className="h-4 w-4" />;
  }
};

const statusColor = (status: StageStatus) => {
  switch (status) {
    case 'completed': return 'bg-success text-success-foreground border-success';
    case 'processing': return 'bg-primary text-primary-foreground border-primary';
    default: return 'bg-muted text-muted-foreground border-border';
  }
};

const lineColor = (status: StageStatus) => {
  switch (status) {
    case 'completed': return 'bg-success';
    case 'processing': return 'bg-primary';
    default: return 'bg-border';
  }
};

const ProgressTracker: React.FC<ProgressTrackerProps> = ({
  stages,
  orientation = 'vertical',
  onStageClick,
}) => {
  const isVertical = orientation === 'vertical';

  return (
    <div className={cn('flex', isVertical ? 'flex-col gap-0' : 'flex-row items-start gap-0 w-full')}>
      {stages.map((stage, index) => (
        <div
          key={stage.id}
          className={cn(
            'flex items-start',
            isVertical ? 'flex-row' : 'flex-col items-center flex-1',
            onStageClick && 'cursor-pointer'
          )}
          onClick={() => onStageClick?.(index)}
        >
          <div className={cn('flex', isVertical ? 'flex-col items-center' : 'flex-row items-center w-full')}>
            <div className={cn('flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 transition-all', statusColor(stage.status))}>
              {statusIcon(stage.status)}
            </div>
            {index < stages.length - 1 && (
              <div className={cn(
                'transition-all',
                isVertical ? 'w-0.5 h-8' : 'h-0.5 flex-1',
                lineColor(stage.status)
              )} />
            )}
          </div>
          <div className={cn(isVertical ? 'ml-3 pb-8' : 'mt-2 text-center px-1')}>
            <p className={cn(
              'text-sm font-medium',
              stage.status === 'completed' && 'text-success',
              stage.status === 'processing' && 'text-primary',
              stage.status === 'pending' && 'text-muted-foreground'
            )}>
              {stage.name}
            </p>
            <p className="text-xs text-muted-foreground capitalize">{stage.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressTracker;
