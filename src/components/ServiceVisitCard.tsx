import { Calendar, Receipt, Wrench, CheckCircle2 } from "lucide-react";

import { type ServiceVisit } from "../types/service-history";

interface ServiceVisitCardProps {
  visit: ServiceVisit;
  formatDate: (date: string) => string;
}

export function ServiceVisitCard({ visit, formatDate }: ServiceVisitCardProps) {
  return (
    <div className="rounded-3xl border border-gray-800 bg-gray-900 overflow-hidden">
      <div className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <div
              className="
                inline-flex
                items-center
                gap-2
                px-3
                py-1
                rounded-full
                bg-blue-600/10
                border
                border-blue-600/20
                text-white
                text-xs
                font-medium
                mb-3
              "
            >
              <Receipt className="w-3 h-3" />
              Latest Record
            </div>

            <h3 className="text-lg font-semibold">Vehicle Service History</h3>

            <p className="text-sm text-gray-500 mt-1">
              Most recent maintenance visit
            </p>
          </div>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Calendar className="w-4 h-4" />
            {formatDate(visit.date)}
          </div>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="rounded-2xl bg-gray-800/50 p-4">
            <div className="text-xs text-gray-500 mb-1">Total Cost</div>

            <div className="text-2xl font-bold text-green-400">
              ₱{visit.totalCost.toLocaleString()}
            </div>
          </div>

          <div className="rounded-2xl bg-gray-800/50 p-4">
            <div className="text-xs text-gray-500 mb-1">Services Performed</div>

            <div className="text-2xl font-bold">{visit.repairs.length}</div>
          </div>
        </div>

        {/* Repairs */}
        <div className="space-y-3">
          {visit.repairs.map((repair) => (
            <div
              key={repair.id}
              className="
                rounded-2xl
                border
                border-gray-800
                bg-gray-950/60
                p-4
              "
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="
                        flex
                        items-center
                        justify-center
                        w-9
                        h-9
                        rounded-xl
                        border
                        border-blue-600/20
                        bg-blue-600/10
                        shrink-0
                      "
                    >
                      <Wrench className="w-4 h-4 text-blue-400" />
                    </div>

                    <h4 className="font-medium">{repair.service}</h4>
                  </div>

                  <div className="text-xs text-gray-500">
                    Invoice #{repair.invoiceNumber}
                  </div>

                  {repair.technician && (
                    <div className="text-xs text-gray-500 mt-1">
                      Technician: {repair.technician}
                    </div>
                  )}
                </div>

                <div className="text-right">
                  <div className="font-semibold text-green-400 mb-2">
                    ₱{repair.cost.toLocaleString()}
                  </div>

                  <div
                    className="
                      inline-flex
                      items-center
                      gap-1
                      px-2
                      py-1
                      rounded-full
                      bg-green-500/10
                      border
                      border-green-500/20
                      text-green-400
                      text-xs
                    "
                  >
                    <CheckCircle2 className="w-3 h-3" />
                    {repair.status}
                  </div>
                </div>
              </div>

              {repair.parts?.length > 0 && (
                <div className="mt-4 border-t border-gray-800 pt-4">
                  <div className="text-xs font-medium text-gray-400 mb-3">
                    Parts Breakdown
                  </div>

                  <div className="space-y-2">
                    {repair.parts.map((part) => (
                      <div
                        key={part.name}
                        className="flex items-center justify-between text-sm"
                      >
                        <span className="text-gray-300">{part.name}</span>

                        <span className="font-medium text-gray-400">
                          ₱{part.price.toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 pt-3 border-t border-gray-800 flex items-center justify-between">
                    <span className="text-sm text-gray-400">Parts Total</span>

                    <span className="font-semibold text-white">
                      ₱
                      {repair.parts
                        .reduce((sum, part) => sum + part.price, 0)
                        .toLocaleString()}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
