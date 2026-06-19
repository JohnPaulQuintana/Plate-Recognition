import { Camera, CameraOff, Loader2, ScanLine } from "lucide-react";

interface CameraControlsProps {
  cameraEnabled: boolean;
  isProcessing: boolean;
  onEnable: () => void;
  onCapture: () => void;
  onDisable: () => void;
}

export function CameraControls({
  cameraEnabled,
  isProcessing,
  onEnable,
  onCapture,
  onDisable,
}: CameraControlsProps) {
  if (!cameraEnabled) {
    return (
      <button
        onClick={onEnable}
        className="
          w-full
          flex
          items-center
          justify-center
          gap-3
          rounded-2xl
          bg-blue-600/20
    hover:bg-blue-700/20
    text-white
          font-medium
          py-4
          transition-all
          shadow-lg
        "
      >
        <Camera className="w-5 h-5" />
        Enable Camera
      </button>
    );
  }

  return (
    <div className="flex gap-3">
      <button
        onClick={onCapture}
        disabled={isProcessing}
        className="
          flex-1
          flex
          items-center
          justify-center
          gap-2
          rounded-2xl
          bg-blue-600/20
    hover:bg-blue-700/20
          disabled:bg-gray-700
          disabled:cursor-not-allowed
          text-white
          font-medium
          py-4
          transition-all
        "
      >
        {isProcessing ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <ScanLine className="w-5 h-5" />
            Scan Plate
          </>
        )}
      </button>

      <button
        onClick={onDisable}
        disabled={isProcessing}
        className="
          px-5
          rounded-2xl
          border
          border-gray-700
          bg-gray-900
          hover:bg-gray-800
          disabled:opacity-50
          transition-all
        "
      >
        <CameraOff className="w-5 h-5 text-gray-300" />
      </button>
    </div>
  );
}
