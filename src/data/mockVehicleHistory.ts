import { type ServiceVisit } from "../types/service-history";

export const mockVehicleHistory: Record<string, ServiceVisit[]> = {
  ABY8512: [
    {
      visitNumber: 1,
      date: "2026-05-12",
      totalCost: 17000,

      vehicleDetails: {
        plateNumber: "ABY8512",
        make: "Toyota",
        model: "Vios G",
        year: 2021,
        color: "Silver Metallic",
        transmission: "Automatic",
        engine: "1.5L Gasoline",
        mileage: 48500,
        owner: "Juan Dela Cruz",
      },

      repairs: [
        {
          id: "1",
          service: "Air Conditioning Overhaul",
          cost: 12500,
          technician: "Carlos Reyes",
          status: "completed",
          timestamp: "2026-05-12",
          invoiceNumber: "INV-001",
          parts: [
            { name: "Compressor", price: 5500 },
            { name: "Condenser", price: 2500 },
            { name: "Receiver Drier", price: 900 },
            { name: "Expansion Valve", price: 1200 },
            { name: "A/C Refrigerant", price: 1400 },
            { name: "Compressor Oil", price: 1000 },
          ],
        },
        {
          id: "2",
          service: "Oil Change",
          cost: 1500,
          technician: "Juan Dela Cruz",
          status: "completed",
          timestamp: "2026-05-12",
          invoiceNumber: "INV-001",
          parts: [
            { name: "Engine Oil", price: 1200 },
            { name: "Oil Filter", price: 300 },
          ],
        },
        {
          id: "3",
          service: "Brake Inspection",
          cost: 3000,
          technician: "Mark Santos",
          status: "completed",
          timestamp: "2026-05-12",
          invoiceNumber: "INV-001",
          parts: [{ name: "Brake Pads", price: 3000 }],
        },
      ],
    },
  ],

  NAA1234: [
    {
      visitNumber: 1,
      date: "2026-04-20",
      totalCost: 2500,

      vehicleDetails: {
        plateNumber: "NAA1234",
        make: "Honda",
        model: "City RS",
        year: 2020,
        color: "White Pearl",
        transmission: "CVT",
        engine: "1.5L i-VTEC",
        mileage: 62300,
        owner: "John Cruz",
      },

      repairs: [
        {
          id: "4",
          service: "Battery Replacement",
          cost: 2500,
          technician: "John Cruz",
          status: "completed",
          timestamp: "2026-04-20",
          invoiceNumber: "INV-002",
          parts: [
            {
              name: "Maintenance-Free Battery",
              price: 2500,
            },
          ],
        },
      ],
    },
  ],
};