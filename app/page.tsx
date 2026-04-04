"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const heroImages = [
  "/images/araba-1.jpg",
  "/images/araba-2.jpg",
  "/images/araba-3.jpg",
  "/images/araba-4.jpg",
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-scroll logic (Changes image every 6 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[85vh] py-24 px-6 text-center overflow-hidden">
      
      {/* Background Image Carousel */}
      {heroImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        />
      ))}

      {/* Dark Overlay (Crucial: Ensures the text stays readable over any image) */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-4xl mx-auto space-y-10 mt-10">
        
        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-md">
          Kwara Ti Wa Ni
        </h1>

        {/* Subtext */}
        <p className="text-xl md:text-2xl font-medium text-gray-200 max-w-2xl mx-auto">
          A people-centered vision for a greater Kwara.
        </p>

        {/* Name Line */}
        <div className="inline-block border-y-2 border-brand-red py-4 my-8">
          <p className="text-lg md:text-xl font-bold tracking-widest text-white uppercase drop-shadow-sm">
            Engr. Olufemi Sanni, FNICE, FNSE — <span className="text-brand-red">ARABA</span>
          </p>
        </div>

        {/* Action Buttons (Colors adjusted to pop against the dark background) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 max-w-2xl mx-auto">
          <Link 
            href="/about" 
            className="px-8 py-4 bg-white text-brand-black font-bold rounded-md hover:bg-gray-200 transition-colors w-full shadow-lg"
          >
            Read His Story
          </Link>
          <Link 
            href="/agenda" 
            className="px-8 py-4 bg-brand-red text-white font-bold rounded-md hover:bg-red-700 transition-colors w-full shadow-lg"
          >
            His Agenda for Kwara
          </Link>
          <Link 
            href="/get-involved" 
            className="px-8 py-4 border-2 border-white text-white font-bold rounded-md hover:bg-white/10 transition-colors w-full backdrop-blur-sm"
          >
            Volunteer
          </Link>
          <Link 
            href="/share-ideas" 
            className="px-8 py-4 border-2 border-brand-red text-brand-red font-bold rounded-md hover:bg-brand-red/10 bg-black/40 transition-colors w-full backdrop-blur-sm"
          >
            Share Your Ideas
          </Link>
        </div>

      </div>
    </div>
  );
}
