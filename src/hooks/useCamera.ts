// hooks/useCamera.ts

import { useRef, useState } from "react";

export function useCamera() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const [cameraEnabled, setCameraEnabled] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);

  const enableCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "environment",
        },
      });

      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      setCameraEnabled(true);
      setCameraError(null);
    } catch (err) {
      setCameraError("Unable to access camera");
    }
  };

  const disableCamera = () => {
    streamRef.current?.getTracks().forEach((track) => track.stop());

    streamRef.current = null;

    setCameraEnabled(false);
  };

  const capturePhoto = async (): Promise<File | null> => {
    if (!videoRef.current) return null;

    const video = videoRef.current;

    const canvas = document.createElement("canvas");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");

    if (!ctx) return null;

    ctx.drawImage(
      video,
      0,
      0,
      canvas.width,
      canvas.height
    );

    return new Promise((resolve) => {
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            resolve(null);
            return;
          }

          resolve(
            new File(
              [blob],
              `capture-${Date.now()}.jpg`,
              {
                type: "image/jpeg",
              }
            )
          );
        },
        "image/jpeg",
        0.95
      );
    });
  };

  const resetCamera = () => {
    disableCamera();
    setCameraError(null);
  };

  return {
    videoRef,
    cameraEnabled,
    cameraError,
    enableCamera,
    disableCamera,
    capturePhoto,
    resetCamera,
  };
}