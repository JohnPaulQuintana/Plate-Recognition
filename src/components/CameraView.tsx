interface CameraViewProps {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  cameraEnabled: boolean;
}

export function CameraView({
  videoRef,
  cameraEnabled,
}: CameraViewProps) {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-black aspect-video">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className={`w-full h-full object-cover ${
          cameraEnabled ? "" : "hidden"
        }`}
      />

      {!cameraEnabled && (
        <div className="absolute inset-0 flex items-center justify-center">
          Camera Disabled
        </div>
      )}
    </div>
  );
}