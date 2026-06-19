import { Header } from "../components/Header";
import { CameraControls } from "../components/CameraControls";
import { CameraView } from "../components/CameraView";
// import { DebugPanel } from "../components/DebugPanel";
import { PlateResult } from "../components/PlateResult";
import { ServiceHistory } from "../components/ServiceHistory";
import { StatsCard } from "../components/StatsCard";

import { useCamera } from "..//hooks/useCamera";
import { useOCR } from "../hooks/useOCR";
import { useServiceHistory } from "../hooks/useServiceHistory";

import { ScanLine } from "lucide-react";
import { VehicleInfoCard } from "../components/VehicleInfoCard";
import { useState } from "react";

export default function OCRPage() {
  const [pendingImage, setPendingImage] = useState<string | null>(null);

  const {
    videoRef,
    cameraEnabled,
    cameraError,
    enableCamera,
    disableCamera,
    capturePhoto,
    resetCamera,
  } = useCamera();

  const {
    plate,
    setPlate,
    image,
    debugInfo,
    isProcessing,
    processImage,
    resetOCR,
    setImage,
  } = useOCR();

  const {
    serviceHistory,
    totalVisits,
    totalSpent,
    totalServices,
    loadVehicleHistory,
    clearHistory,
  } = useServiceHistory();

  const handleCapture = async () => {
    const capturedFile = await capturePhoto();

    if (!capturedFile) return;

    const imageUrl = URL.createObjectURL(capturedFile);

    setPendingImage(imageUrl);

    const result = await processImage(capturedFile);

    disableCamera();

    if (result?.plate) {
      await loadVehicleHistory(result.plate);
    }

    setImage(imageUrl);
    setPendingImage(null);
  };

  const handleReset = () => {
    resetCamera();
    resetOCR();
    clearHistory();
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-PH", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
      <Header onReset={handleReset} />

      <main className="max-w-md mx-auto p-4 space-y-6">
        {!plate && !cameraEnabled && (
          <div className="text-center py-10">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-2xl bg-blue-600/20 border border-blue-600/20">
                <ScanLine className="w-10 h-10 text-blue-400" />
              </div>
            </div>

            <h2 className="text-xl font-bold">Vehicle Plate Scanner</h2>

            <p className="text-gray-400 mt-2">
              Scan a vehicle plate to view service history
            </p>
          </div>
        )}

        {cameraError && (
          <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-red-400">
            {cameraError}
          </div>
        )}

        {(!image || cameraEnabled) && (
          <>
            <div className="bg-gray-900/70 backdrop-blur border border-gray-800 rounded-3xl p-4 shadow-xl">
              <CameraView videoRef={videoRef} cameraEnabled={cameraEnabled} />
            </div>

            <CameraControls
              cameraEnabled={cameraEnabled}
              isProcessing={isProcessing}
              onEnable={enableCamera}
              onDisable={disableCamera}
              onCapture={handleCapture}
            />
          </>
        )}

        <PlateResult
            plate={plate}
            image={image}
            onPlateChange={setPlate}
            onSearch={async (plateNumber) => {
              await loadVehicleHistory(plateNumber);
            }}
          />
        

        {/* {!isProcessing && (plate || image) && (
          <PlateResult
            plate={plate}
            image={image}
            onPlateChange={setPlate}
            onSearch={async (plateNumber) => {
              await loadVehicleHistory(plateNumber);
            }}
          />
        )} */}

        {serviceHistory.length > 0 && (
          <>
            <VehicleInfoCard vehicle={serviceHistory[0].vehicleDetails} />

            <StatsCard
              totalVisits={totalVisits}
              totalSpent={totalSpent}
              totalServices={totalServices}
            />

            <ServiceHistory history={serviceHistory} formatDate={formatDate} />
          </>
        )}

        <details className="bg-gray-900 rounded-2xl border border-gray-800 p-4">
          <summary className="cursor-pointer text-gray-400">OCR Debug</summary>

          <pre className="mt-4 text-xs text-gray-500 whitespace-pre-wrap">
            {debugInfo}
          </pre>
        </details>
      </main>

      {isProcessing && pendingImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Modal */}
          <div className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-gray-800 bg-gray-900 shadow-2xl">
            <img
              src={pendingImage}
              alt="Processing"
              className="w-full h-56 object-cover"
            />

            <div className="absolute inset-0 overflow-hidden">
              <div
                className="
                  absolute
                  left-0
                  right-0
                  h-[2px]
                  bg-blue-400
                  shadow-[0_0_12px_rgba(96,165,250,0.8)]
                  animate-[scan_2s_linear_infinite]
                "
              />
            </div>

            <div className="p-5">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />

                <span className="font-medium text-blue-400">
                  Processing Plate
                </span>
              </div>

              <p className="mt-2 text-sm text-gray-400">
                Analyzing captured image and loading vehicle service records.
              </p>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-800">
                <div className="h-full w-1/2 animate-pulse rounded-full bg-blue-500" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
