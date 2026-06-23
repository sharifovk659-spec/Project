import { Cormorant_Garamond, Inter } from "next/font/google";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { siteMetadata } from "@/lib/metadata";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
