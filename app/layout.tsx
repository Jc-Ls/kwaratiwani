import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// SEO Title Requirement
export const metadata: Metadata = {
  title: "Engr. Olufemi Sanni | Kwara Ti Wa Ni",
  description: "A people-centered vision for a greater Kwara.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        
        {/* GLOBAL NAVIGATION */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <Link href="/" className="font-bold text-2xl tracking-tighter text-brand-black">
                ARABA<span className="text-brand-red">.</span>
              </Link>
              
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-sm font-medium hover:text-brand-red transition-colors">Home</Link>
                <Link href="/about" className="text-sm font-medium hover:text-brand-red transition-colors">About</Link>
                <Link href="/agenda" className="text-sm font-medium hover:text-brand-red transition-colors">Agenda</Link>
                <Link href="/get-involved" className="text-sm font-medium hover:text-brand-red transition-colors">Get Involved</Link>
                <Link href="/share-ideas" className="text-sm font-medium hover:text-brand-red transition-colors">Share Your Ideas</Link>
              </nav>

              {/* Mobile Menu Button (Placeholder for now) */}
              <div className="md:hidden flex items-center">
                <button className="text-brand-black focus:outline-none">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* MAIN PAGE CONTENT */}
        <main className="flex-grow">
          {children}
        </main>

        {/* GLOBAL FOOTER */}
        <footer className="bg-brand-black text-white py-12 text-center">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4 tracking-tight">Kwara Ti Wa Ni</h2>
            <p className="text-gray-400 text-sm mb-6">The Future Belongs to All of Us</p>
            {/* Social Media Placeholders */}
            <div className="flex justify-center space-x-6">
              <div className="w-8 h-8 rounded-full bg-gray-800 hover:bg-brand-red transition-colors cursor-pointer"></div>
              <div className="w-8 h-8 rounded-full bg-gray-800 hover:bg-brand-red transition-colors cursor-pointer"></div>
              <div className="w-8 h-8 rounded-full bg-gray-800 hover:bg-brand-red transition-colors cursor-pointer"></div>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
