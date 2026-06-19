import {
  Car,
  Gauge,
  Palette,
  Cog,
  User,
} from "lucide-react";

import { type VehicleDetails } from "../types/service-history";

interface VehicleInfoCardProps {
  vehicle: VehicleDetails;
}

export function VehicleInfoCard({
  vehicle,
}: VehicleInfoCardProps) {
  return (
    <div className="rounded-3xl border border-gray-800 bg-gray-900 overflow-hidden">
      <div className="p-5">
        <div className="flex items-center justify-between mb-5">
          <div>
            <div className="text-sm text-gray-500">
              Vehicle Information
            </div>

            <h2 className="text-xl font-semibold mt-1">
              {vehicle.year} {vehicle.make}
            </h2>

            <p className="text-gray-400">
              {vehicle.model}
            </p>
          </div>

          <div className="px-3 py-2 rounded-xl bg-blue-600/10 border border-blue-600/20">
            <div className="text-xs text-gray-500">
              Plate Number
            </div>

            <div className="font-mono font-semibold text-white tracking-wider">
              {vehicle.plateNumber}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">

          <div className="rounded-2xl bg-gray-950/60 border border-gray-800 p-3">
            <div className="flex items-center gap-2 text-gray-500 text-xs mb-2">
              <Palette className="w-3 h-3" />
              Color
            </div>

            <div>{vehicle.color}</div>
          </div>

          <div className="rounded-2xl bg-gray-950/60 border border-gray-800 p-3">
            <div className="flex items-center gap-2 text-gray-500 text-xs mb-2">
              <Cog className="w-3 h-3" />
              Transmission
            </div>

            <div>{vehicle.transmission}</div>
          </div>

          <div className="rounded-2xl bg-gray-950/60 border border-gray-800 p-3">
            <div className="flex items-center gap-2 text-gray-500 text-xs mb-2">
              <Car className="w-3 h-3" />
              Engine
            </div>

            <div>{vehicle.engine}</div>
          </div>

          <div className="rounded-2xl bg-gray-950/60 border border-gray-800 p-3">
            <div className="flex items-center gap-2 text-gray-500 text-xs mb-2">
              <Gauge className="w-3 h-3" />
              Mileage
            </div>

            <div>
              {vehicle.mileage.toLocaleString()} km
            </div>
          </div>

        </div>

        <div className="mt-4 rounded-2xl bg-gray-950/60 border border-gray-800 p-3">
          <div className="flex items-center gap-2 text-gray-500 text-xs mb-2">
            <User className="w-3 h-3" />
            Registered Owner
          </div>

          <div>{vehicle.owner}</div>
        </div>
      </div>
    </div>
  );
}