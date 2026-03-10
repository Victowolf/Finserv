import React, { useRef, useState, useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Camera, RefreshCw, CheckCircle } from 'lucide-react';

interface FacialSignatureCaptureProps {
  onCaptured: () => void;
}

const FacialSignatureCapture: React.FC<FacialSignatureCaptureProps> = ({ onCaptured }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const startCamera = useCallback(async () => {
    try {
      setError(null);
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user', width: 320, height: 240 } });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch {
      setError('Camera access denied. Please allow camera permissions.');
    }
  }, []);

  const stopCamera = useCallback(() => {
    stream?.getTracks().forEach((t) => t.stop());
    setStream(null);
  }, [stream]);

  const capture = () => {
    if (!videoRef.current || !canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    canvasRef.current.width = 320;
    canvasRef.current.height = 240;
    ctx?.drawImage(videoRef.current, 0, 0, 320, 240);
    setPhoto(canvasRef.current.toDataURL('image/jpeg'));
    stopCamera();
  };

  const retake = () => {
    setPhoto(null);
    startCamera();
  };

  const confirm = () => {
    onCaptured();
  };

  useEffect(() => {
    return () => { stream?.getTracks().forEach((t) => t.stop()); };
  }, [stream]);

  return (
    <div className="space-y-4">
      <p className="text-sm font-medium">Facial Signature Capture</p>
      <p className="text-xs text-muted-foreground">Take a photo for identity verification</p>

      {error && <p className="text-sm text-destructive">{error}</p>}

      {!photo && !stream && (
        <Button onClick={startCamera} variant="outline">
          <Camera className="mr-2 h-4 w-4" /> Start Camera
        </Button>
      )}

      {stream && !photo && (
        <div className="space-y-3">
          <div className="overflow-hidden rounded-lg border bg-muted">
            <video ref={videoRef} autoPlay playsInline muted className="w-full max-w-xs" />
          </div>
          <Button onClick={capture}><Camera className="mr-2 h-4 w-4" /> Capture Photo</Button>
        </div>
      )}

      {photo && (
        <div className="space-y-3">
          <div className="overflow-hidden rounded-lg border">
            <img src={photo} alt="Captured" className="w-full max-w-xs" />
          </div>
          <div className="flex gap-2">
            <Button onClick={retake} variant="outline"><RefreshCw className="mr-2 h-4 w-4" /> Retake</Button>
            <Button onClick={confirm}><CheckCircle className="mr-2 h-4 w-4" /> Confirm</Button>
          </div>
        </div>
      )}

      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
};

export default FacialSignatureCapture;
