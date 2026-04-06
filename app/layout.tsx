import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Engr. Femi Sanni (ARABA) | Kwara Ti Wa Ni 2027",
  description: "Join the movement for a greater Kwara. Conference Tourism, Economic Diversification, and Inclusive Governance.",
  openGraph: {
    title: "Engr. Femi Sanni (ARABA) | Kwara 2027",
    description: "The official campaign platform for Engr. Femi Sanni. The future belongs to all of us.",
    url: "https://www.araba2027.com.ng",
    siteName: "Araba 2027",
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
