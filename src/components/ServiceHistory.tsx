import { type ServiceVisit } from "../types/service-history";
import { ServiceVisitCard } from "./ServiceVisitCard";

interface ServiceHistoryProps {
  history: ServiceVisit[];
  formatDate: (date: string) => string;
}

export function ServiceHistory({
  history,
  formatDate,
}: ServiceHistoryProps) {
  if (!history.length) return null;

  return (
    <div className="space-y-4">
      {history.map((visit) => (
        <ServiceVisitCard
          key={visit.visitNumber}
          visit={visit}
          formatDate={formatDate}
        />
      ))}
    </div>
  );
}