import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { CheckCircle, XCircle, Edit, FileText } from 'lucide-react';
import DocumentUpload from '@/components/shared/DocumentUpload';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import type { Stage } from '@/types';

const processingStages: Stage[] = [
  { id: 'kyc', name: 'KYC & Compliance', status: 'completed' },
  { id: 'credibility', name: 'Credibility Check', status: 'completed' },
  { id: 'financial', name: 'Financial Analysis', status: 'completed' },
  { id: 'industry', name: 'Industry & Market', status: 'completed' },
  { id: 'sitevisit', name: 'Site Visit', status: 'completed' },
  { id: 'risk', name: 'Risk Analysis', status: 'completed' },
  { id: 'decision', name: 'Decision', status: 'processing' },
];

const reportsList = [
  { id: 'credibility', name: 'Credibility Report', color: 'text-primary' },
  { id: 'financial', name: 'Financial Analysis', color: 'text-success' },
  { id: 'market', name: 'Market Analysis', color: 'text-info' },
  { id: 'sitevisit', name: 'Site Visit Report', color: 'text-warning' },
  { id: 'risk', name: 'Risk Analysis', color: 'text-destructive' },
];

interface DecisionUpdatePanelProps {
  onReportSelect?: (reportId: string) => void;
}

const DecisionUpdatePanel: React.FC<DecisionUpdatePanelProps> = ({ onReportSelect }) => {
  const [decision, setDecision] = useState<'none' | 'accepted' | 'rejected' | 'modify'>('none');
  const { toast } = useToast();

  const handleSubmit = () => {
    toast({ title: 'Decision Submitted', description: `Application has been ${decision === 'accepted' ? 'approved' : decision === 'rejected' ? 'rejected' : 'sent for modification'}.` });
  };

  return (
    <div className="space-y-5">
      <h3 className="font-display text-lg font-semibold">Decision & Update</h3>

      {/* Horizontal Progress Bar */}
      <div className="space-y-2">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Processing Progress</p>
        <div className="flex items-center gap-0">
          {processingStages.map((stage, index) => (
            <React.Fragment key={stage.id}>
              <div className="flex flex-col items-center gap-1.5 min-w-0">
                <div className={cn(
                  'flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 text-xs',
                  stage.status === 'completed' && 'bg-success text-success-foreground border-success',
                  stage.status === 'processing' && 'bg-primary text-primary-foreground border-primary',
                  stage.status === 'pending' && 'bg-muted text-muted-foreground border-border',
                )}>
                  {stage.status === 'completed' ? <CheckCircle className="h-3.5 w-3.5" /> : index + 1}
                </div>
                <span className="text-[10px] text-muted-foreground text-center leading-tight max-w-[60px] truncate">{stage.name}</span>
              </div>
              {index < processingStages.length - 1 && (
                <div className={cn(
                  'h-0.5 flex-1 -mt-5',
                  stage.status === 'completed' ? 'bg-success' : 'bg-border',
                )} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Reports Section */}
      <div className="space-y-2">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Review Reports</p>
        <div className="grid grid-cols-1 gap-2">
          {reportsList.map((report) => (
            <button
              key={report.id}
              onClick={() => onReportSelect?.(report.id)}
              className="flex items-center gap-3 rounded-lg border p-3 text-left hover:bg-muted/50 transition-colors"
            >
              <FileText className={cn('h-4 w-4', report.color)} />
              <span className="text-sm font-medium">{report.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Decision Buttons */}
      <div className="flex gap-3">
        <Button variant={decision === 'accepted' ? 'default' : 'outline'} onClick={() => setDecision('accepted')} className={decision === 'accepted' ? 'bg-success hover:bg-success/90' : ''}>
          <CheckCircle className="mr-1 h-4 w-4" /> Accept
        </Button>
        <Button variant={decision === 'rejected' ? 'default' : 'outline'} onClick={() => setDecision('rejected')} className={decision === 'rejected' ? 'bg-destructive hover:bg-destructive/90' : ''}>
          <XCircle className="mr-1 h-4 w-4" /> Reject
        </Button>
        <Button variant={decision === 'modify' ? 'default' : 'outline'} onClick={() => setDecision('modify')}>
          <Edit className="mr-1 h-4 w-4" /> Modify
        </Button>
      </div>

      {decision === 'accepted' && (
        <div className="space-y-3 rounded-lg border border-success/30 bg-success/5 p-4">
          <p className="text-sm font-medium text-success">Upload Loan Agreement</p>
          <DocumentUpload label="Agreement Document" />
          <Button onClick={handleSubmit} className="bg-success hover:bg-success/90">Submit Approval</Button>
        </div>
      )}

      {decision === 'rejected' && (
        <div className="space-y-3 rounded-lg border border-destructive/30 bg-destructive/5 p-4">
          <div className="space-y-2">
            <Label className="text-destructive">Rejection Reason</Label>
            <Textarea placeholder="Provide reason for rejection..." />
          </div>
          <Button onClick={handleSubmit} variant="destructive">Submit Rejection</Button>
        </div>
      )}

      {decision === 'modify' && (
        <div className="space-y-3 rounded-lg border border-warning/30 bg-warning/5 p-4">
          <div className="space-y-2">
            <Label>Modification Request</Label>
            <Textarea placeholder="Describe required modifications..." />
          </div>
          <Button onClick={handleSubmit}>Submit Modification Request</Button>
        </div>
      )}
    </div>
  );
};

export default DecisionUpdatePanel;
