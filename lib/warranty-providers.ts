export const warrantyProviders = {
  carshield: { name: "CarShield", site: "https://carshield.com" },
  silverrock: { name: "SilverRock", site: "https://www.silverrockinc.com" },
  endurance: { name: "Endurance", site: "https://www.endurancewarranty.com" },
  fidelity: { name: "Fidelity Warranty Services", site: "https://www.fidelitywarrantyservices.com" },
  zurich: { name: "Zurich", site: "https://www.zurichna.com" },
  "american-auto-shield": { name: "American Auto Shield", site: "https://americanautoshield.com" },
  carchex: { name: "CARCHEX", site: "https://www.carchex.com" },
} as const;

export type WarrantySlug = keyof typeof warrantyProviders;
