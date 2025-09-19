import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../styles/globals.css";
import GameProvider from "../context/GameContext";
import { Navbar, Waves } from "@/components/layout";
import { ThemeProvider } from "next-themes";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <GameProvider>
            <Navbar />
            <div className="flex flex-col min-h-screen dark:bg-[#181717]">
              <main className="flex-1">{children}</main>
              <Waves />
            </div>
          </GameProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
