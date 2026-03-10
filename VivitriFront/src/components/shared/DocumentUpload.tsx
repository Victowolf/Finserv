import React, { useCallback, useState } from 'react';
import { Upload, X, FileText, Image, FileSpreadsheet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface DocumentUploadProps {
  label: string;
  description?: string;
  accept?: string;
  multiple?: boolean;
  onFilesChange?: (files: File[]) => void;
}

const getFileIcon = (type: string) => {
  if (type.startsWith('image/')) return <Image className="h-4 w-4 text-info" />;
  if (type.includes('spreadsheet') || type.includes('excel') || type.includes('csv'))
    return <FileSpreadsheet className="h-4 w-4 text-success" />;
  return <FileText className="h-4 w-4 text-primary" />;
};

const formatSize = (bytes: number) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1048576).toFixed(1)} MB`;
};

const DocumentUpload: React.FC<DocumentUploadProps> = ({
  label,
  description,
  accept = '.pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png',
  multiple = false,
  onFilesChange,
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleFiles = useCallback((newFiles: FileList | null) => {
    if (!newFiles) return;
    const arr = Array.from(newFiles);
    setFiles((prev) => {
      const updated = multiple ? [...prev, ...arr] : arr;
      onFilesChange?.(updated);
      return updated;
    });
  }, [multiple, onFilesChange]);

  const removeFile = (index: number) => {
    setFiles((prev) => {
      const updated = prev.filter((_, i) => i !== index);
      onFilesChange?.(updated);
      return updated;
    });
  };

  return (
    <div className="space-y-2">
      <p className="text-sm font-medium">{label}</p>
      {description && <p className="text-xs text-muted-foreground">{description}</p>}

      <div
        className={cn(
          'relative flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-6 transition-colors cursor-pointer',
          isDragging ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
        )}
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => { e.preventDefault(); setIsDragging(false); handleFiles(e.dataTransfer.files); }}
        onClick={() => {
          const input = document.createElement('input');
          input.type = 'file';
          input.accept = accept;
          input.multiple = multiple;
          input.onchange = (e) => handleFiles((e.target as HTMLInputElement).files);
          input.click();
        }}
      >
        <Upload className="mb-2 h-8 w-8 text-muted-foreground" />
        <p className="text-sm text-muted-foreground">
          Drag & drop or <span className="font-medium text-primary">browse</span>
        </p>
        <p className="text-xs text-muted-foreground mt-1">PDF, DOC, Excel, Images</p>
      </div>

      {files.length > 0 && (
        <div className="space-y-2 mt-3">
          {files.map((file, index) => (
            <div key={index} className="flex items-center gap-3 rounded-md border bg-card p-2.5">
              {getFileIcon(file.type)}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{file.name}</p>
                <p className="text-xs text-muted-foreground">{formatSize(file.size)}</p>
              </div>
              <Button variant="ghost" size="icon" className="h-7 w-7" onClick={(e) => { e.stopPropagation(); removeFile(index); }}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DocumentUpload;
