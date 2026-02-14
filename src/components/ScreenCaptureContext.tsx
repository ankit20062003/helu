"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface ScreenCaptureContextType {
  capturedImage: string | null;
  setCapturedImage: (image: string | null) => void;
}

const ScreenCaptureContext = createContext<ScreenCaptureContextType>({
  capturedImage: null,
  setCapturedImage: () => {},
});

export function ScreenCaptureProvider({ children }: { children: ReactNode }) {
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  return (
    <ScreenCaptureContext.Provider value={{ capturedImage, setCapturedImage }}>
      {children}
    </ScreenCaptureContext.Provider>
  );
}

export function useScreenCapture() {
  return useContext(ScreenCaptureContext);
}
