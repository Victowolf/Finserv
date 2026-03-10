import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus, Trash2, User } from 'lucide-react';
import DocumentUpload from '@/components/shared/DocumentUpload';
import type { Executive } from '@/types';

const Form7ExecutiveBoardDetails: React.FC = () => {
  const [executives, setExecutives] = useState<Executive[]>([
    { id: '1', name: '', position: '' },
  ]);

  const addExec = () => {
    setExecutives(prev => [...prev, { id: String(Date.now()), name: '', position: '' }]);
  };

  const removeExec = (id: string) => {
    setExecutives(prev => prev.filter(e => e.id !== id));
  };

  return (
    <div className="space-y-6">
      <h2 className="font-display text-xl font-semibold">Executive & Board Details</h2>
      <p className="text-sm text-muted-foreground">Add details of key executives and board members</p>

      <div className="flex justify-end">
        <Button variant="outline" size="sm" onClick={addExec}><Plus className="mr-1 h-4 w-4" /> Add Executive</Button>
      </div>

      <div className="space-y-4">
        {executives.map((exec, index) => (
          <Card key={exec.id}>
            <CardContent className="pt-4 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Executive {index + 1}</span>
                </div>
                {executives.length > 1 && (
                  <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => removeExec(exec.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2"><Label>Full Name</Label><Input placeholder="Full name" /></div>
                <div className="space-y-2"><Label>Position in Company</Label><Input placeholder="e.g. Director, CEO" /></div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <DocumentUpload label="Aadhaar Upload" />
                <DocumentUpload label="PAN Upload" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Form7ExecutiveBoardDetails;
