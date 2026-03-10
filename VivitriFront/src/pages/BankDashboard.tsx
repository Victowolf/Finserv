import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, Building2, TrendingUp, Clock, ArrowRight } from 'lucide-react';
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

const BankDashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">Bank Dashboard</h1>
        <p className="text-muted-foreground">Manage incoming loan applications</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader className="pb-2">
            <CardDescription>Total Applications</CardDescription>
            <CardTitle className="text-3xl font-display">{mockApplications.length}</CardTitle>
          </CardHeader>
        </Card>
        <Card className="border-warning/20 bg-warning/5">
          <CardHeader className="pb-2">
            <CardDescription>Pending Review</CardDescription>
            <CardTitle className="text-3xl font-display">{mockApplications.filter(a => a.status === 'under_review' || a.status === 'submitted').length}</CardTitle>
          </CardHeader>
        </Card>
        <Card className="border-success/20 bg-success/5">
          <CardHeader className="pb-2">
            <CardDescription>Approved</CardDescription>
            <CardTitle className="text-3xl font-display">{mockApplications.filter(a => a.status === 'approved').length}</CardTitle>
          </CardHeader>
        </Card>
        <Card className="border-destructive/20 bg-destructive/5">
          <CardHeader className="pb-2">
            <CardDescription>Rejected</CardDescription>
            <CardTitle className="text-3xl font-display">{mockApplications.filter(a => a.status === 'rejected').length}</CardTitle>
          </CardHeader>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-display text-lg">Applications Queue</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockApplications.map((app) => (
              <div key={app.id} className="flex items-center justify-between rounded-lg border p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{app.companyName}</p>
                    <p className="text-sm text-muted-foreground">{app.id} · ₹{(app.loanAmount / 100000).toFixed(0)}L · {app.loanType}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className={statusColor(app.status)}>
                    {app.status.replace('_', ' ')}
                  </Badge>
                  <Button variant="outline" size="sm" onClick={() => navigate(`/bank/workspace/${app.id}`)}>
                    Open <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BankDashboard;
