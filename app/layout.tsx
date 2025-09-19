import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../styles/globals.css";
import GameProvider from "../context/GameContext";
import { Navbar, Waves } from "@/components/layout";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "thryve",
  description:
    "n-back memory exercise to enhance working memory and cognitive performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <GameProvider>
          <Navbar />
          <div className="flex flex-col min-h-screen">
            <main className="flex-1">
              {children}
            </main>
            <Waves />
          </div>
        </GameProvider>
      </body>
    </html>
  );
}
