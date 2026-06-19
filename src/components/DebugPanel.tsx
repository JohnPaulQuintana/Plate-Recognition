interface DebugPanelProps {
  debugInfo: string;
}

export function DebugPanel({
  debugInfo,
}: DebugPanelProps) {
  if (!debugInfo) return null;

  return (
    <div className="rounded-lg bg-black p-3 text-xs">
      {debugInfo}
    </div>
  );
}