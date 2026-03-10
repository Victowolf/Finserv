import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText } from 'lucide-react';
import { mockApplications } from '@/data/mockData';

const statusColor = (status: string) => {
  switch (status) {
    case 'approved': return 'bg-success/10 text-success border-success/20';
    case 'rejected': return 'bg-destructive/10 text-destructive border-destructive/20';
    case 'under_review': return 'bg-warning/10 text-warning border-warning/20';
    case 'submitted': return 'bg-info/10 text-info border-info/20';
    default: return 'bg-muted text-muted-foreground';
  }
};

const CompanyApplications: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">My Applications</h1>
        <p className="text-muted-foreground">Track all your loan applications</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockApplications.map((app) => (
          <Card key={app.id} className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => navigate(`/company/applications/${app.id}`)}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="font-display text-base">{app.id}</CardTitle>
                <Badge variant="outline" className={statusColor(app.status)}>
                  {app.status.replace('_', ' ')}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Bank</span>
                <span className="font-medium">{app.bankName}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Amount</span>
                <span className="font-medium">₹{(app.loanAmount / 100000).toFixed(1)}L</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Type</span>
                <span className="font-medium">{app.loanType}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Updated</span>
                <span className="font-medium">{app.updatedAt}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CompanyApplications;
