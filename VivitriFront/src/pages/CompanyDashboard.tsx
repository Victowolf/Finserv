import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle, FileText, TrendingUp, Clock } from 'lucide-react';
import { mockApplications } from '@/data/mockData';
import { Badge } from '@/components/ui/badge';

const statusColor = (status: string) => {
  switch (status) {
    case 'approved': return 'bg-success/10 text-success border-success/20';
    case 'rejected': return 'bg-destructive/10 text-destructive border-destructive/20';
    case 'under_review': return 'bg-warning/10 text-warning border-warning/20';
    case 'submitted': return 'bg-info/10 text-info border-info/20';
    default: return 'bg-muted text-muted-foreground';
  }
};

const CompanyDashboard: React.FC = () => {
  const navigate = useNavigate();
  const recentApps = mockApplications.slice(0, 3);

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">Company Dashboard</h1>
        <p className="text-muted-foreground">Manage your loan applications</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader className="pb-2">
            <CardDescription>Total Applications</CardDescription>
            <CardTitle className="text-3xl font-display">{mockApplications.length}</CardTitle>
          </CardHeader>
        </Card>
        <Card className="border-success/20 bg-success/5">
          <CardHeader className="pb-2">
            <CardDescription>Approved</CardDescription>
            <CardTitle className="text-3xl font-display">{mockApplications.filter(a => a.status === 'approved').length}</CardTitle>
          </CardHeader>
        </Card>
        <Card className="border-warning/20 bg-warning/5">
          <CardHeader className="pb-2">
            <CardDescription>Under Review</CardDescription>
            <CardTitle className="text-3xl font-display">{mockApplications.filter(a => a.status === 'under_review').length}</CardTitle>
          </CardHeader>
        </Card>
        <Card className="border-info/20 bg-info/5">
          <CardHeader className="pb-2">
            <CardDescription>Submitted</CardDescription>
            <CardTitle className="text-3xl font-display">{mockApplications.filter(a => a.status === 'submitted').length}</CardTitle>
          </CardHeader>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => navigate('/company/apply')}>
          <CardContent className="flex flex-col items-center justify-center py-10">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-4">
              <PlusCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-lg">Create New Application</h3>
            <p className="text-sm text-muted-foreground mt-1">Start a new loan application</p>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => navigate('/company/applications')}>
          <CardContent className="flex flex-col items-center justify-center py-10">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-info/10 mb-4">
              <FileText className="h-8 w-8 text-info" />
            </div>
            <h3 className="font-display font-semibold text-lg">View Applications</h3>
            <p className="text-sm text-muted-foreground mt-1">{mockApplications.length} applications</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-display text-lg">Recent Applications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentApps.map((app) => (
              <div key={app.id} className="flex items-center justify-between rounded-lg border p-3 hover:bg-muted/50 cursor-pointer" onClick={() => navigate(`/company/applications/${app.id}`)}>
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">{app.id}</p>
                    <p className="text-xs text-muted-foreground">{app.bankName} · ₹{(app.loanAmount / 100000).toFixed(0)}L</p>
                  </div>
                </div>
                <Badge variant="outline" className={statusColor(app.status)}>
                  {app.status.replace('_', ' ')}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyDashboard;
