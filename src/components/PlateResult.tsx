import { Search } from "lucide-react";

interface PlateResultProps {
  plate: string;
  image: string | null;
  onPlateChange: (value: string) => void;
  onSearch: (plate: string) => void;
}

export function PlateResult({
  plate,
  image,
  onPlateChange,
  onSearch,
}: PlateResultProps) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden shadow-xl">
      {image && (
        <img src={image} alt="Captured" className="w-full h-56 object-cover" />
      )}

      <div className="p-5 space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            {/* <Car className="w-5 h-5 text-cyan-400" /> */}

            <p className="text-xs uppercase tracking-wider text-gray-500">
              Plate Number
            </p>
          </div>

          <input
            value={plate}
            onChange={(e) => onPlateChange(e.target.value.toUpperCase())}
            className="
              w-full
              text-center
              text-2xl
              font-black
              tracking-widest
              bg-gray-950
              border
              bg-blue-600/20
              rounded-2xl
              p-2
              outline-none
              focus:bg-blue-700/20
            "
          />
        </div>

        <button
          onClick={() => onSearch(plate)}
          disabled={!plate}
          className="
    w-full
    bg-blue-600/20
    hover:bg-blue-700/20
    text-white
    font-semibold
    rounded-2xl
    py-3
    transition
    flex
    items-center
    justify-center
    gap-2
  "
        >
          <Search className="w-4 h-4" />
          Search Vehicle History
        </button>
      </div>
    </div>
  );
}
