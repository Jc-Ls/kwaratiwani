import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-6 text-center">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-brand-black">
          Kwara Ti Wa Ni
        </h1>

        {/* Subtext */}
        <p className="text-xl md:text-2xl font-medium text-gray-600 max-w-2xl mx-auto">
          A people-centered vision for a greater Kwara.
        </p>

        {/* Name Line */}
        <div className="inline-block border-y-2 border-brand-red py-4 my-8">
          <p className="text-lg md:text-xl font-bold tracking-widest text-brand-black uppercase">
            Engr. Olufemi Sanni, FNICE, FNSE — <span className="text-brand-red">ARABA</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 max-w-2xl mx-auto">
          <Link 
            href="/about" 
            className="px-8 py-4 bg-brand-black text-white font-bold rounded-md hover:bg-gray-800 transition-colors w-full shadow-sm"
          >
            Read His Story
          </Link>
          <Link 
            href="/agenda" 
            className="px-8 py-4 bg-brand-red text-white font-bold rounded-md hover:opacity-90 transition-colors w-full shadow-sm"
          >
            His Agenda for Kwara
          </Link>
          <Link 
            href="/get-involved" 
            className="px-8 py-4 border-2 border-brand-black text-brand-black font-bold rounded-md hover:bg-gray-50 transition-colors w-full"
          >
            Volunteer
          </Link>
          <Link 
            href="/share-ideas" 
            className="px-8 py-4 border-2 border-brand-red text-brand-red font-bold rounded-md hover:bg-red-50 transition-colors w-full"
          >
            Share Your Ideas
          </Link>
        </div>

      </div>
    </div>
  );
}
