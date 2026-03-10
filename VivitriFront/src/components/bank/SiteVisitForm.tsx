import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import DocumentUpload from '@/components/shared/DocumentUpload';
import { Calendar, User, Phone, FileText } from 'lucide-react';

const SiteVisitForm: React.FC = () => (
  <div className="space-y-4">
    <h3 className="font-display text-lg font-semibold">Site Visit</h3>
    <div className="grid gap-4 md:grid-cols-2">
      <div className="space-y-2"><Label>Officer Name</Label><Input placeholder="Officer's full name" /></div>
      <div className="space-y-2"><Label>Phone Number</Label><Input placeholder="+91 XXXXX XXXXX" /></div>
      <div className="space-y-2"><Label>Visit Date</Label><Input type="date" /></div>
      <div className="space-y-2">
        <Label>Status</Label>
        <Select>
          <SelectTrigger><SelectValue placeholder="Select status" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="scheduled">Scheduled</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
    <DocumentUpload label="Upload Site Visit Report" />
    <Button>Save Site Visit</Button>
  </div>
);

export default SiteVisitForm;
