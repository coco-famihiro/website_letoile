import type { GalleryItem } from "@/types";

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    category: "interior",
    caption: "星空の天井 - メインフロア",
    gradient: "from-indigo to-navy",
  },
  {
    id: "g2",
    category: "interior",
    caption: "カウンター席 - ライトアップ",
    gradient: "from-navy to-night",
  },
  {
    id: "g3",
    category: "interior",
    caption: "個室「オリオン」",
    gradient: "from-indigo to-lilac",
  },
  {
    id: "g4",
    category: "cast",
    caption: "キャスト - ひかり",
    gradient: "from-lilac to-soft-pink",
  },
  {
    id: "g5",
    category: "cast",
    caption: "キャスト - るな",
    gradient: "from-soft-pink to-star-pale",
  },
  {
    id: "g6",
    category: "cast",
    caption: "キャスト - すばる",
    gradient: "from-lavender to-lilac",
  },
  {
    id: "g7",
    category: "event",
    caption: "クリスマスイベント 2025",
    gradient: "from-night to-indigo",
  },
  {
    id: "g8",
    category: "event",
    caption: "ハロウィンナイト 2025",
    gradient: "from-navy to-indigo",
  },
  {
    id: "g9",
    category: "interior",
    caption: "エントランス",
    gradient: "from-indigo to-lavender",
  },
  {
    id: "g10",
    category: "cast",
    caption: "キャスト - あかり",
    gradient: "from-soft-pink to-lilac",
  },
  {
    id: "g11",
    category: "event",
    caption: "七夕フェスタ 2025",
    gradient: "from-navy to-lilac",
  },
  {
    id: "g12",
    category: "interior",
    caption: "テーブル席 - 星座ランプ",
    gradient: "from-night to-navy",
  },
];

export const galleryCategories = [
  { key: "all" as const, label: "すべて" },
  { key: "interior" as const, label: "店内" },
  { key: "cast" as const, label: "キャスト" },
  { key: "event" as const, label: "イベント" },
];
