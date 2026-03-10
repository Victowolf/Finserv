import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Shield, FileText, Building, Eye, BarChart3 } from 'lucide-react';

interface MockReportContentProps {
  reportId: string;
}

const reports: Record<string, React.ReactNode> = {
  credibility: (
    <div className="space-y-5">
      <div className="text-center space-y-2 pb-4 border-b">
        <p className="text-xs text-muted-foreground uppercase tracking-widest">Vivitri ML Credit Analysis System · CAM/2026/MFL/001</p>
        <h2 className="text-lg font-bold">Agent 2 – Compliance & Forensic Analysis Report</h2>
        <Badge className="bg-success/10 text-success border-success">Credibility Score: 9.1 / 10</Badge>
      </div>

      {/* Agent Overview */}
      <div className="space-y-2 text-sm">
        <h4 className="font-semibold flex items-center gap-2"><Shield className="h-4 w-4 text-primary" /> Agent Overview</h4>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex justify-between"><span className="text-muted-foreground">Agent:</span><span className="font-medium">Compliance & Forensic Analysis</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">Model:</span><span className="font-medium">GPT-OSS-20B</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">Report Date:</span><span className="font-medium">March 10, 2026</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">Documents:</span><span className="font-medium">4 Quarterly + 1 Annual</span></div>
        </div>
      </div>

      <Separator />

      {/* Regulatory Compliance */}
      <div className="space-y-2 text-sm">
        <h4 className="font-semibold">Regulatory Compliance Verification</h4>
        <table className="w-full text-xs">
          <thead><tr className="border-b text-muted-foreground"><th className="text-left py-1.5">Parameter</th><th className="text-left py-1.5">Requirement</th><th className="text-right py-1.5">Status</th></tr></thead>
          <tbody>
            <tr className="border-b"><td className="py-1.5">SEBI LODR Reg 33</td><td>Quarterly unaudited results</td><td className="text-right text-success">COMPLIANT</td></tr>
            <tr className="border-b"><td className="py-1.5">SEBI LODR Reg 52</td><td>Half-yearly disclosures</td><td className="text-right text-success">COMPLIANT</td></tr>
            <tr className="border-b"><td className="py-1.5">Ind AS 34</td><td>Interim Financial Reporting</td><td className="text-right text-success">COMPLIANT</td></tr>
            <tr className="border-b"><td className="py-1.5">RBI NBFC Guidelines</td><td>Income recognition, NPA classification</td><td className="text-right text-success">COMPLIANT</td></tr>
            <tr className="border-b"><td className="py-1.5">Capital Adequacy (RBI)</td><td>Minimum 15% CAR for NBFC</td><td className="text-right text-success">COMPLIANT (20.27%)</td></tr>
            <tr className="border-b"><td className="py-1.5">Ind AS 109</td><td>Financial Instruments – ECL</td><td className="text-right text-success">COMPLIANT</td></tr>
            <tr className="border-b"><td className="py-1.5">Related Party Transactions</td><td>Disclosure under Ind AS 24</td><td className="text-right text-success">COMPLIANT</td></tr>
          </tbody>
        </table>
      </div>

      <Separator />

      {/* Auditor Assessment */}
      <div className="space-y-2 text-sm">
        <h4 className="font-semibold">Auditor Credibility Assessment</h4>
        <p className="text-xs text-muted-foreground">Joint Statutory Auditors: Krishnamoorthy & Krishnamoorthy (FRN: 001488S) and P S D Y & Associates (FRN: 010625S)</p>
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2.5 rounded-md bg-muted/50"><p className="text-xs text-muted-foreground">Auditor Independence</p><p className="font-bold text-success">10/10</p></div>
          <div className="p-2.5 rounded-md bg-muted/50"><p className="text-xs text-muted-foreground">Unmodified Conclusions</p><p className="font-bold text-success">10/10</p></div>
          <div className="p-2.5 rounded-md bg-muted/50"><p className="text-xs text-muted-foreground">Audit Trail Continuity</p><p className="font-bold text-success">10/10</p></div>
          <div className="p-2.5 rounded-md bg-muted/50"><p className="text-xs text-muted-foreground">UDIN Compliance</p><p className="font-bold text-success">10/10</p></div>
        </div>
      </div>

      <Separator />

      {/* Forensic Red-Flag */}
      <div className="space-y-2 text-sm">
        <h4 className="font-semibold flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-warning" /> Forensic Red-Flag Analysis</h4>
        <table className="w-full text-xs">
          <thead><tr className="border-b text-muted-foreground"><th className="text-left py-1.5">Parameter</th><th className="text-left py-1.5">Finding</th><th className="text-right py-1.5">Risk</th></tr></thead>
          <tbody>
            <tr className="border-b"><td className="py-1.5">Revenue Manipulation</td><td>Interest income grew 53% YoY – explained by AUM growth ~37%</td><td className="text-right"><Badge variant="outline" className="text-success border-success text-xs">LOW</Badge></td></tr>
            <tr className="border-b"><td className="py-1.5">Impairment Reversal</td><td>Impairment dropped from ₹2,235 Mn to ₹432 Mn – Stage III declining</td><td className="text-right"><Badge variant="outline" className="text-success border-success text-xs">LOW</Badge></td></tr>
            <tr className="border-b"><td className="py-1.5">Finance Cost Surge</td><td>Finance costs up 57% YoY – proportionate to borrowing growth</td><td className="text-right"><Badge variant="outline" className="text-success border-success text-xs">LOW</Badge></td></tr>
            <tr className="border-b"><td className="py-1.5">Cash Movement</td><td>Cash ₹71,704 Mn → ₹93,960 Mn (Dec 25) – healthy build-up</td><td className="text-right"><Badge variant="outline" className="text-success border-success text-xs">LOW</Badge></td></tr>
            <tr className="border-b"><td className="py-1.5">Debt-Equity Trend</td><td>DE ratio rising: 2.70 → 3.69 – monitor leverage</td><td className="text-right"><Badge variant="outline" className="text-warning border-warning text-xs">MEDIUM</Badge></td></tr>
            <tr className="border-b"><td className="py-1.5">Stage III to Gross Loans</td><td>Declining from 3.98% to 1.58% – significant improvement</td><td className="text-right"><Badge variant="outline" className="text-success border-success text-xs">LOW</Badge></td></tr>
          </tbody>
        </table>
      </div>

      <Separator />

      {/* MCA & CIBIL */}
      <div className="space-y-2 text-sm">
        <h4 className="font-semibold">MCA & CIBIL Cross-Check</h4>
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-success"><CheckCircle className="h-3.5 w-3.5" /> MCA21 Status: Active – No strike-off notice</div>
          <div className="flex items-center gap-2 text-success"><CheckCircle className="h-3.5 w-3.5" /> CIN: L65910KL1997PLC011300 – Valid</div>
          <div className="flex items-center gap-2 text-success"><CheckCircle className="h-3.5 w-3.5" /> Director: George Alexander Muthoot (MD) – Active, DIN: 00016787</div>
          <div className="flex items-center gap-2 text-success"><CheckCircle className="h-3.5 w-3.5" /> CIBIL Commercial Score: 850+ (estimated)</div>
          <div className="flex items-center gap-2 text-success"><CheckCircle className="h-3.5 w-3.5" /> RBI Registered NBFC – Gold Loan NBFC-Upper Layer</div>
          <div className="flex items-center gap-2 text-success"><CheckCircle className="h-3.5 w-3.5" /> No pending material litigations</div>
        </div>
      </div>

      <div className="p-3 rounded-md bg-success/10 text-sm text-success font-medium">
        VERDICT: HIGH CREDIBILITY – PROCEED TO FINANCIAL ANALYSIS
      </div>
    </div>
  ),

  financial: (
    <div className="space-y-5">
      <div className="text-center space-y-2 pb-4 border-b">
        <p className="text-xs text-muted-foreground uppercase tracking-widest">Vivitri ML Credit Analysis System · CAM/2026/MFL/001</p>
        <h2 className="text-lg font-bold">Agent 3 – Financial Analysis Engine Report</h2>
        <Badge className="bg-primary/10 text-primary border-primary">Financial Analysis Score: 8.7 / 10</Badge>
      </div>

      {/* Agent Overview */}
      <div className="space-y-2 text-sm">
        <h4 className="font-semibold flex items-center gap-2"><BarChart3 className="h-4 w-4 text-primary" /> Agent Overview</h4>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex justify-between"><span className="text-muted-foreground">Agent:</span><span className="font-medium">Algorithmic Financial Engine</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">Period:</span><span className="font-medium">FY25 + Q1-Q3 FY26</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">Methodology:</span><span className="font-medium">Trend, Ratio, DuPont, ECL</span></div>
        </div>
      </div>

      <Separator />

      {/* Income Statement */}
      <div className="space-y-2 text-sm">
        <h4 className="font-semibold flex items-center gap-2"><TrendingUp className="h-4 w-4 text-success" /> Income Statement Trend (Standalone, ₹ Mn)</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead><tr className="border-b text-muted-foreground"><th className="text-left py-1.5">Particulars</th><th className="text-right py-1.5">Q1 FY26</th><th className="text-right py-1.5">Q2 FY26</th><th className="text-right py-1.5">Q3 FY26</th><th className="text-right py-1.5">FY25</th><th className="text-right py-1.5">YoY (Q3)</th></tr></thead>
            <tbody>
              <tr className="border-b"><td className="py-1.5">Interest Income</td><td className="text-right">55,923</td><td className="text-right">63,044</td><td className="text-right font-medium">71,138</td><td className="text-right">1,68,770</td><td className="text-right text-success">+63%</td></tr>
              <tr className="border-b"><td className="py-1.5">Total Revenue</td><td className="text-right">57,033</td><td className="text-right">64,322</td><td className="text-right font-medium">72,428</td><td className="text-right">1,70,991</td><td className="text-right text-success">+63%</td></tr>
              <tr className="border-b"><td className="py-1.5">Finance Costs</td><td className="text-right">21,191</td><td className="text-right">23,126</td><td className="text-right font-medium">26,467</td><td className="text-right">64,288</td><td className="text-right text-warning">+60%</td></tr>
              <tr className="border-b"><td className="py-1.5">Impairment</td><td className="text-right">433</td><td className="text-right">1,141</td><td className="text-right font-medium">1,109</td><td className="text-right">7,667</td><td className="text-right text-success">-49%</td></tr>
              <tr className="border-b"><td className="py-1.5">Total Expenses</td><td className="text-right">29,745</td><td className="text-right">33,094</td><td className="text-right font-medium">36,813</td><td className="text-right">1,00,854</td><td className="text-right">+43%</td></tr>
              <tr className="border-b font-semibold"><td className="py-1.5">Profit Before Tax</td><td className="text-right">27,455</td><td className="text-right">31,514</td><td className="text-right">35,817</td><td className="text-right">70,706</td><td className="text-right text-success">+94%</td></tr>
              <tr className="border-b font-semibold"><td className="py-1.5">Net Profit (PAT)</td><td className="text-right">20,463</td><td className="text-right">23,452</td><td className="text-right">26,564</td><td className="text-right">52,008</td><td className="text-right text-success">+95%</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <Separator />

      {/* Balance Sheet */}
      <div className="space-y-2 text-sm">
        <h4 className="font-semibold">Balance Sheet Analysis (Standalone, ₹ Mn)</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead><tr className="border-b text-muted-foreground"><th className="text-left py-1.5">Item</th><th className="text-right py-1.5">Mar-25</th><th className="text-right py-1.5">Jun-25</th><th className="text-right py-1.5">Sep-25</th><th className="text-right py-1.5">Dec-25</th><th className="text-right py-1.5">Change</th></tr></thead>
            <tbody>
              <tr className="border-b"><td className="py-1.5">Total Assets</td><td className="text-right">12,12,488</td><td className="text-right">13,61,203</td><td className="text-right">14,74,678</td><td className="text-right font-medium">16,55,840</td><td className="text-right text-success">+36.6%</td></tr>
              <tr className="border-b"><td className="py-1.5">Loans (Gold AUM)</td><td className="text-right">10,86,810</td><td className="text-right">11,94,416</td><td className="text-right">13,13,696</td><td className="text-right font-medium">14,65,153</td><td className="text-right text-success">+34.8%</td></tr>
              <tr className="border-b"><td className="py-1.5">Cash & Equivalents</td><td className="text-right">71,705</td><td className="text-right">1,02,031</td><td className="text-right">69,097</td><td className="text-right font-medium">93,961</td><td className="text-right text-success">+31.0%</td></tr>
              <tr className="border-b"><td className="py-1.5">Debt Securities (NCDs)</td><td className="text-right">2,35,413</td><td className="text-right">3,13,431</td><td className="text-right">3,21,684</td><td className="text-right font-medium">3,75,940</td><td className="text-right text-warning">+59.7%</td></tr>
              <tr className="border-b"><td className="py-1.5">Total Equity</td><td className="text-right">2,84,375</td><td className="text-right">2,94,571</td><td className="text-right">3,18,434</td><td className="text-right font-medium">3,45,024</td><td className="text-right text-success">+21.3%</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <Separator />

      {/* Key Ratios */}
      <div className="space-y-2 text-sm">
        <h4 className="font-semibold">Key Financial Ratios – Quarterly Trend</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead><tr className="border-b text-muted-foreground"><th className="text-left py-1.5">Ratio</th><th className="text-right py-1.5">Q1 FY25</th><th className="text-right py-1.5">Q1 FY26</th><th className="text-right py-1.5">Q2 FY26</th><th className="text-right py-1.5">Q3 FY26</th><th className="text-right py-1.5">Trend</th></tr></thead>
            <tbody>
              <tr className="border-b"><td className="py-1.5">Net Profit Margin</td><td className="text-right">29.07%</td><td className="text-right">35.77%</td><td className="text-right">36.30%</td><td className="text-right font-medium">36.58%</td><td className="text-right text-success">↑ IMPROVING</td></tr>
              <tr className="border-b"><td className="py-1.5">EPS – Basic (₹)</td><td className="text-right">26.87</td><td className="text-right">50.97</td><td className="text-right">58.42</td><td className="text-right font-medium">66.16</td><td className="text-right text-success">↑ IMPROVING</td></tr>
              <tr className="border-b"><td className="py-1.5">Debt-Equity Ratio</td><td className="text-right">2.70</td><td className="text-right">3.51</td><td className="text-right">3.52</td><td className="text-right font-medium">3.69</td><td className="text-right text-warning">↑ WATCH</td></tr>
              <tr className="border-b"><td className="py-1.5">Stage III NPA %</td><td className="text-right">3.98%</td><td className="text-right">2.58%</td><td className="text-right">2.25%</td><td className="text-right font-medium">1.58%</td><td className="text-right text-success">↓ IMPROVING</td></tr>
              <tr className="border-b"><td className="py-1.5">Capital Adequacy</td><td className="text-right">27.46%</td><td className="text-right">21.96%</td><td className="text-right">20.89%</td><td className="text-right font-medium">20.27%</td><td className="text-right text-warning">↓ Monitor</td></tr>
              <tr className="border-b"><td className="py-1.5">Net Worth (₹ Mn)</td><td className="text-right">2,43,326</td><td className="text-right">2,93,795</td><td className="text-right">3,17,994</td><td className="text-right font-medium">3,44,471</td><td className="text-right text-success">↑ IMPROVING</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <Separator />

      {/* Repayment Capacity */}
      <div className="space-y-2 text-sm">
        <h4 className="font-semibold">Repayment Capacity for ₹200 Crore Loan</h4>
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2.5 rounded-md bg-muted/50"><p className="text-xs text-muted-foreground">Annual NPAT (annualized)</p><p className="font-bold">₹7,048 Cr</p></div>
          <div className="p-2.5 rounded-md bg-muted/50"><p className="text-xs text-muted-foreground">Loan as % of NPAT</p><p className="font-bold text-success">~2.84%</p></div>
          <div className="p-2.5 rounded-md bg-muted/50"><p className="text-xs text-muted-foreground">DSCR (estimated)</p><p className="font-bold text-success">&gt;8x</p></div>
          <div className="p-2.5 rounded-md bg-muted/50"><p className="text-xs text-muted-foreground">Collateral Coverage</p><p className="font-bold text-success">732x</p></div>
        </div>
        <p className="text-xs text-muted-foreground">Incremental Borrowing: ₹200 Cr = 0.16% of existing ₹1,27,345 Cr total debt — Immaterial</p>
      </div>

      <div className="p-3 rounded-md bg-primary/10 text-sm text-primary font-medium">
        VERDICT: STRONG FINANCIAL PROFILE – REPAYMENT CAPACITY: EXCELLENT
      </div>
    </div>
  ),

  market: (
    <div className="space-y-5">
      <div className="text-center space-y-2 pb-4 border-b">
        <p className="text-xs text-muted-foreground uppercase tracking-widest">Vivitri ML Credit Analysis System · CAM/2026/MFL/001</p>
        <h2 className="text-lg font-bold">Agent 4 – Industry & Market Analysis Report</h2>
        <Badge className="bg-primary/10 text-primary border-primary">Industry Review Score: 8.5 / 10</Badge>
      </div>

      {/* Industry Overview */}
      <div className="space-y-2 text-sm">
        <h4 className="font-semibold flex items-center gap-2"><TrendingUp className="h-4 w-4 text-success" /> Gold Loan NBFC Sector Overview</h4>
        <ul className="list-disc list-inside text-muted-foreground space-y-1 text-xs">
          <li>India's estimated household gold holdings: ~25,000 tonnes (world's largest private gold reserve)</li>
          <li>Gold-backed lending – LTV typically capped at 75% by RBI guidelines</li>
          <li>Sector AUM growth of 25-30% CAGR over last 3 years</li>
          <li>Muthoot Finance: India's largest gold loan company by AUM, 5,000+ branches across 29 states</li>
        </ul>
      </div>

      <Separator />

      {/* Competitive Positioning */}
      <div className="space-y-2 text-sm">
        <h4 className="font-semibold">Competitive Positioning</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead><tr className="border-b text-muted-foreground"><th className="text-left py-1.5">Parameter</th><th className="text-right py-1.5">Muthoot Finance</th><th className="text-right py-1.5">Manappuram</th><th className="text-right py-1.5">IIFL Finance</th><th className="text-right py-1.5">Sector Avg</th></tr></thead>
            <tbody>
              <tr className="border-b"><td className="py-1.5">Loan AUM</td><td className="text-right font-medium">₹1,46,515 Cr</td><td className="text-right">~₹45,000 Cr</td><td className="text-right">~₹25,000 Cr</td><td className="text-right">-</td></tr>
              <tr className="border-b"><td className="py-1.5">Market Share</td><td className="text-right font-medium">~35-40%</td><td className="text-right">~15-18%</td><td className="text-right">~8-10%</td><td className="text-right">-</td></tr>
              <tr className="border-b"><td className="py-1.5">NIM</td><td className="text-right font-medium">~18-20%</td><td className="text-right">~17-19%</td><td className="text-right">~15-17%</td><td className="text-right">~16%</td></tr>
              <tr className="border-b"><td className="py-1.5">Stage III NPA</td><td className="text-right font-medium text-success">1.58%</td><td className="text-right">~3-4%</td><td className="text-right">~3-5%</td><td className="text-right">~3%</td></tr>
              <tr className="border-b"><td className="py-1.5">CAR</td><td className="text-right font-medium">20.27%</td><td className="text-right">~22%</td><td className="text-right">~20%</td><td className="text-right">Min 15%</td></tr>
              <tr className="border-b"><td className="py-1.5">Net Profit Margin</td><td className="text-right font-medium text-success">36.58%</td><td className="text-right">~25-28%</td><td className="text-right">~18-22%</td><td className="text-right">~20%</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <Separator />

      {/* Regulatory Environment */}
      <div className="space-y-2 text-sm">
        <h4 className="font-semibold">Regulatory Environment</h4>
        <ul className="list-disc list-inside text-muted-foreground space-y-1 text-xs">
          <li>RBI NBFC Scale Based Regulation (2021) – Muthoot classified as NBFC-Upper Layer</li>
          <li>RBI Master Direction: LTV capped at 75%, no bullet repayment beyond 12 months</li>
          <li>Capital Adequacy: Min Tier I 10%, Total CAR 15% (Muthoot at 20.27% – well above)</li>
          <li>Debenture Trustee compliance: Full security cover maintained per SEBI Regulations 2019</li>
        </ul>
      </div>

      <Separator />

      {/* Macroeconomic Context */}
      <div className="space-y-2 text-sm">
        <h4 className="font-semibold">Macroeconomic Context</h4>
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2.5 rounded-md bg-muted/50"><p className="text-xs text-muted-foreground">Gold Price Trend</p><p className="font-bold">₹78,000-82,000/10g</p><p className="text-xs text-success">POSITIVE</p></div>
          <div className="p-2.5 rounded-md bg-muted/50"><p className="text-xs text-muted-foreground">RBI Repo Rate</p><p className="font-bold">6.00-6.25%</p><p className="text-xs text-muted-foreground">NEUTRAL</p></div>
          <div className="p-2.5 rounded-md bg-muted/50"><p className="text-xs text-muted-foreground">India GDP Growth</p><p className="font-bold">6.8-7.0%</p><p className="text-xs text-success">POSITIVE</p></div>
          <div className="p-2.5 rounded-md bg-muted/50"><p className="text-xs text-muted-foreground">Rural Credit Demand</p><p className="font-bold">+18-22% YoY</p><p className="text-xs text-success">POSITIVE</p></div>
        </div>
      </div>

      <Separator />

      {/* Growth Projections */}
      <div className="space-y-2 text-sm">
        <h4 className="font-semibold">Growth Projections</h4>
        <div className="space-y-1.5 text-xs">
          <div className="flex justify-between"><span className="text-muted-foreground">FY26 Loan AUM Growth (YTD):</span><span className="font-medium text-success">34.8% (Mar-25 to Dec-25)</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">FY26 Net Profit Growth (9M):</span><span className="font-medium text-success">91% YoY</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">FY27 AUM Projection:</span><span className="font-medium">₹1,80,000-2,00,000 Cr</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">Branch Expansion:</span><span className="font-medium">Tier 2/3 cities & Northeast India</span></div>
        </div>
      </div>

      <div className="p-3 rounded-md bg-primary/10 text-sm text-primary font-medium">
        VERDICT: STRONG INDUSTRY POSITION – MARKET LEADER WITH FAVORABLE TAILWINDS
      </div>
    </div>
  ),

  sitevisit: (
    <div className="space-y-5">
      <div className="text-center space-y-2 pb-4 border-b">
        <p className="text-xs text-muted-foreground uppercase tracking-widest">Vivitri ML Credit Analysis System · CAM/2026/MFL/001</p>
        <h2 className="text-lg font-bold">Agent 5 – Site Visit Report (Human Agent)</h2>
        <Badge className="bg-success/10 text-success border-success">Site Visit Score: 8.0 / 10</Badge>
      </div>

      {/* Visit Details */}
      <div className="space-y-2 text-sm">
        <h4 className="font-semibold flex items-center gap-2"><Eye className="h-4 w-4 text-primary" /> Site Visit Details</h4>
        <div className="grid grid-cols-2 gap-3">
          <div><span className="text-muted-foreground text-xs">Visit Date:</span><p className="font-medium">February 2026</p></div>
          <div><span className="text-muted-foreground text-xs">Location:</span><p className="font-medium">NH Bypass, Palarivattom, Kochi</p></div>
          <div><span className="text-muted-foreground text-xs">Persons Met:</span><p className="font-medium">George Alexander Muthoot (MD), Finance Team</p></div>
          <div><span className="text-muted-foreground text-xs">Human Agent:</span><p className="font-medium">Senior Credit Officer</p></div>
        </div>
      </div>

      <Separator />

      {/* Management Assessment */}
      <div className="space-y-2 text-sm">
        <h4 className="font-semibold">Management Assessment</h4>
        <table className="w-full text-xs">
          <thead><tr className="border-b text-muted-foreground"><th className="text-left py-1.5">Area</th><th className="text-left py-1.5">Observations</th><th className="text-right py-1.5">Rating</th></tr></thead>
          <tbody>
            <tr className="border-b"><td className="py-1.5 font-medium">Management Quality</td><td className="text-muted-foreground">Promoter-driven family business; MD with track record since 1997</td><td className="text-right text-success">EXCELLENT</td></tr>
            <tr className="border-b"><td className="py-1.5 font-medium">Corporate Governance</td><td className="text-muted-foreground">Listed on NSE & BSE. Audit Committee approves all results</td><td className="text-right text-success">EXCELLENT</td></tr>
            <tr className="border-b"><td className="py-1.5 font-medium">Succession Planning</td><td className="text-muted-foreground">Large family conglomerate with clear generational succession</td><td className="text-right">GOOD</td></tr>
            <tr className="border-b"><td className="py-1.5 font-medium">Financial Discipline</td><td className="text-muted-foreground">₹26/share dividend FY25. Conservative provisioning. ECL excess retained</td><td className="text-right text-success">EXCELLENT</td></tr>
            <tr className="border-b"><td className="py-1.5 font-medium">Operational Systems</td><td className="text-muted-foreground">5,000+ branches, centralized gold custody, IT systems, security protocols</td><td className="text-right text-success">EXCELLENT</td></tr>
            <tr className="border-b"><td className="py-1.5 font-medium">ESG Practices</td><td className="text-muted-foreground">India's Most Trusted Financial Services Brand. Great Place to Work certified</td><td className="text-right">GOOD</td></tr>
          </tbody>
        </table>
      </div>

      <Separator />

      {/* Physical Infrastructure */}
      <div className="space-y-2 text-sm">
        <h4 className="font-semibold">Physical Infrastructure Verification</h4>
        <div className="space-y-1.5">
          <div className="flex items-start gap-2"><CheckCircle className="h-3.5 w-3.5 text-success mt-0.5" /><span className="text-muted-foreground text-xs">Registered Office: NH Bypass, Palarivattom, Kochi – Verified as operational HQ</span></div>
          <div className="flex items-start gap-2"><CheckCircle className="h-3.5 w-3.5 text-success mt-0.5" /><span className="text-muted-foreground text-xs">Branch Network: 5,000+ branches Pan-India – verified via MCA records</span></div>
          <div className="flex items-start gap-2"><CheckCircle className="h-3.5 w-3.5 text-success mt-0.5" /><span className="text-muted-foreground text-xs">Gold Vault Security: Industry-standard vaulting, insurance, and security protocols</span></div>
          <div className="flex items-start gap-2"><CheckCircle className="h-3.5 w-3.5 text-success mt-0.5" /><span className="text-muted-foreground text-xs">IT Infrastructure: Centralized core banking, digital gold loan app, mobile app</span></div>
          <div className="flex items-start gap-2"><CheckCircle className="h-3.5 w-3.5 text-success mt-0.5" /><span className="text-muted-foreground text-xs">Employee Strength: ~30,000+ employees – consistent with ₹5,756 Mn/quarter expense</span></div>
        </div>
      </div>

      <Separator />

      {/* Purpose Verification */}
      <div className="space-y-2 text-sm">
        <h4 className="font-semibold">Purpose Verification – ₹200 Crore Loan</h4>
        <div className="space-y-1.5 text-xs">
          <div className="flex justify-between"><span className="text-muted-foreground">Stated Purpose:</span><span className="font-medium">Business Expansion / Gold Loan Portfolio Growth</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">₹200 Cr Impact:</span><span className="font-medium">~₹250-267 Cr incremental gold loans</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">Branch Expansion:</span><span className="font-medium">~200 new branches possible</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">Verification Outcome:</span><span className="font-medium text-success">CONFIRMED</span></div>
        </div>
      </div>

      <Separator />

      {/* Risks from Site Visit */}
      <div className="space-y-2 text-sm">
        <h4 className="font-semibold flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-warning" /> Key Risks Identified</h4>
        <table className="w-full text-xs">
          <thead><tr className="border-b text-muted-foreground"><th className="text-left py-1.5">Risk</th><th className="text-left py-1.5">Observation</th><th className="text-left py-1.5">Mitigation</th></tr></thead>
          <tbody>
            <tr className="border-b"><td className="py-1.5">Concentration</td><td className="text-muted-foreground">~95%+ revenue from gold loans</td><td className="text-muted-foreground">Expanding via Muthoot Homefin</td></tr>
            <tr className="border-b"><td className="py-1.5">Rising Leverage</td><td className="text-muted-foreground">D/E ratio 2.70 → 3.69</td><td className="text-muted-foreground">Strong profitability offsets; CAR above min</td></tr>
            <tr className="border-b"><td className="py-1.5">Gold Price</td><td className="text-muted-foreground">Sharp fall would reduce LTV</td><td className="text-muted-foreground">Conservative LTV; quick auction rights</td></tr>
          </tbody>
        </table>
      </div>

      <div className="p-3 rounded-md bg-success/10 text-sm text-success font-medium">
        VERDICT: SATISFACTORY – MANAGEMENT CREDIBLE, PURPOSE VERIFIED, RISKS MANAGEABLE
      </div>
    </div>
  ),

  risk: (
    <div className="space-y-5">
      <div className="text-center space-y-2 pb-4 border-b">
        <p className="text-xs text-muted-foreground uppercase tracking-widest">Vivitri ML Credit Analysis System · CAM/2026/MFL/001</p>
        <h2 className="text-lg font-bold">Agent 6 – Risk Score & Consolidated Analysis</h2>
        <Badge className="bg-warning/10 text-warning border-warning">Composite Credit Score: 8.76 / 10</Badge>
      </div>

      {/* Multi-Dimensional Scoring */}
      <div className="space-y-2 text-sm">
        <h4 className="font-semibold flex items-center gap-2"><Shield className="h-4 w-4 text-primary" /> Multi-Dimensional Risk Scoring</h4>
        <table className="w-full text-xs">
          <thead><tr className="border-b text-muted-foreground"><th className="text-left py-1.5">Risk Category</th><th className="text-right py-1.5">Agent</th><th className="text-right py-1.5">Score</th><th className="text-right py-1.5">Weight</th><th className="text-right py-1.5">Weighted</th></tr></thead>
          <tbody>
            <tr className="border-b"><td className="py-1.5">Compliance & Regulatory</td><td className="text-right">Agent 2</td><td className="text-right">9.1</td><td className="text-right">20%</td><td className="text-right font-medium">1.82</td></tr>
            <tr className="border-b"><td className="py-1.5">Financial Health & Repayment</td><td className="text-right">Agent 3</td><td className="text-right">8.7</td><td className="text-right">30%</td><td className="text-right font-medium">2.61</td></tr>
            <tr className="border-b"><td className="py-1.5">Industry & Market</td><td className="text-right">Agent 4</td><td className="text-right">8.5</td><td className="text-right">20%</td><td className="text-right font-medium">1.70</td></tr>
            <tr className="border-b"><td className="py-1.5">Management & Operations</td><td className="text-right">Agent 5</td><td className="text-right">8.0</td><td className="text-right">15%</td><td className="text-right font-medium">1.20</td></tr>
            <tr className="border-b font-semibold"><td className="py-1.5">Collateral & Security</td><td className="text-right">Agent 6</td><td className="text-right">9.5</td><td className="text-right">15%</td><td className="text-right font-medium">1.43</td></tr>
          </tbody>
          <tfoot><tr className="font-bold"><td className="py-2">TOTAL CREDIT SCORE</td><td></td><td></td><td></td><td className="text-right text-success">8.76 / 10</td></tr></tfoot>
        </table>
      </div>

      <Separator />

      {/* Individual Risk Parameters */}
      <div className="space-y-2 text-sm">
        <h4 className="font-semibold">Individual Risk Parameters</h4>
        <div className="space-y-1.5">
          {[
            { param: 'Credit Risk', level: 'LOW', desc: 'Strong repayment; gold collateral; NPA declining', color: 'success' },
            { param: 'Market Risk', level: 'LOW-MEDIUM', desc: 'Gold price sensitivity; hedged through conservative LTV', color: 'warning' },
            { param: 'Liquidity Risk', level: 'LOW', desc: '₹93,960 Mn cash; comfortable borrowing access', color: 'success' },
            { param: 'Operational Risk', level: 'LOW', desc: 'Established processes; technology; branch network', color: 'success' },
            { param: 'Regulatory Risk', level: 'LOW-MEDIUM', desc: 'NBFC-UL compliance; CAR declining but above minimum', color: 'warning' },
            { param: 'Concentration Risk', level: 'MEDIUM', desc: '95%+ gold loans – acceptable given collateral quality', color: 'warning' },
            { param: 'Leverage Risk', level: 'MEDIUM', desc: 'D/E at 3.69 – elevated but normal for NBFC gold lending', color: 'warning' },
            { param: 'Fraud Risk', level: 'LOW', desc: 'Gold custody protocols; regular audits; insured vaults', color: 'success' },
          ].map((r) => (
            <div key={r.param} className="flex items-center justify-between p-2 rounded-md bg-muted/50">
              <div>
                <span className="font-medium text-xs">{r.param}</span>
                <p className="text-xs text-muted-foreground">{r.desc}</p>
              </div>
              <Badge variant="outline" className={`text-${r.color} border-${r.color} text-xs shrink-0`}>{r.level}</Badge>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Credit Rating */}
      <div className="space-y-2 text-sm">
        <h4 className="font-semibold">Credit Rating Assessment</h4>
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2.5 rounded-md bg-muted/50"><p className="text-xs text-muted-foreground">Internal Credit Grade (AI)</p><p className="font-bold">AA- (Strong)</p></div>
          <div className="p-2.5 rounded-md bg-muted/50"><p className="text-xs text-muted-foreground">External Rating (Ref)</p><p className="font-bold">CRISIL AA / ICRA AA</p></div>
          <div className="p-2.5 rounded-md bg-muted/50"><p className="text-xs text-muted-foreground">Probability of Default</p><p className="font-bold text-success">&lt;0.5%</p></div>
          <div className="p-2.5 rounded-md bg-muted/50"><p className="text-xs text-muted-foreground">Recovery Rate (if default)</p><p className="font-bold text-success">&gt;95%</p></div>
        </div>
      </div>

      <Separator />

      {/* Risk Mitigants */}
      <div className="space-y-2 text-sm">
        <h4 className="font-semibold">Risk Summary & Mitigants</h4>
        <table className="w-full text-xs">
          <thead><tr className="border-b text-muted-foreground"><th className="text-left py-1.5">Risk</th><th className="text-left py-1.5">Mitigation</th><th className="text-right py-1.5">Residual</th></tr></thead>
          <tbody>
            <tr className="border-b"><td className="py-1.5">Credit Default</td><td className="text-muted-foreground">DSCR &gt;8x; NPAT &gt;₹9,400 Cr/yr; gold collateral</td><td className="text-right text-success">NEGLIGIBLE</td></tr>
            <tr className="border-b"><td className="py-1.5">Collateral Value</td><td className="text-muted-foreground">Conservative LTV 75%; quick auction rights</td><td className="text-right text-success">LOW</td></tr>
            <tr className="border-b"><td className="py-1.5">Leverage</td><td className="text-muted-foreground">CAR at 20.27% above 15% minimum; profitable growth</td><td className="text-right text-warning">LOW-MED</td></tr>
            <tr className="border-b"><td className="py-1.5">Regulatory</td><td className="text-muted-foreground">Track record of compliance; listed entity</td><td className="text-right text-success">LOW</td></tr>
            <tr className="border-b"><td className="py-1.5">Concentration</td><td className="text-muted-foreground">95%+ gold loans but secured; diversifying via subsidiaries</td><td className="text-right text-warning">MEDIUM</td></tr>
          </tbody>
        </table>
      </div>

      <div className="p-3 rounded-md bg-warning/10 text-sm text-warning font-medium">
        OVERALL CREDIT RECOMMENDATION: APPROVED WITH CONDITIONS — AA- (Strong Investment Grade)
      </div>
    </div>
  ),
};

const MockReportContent: React.FC<MockReportContentProps> = ({ reportId }) => {
  const content = reports[reportId];
  if (!content) return null;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        {content}
      </div>
    </div>
  );
};

export default MockReportContent;
