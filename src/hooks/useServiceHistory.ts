import { useMemo, useState } from "react";
import { type ServiceVisit } from "../types/service-history";
import { mockVehicleHistory } from "../data/mockVehicleHistory";
import { generateRandomVehicleHistory } from "../utils/generateVehicleHistory";

export function useServiceHistory() {
  const [serviceHistory, setServiceHistory] = useState<ServiceVisit[]>([]);

  const totalVisits = useMemo(() => serviceHistory.length, [serviceHistory]);

  const totalSpent = useMemo(
    () => serviceHistory.reduce((sum, visit) => sum + visit.totalCost, 0),
    [serviceHistory],
  );

  const totalServices = useMemo(
    () => serviceHistory.reduce((sum, visit) => sum + visit.repairs.length, 0),
    [serviceHistory],
  );

  const loadVehicleHistory = async (plateNumber: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const normalizedPlate = plateNumber.replace(/\s/g, "");

    const history = mockVehicleHistory[normalizedPlate];

    if (history) {
      setServiceHistory(history);
      return;
    }

    const generatedHistory = generateRandomVehicleHistory(normalizedPlate);

    setServiceHistory(generatedHistory);
  };

  const clearHistory = () => {
    setServiceHistory([]);
  };

  return {
    serviceHistory,
    totalVisits,
    totalSpent,
    totalServices,
    loadVehicleHistory,
    clearHistory,
  };
}
