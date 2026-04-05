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
          The Man
        </h1>
        
        <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
          <p>
            Engr. Olufemi Sanni (ARABA) <span className="font-bold text-brand-red">(ARABA)</span> — <br>
              Civil Engineer | Media Mogul | Social Impact Investor | Political Leader
            </br>.
            <p>
              
            Engr. Olufemi Sanni, popularly known by the moniker "Araba," is a distinguished Nigerian engineer, multi-sector entrepreneur and philanthropist. With a career spanning over 35 years, Sanni has established himself as a bridge-builder between technical excellence and socio-economic transformation. 
He is the Chairman of the STEFOLGA Group and the founder of Flow 92.7 FM in Ilorin, Kwara State.  
          </p>
          <p>
            Early Life & Education
Born on September 4, 1962, Sanni’s passion for development was inherited from his father, who managed the defunct Tate and Lyle FC in Ilorin. He pursued his professional foundation at the University of Ilorin, where he earned a B.Eng. in Civil Engineering. He later expanded his horizons internationally, establishing business interests in Toronto, Canada, before returning to focus on Nigeria’s industrial and media landscapes.
          </p>
          <p>
            Before deepening his footprint in Nigeria, he established business roots in Canada through TECHNOplus Communications Inc. in Toronto, gaining global exposure that continues to influence his development approach.
          </p>
          <p>
            Professional Portfolio
• Engineering & Infrastructure: A COREN-registered engineer and a Fellow of the Nigerian Institution of Civil Engineers (FNICE). He has led large-scale projects through the Stefolga Group, focusing on affordable infrastructure and technical ingenuity. 
 
• Media & Communications: As the Chairman of Flow 92.7 FM, he transformed the station into a leading voice for youth empowerment and community enlightenment in North-Central Nigeria.  

• Innovation: He is credited with founding Africa’s first mobile phone repair assurance company, reflecting his early adoption of tech-driven service solutions.  

• Energy: He served as the pioneer President of the Nigeria Liquefied Petroleum Gas Association (NLPGA) in Abuja, advocating for clean energy adoption.  

          </p>
          <p>Social Impact & Philanthropy
Sanni is a major advocate for youth development, famously stating that "Youths shouldn't wait for the perfect moment to start."  

• Sports: He chairs the Araba Football Club, a scouting and developmental platform for young athletic talent.  

• Recognition: In February 2026, he was nominated for the Social Impact Investor of the Year at the Silver Jubilee Independent Awards for his grassroots interventions in education and community welfare.  

• Chieftaincy: His cultural contributions are recognized through several titles, including the Otun Aare Soludero of Offa Land and the Gbobaniyi of Obbo-Aiyegunle.  
</p>
<p> Engr. Olufemi Sanni (ARABA)
Civil Engineer | Media Mogul | Social Impact Investor | Political Leader

Engr. Olufemi Sanni, popularly known by the moniker "Araba," is a distinguished Nigerian engineer, multi-sector entrepreneur and philanthropist. With a career spanning over 35 years, Sanni has established himself as a bridge-builder between technical excellence and socio-economic transformation. 
He is the Chairman of the STEFOLGA Group and the founder of Flow 92.7 FM in Ilorin, Kwara State.  

Early Life & Education
Born on September 4, 1962, Sanni’s passion for development was inherited from his father, who managed the defunct Tate and Lyle FC in Ilorin. He pursued his professional foundation at the University of Ilorin, where he earned a B.Eng. in Civil Engineering. He later expanded his horizons internationally, establishing business interests in Toronto, Canada, before returning to focus on Nigeria’s industrial and media landscapes.  

Professional Portfolio
• Engineering & Infrastructure: A COREN-registered engineer and a Fellow of the Nigerian Institution of Civil Engineers (FNICE). He has led large-scale projects through the Stefolga Group, focusing on affordable infrastructure and technical ingenuity. 
 
• Media & Communications: As the Chairman of Flow 92.7 FM, he transformed the station into a leading voice for youth empowerment and community enlightenment in North-Central Nigeria.  

• Innovation: He is credited with founding Africa’s first mobile phone repair assurance company, reflecting his early adoption of tech-driven service solutions.  

• Energy: He served as the pioneer President of the Nigeria Liquefied Petroleum Gas Association (NLPGA) in Abuja, advocating for clean energy adoption.  

<u>Social Impact & Philanthropy</u>

Sanni is a major advocate for youth development, famously stating that "Youths shouldn't wait for the perfect moment to start."  

• Sports: He chairs the Araba Football Club, a scouting and developmental platform for young athletic talent.  

• Recognition: In February 2026, he was nominated for the Social Impact Investor of the Year at the Silver Jubilee Independent Awards for his grassroots interventions in education and community welfare.  

• Chieftaincy: His cultural contributions are recognized through several titles, including the Otun Aare Soludero of Offa Land and the Gbobaniyi of Obbo-Aiyegunle.  

Political Vision & 2027 Ambition
A veteran in the political space, Sanni contested for the House of Representatives in 2003 and the Kwara governorship in 2019. On April 2, 2026, he officially declared his candidacy for the 2027 Kwara State Governorship under the APC banner.  
His "Araba Vision" for Kwara includes:
• Conference Tourism: Repositioning Kwara as Nigeria’s premier hub for business tourism and international exhibitions.  
• Economic Diversification: Shifting the state from a civil service-reliant economy to an entrepreneurial and industrial power.  
• Security: Advocating for state policing and enhanced security frameworks to protect investments and citizens.

"Politics, to me, is a tool for meaningful change. I have always believed that for society to thrive, people with integrity, experience, and outside-the-box thinking must step into leadership." — Engr. Femi Sanni (ARABA)</p>
        </div>
      </div>
      
    </div>
  );
}
