import React from 'react';
import { FileText, Image, FileSpreadsheet, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { UploadedDocument } from '@/types';

interface FilePreviewPanelProps {
  document?: UploadedDocument | null;
}

const formatSize = (bytes: number) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1048576).toFixed(1)} MB`;
};

const FilePreviewPanel: React.FC<FilePreviewPanelProps> = ({ document }) => {
  if (!document) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-muted-foreground p-8">
        <Eye className="h-12 w-12 mb-4 opacity-30" />
        <p className="text-sm">Select a document to preview</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 space-y-4">
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10">
        {document.type.startsWith('image/') ? (
          <Image className="h-10 w-10 text-primary" />
        ) : document.type.includes('spreadsheet') || document.type.includes('excel') ? (
          <FileSpreadsheet className="h-10 w-10 text-success" />
        ) : (
          <FileText className="h-10 w-10 text-primary" />
        )}
      </div>
      <div className="text-center">
        <p className="font-medium">{document.name}</p>
        <p className="text-sm text-muted-foreground">{formatSize(document.size)}</p>
        <p className="text-xs text-muted-foreground mt-1">Uploaded: {document.uploadedAt}</p>
      </div>
      <Button variant="outline" size="sm">
        <Eye className="mr-2 h-4 w-4" /> Open Full Preview
      </Button>
    </div>
  );
};

export default FilePreviewPanel;
