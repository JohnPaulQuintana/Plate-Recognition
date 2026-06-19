import { useState } from "react";
import { recognizePlate } from "../services/ocr.service";

export function useOCR() {
  const [plate, setPlate] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [debugInfo, setDebugInfo] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const processImage = async (file: File) => {
    setIsProcessing(true);

    try {
      const result = await recognizePlate(file);

      setPlate(result.plate);
      setDebugInfo(result.debug);

      return result;
    } finally {
      setIsProcessing(false);
    }
  };

  const resetOCR = () => {
    setPlate("");
    setImage(null);
    setDebugInfo("");
    setIsProcessing(false);
  };

  return {
    plate,
    setPlate,
    image,
    debugInfo,
    isProcessing,
    setImage,
    processImage,
    resetOCR,
  };
}