import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "星空食堂レトワール",
  nameEn: "Hoshizora Shokudou L'Étoile",
  tagline: "星の輝きの下で、特別なひとときを",
  address: "〒150-0001 東京都渋谷区神宮前 1-2-3 スターライトビル 2F",
  hours: "12:00 〜 22:00（L.O. 21:30）",
  closedDay: "毎週火曜日",
  phone: "03-0000-0000",
  nearestStation: "JR原宿駅 徒歩5分 / 東京メトロ明治神宮前駅 徒歩3分",
  sns: {
    twitter: "https://twitter.com/letoile_example",
    instagram: "https://instagram.com/letoile_example",
  },
};

export const navLinks = [
  { href: "/", label: "トップ" },
  { href: "/menu", label: "メニュー" },
  { href: "/system", label: "システム" },
  { href: "/gallery", label: "ギャラリー" },
  { href: "/events", label: "イベント" },
  { href: "/access", label: "アクセス" },
] as const;
