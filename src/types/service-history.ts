export type RepairStatus =
  | "completed"
  | "in-progress"
  | "pending";

export interface RepairPart {
  name: string;
  price: number;
}

export interface VehicleDetails {
  plateNumber: string;
  make: string;
  model: string;
  year: number;
  color: string;
  transmission: string;
  engine: string;
  mileage: number;
  owner: string;
}

export interface Repair {
  id: string;
  service: string;
  parts: RepairPart[];
  cost: number;
  technician: string;
  status: RepairStatus;
  timestamp: string;
  invoiceNumber: string;
}

export interface ServiceVisit {
  date: string;
  repairs: Repair[];
  totalCost: number;
  visitNumber: number;
  vehicleDetails: VehicleDetails;
}

export type ServiceHistory = ServiceVisit[];