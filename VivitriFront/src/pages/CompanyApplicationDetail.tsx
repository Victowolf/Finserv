import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, FileText, MessageSquare, AlertTriangle, Upload } from 'lucide-react';
import { mockApplications, mockDocuments } from '@/data/mockData';
import ProgressTracker from '@/components/shared/ProgressTracker';
import DiscussionPanel from '@/components/shared/DiscussionPanel';
import DocumentUpload from '@/components/shared/DocumentUpload';

const statusColor = (status: string) => {
  switch (status) {
    case 'approved': return 'bg-success/10 text-success border-success/20';
    case 'rejected': return 'bg-destructive/10 text-destructive border-destructive/20';
    case 'under_review': return 'bg-warning/10 text-warning border-warning/20';
    default: return 'bg-info/10 text-info border-info/20';
  }
};

const CompanyApplicationDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const app = mockApplications.find((a) => a.id === id) || mockApplications[0];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate('/company/applications')}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="font-display text-2xl font-bold">{app.id}</h1>
          <p className="text-muted-foreground">{app.bankName} · {app.loanType}</p>
        </div>
        <Badge variant="outline" className={statusColor(app.status)}>
          {app.status.replace('_', ' ')}
        </Badge>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="font-display text-base">Application Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <ProgressTracker stages={app.stages} orientation="vertical" />
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-display text-base">Application Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><span className="text-muted-foreground">Loan Amount</span><p className="font-medium">₹{(app.loanAmount / 100000).toFixed(1)} Lakhs</p></div>
                <div><span className="text-muted-foreground">Loan Type</span><p className="font-medium">{app.loanType}</p></div>
                <div><span className="text-muted-foreground">Purpose</span><p className="font-medium">{app.loanPurpose}</p></div>
                <div><span className="text-muted-foreground">Bank Branch</span><p className="font-medium">{app.branchName}</p></div>
                <div><span className="text-muted-foreground">Created</span><p className="font-medium">{app.createdAt}</p></div>
                <div><span className="text-muted-foreground">Last Updated</span><p className="font-medium">{app.updatedAt}</p></div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="documents">
            <TabsList>
              <TabsTrigger value="documents"><FileText className="mr-1 h-4 w-4" /> Documents</TabsTrigger>
              <TabsTrigger value="discussion"><MessageSquare className="mr-1 h-4 w-4" /> Discussion</TabsTrigger>
              <TabsTrigger value="challenge"><AlertTriangle className="mr-1 h-4 w-4" /> Challenge Report</TabsTrigger>
              <TabsTrigger value="upload"><Upload className="mr-1 h-4 w-4" /> Upload More</TabsTrigger>
            </TabsList>

            <TabsContent value="documents">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    {mockDocuments.filter(d => d.category === 'raw').map((doc) => (
                      <div key={doc.id} className="flex items-center justify-between rounded-md border p-3">
                        <div className="flex items-center gap-3">
                          <FileText className="h-4 w-4 text-primary" />
                          <div>
                            <p className="text-sm font-medium">{doc.name}</p>
                            <p className="text-xs text-muted-foreground">{(doc.size / 1024 / 1024).toFixed(1)} MB · {doc.uploadedAt}</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">View</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="discussion" className="h-[400px]">
              <DiscussionPanel userRole="company" />
            </TabsContent>

            <TabsContent value="challenge">
              <Card>
                <CardContent className="py-10 text-center">
                  <AlertTriangle className="mx-auto h-12 w-12 text-muted-foreground/30 mb-4" />
                  <p className="text-muted-foreground">No reports to challenge at this time.</p>
                  <Button variant="outline" className="mt-4">Request Report Review</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="upload">
              <Card>
                <CardContent className="pt-6">
                  <DocumentUpload label="Upload Additional Documents" description="Upload any requested documents" multiple />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default CompanyApplicationDetail;
