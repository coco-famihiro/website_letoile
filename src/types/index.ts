export type MenuItem = {
  id: string;
  name: string;
  nameEn?: string;
  description: string;
  price: number;
  category: "food" | "drink" | "bottle" | "dessert" | "limited";
  isNew?: boolean;
  isRecommended?: boolean;
};

export type EventItem = {
  id: string;
  title: string;
  date: string;
  category: "event" | "news";
  summary: string;
  content: string;
};

export type GalleryItem = {
  id: string;
  category: "interior" | "cast" | "event";
  caption: string;
  gradient: string;
};

export type SiteConfig = {
  name: string;
  nameEn: string;
  tagline: string;
  address: string;
  hours: string;
  closedDay: string;
  phone?: string;
  nearestStation: string;
  sns: {
    twitter: string;
  };
};
