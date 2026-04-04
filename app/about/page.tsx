"use client";

import { useState, useEffect } from "react";

const heroImages = [
  "/images/araba-1.jpg",
  "/images/araba-2.jpg",
  "/images/araba-3.jpg",
  "/images/araba-4.jpg",
];

export default function About() {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-scroll logic (Changes image every 6 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Image Slider (Banner Style, No Text Overlay) */}
      <div className="relative w-full h-[40vh] md:h-[60vh] bg-brand-black overflow-hidden border-b-4 border-brand-red">
        {heroImages.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out bg-no-repeat bg-center bg-contain md:bg-cover ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>

      {/* Biography Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-black mb-10 text-center md:text-left">
          The Man Behind “Kwara Ti Wa Ni”
        </h1>
        
        <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
          <p>
            Engr. Olufemi Sanni, FNICE, FNSE — widely known as <span className="font-bold text-brand-red">ARABA</span> — is a seasoned civil engineer, entrepreneur, and community-minded leader with over 37 years of experience spanning engineering, business management, media, energy, insurance, telecommunications, and sports development.
          </p>
          <p>
            A COREN-registered engineer and Fellow of the Nigerian Institution of Civil Engineers, he holds a B.Eng. in Civil Engineering from the University of Ilorin.
          </p>
          <p>
            Before deepening his footprint in Nigeria, he established business roots in Canada through TECHNOplus Communications Inc. in Toronto, gaining global exposure that continues to influence his development approach.
          </p>
          <p>
            Across sectors and communities, his work has consistently focused on empowering people, strengthening systems, and building sustainable platforms for growth.
          </p>
        </div>
      </div>
      
    </div>
  );
}
