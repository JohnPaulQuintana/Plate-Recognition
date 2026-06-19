import {
  History,
  Wallet,
  Wrench,
} from "lucide-react";

interface StatsCardProps {
  totalVisits: number;
  totalSpent: number;
  totalServices: number;
}

export function StatsCard({
  totalVisits,
  totalSpent,
  totalServices,
}: StatsCardProps) {
  return (
    <div className="rounded-3xl border border-gray-800 bg-gray-900/80 backdrop-blur overflow-hidden">
      <div className="grid grid-cols-3 divide-x divide-gray-800">

        <div className="p-4 text-center">
          <History className="w-5 h-5 text-blue-400 mx-auto mb-2" />

          <div className="text-xl font-bold">
            {totalVisits}
          </div>

          <div className="text-[11px] text-gray-500">
            Visits
          </div>
        </div>

        <div className="p-4 text-center">
          <Wallet className="w-5 h-5 text-green-400 mx-auto mb-2" />

          <div className="text-xl font-bold">
            ₱{totalSpent.toLocaleString()}
          </div>

          <div className="text-[11px] text-gray-500">
            Spent
          </div>
        </div>

        <div className="p-4 text-center">
          <Wrench className="w-5 h-5 text-orange-400 mx-auto mb-2" />

          <div className="text-xl font-bold">
            {totalServices}
          </div>

          <div className="text-[11px] text-gray-500">
            Services
          </div>
        </div>

      </div>
    </div>
  );
}