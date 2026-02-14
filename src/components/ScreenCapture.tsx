"use client";

import { useRef, useState, useCallback } from "react";
import { useScreenCapture } from "./ScreenCaptureContext";

export default function ScreenCapture() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { setCapturedImage } = useScreenCapture();

  const captureScreen = useCallback(async () => {
    try {
      setError(null);
      setIsCapturing(true);

      const mediaStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: false,
      });

      const video = document.createElement("video");
      video.srcObject = mediaStream;
      video.autoplay = true;
      video.playsInline = true;

      await new Promise<void>((resolve) => {
        video.onloadeddata = () => resolve();
      });

      await new Promise((r) => setTimeout(r, 300));

      const canvas = canvasRef.current;
      if (!canvas) return;

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.drawImage(video, 0, 0);
      const dataUrl = canvas.toDataURL("image/jpeg", 0.9);
      setPhoto(dataUrl);
      setCapturedImage(dataUrl);

      mediaStream.getTracks().forEach((track) => track.stop());
      setIsCapturing(false);
    } catch {
      setError("Screen capture was cancelled or not supported.");
      setIsCapturing(false);
    }
  }, [setCapturedImage]);

  const retake = useCallback(() => {
    setPhoto(null);
    setCapturedImage(null);
  }, [setCapturedImage]);

  if (photo) {
    return (
      <div className="relative w-full rounded-xl overflow-hidden">
        <img
          src={photo}
          alt="Our screen together"
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

  return (
    <div className="w-full">
      <canvas ref={canvasRef} className="hidden" />
      {error && (
        <p className="text-red-400 text-sm mb-3 text-center">{error}</p>
      )}
      <button
        onClick={captureScreen}
        disabled={isCapturing}
        className="w-full py-4 rounded-xl bg-pink-100 border-2 border-dashed border-pink-300 text-pink-500 font-medium hover:bg-pink-200 hover:border-pink-400 transition-all flex flex-col items-center gap-2 disabled:opacity-50"
      >
        <span className="text-3xl">🖥️</span>
        <span>{isCapturing ? "Capturing..." : "Capture this moment!"}</span>
        <span className="text-xs text-pink-400">Screenshot our call right now</span>
      </button>
    </div>
  );
}
