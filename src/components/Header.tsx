import { Camera, RefreshCw } from "lucide-react";

interface HeaderProps {
  onReset: () => void;
}

export function Header({
  onReset,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-lg border-b border-gray-800 px-4 py-3">
      <div className="flex items-center justify-between max-w-md mx-auto">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-600/20 rounded-lg">
            <Camera className="w-6 h-6 text-blue-400" />
          </div>

          <div>
            <h1 className="text-xl font-bold">
              Plate Scanner
            </h1>

            <p className="text-xs text-gray-400">
              Vehicle Service History
            </p>
          </div>
        </div>

        <button
          onClick={onReset}
          className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700"
        >
          <RefreshCw className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}