import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  { src: "/images/gallery/ceremony-1.jpg", alt: "Ceremony 1" },
  { src: "/images/gallery/ceremony-2.jpg", alt: "Ceremony 2" },
  { src: "/images/gallery/ceremony-3.jpg", alt: "Ceremony 3" },
];

const awards = [
  {
    title: "Social Impact Investor of the Year",
    org: "Silver Jubilee Independent Awards",
    year: "2026",
    desc: "Recognized for grassroots interventions in education and community welfare.",
    icon: "🏆"
  },
  {
    title: "Fellow of the Nigerian Institution of Civil Engineers",
    org: "NICE",
    year: "2025",
    desc: "Awarded for consistent excellence and leadership in engineering infrastructure.",
    icon: "🏗️"
  }
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-brand-black py-16 px-6 text-center border-b-4 border-brand-red">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          Legacy & <span className="text-brand-red">Impact</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          A visual journey of service, leadership, and the honors received along the way.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-brand-black mb-10 flex items-center">
          <span className="w-8 h-1 bg-brand-red mr-4"></span>
          Ceremonial Highlights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="group relative aspect-video overflow-hidden rounded-lg bg-gray-100 border border-gray-200">
              {/* Note: Placeholder until you add real images to /public/images/gallery/ */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 italic">
                Photo Placeholder
              </div>
              {/* <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-110" /> */}
            </div>
          ))}
        </div>
      </section>

      {/* Awards Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-black mb-10 flex items-center">
            <span className="w-8 h-1 bg-brand-red mr-4"></span>
            Honors & Awards
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {awards.map((award, idx) => (
              <div key={idx} className="flex flex-col md:flex-row bg-white rounded-xl shadow-sm border-l-8 border-brand-red overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-brand-black text-white p-8 flex items-center justify-center text-4xl md:w-1/4">
                  {award.icon}
                </div>
                <div className="p-6 md:w-3/4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-brand-black">{award.title}</h3>
                    <span className="bg-brand-red text-white text-xs font-bold px-2 py-1 rounded">
                      {award.year}
                    </span>
                  </div>
                  <p className="text-brand-red font-semibold text-sm mb-3 uppercase tracking-wider">{award.org}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{award.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 text-center">
        <Link href="/get-involved" className="bg-brand-black text-white px-8 py-4 rounded-md font-bold hover:bg-brand-red transition-colors shadow-xl">
          Join the Movement
        </Link>
      </section>
    </div>
  );
}
