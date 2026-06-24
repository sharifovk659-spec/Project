export interface Partner {
  name: string;
  file: string;
  /** Boost for logos with extra padding inside the PNG */
  scale?: number;
}

export const PARTNERS: Partner[] = [
  { name: "Coca-Cola", file: "coca-cola.png" },
  { name: "Gazprom", file: "gazprom.png" },
  { name: "EuroMed", file: "euromed.png", scale: 1.4 },
  { name: "Prime Technology", file: "prime-technology.png", scale: 1.25 },
  { name: "Kimchi", file: "kimchi.png" },
  { name: "GS Clinic", file: "gs-clinic.png" },
  { name: "x-fit Premium", file: "xfit.png" },
  { name: "Nutri Food", file: "nutri-food.png", scale: 1.35 },
  { name: "Nishman", file: "nishman.png", scale: 1.15 },
  { name: "Asar Group", file: "asar-group.png", scale: 1.4 },
  { name: "The Garden", file: "the-garden.png", scale: 1.3 },
  { name: "Pizzeria Alla Torre", file: "pizzeria-alla-torre.png" },
  { name: "Community", file: "community.png" },
  { name: "MCK Lounge", file: "mck-lounge.png" },
  { name: "Мастер.ОК+", file: "master-ok.png", scale: 1.2 },
  { name: "Пайкар", file: "paykar.png" },
  { name: "BIMA Insurance", file: "bima-insurance.png", scale: 1.35 },
  { name: "Душанбинка", file: "dushanbinka.png", scale: 1.25 },
  { name: "Amani", file: "amani.png", scale: 1.2 },
  { name: "BIMA.LIFE", file: "bima-life.png" },
];
