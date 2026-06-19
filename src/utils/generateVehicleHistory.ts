// utils/generateVehicleHistory.ts

import { type ServiceVisit } from "../types/service-history";

const MAKES = [
  "Toyota",
  "Honda",
  "Mitsubishi",
  "Nissan",
  "Ford",
  "Hyundai",
];

const MODELS = [
  "Vios",
  "City",
  "Montero Sport",
  "Navara",
  "Ranger",
  "Accent",
];

const COLORS = [
  "White",
  "Black",
  "Silver",
  "Gray",
  "Red",
];

const SERVICES = [
  "Oil Change",
  "Brake Service",
  "Air Conditioning Repair",
  "Battery Replacement",
  "Wheel Alignment",
  "Engine Tune-Up",
];

function randomItem<T>(items: T[]): T {
  return items[
    Math.floor(Math.random() * items.length)
  ];
}

export function generateRandomVehicleHistory(
  plateNumber: string
): ServiceVisit[] {
  const make = randomItem(MAKES);
  const model = randomItem(MODELS);

  const cost =
    Math.floor(Math.random() * 10000) +
    3000;

  return [
    {
      visitNumber: 1,
      date: "2026-06-01",

      totalCost: cost,

      vehicleDetails: {
        plateNumber,
        make,
        model,
        year:
          2018 +
          Math.floor(Math.random() * 8),
        color: randomItem(COLORS),
        transmission:
          Math.random() > 0.5
            ? "Automatic"
            : "Manual",
        engine: "1.5L Gasoline",
        mileage:
          10000 +
          Math.floor(Math.random() * 90000),
        owner: "Generated Customer",
      },

      repairs: [
        {
          id: crypto.randomUUID(),

          service:
            randomItem(SERVICES),

          cost,

          technician:
            "System Generated",

          status: "completed",

          timestamp:
            "2026-06-01",

          invoiceNumber:
            `INV-${Math.floor(
              Math.random() * 10000
            )}`,

          parts: [
            {
              name: "Replacement Part",
              price:
                Math.floor(cost * 0.6),
            },
            {
              name: "Labor",
              price:
                Math.floor(cost * 0.4),
            },
          ],
        },
      ],
    },
  ];
}