import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { FileText, Image, FileSpreadsheet } from 'lucide-react';
import { mockDocuments } from '@/data/mockData';
import type { UploadedDocument } from '@/types';

interface DocumentViewerPanelProps {
  onDocumentSelect: (doc: UploadedDocument) => void;
}

const getIcon = (type: string) => {
  if (type.startsWith('image/')) return <Image className="h-4 w-4 text-info" />;
  if (type.includes('spreadsheet') || type.includes('excel')) return <FileSpreadsheet className="h-4 w-4 text-success" />;
  return <FileText className="h-4 w-4 text-primary" />;
};

const DocumentViewerPanel: React.FC<DocumentViewerPanelProps> = ({ onDocumentSelect }) => {
  const raw = mockDocuments.filter(d => d.category === 'raw');
  const processed = mockDocuments.filter(d => d.category === 'processed');

  return (
    <div className="h-full flex flex-col p-3">
      <h3 className="font-display text-sm font-semibold mb-3">Documents</h3>
      <Tabs defaultValue="raw" className="flex-1 flex flex-col">
        <TabsList className="w-full grid grid-cols-2">
          <TabsTrigger value="raw" className="text-xs">Raw</TabsTrigger>
          <TabsTrigger value="processed" className="text-xs">Processed</TabsTrigger>
        </TabsList>
        <TabsContent value="raw" className="flex-1">
          <ScrollArea className="h-full">
            <div className="space-y-1">
              {raw.map((doc) => (
                <button key={doc.id} onClick={() => onDocumentSelect(doc)} className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-left hover:bg-muted transition-colors">
                  {getIcon(doc.type)}
                  <span className="text-xs truncate">{doc.name}</span>
                </button>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
        <TabsContent value="processed" className="flex-1">
          <ScrollArea className="h-full">
            <div className="space-y-1">
              {processed.map((doc) => (
                <button key={doc.id} onClick={() => onDocumentSelect(doc)} className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-left hover:bg-muted transition-colors">
                  {getIcon(doc.type)}
                  <span className="text-xs truncate">{doc.name}</span>
                </button>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DocumentViewerPanel;
