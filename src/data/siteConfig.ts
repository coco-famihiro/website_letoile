import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "星空食堂レトワール",
  nameEn: "Hoshizora Shokudou L'Étoile",
  tagline: "星の輝きの下で、特別なひとときを",
  address: "〒101-0023 東京都千代田区神田松永町 河本ビル 2F",
  hours: "17:00 〜 23:00（フードL.O. 22:00）",
  closedDay: "毎週月曜日",
  nearestStation: "JR秋葉原駅 徒歩3分 / 都営新宿線岩本町駅 徒歩5分",
  sns: {
    twitter: "https://x.com/letoile_AKB",
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
