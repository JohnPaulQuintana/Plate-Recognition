export interface OCRResult {
  plate: string;
  debug: string;
}

export interface OCRState {
  plate: string;
  image: string | null;
  debugInfo: string;
  isProcessing: boolean;
}