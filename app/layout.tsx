import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import { DarkModeProvider } from "@/contexts/DarkModeContext";
import "./globals.css";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "Maor Saadia Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${inter.variable} ${bebasNeue.variable}`}>
        <Analytics />
        <DarkModeProvider>{children}</DarkModeProvider>
      </body>
    </html>
  );
}
