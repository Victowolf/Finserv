import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { mockApplications } from '@/data/mockData';
import ProcessingStagesPanel from '@/components/bank/ProcessingStagesPanel';
import StageWorkArea from '@/components/bank/StageWorkArea';
import DocumentViewerPanel from '@/components/bank/DocumentViewerPanel';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import type { UploadedDocument } from '@/types';

const BankWorkspace: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const app = mockApplications.find((a) => a.id === id) || mockApplications[0];
  const [activeStage, setActiveStage] = useState(0);
  const [selectedDoc, setSelectedDoc] = useState<UploadedDocument | null>(null);
  const [selectedReport, setSelectedReport] = useState<string | null>(null);

  return (
    <div className="flex flex-col h-[calc(100vh-3.5rem)]">
      <div className="flex items-center gap-3 border-b px-4 py-3">
        <Button variant="ghost" size="icon" onClick={() => navigate('/bank/dashboard')}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="font-display text-lg font-bold">{app.companyName}</h1>
          <p className="text-xs text-muted-foreground">{app.id} · ₹{(app.loanAmount / 100000).toFixed(0)}L · {app.loanType}</p>
        </div>
      </div>

      <ResizablePanelGroup direction="horizontal" className="flex-1">
        <ResizablePanel defaultSize={20} minSize={15}>
          <div className="h-full overflow-auto border-r">
            <ProcessingStagesPanel stages={app.stages} activeStage={activeStage} onStageSelect={(i) => { setActiveStage(i); setSelectedDoc(null); setSelectedReport(null); }} />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={55}>
          <div className="h-full overflow-auto">
            <StageWorkArea
              stageIndex={activeStage}
              selectedDocument={selectedDoc}
              selectedReport={selectedReport}
              stages={app.stages}
              onReportSelect={(reportId) => { setSelectedReport(reportId); setSelectedDoc(null); }}
            />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={25} minSize={15}>
          <div className="h-full overflow-auto border-l">
            <DocumentViewerPanel onDocumentSelect={(doc) => { setSelectedDoc(doc); setSelectedReport(null); }} />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default BankWorkspace;
