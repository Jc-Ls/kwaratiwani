import Link from "next/link";

export default function GetInvolved() {
  return (
    <div className="min-h-screen bg-brand-gray py-16 md:py-24 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-sm border-t-4 border-t-brand-red text-center">
        
        {/* Transforming / Dynamic Heading */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-black mb-4">
            Be Part of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-600 animate-pulse">Movement</span>
          </h1>
          <p className="text-lg text-gray-600 font-medium">
            Join others who want to contribute their time, skills, and voice toward a better Kwara.
          </p>
        </div>

        {/* Google Form CTA */}
        <div className="py-8 border-t border-gray-100">
          <p className="text-xl text-brand-black font-bold mb-6">Ready to make a difference?</p>
          <Link 
            href="https://docs.google.com/forms/d/e/1FAIpQLSfEIqkhb9nHuFb-BJoB1YR0LslBDCS9M_eSOgQ5wEjZ1hB0-w/viewform" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-brand-red text-white font-bold text-xl rounded-md hover:bg-red-700 transition-colors shadow-lg"
          >
            Open Volunteer Form
          </Link>
        </div>

      </div>
    </div>
  );
}
