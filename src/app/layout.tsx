import type { Metadata } from "next";
import { Zen_Maru_Gothic, Zen_Old_Mincho } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const zenMaruGothic = Zen_Maru_Gothic({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-zen-maru",
  display: "swap",
});

const zenOldMincho = Zen_Old_Mincho({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-zen-mincho",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "星空食堂レトワール | Hoshizora Shokudou L'Étoile",
    template: "%s | 星空食堂レトワール",
  },
  description:
    "星空食堂レトワールは、星空をコンセプトにしたコンセプトカフェ＆食堂です。星の輝きの下で、特別なひとときをお過ごしください。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${zenMaruGothic.variable} ${zenOldMincho.variable} font-sans antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
