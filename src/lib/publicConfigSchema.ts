import { getAllTranslationKeys, getTranslation, type Locale } from "@/i18n/translations";

export type PublicTextConfigItem = {
  key: string;
  fallback: string;
  section: string;
  source: "translation" | "custom";
};

export type PublicImageConfigItem = {
  key: string;
  fallback: string;
  section: string;
};

const CUSTOM_TEXT_CONFIG: PublicTextConfigItem[] = [
  { key: "home2.services.tagline", fallback: "Services", section: "home2", source: "custom" },
  { key: "home2.services.titleLine1", fallback: "We deliver top-tier business", section: "home2", source: "custom" },
  { key: "home2.services.titleLine2", fallback: "plans and strategic solutions", section: "home2", source: "custom" },
  { key: "home2.services.cta", fallback: "Know More", section: "home2", source: "custom" },
  { key: "home2.services.card1.title", fallback: "Digital Growth & Marketing", section: "home2", source: "custom" },
  {
    key: "home2.services.card1.description",
    fallback: "We build measurable growth systems using SEO, paid media, content, and data-driven campaign execution.",
    section: "home2",
    source: "custom",
  },
  { key: "home2.services.card2.title", fallback: "Web & Mobile Development", section: "home2", source: "custom" },
  {
    key: "home2.services.card2.description",
    fallback: "We build high-performance websites and mobile products focused on usability, speed, and scalability.",
    section: "home2",
    source: "custom",
  },
  { key: "home2.services.card3.title", fallback: "SEO & Data Intégration", section: "home2", source: "custom" },
  {
    key: "home2.services.card3.description",
    fallback: "We improve technical SEO, visibility, and tracking quality through clean architecture and data Intégration.",
    section: "home2",
    source: "custom",
  },
  { key: "home2.services.card4.title", fallback: "AI & Automation Applications", section: "home2", source: "custom" },
  {
    key: "home2.services.card4.description",
    fallback: "We develop applications with automation, AI workflows, and system integrations to improve operations at scale.",
    section: "home2",
    source: "custom",
  },
  { key: "home2.projects.cardName", fallback: "FESTI", section: "home2", source: "custom" },
];

const IMAGE_CONFIG_KEYS: PublicImageConfigItem[] = [
  { key: "image.home2.banner.hero.africa", fallback: "/assets/images/african-tech.png", section: "home2" },
  { key: "image.home2.banner.hero.legacy", fallback: "/assets/images/muslim-tech.png", section: "home2" },
  {
    key: "image.home2.banner.client.1",
    fallback: "/assets/images/resources/main-slider-satisfied-client-1-1.jpg",
    section: "home2",
  },
  {
    key: "image.home2.banner.client.2",
    fallback: "/assets/images/resources/main-slider-satisfied-client-1-2.jpg",
    section: "home2",
  },
  { key: "image.home2.about.main", fallback: "/assets/images/tech-woman.png", section: "home2" },
  { key: "image.home2.counter.logo", fallback: "/assets/images/festi-logo.png", section: "home2" },
  { key: "image.home2.services.card.1.icon", fallback: "/assets/images/icon/services-two-icon-1.png", section: "home2" },
  { key: "image.home2.services.card.2.icon", fallback: "/assets/images/icon/services-two-icon-2.png", section: "home2" },
  { key: "image.home2.services.card.3.icon", fallback: "/assets/images/icon/services-two-icon-3.png", section: "home2" },
  { key: "image.home2.services.card.4.icon", fallback: "/assets/images/icon/services-two-icon-4.png", section: "home2" },
  { key: "image.about.main", fallback: "/assets/images/about1.png", section: "about" },
  { key: "image.about.secondary", fallback: "/assets/images/about2.png", section: "about" },
  { key: "image.about.video", fallback: "/assets/video/AfricaDigital.mp4", section: "about" },
  { key: "image.developer.gallery.1", fallback: "/assets/images/developer1.png", section: "developer" },
  { key: "image.developer.gallery.2", fallback: "/assets/images/developper2.png", section: "developer" },
  { key: "image.developer.gallery.3", fallback: "/assets/images/developer3.png", section: "developer" },
  { key: "image.client.gallery.1", fallback: "/assets/images/client1.png", section: "client" },
  { key: "image.client.gallery.2", fallback: "/assets/images/client2.png", section: "client" },
  { key: "image.client.gallery.3", fallback: "/assets/images/client3.png", section: "client" },
  { key: "image.logo.main", fallback: "/assets/images/logo-pg.png", section: "global" },
];

export const getPublicConfigSchema = (locale: Locale = "en"): {
  textItems: PublicTextConfigItem[];
  imageItems: PublicImageConfigItem[];
} => {
  const translationItems = getAllTranslationKeys(locale).map<PublicTextConfigItem>((key) => ({
    key: `text.${key}`,
    fallback: getTranslation(locale, key),
    section: key.split(".")[0] || "common",
    source: "translation",
  }));

  const customItems = CUSTOM_TEXT_CONFIG.map<PublicTextConfigItem>((item) => ({
    ...item,
    key: `text.${item.key}`,
  }));

  const deduped = new Map<string, PublicTextConfigItem>();
  [...translationItems, ...customItems].forEach((item) => {
    deduped.set(item.key, item);
  });

  return {
    textItems: Array.from(deduped.values()).sort((a, b) => a.key.localeCompare(b.key)),
    imageItems: IMAGE_CONFIG_KEYS.slice().sort((a, b) => a.key.localeCompare(b.key)),
  };
};
