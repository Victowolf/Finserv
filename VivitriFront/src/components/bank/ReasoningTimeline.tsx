import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
  Search, FileText, Brain, Database, CheckCircle2, AlertTriangle,
  ChevronDown, ChevronRight, Loader2, Bot, Cpu, Eye
} from 'lucide-react';
import { cn } from '@/lib/utils';

type StepType = 'search' | 'document' | 'analysis' | 'database' | 'validation' | 'warning' | 'ocr' | 'reasoning';

interface ReasoningStep {
  type: StepType;
  title: string;
  description: string;
  details?: string;
}

interface AgentReasoning {
  agent_name: string;
  agent_type: 'AI Agent' | 'Algorithmic Agent';
  status: 'running' | 'completed' | 'error';
  steps: ReasoningStep[];
}

const stepIcons: Record<StepType, React.ReactNode> = {
  search: <Search className="h-4 w-4" />,
  document: <FileText className="h-4 w-4" />,
  analysis: <Brain className="h-4 w-4" />,
  database: <Database className="h-4 w-4" />,
  validation: <CheckCircle2 className="h-4 w-4" />,
  warning: <AlertTriangle className="h-4 w-4" />,
  ocr: <Eye className="h-4 w-4" />,
  reasoning: <Brain className="h-4 w-4" />,
};

const stepIconColors: Record<StepType, string> = {
  search: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
  document: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
  analysis: 'text-violet-500 bg-violet-500/10 border-violet-500/20',
  database: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
  validation: 'text-green-500 bg-green-500/10 border-green-500/20',
  warning: 'text-red-500 bg-red-500/10 border-red-500/20',
  ocr: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20',
  reasoning: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
};

const statusConfig = {
  running: { label: 'Running', className: 'bg-blue-500/10 text-blue-600 border-blue-500/30 animate-pulse' },
  completed: { label: 'Completed', className: 'bg-green-500/10 text-green-600 border-green-500/30' },
  error: { label: 'Error', className: 'bg-red-500/10 text-red-600 border-red-500/30' },
};

const mockAgentData: AgentReasoning[] = [
  {
    agent_name: 'Agent 1 — Data Ingestor',
    agent_type: 'Algorithmic Agent',
    status: 'completed',
    steps: [
      { type: 'document', title: 'Reading uploaded documents', description: 'Extracting text from 6 uploaded PDFs and images including Certificate of Incorporation, MoA, AoA, GSTR1, ITR, and Bank Statements.', details: 'Files processed:\n• Certificate_of_Incorporation.pdf — 12 pages, 3,400 words extracted\n• MoA.pdf — 8 pages, 2,100 words extracted\n• AoA.pdf — 6 pages, 1,800 words extracted\n• GSTR1_2025.xlsx — 4 sheets, 1,200 rows parsed\n• ITR_2024.pdf — 22 pages, 5,600 words extracted\n• Bank_Statement_SBI.pdf — 48 pages, 14,200 transactions parsed' },
      { type: 'ocr', title: 'Running OCR on scanned documents', description: 'Detecting tables, financial values, and handwritten annotations using multi-model OCR pipeline.', details: 'OCR Engine: Tesseract v5 + Azure Form Recognizer\nConfidence Score: 97.3%\nTables Detected: 34\nFinancial Values Extracted: 892\nHandwritten Annotations: 3 (flagged for manual review)' },
      { type: 'database', title: 'Structuring extracted data', description: 'Converting extracted content into normalized JSON schemas for downstream agents.', details: 'Output Schema:\n• company_profile.json — Basic company details, directors, registered address\n• financial_statements.json — P&L, Balance Sheet, Cash Flow for FY22-25\n• gst_filings.json — Monthly GSTR-1 and GSTR-3B summaries\n• bank_transactions.json — Categorized credit/debit entries with running balance\n• tax_returns.json — ITR-6 extracted schedules and computations' },
      { type: 'validation', title: 'Data integrity check passed', description: 'All extracted fields validated against expected formats. No critical data gaps found.', details: 'Validation Results:\n✅ PAN format valid\n✅ GSTIN checksum verified\n✅ Financial year alignment confirmed\n✅ Bank statement period covers required 12 months\n⚠ Minor: 2 GST entries have rounded values (flagged, non-critical)' },
    ],
  },
  {
    agent_name: 'Agent 2 — Compliance & Forensic Analysis',
    agent_type: 'AI Agent',
    status: 'completed',
    steps: [
      { type: 'search', title: 'Searching regulatory databases', description: 'Checking company registration with MCA, SEBI, RBI, and FEMA compliance databases.', details: 'Databases Queried:\n• MCA21 — Company Status: Active, Last Annual Return Filed: March 2025\n• SEBI — No listed entity, no pending investigations\n• RBI — NBFC registration not applicable\n• FEMA — No overseas borrowing or FDI violations detected\n• EPFO — Compliant, 142 employees registered' },
      { type: 'search', title: 'Searching GST database', description: 'Fetching GST filing history for FY 2022-2025 and cross-referencing with declared turnover.', details: 'GST Analysis:\n• GSTIN: 07AABCT1234F1ZP — Status: Active\n• Filing Regularity: 36/36 months filed on time\n• Aggregate Turnover (FY25): ₹18.4 Cr\n• ITC Claimed: ₹2.1 Cr\n• No demand notices or SCN pending' },
      { type: 'analysis', title: 'Revenue comparison analysis', description: 'Comparing GST reported revenue with bank inflows and ITR declared income.', details: 'Cross-Verification Matrix:\n• GST Revenue (FY25): ₹18.4 Cr\n• Bank Credit Inflows (FY25): ₹19.1 Cr\n• ITR Declared Revenue (FY25): ₹18.6 Cr\n\nVariance Analysis:\n• GST vs Bank: +3.8% (within acceptable range — timing differences)\n• GST vs ITR: +1.1% (acceptable — other income adjustments)\n• Conclusion: No material discrepancy detected' },
      { type: 'reasoning', title: 'Forensic pattern analysis', description: 'Running AI pattern detection on transaction flows for circular trading, layering, or unusual activity.', details: 'Forensic Checks:\n✅ No circular trading patterns detected\n✅ No shell company linkages found\n✅ Related party transactions within arm\'s length\n✅ No sudden spike in cash transactions\n✅ Director DIN status: All active, no disqualifications\n⚠ Minor: 3 cash deposits >₹10L detected (reported in CTR — compliant)' },
      { type: 'validation', title: 'Compliance score: 92/100', description: 'Overall compliance assessment completed. Company is in good regulatory standing.', details: 'Score Breakdown:\n• MCA Compliance: 95/100\n• GST Compliance: 94/100\n• Tax Compliance: 90/100\n• FEMA/PMLA: 88/100\n• Director Due Diligence: 93/100\n\nRisk Rating: LOW' },
    ],
  },
  {
    agent_name: 'Agent 3 — Financial Analysis Engine',
    agent_type: 'AI Agent',
    status: 'completed',
    steps: [
      { type: 'document', title: 'Parsing financial statements', description: 'Extracting P&L, Balance Sheet, and Cash Flow data for FY 2022-2025 from uploaded ITR and audit reports.', details: 'Financial Data Extracted:\n\nRevenue Trend:\n• FY22: ₹12.3 Cr → FY23: ₹14.8 Cr → FY24: ₹16.9 Cr → FY25: ₹18.6 Cr\n• CAGR: 14.8%\n\nNet Profit:\n• FY22: ₹1.2 Cr → FY25: ₹2.8 Cr\n• PAT Margin improved from 9.7% to 15.1%' },
      { type: 'analysis', title: 'Computing financial ratios', description: 'Calculating 28 financial ratios including liquidity, solvency, profitability, and efficiency metrics.', details: 'Key Ratios (FY25):\n• Current Ratio: 1.82\n• Quick Ratio: 1.24\n• Debt-Equity Ratio: 0.67\n• Interest Coverage: 4.2x\n• DSCR: 2.1x\n• ROE: 18.4%\n• ROCE: 22.1%\n• Operating Margin: 21.3%\n• Asset Turnover: 1.4x\n• Working Capital Days: 68' },
      { type: 'reasoning', title: 'Trend analysis & projections', description: 'AI modeling revenue growth trajectory and stress-testing repayment capacity under adverse scenarios.', details: 'Projection Model: Monte Carlo Simulation (10,000 iterations)\n\nBase Case (70% probability):\n• Revenue Growth: 12-15% p.a.\n• DSCR maintained >1.8x\n• Loan repayment: Comfortable\n\nStress Case (20% probability):\n• Revenue Growth: 5-8% p.a.\n• DSCR: 1.3x (still above threshold)\n• Loan repayment: Manageable with reserves\n\nSevere Stress (10% probability):\n• Revenue Decline: -5%\n• DSCR: 0.9x (below threshold)\n• Mitigation: Collateral covers 1.4x exposure' },
      { type: 'search', title: 'Bank statement analysis', description: 'Analyzing 12-month bank statement for cash flow patterns, EMI regularity, and account behavior.', details: 'Bank Analysis Summary:\n• Average Monthly Balance: ₹42.3L\n• Minimum Balance Maintained: ₹8.7L (no instances below ₹5L)\n• Inward Cheque Bouncing: 0%\n• Outward Cheque Bouncing: 1.2% (2 instances — cleared within 3 days)\n• EMI Regularity: 100% on-time for existing loans\n• No lien or attachment orders\n• Cash Credit Utilization: Avg 62% (healthy)' },
      { type: 'validation', title: 'Financial health score: 8.2/10', description: 'Strong financial position with consistent growth, healthy ratios, and adequate repayment capacity.' },
    ],
  },
  {
    agent_name: 'Agent 4 — Industry & Market Research',
    agent_type: 'AI Agent',
    status: 'completed',
    steps: [
      { type: 'search', title: 'Fetching industry reports', description: 'Pulling latest IBEF, CRISIL, and RBI sectoral reports for the IT Services & Technology sector.', details: 'Sources Consulted:\n• IBEF IT & ITeS Sector Report (Jan 2026)\n• CRISIL Industry Risk Score — IT Services: 4/10 (Low Risk)\n• RBI Financial Stability Report — Technology Sector Outlook: Stable\n• NASSCOM Annual Review 2025-26\n• Gartner India IT Spending Forecast' },
      { type: 'analysis', title: 'Competitive positioning assessment', description: 'Evaluating TechVentures against peer companies in the mid-tier IT services segment.', details: 'Peer Comparison:\n\n| Metric | TechVentures | Peer Avg | Rank |\n|--------|-------------|----------|------|\n| Revenue Growth | 14.8% | 11.2% | 2/8 |\n| Profit Margin | 15.1% | 12.3% | 3/8 |\n| Employee Growth | 18% | 9% | 1/8 |\n| Client Retention | 94% | 87% | 2/8 |\n| Debt-Equity | 0.67 | 0.82 | 3/8 |\n\nCompetitive Moat: Strong domain expertise in fintech vertical' },
      { type: 'reasoning', title: 'Market trend impact analysis', description: 'Assessing how macroeconomic trends, AI disruption, and regulatory changes affect the borrower\'s business outlook.', details: 'Key Trends & Impact:\n\n📈 Positive Factors:\n• India IT spending growing at 13.2% CAGR (Gartner)\n• Digital transformation demand accelerating post-COVID\n• Company\'s fintech focus aligns with UPI/digital banking growth\n• Government push for Digital India 2.0\n\n⚠ Risk Factors:\n• AI automation may reduce headcount-based revenue models\n• USD/INR volatility affects export revenue (30% of total)\n• Increasing competition from GCC/captive centers\n\nNet Assessment: POSITIVE — tailwinds outweigh headwinds' },
      { type: 'validation', title: 'Industry risk rating: LOW', description: 'IT Services sector has stable outlook with strong domestic and export demand fundamentals.' },
    ],
  },
  {
    agent_name: 'Agent 5 — Risk Analysis & CAM Generator',
    agent_type: 'AI Agent',
    status: 'running',
    steps: [
      { type: 'database', title: 'Aggregating all agent outputs', description: 'Consolidating findings from Compliance, Financial, and Market Analysis agents into unified risk matrix.', details: 'Input Sources:\n• Agent 2 Output: Compliance Score 92/100, Risk: LOW\n• Agent 3 Output: Financial Score 8.2/10, DSCR: 2.1x\n• Agent 4 Output: Industry Risk: LOW, Market Position: STRONG\n• Site Visit Report: Management Quality: GOOD, Infrastructure: ADEQUATE' },
      { type: 'reasoning', title: 'Multi-dimensional risk scoring', description: 'Computing composite credit risk score using weighted ensemble model across 6 risk dimensions.', details: 'Risk Scoring Matrix:\n\n| Dimension | Weight | Score | Weighted |\n|-----------|--------|-------|----------|\n| Management Quality | 15% | 8.5 | 1.275 |\n| Financial Strength | 25% | 8.2 | 2.050 |\n| Business Stability | 20% | 8.0 | 1.600 |\n| Industry Outlook | 15% | 8.8 | 1.320 |\n| Collateral Coverage | 15% | 7.5 | 1.125 |\n| Compliance Track Record | 10% | 9.2 | 0.920 |\n\nComposite Score: 8.29/10\nInternal Rating: A+ (Investment Grade)' },
      { type: 'analysis', title: 'Generating risk mitigants', description: 'Identifying key risks and mapping corresponding mitigants and covenants for the loan structure.', details: 'Key Risks & Mitigants:\n\n1. Concentration Risk (Top 3 clients = 45% revenue)\n   → Covenant: Client concentration <40% within 18 months\n\n2. Currency Risk (30% export revenue)\n   → Mitigant: Natural hedge via USD expenses; forward cover advised\n\n3. Technology Disruption\n   → Mitigant: R&D spend at 8% of revenue; AI capability building\n\n4. Key Man Risk\n   → Covenant: Key man insurance for 2 founding directors' },
      { type: 'document', title: 'Drafting Credit Appraisal Memorandum', description: 'Generating comprehensive CAM report with recommendation for sanctioning authority.', details: 'CAM Draft Status: IN PROGRESS\n\nSections Generated:\n✅ Executive Summary\n✅ Company Profile & Management\n✅ Financial Analysis\n✅ Industry Assessment\n✅ Risk Assessment\n⏳ Sanction Terms & Conditions\n⏳ Recommendation\n\nPreliminary Recommendation: APPROVE with conditions\nSuggested Rate: MCLR + 1.25%\nTenor: 60 months\nCollateral: 1.2x cover via commercial property' },
    ],
  },
];

const StepIcon: React.FC<{ type: StepType }> = ({ type }) => (
  <div className={cn('flex items-center justify-center h-8 w-8 rounded-full border', stepIconColors[type])}>
    {stepIcons[type]}
  </div>
);

const ReasoningStep: React.FC<{ step: ReasoningStep; isLast: boolean }> = ({ step, isLast }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex gap-3">
      <div className="flex flex-col items-center">
        <StepIcon type={step.type} />
        {!isLast && <div className="w-px flex-1 bg-border mt-1" />}
      </div>
      <div className={cn('flex-1 pb-6', isLast && 'pb-2')}>
        <p className="text-sm font-medium leading-tight">{step.title}</p>
        <p className="text-xs text-muted-foreground mt-0.5">{step.description}</p>
        {step.details && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-xs text-primary hover:text-primary/80 mt-1.5 transition-colors"
          >
            {expanded ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
            {expanded ? 'Hide details' : 'View details'}
          </button>
        )}
        {expanded && step.details && (
          <div className="mt-2 rounded-md border bg-muted/50 p-3 text-xs text-muted-foreground font-mono whitespace-pre-wrap leading-relaxed animate-in slide-in-from-top-1 duration-200">
            {step.details}
          </div>
        )}
      </div>
    </div>
  );
};

const AgentSection: React.FC<{ agent: AgentReasoning }> = ({ agent }) => {
  const [open, setOpen] = useState(true);
  const config = statusConfig[agent.status];

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="border rounded-lg bg-card overflow-hidden">
      <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 hover:bg-muted/50 transition-colors text-left">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-primary/10 text-primary">
            {agent.agent_type === 'AI Agent' ? <Brain className="h-4 w-4" /> : <Cpu className="h-4 w-4" />}
          </div>
          <div>
            <p className="text-sm font-semibold font-display">{agent.agent_name}</p>
            <p className="text-xs text-muted-foreground">{agent.agent_type}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className={cn('text-[10px] font-medium', config.className)}>
            {agent.status === 'running' && <Loader2 className="h-3 w-3 mr-1 animate-spin" />}
            {config.label}
          </Badge>
          <ChevronDown className={cn('h-4 w-4 text-muted-foreground transition-transform', !open && '-rotate-90')} />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="px-4 pb-4 pt-1">
          <div className="border-l-0 ml-0">
            {agent.steps.map((step, i) => (
              <ReasoningStep key={i} step={step} isLast={i === agent.steps.length - 1} />
            ))}
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

const ReasoningTimeline: React.FC = () => {
  return (
    <ScrollArea className="h-full">
      <div className="p-4 space-y-3">
        <div className="mb-4">
          <h3 className="font-display text-lg font-semibold">AI Agent Reasoning</h3>
          <p className="text-sm text-muted-foreground">Step-by-step reasoning from all agents in the processing pipeline.</p>
        </div>
        {mockAgentData.map((agent, i) => (
          <AgentSection key={i} agent={agent} />
        ))}
      </div>
    </ScrollArea>
  );
};

export default ReasoningTimeline;
