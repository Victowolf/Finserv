import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import type { UploadedDocument } from '@/types';

interface MockDocumentContentProps {
  document: UploadedDocument;
}

const documentContents: Record<string, React.ReactNode> = {
  '1': (
    <div className="space-y-4">
      <div className="text-center space-y-2 pb-4 border-b">
        <p className="text-xs text-muted-foreground uppercase tracking-widest">Ministry of Corporate Affairs</p>
        <h2 className="text-lg font-bold">Certificate of Incorporation</h2>
        <p className="text-xs text-muted-foreground">Government of India</p>
      </div>
      <div className="space-y-3 text-sm">
        <div className="flex justify-between"><span className="text-muted-foreground">Company Name:</span><span className="font-medium">TechVentures Pvt Ltd</span></div>
        <div className="flex justify-between"><span className="text-muted-foreground">CIN:</span><span className="font-medium">U72200DL2020PTC365412</span></div>
        <div className="flex justify-between"><span className="text-muted-foreground">Date of Incorporation:</span><span className="font-medium">15th March 2020</span></div>
        <div className="flex justify-between"><span className="text-muted-foreground">Registered Office:</span><span className="font-medium">42, Nehru Place, New Delhi - 110019</span></div>
        <div className="flex justify-between"><span className="text-muted-foreground">Authorized Capital:</span><span className="font-medium">₹1,00,00,000</span></div>
        <div className="flex justify-between"><span className="text-muted-foreground">Paid-up Capital:</span><span className="font-medium">₹50,00,000</span></div>
      </div>
      <div className="mt-4 p-3 rounded-md bg-muted/50 text-xs text-muted-foreground">
        This is to certify that the company is incorporated under the Companies Act, 2013 and that the company is limited by shares.
      </div>
      <div className="text-right text-xs text-muted-foreground italic mt-4">
        Digitally signed by Registrar of Companies, NCT of Delhi
      </div>
    </div>
  ),
  '2': (
    <div className="space-y-4">
      <div className="text-center space-y-2 pb-4 border-b">
        <h2 className="text-lg font-bold">Memorandum of Association</h2>
        <p className="text-xs text-muted-foreground">TechVentures Pvt Ltd</p>
      </div>
      <div className="space-y-3 text-sm">
        <h4 className="font-semibold">I. Name Clause</h4>
        <p className="text-muted-foreground">The name of the Company is "TechVentures Private Limited".</p>
        <h4 className="font-semibold">II. Registered Office Clause</h4>
        <p className="text-muted-foreground">The registered office of the Company will be situated in the National Capital Territory of Delhi.</p>
        <h4 className="font-semibold">III. Object Clause</h4>
        <p className="text-muted-foreground">To carry on the business of software development, IT consulting, technology solutions, and related services.</p>
        <h4 className="font-semibold">IV. Liability Clause</h4>
        <p className="text-muted-foreground">The liability of the members is limited to the amount unpaid on the shares held by them.</p>
        <h4 className="font-semibold">V. Capital Clause</h4>
        <p className="text-muted-foreground">The authorized share capital of the Company is ₹1,00,00,000 divided into 10,00,000 equity shares of ₹10 each.</p>
      </div>
    </div>
  ),
  '3': (
    <div className="space-y-4">
      <div className="text-center space-y-2 pb-4 border-b">
        <h2 className="text-lg font-bold">Articles of Association</h2>
        <p className="text-xs text-muted-foreground">TechVentures Pvt Ltd</p>
      </div>
      <div className="space-y-3 text-sm">
        <h4 className="font-semibold">Article 1 — Interpretation</h4>
        <p className="text-muted-foreground">In these articles, unless the context otherwise requires, words defined in the Companies Act shall have the same meaning.</p>
        <h4 className="font-semibold">Article 2 — Share Capital & Rights</h4>
        <p className="text-muted-foreground">Subject to the provisions of the Act, the shares may be issued with differential rights as to dividend, voting, or otherwise.</p>
        <h4 className="font-semibold">Article 3 — Transfer of Shares</h4>
        <p className="text-muted-foreground">The instrument of transfer shall be in writing and all the provisions of Section 56 of the Act shall be duly complied with.</p>
        <h4 className="font-semibold">Article 4 — Board of Directors</h4>
        <p className="text-muted-foreground">The minimum number of directors shall be 2 and maximum shall be 15. The Board shall have the powers as prescribed under the Act.</p>
      </div>
    </div>
  ),
  '4': (
    <div className="space-y-4">
      <div className="text-center space-y-2 pb-4 border-b">
        <h2 className="text-lg font-bold">GSTR-1 Return — FY 2025</h2>
        <Badge variant="outline" className="text-success border-success">Filed</Badge>
      </div>
      <table className="w-full text-sm">
        <thead><tr className="border-b text-muted-foreground"><th className="text-left py-2">Month</th><th className="text-right py-2">Taxable Value</th><th className="text-right py-2">IGST</th><th className="text-right py-2">CGST</th><th className="text-right py-2">SGST</th></tr></thead>
        <tbody>
          {['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'].map((m, i) => (
            <tr key={m} className="border-b"><td className="py-2">{m} 2025</td><td className="text-right">₹{(18 + i * 2).toFixed(1)}L</td><td className="text-right">₹{(1.8 + i * 0.2).toFixed(1)}L</td><td className="text-right">₹{(0.9 + i * 0.1).toFixed(1)}L</td><td className="text-right">₹{(0.9 + i * 0.1).toFixed(1)}L</td></tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between text-sm font-semibold pt-2 border-t"><span>Total Taxable Value</span><span>₹1.26 Cr</span></div>
    </div>
  ),
  '5': (
    <div className="space-y-4">
      <div className="text-center space-y-2 pb-4 border-b">
        <p className="text-xs text-muted-foreground uppercase tracking-widest">Income Tax Department — Government of India</p>
        <h2 className="text-lg font-bold">Income Tax Return — AY 2024-25</h2>
      </div>
      <div className="space-y-3 text-sm">
        <div className="flex justify-between"><span className="text-muted-foreground">PAN:</span><span className="font-medium">AABCT1234A</span></div>
        <div className="flex justify-between"><span className="text-muted-foreground">Assessment Year:</span><span className="font-medium">2024-25</span></div>
        <div className="flex justify-between"><span className="text-muted-foreground">Form Type:</span><span className="font-medium">ITR-6</span></div>
        <Separator />
        <div className="flex justify-between"><span className="text-muted-foreground">Gross Total Income:</span><span className="font-medium">₹2,45,00,000</span></div>
        <div className="flex justify-between"><span className="text-muted-foreground">Deductions (Chapter VI-A):</span><span className="font-medium">₹15,00,000</span></div>
        <div className="flex justify-between"><span className="text-muted-foreground">Total Income:</span><span className="font-medium">₹2,30,00,000</span></div>
        <div className="flex justify-between font-semibold"><span>Tax Payable:</span><span>₹57,50,000</span></div>
        <div className="flex justify-between text-success"><span>Tax Paid:</span><span>₹57,50,000</span></div>
      </div>
      <Badge className="bg-success/10 text-success border-success">No Outstanding Dues</Badge>
    </div>
  ),
  '6': (
    <div className="space-y-4">
      <div className="text-center space-y-2 pb-4 border-b">
        <h2 className="text-lg font-bold">Bank Statement — State Bank of India</h2>
        <p className="text-xs text-muted-foreground">Account: XXXX XXXX 4521 | Period: Sep 2025 – Mar 2026</p>
      </div>
      <table className="w-full text-sm">
        <thead><tr className="border-b text-muted-foreground"><th className="text-left py-2">Date</th><th className="text-left py-2">Description</th><th className="text-right py-2">Debit</th><th className="text-right py-2">Credit</th><th className="text-right py-2">Balance</th></tr></thead>
        <tbody>
          <tr className="border-b"><td className="py-1.5">01/09/25</td><td>Opening Balance</td><td></td><td></td><td className="text-right">₹24,50,000</td></tr>
          <tr className="border-b"><td className="py-1.5">05/09/25</td><td>Client Payment — Infosys</td><td></td><td className="text-right text-success">₹8,50,000</td><td className="text-right">₹33,00,000</td></tr>
          <tr className="border-b"><td className="py-1.5">10/09/25</td><td>Salary Disbursement</td><td className="text-right text-destructive">₹12,00,000</td><td></td><td className="text-right">₹21,00,000</td></tr>
          <tr className="border-b"><td className="py-1.5">15/09/25</td><td>Vendor Payment — AWS</td><td className="text-right text-destructive">₹3,20,000</td><td></td><td className="text-right">₹17,80,000</td></tr>
          <tr className="border-b"><td className="py-1.5">20/09/25</td><td>Client Payment — TCS</td><td></td><td className="text-right text-success">₹12,00,000</td><td className="text-right">₹29,80,000</td></tr>
          <tr className="border-b"><td className="py-1.5">28/09/25</td><td>Office Rent</td><td className="text-right text-destructive">₹1,50,000</td><td></td><td className="text-right">₹28,30,000</td></tr>
        </tbody>
      </table>
      <div className="flex justify-between text-sm font-semibold pt-2 border-t"><span>Closing Balance (Mar 2026)</span><span>₹35,20,000</span></div>
    </div>
  ),
  '7': (
    <div className="space-y-4">
      <div className="text-center space-y-2 pb-4 border-b">
        <h2 className="text-lg font-bold">KYC Verified Report</h2>
        <Badge className="bg-success/10 text-success border-success">Verified</Badge>
      </div>
      <div className="space-y-3 text-sm">
        <div className="flex justify-between"><span className="text-muted-foreground">Company:</span><span className="font-medium">TechVentures Pvt Ltd</span></div>
        <div className="flex justify-between"><span className="text-muted-foreground">GSTIN:</span><span className="font-medium">07AABCT1234A1Z5 ✅</span></div>
        <div className="flex justify-between"><span className="text-muted-foreground">CIN:</span><span className="font-medium">U72200DL2020PTC365412 ✅</span></div>
        <div className="flex justify-between"><span className="text-muted-foreground">PAN:</span><span className="font-medium">AABCT1234A ✅</span></div>
        <div className="flex justify-between"><span className="text-muted-foreground">Director 1:</span><span className="font-medium">Amit Sharma — Aadhaar ✅ | PAN ✅</span></div>
        <div className="flex justify-between"><span className="text-muted-foreground">Director 2:</span><span className="font-medium">Priya Mehta — Aadhaar ✅ | PAN ✅</span></div>
        <Separator />
        <p className="text-muted-foreground">All KYC documents have been verified against government databases. No discrepancies found.</p>
      </div>
    </div>
  ),
  '8': (
    <div className="space-y-4">
      <div className="text-center space-y-2 pb-4 border-b">
        <h2 className="text-lg font-bold">Financial Analysis — OCR Extract</h2>
        <p className="text-xs text-muted-foreground">Auto-processed from uploaded documents</p>
      </div>
      <div className="space-y-3 text-sm">
        <h4 className="font-semibold">Revenue Summary (3 Years)</h4>
        <table className="w-full">
          <thead><tr className="border-b text-muted-foreground"><th className="text-left py-1">Year</th><th className="text-right py-1">Revenue</th><th className="text-right py-1">EBITDA</th><th className="text-right py-1">Net Profit</th></tr></thead>
          <tbody>
            <tr className="border-b"><td className="py-1">FY 2023</td><td className="text-right">₹3.2 Cr</td><td className="text-right">₹64L</td><td className="text-right">₹42L</td></tr>
            <tr className="border-b"><td className="py-1">FY 2024</td><td className="text-right">₹4.8 Cr</td><td className="text-right">₹96L</td><td className="text-right">₹68L</td></tr>
            <tr className="border-b"><td className="py-1">FY 2025</td><td className="text-right">₹6.5 Cr</td><td className="text-right">₹1.3 Cr</td><td className="text-right">₹92L</td></tr>
          </tbody>
        </table>
        <div className="p-3 rounded-md bg-muted/50 text-xs text-muted-foreground">
          Revenue CAGR: 42.5% | EBITDA Margin: 20% | Debt-to-Equity: 0.8
        </div>
      </div>
    </div>
  ),
};

const MockDocumentContent: React.FC<MockDocumentContentProps> = ({ document }) => {
  const content = documentContents[document.id];

  if (!content) {
    return (
      <div className="p-6">
        <div className="text-center space-y-2 pb-4 border-b">
          <h2 className="text-lg font-bold">{document.name}</h2>
          <p className="text-xs text-muted-foreground">Document Preview</p>
        </div>
        <div className="mt-6 p-8 rounded-lg bg-muted/30 text-center text-sm text-muted-foreground">
          Document content preview is not available for this file.
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        {content}
      </div>
    </div>
  );
};

export default MockDocumentContent;
