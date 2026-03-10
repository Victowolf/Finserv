import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SiteVisitForm from '@/components/bank/SiteVisitForm';
import DecisionUpdatePanel from '@/components/bank/DecisionUpdatePanel';
import DiscussionPanel from '@/components/shared/DiscussionPanel';
import ReasoningTimeline from '@/components/bank/ReasoningTimeline';
import MockDocumentContent from '@/components/bank/MockDocumentContent';
import MockReportContent from '@/components/bank/MockReportContent';
import type { UploadedDocument, Stage } from '@/types';

interface StageWorkAreaProps {
  stageIndex: number;
  selectedDocument?: UploadedDocument | null;
  selectedReport?: string | null;
  stages: Stage[];
  onReportSelect?: (reportId: string) => void;
}

const StageContent: React.FC<{ index: number; onReportSelect?: (reportId: string) => void }> = ({ index, onReportSelect }) => {
  switch (index) {
    case 0: return <div className="space-y-3"><h3 className="font-display text-lg font-semibold">KYC & Compliance</h3><p className="text-sm text-muted-foreground">Review KYC documents and verify compliance requirements.</p><div className="rounded-lg border bg-muted/50 p-6 text-center text-muted-foreground text-sm">KYC verification workspace — review uploaded identity documents and compliance certificates.</div></div>;
    case 1: return <div className="space-y-3"><h3 className="font-display text-lg font-semibold">Credibility Check</h3><p className="text-sm text-muted-foreground">Assess company credibility and credit score.</p><div className="rounded-lg border bg-muted/50 p-6 text-center text-muted-foreground text-sm">Credibility assessment workspace — CIBIL scores, trade references, and credit history.</div></div>;
    case 2: return <div className="space-y-3"><h3 className="font-display text-lg font-semibold">Financial Analysis</h3><p className="text-sm text-muted-foreground">Analyze financial statements and tax returns.</p><div className="rounded-lg border bg-muted/50 p-6 text-center text-muted-foreground text-sm">Financial analysis workspace — balance sheets, P&L, cash flow, ratio analysis.</div></div>;
    case 3: return <div className="space-y-3"><h3 className="font-display text-lg font-semibold">Industry & Market Analysis</h3><p className="text-sm text-muted-foreground">Evaluate industry positioning and market conditions.</p><div className="rounded-lg border bg-muted/50 p-6 text-center text-muted-foreground text-sm">Industry analysis workspace — sector outlook, competitive positioning, market trends.</div></div>;
    case 4: return <SiteVisitForm />;
    case 5: return <div className="space-y-3"><h3 className="font-display text-lg font-semibold">Risk Analysis</h3><p className="text-sm text-muted-foreground">Comprehensive risk assessment.</p><div className="rounded-lg border bg-muted/50 p-6 text-center text-muted-foreground text-sm">Risk assessment workspace — default risk, collateral valuation, stress testing.</div></div>;
    case 6: return <DecisionUpdatePanel onReportSelect={onReportSelect} />;
    default: return null;
  }
};

const StageWorkArea: React.FC<StageWorkAreaProps> = ({ stageIndex, selectedDocument, selectedReport, stages, onReportSelect }) => {
  // If a report is selected, show report content
  if (selectedReport) {
    return (
      <div className="h-full overflow-auto">
        <MockReportContent reportId={selectedReport} />
      </div>
    );
  }

  // If a document is selected, show mock document content
  if (selectedDocument) {
    return (
      <div className="h-full overflow-auto">
        <MockDocumentContent document={selectedDocument} />
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <Tabs defaultValue="workspace" className="flex-1 flex flex-col">
        <div className="border-b px-4">
          <TabsList className="h-10 bg-transparent p-0 gap-4">
            <TabsTrigger value="workspace" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-1 pb-2.5 text-sm">
              Workspace
            </TabsTrigger>
            <TabsTrigger value="reason" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-1 pb-2.5 text-sm">
              Reason
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="workspace" className="flex-1 overflow-auto m-0">
          <div className="p-4 space-y-6">
            <StageContent index={stageIndex} onReportSelect={onReportSelect} />
            <DiscussionPanel userRole="bank" />
          </div>
        </TabsContent>
        <TabsContent value="reason" className="flex-1 overflow-auto m-0">
          <ReasoningTimeline />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StageWorkArea;
