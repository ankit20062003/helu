"use client";

import { useRef, useState, useCallback } from "react";

export default function CameraCapture() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const openCamera = useCallback(async () => {
    try {
      setError(null);
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user", width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: false,
      });
      setStream(mediaStream);
      setIsCameraOpen(true);

      // Wait for next frame so videoRef is rendered
      requestAnimationFrame(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      });
    } catch {
      setError("Couldn't access camera. Please allow camera permission and try again.");
    }
  }, []);

  const takePhoto = useCallback(() => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Mirror the image (front camera is mirrored)
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video, 0, 0);

    const dataUrl = canvas.toDataURL("image/jpeg", 0.9);
    setPhoto(dataUrl);

    // Stop the camera
    stream?.getTracks().forEach((track) => track.stop());
    setStream(null);
    setIsCameraOpen(false);
  }, [stream]);

  const retake = useCallback(() => {
    setPhoto(null);
    openCamera();
  }, [openCamera]);

  // Show captured photo
  if (photo) {
    return (
      <div className="relative w-full rounded-xl overflow-hidden">
        <img
          src={photo}
          alt="Our photo together"
          className="w-full h-auto rounded-xl"
        />
        <button
          onClick={retake}
          className="absolute bottom-3 right-3 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm text-pink-500 text-sm font-medium hover:bg-white transition-colors"
        >
          Retake
        </button>
      </div>
    );
  }

  // Show camera view
  if (isCameraOpen) {
    return (
      <div className="relative w-full rounded-xl overflow-hidden bg-black">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full h-auto rounded-xl"
          style={{ transform: "scaleX(-1)" }}
        />
        <canvas ref={canvasRef} className="hidden" />
        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          <button
            onClick={takePhoto}
            className="w-16 h-16 rounded-full bg-white border-4 border-pink-400 shadow-lg hover:scale-110 active:scale-95 transition-transform flex items-center justify-center"
          >
            <div className="w-12 h-12 rounded-full bg-pink-400" />
          </button>
        </div>
      </div>
    );
  }

  // Show prompt to open camera
  return (
    <div className="w-full">
      {error && (
        <p className="text-red-400 text-sm mb-3 text-center">{error}</p>
      )}
      <button
        onClick={openCamera}
        className="w-full py-4 rounded-xl bg-pink-100 border-2 border-dashed border-pink-300 text-pink-500 font-medium hover:bg-pink-200 hover:border-pink-400 transition-all flex flex-col items-center gap-2"
      >
        <span className="text-3xl">📸</span>
        <span>Take a photo right now!</span>
        <span className="text-xs text-pink-400">Capture this moment together</span>
      </button>
    </div>
  );
}
