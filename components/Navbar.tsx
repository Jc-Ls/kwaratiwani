"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
                    {/* Logo */}
          <Link href="/" className="font-bold text-2xl tracking-tighter text-brand-black" onClick={() => setIsOpen(false)}>
            ARABA <span className="text-brand-red">2027</span>
          </Link>

          
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-brand-red transition-colors">Home</Link>
            <Link href="/about" className="text-sm font-medium hover:text-brand-red transition-colors">About</Link>
            <Link href="/agenda" className="text-sm font-medium hover:text-brand-red transition-colors">Agenda</Link>
            <Link href="/get-involved" className="text-sm font-medium hover:text-brand-red transition-colors">Get Involved</Link>
            <Link href="/share-ideas" className="text-sm font-medium hover:text-brand-red transition-colors">Share Your Ideas</Link>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-black focus:outline-none p-2"
            >
              {isOpen ? (
                // Close (X) Icon
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              ) : (
                // Hamburger Menu Icon
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-lg absolute w-full left-0">
          <nav className="flex flex-col px-4 pt-2 pb-6 space-y-4 shadow-xl">
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-brand-red">Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-brand-red">About</Link>
            <Link href="/agenda" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-brand-red">Agenda</Link>
            <Link href="/get-involved" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-brand-red">Get Involved</Link>
            <Link href="/share-ideas" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-brand-red">Share Your Ideas</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
