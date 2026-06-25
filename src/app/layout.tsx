import { Cormorant_Garamond, Inter } from "next/font/google";
import SmoothScroll from "@/components/providers/SmoothScroll";
import LocaleProvider from "@/components/providers/LocaleProvider";
import { siteMetadata, viewport } from "@/lib/metadata";
import "./globals.css";

export { viewport };

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
      <body className="min-h-screen bg-background font-body text-foreground antialiased">
        <LocaleProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </LocaleProvider>
      </body>
    </html>
  );
}
