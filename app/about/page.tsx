"use client";

import { useState, useEffect } from "react";

const heroImages = [
  // "/images/araba-1.jpg",
  // "/images/araba-2.jpg",
  "/images/araba-3.jpg",
  "/images/araba-4.jpg",
  "/images/araba-3.jpg", // Repeated to keep the 4-image cycle
  "/images/araba-4.jpg", // Repeated to keep the 4-image cycle
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
          The Man
        </h1>
        
        <div className="space-y-10 text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
          
          {/* Intro Section */}
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-brand-red">
            <p className="text-xl md:text-2xl font-bold text-brand-black mb-4 leading-snug">
              Engr. Femi Sanni <span className="text-brand-red">(ARABA)</span> — <br className="hidden md:block" />
              Civil Engineer | Media Mogul | Social Impact Investor | Political Leader.
            </p>
            <p>
              Engr.Femi Sanni, popularly known by the moniker "Araba," is a distinguished Nigerian engineer, multi-sector entrepreneur and philanthropist. With a career spanning over 35 years, Sanni has established himself as a bridge-builder between technical excellence and socio-economic transformation. He is the Chairman of the STEFOLGA Group and the founder of Flow 92.7 FM in Ilorin, Kwara State.
            </p>
          </div>

          {/* Early Life & Education */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4">Early Life & Education</h2>
            <p className="mb-4">
              Born on September 4, 1962, Sanni’s passion for development was inherited from his father, who managed the defunct Tate and Lyle FC in Ilorin. He pursued his professional foundation at the University of Ilorin, where he earned a B.Eng. in Civil Engineering. He later expanded his horizons internationally, establishing business interests in Toronto, Canada, before returning to focus on Nigeria’s industrial and media landscapes.
            </p>
            <p>
              Before deepening his footprint in Nigeria, he established business roots in Canada through TECHNOplus Communications Inc. in Toronto, gaining global exposure that continues to influence his development approach.
            </p>
          </div>

          {/* Professional Portfolio */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4">Professional Portfolio</h2>
            <ul className="space-y-4">
              <li>
                <strong className="text-brand-black text-xl">• Engineering & Infrastructure:</strong> A COREN-registered engineer and a Fellow of the Nigerian Institution of Civil Engineers (FNICE). He has led large-scale projects through the Stefolga Group, focusing on affordable infrastructure and technical ingenuity.
              </li>
              <li>
                <strong className="text-brand-black text-xl">• Media & Communications:</strong> As the Chairman of Flow 92.7 FM, he transformed the station into a leading voice for youth empowerment and community enlightenment in North-Central Nigeria.
              </li>
              <li>
                <strong className="text-brand-black text-xl">• Innovation:</strong> He is credited with founding Africa’s first mobile phone repair assurance company, reflecting his early adoption of tech-driven service solutions.
              </li>
              <li>
                <strong className="text-brand-black text-xl">• Energy:</strong> He served as the pioneer President of the Nigeria Liquefied Petroleum Gas Association (NLPGA) in Abuja, advocating for clean energy adoption.
              </li>
            </ul>
          </div>

          {/* Social Impact & Philanthropy */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4 underline decoration-brand-red decoration-2 underline-offset-8">
              Social Impact & Philanthropy
            </h2>
                        {/* THIS IS THE SPECIFIC PARAGRAPH YOU CIRCLED */}
            <p className="mb-6 text-gray-700 leading-relaxed font-medium">
              Sanni is a major advocate for youth development, famously stating that:
              <span className="block mt-2 italic font-bold text-brand-black">
                "Youths shouldn't wait for the perfect moment to start."
              </span>
            </p>

            <ul className="space-y-4">
              <li>
                <strong className="text-brand-black text-xl">• Sports:</strong> He chairs the Araba Football Club, a scouting and developmental platform for young athletic talent.
              </li>
              <li>
                <strong className="text-brand-black text-xl">• Recognition:</strong> In February 2026, he was nominated for the Social Impact Investor of the Year at the Silver Jubilee Independent Awards for his grassroots interventions in education and community welfare.
              </li>
              <li>
                <strong className="text-brand-black text-xl">• Chieftaincy:</strong> His cultural contributions are recognized through several titles, including the Otun Aare Soludero of Offa Land and the Gbobaniyi of Obbo-Aiyegunle.
              </li>
            </ul>
          </div>

          {/* Political Vision & Ambition */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4">Political Vision & 2027 Ambition</h2>
            <p className="mb-6">
              A veteran in the political space, Sanni contested for the House of Representatives in 2003 and the Kwara governorship in 2019. On April 2, 2026, he officially declared his candidacy for the 2027 Kwara State Governorship under the APC banner.
            </p>
            <p className="mb-4 text-xl font-bold text-brand-red">His "Araba Vision" for Kwara includes:</p>
            <ul className="space-y-4 bg-white p-6 shadow-sm border border-gray-100 rounded-lg">
              <li>
                <strong className="text-brand-black">• Conference Tourism:</strong> Repositioning Kwara as Nigeria’s premier hub for business tourism and international exhibitions.
              </li>
              <li>
                <strong className="text-brand-black">• Economic Diversification:</strong> Shifting the state from a civil service-reliant economy to an entrepreneurial and industrial power.
              </li>
              <li>
                <strong className="text-brand-black">• Security:</strong> Advocating for state policing and enhanced security frameworks to protect investments and citizens.
              </li>
            </ul>
          </div>

          {/* Quote Block */}
          <blockquote className="mt-12 p-8 bg-brand-black rounded-lg shadow-lg text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-brand-red"></div>
            <p className="text-xl md:text-2xl text-white italic font-light leading-relaxed">
              "Politics, to me, is a tool for meaningful change. I have always believed that for society to thrive, people with integrity, experience, and outside-the-box thinking must step into leadership."
            </p>
            <footer className="mt-6 text-brand-red font-bold text-lg tracking-widest uppercase">
              — Engr. Femi Sanni (ARABA)
            </footer>
          </blockquote>

        </div>
      </div>
    </div>
  );
}
