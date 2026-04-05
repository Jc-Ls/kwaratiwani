import Link from "next/link";

export default function ShareIdeas() {
  return (
    <div className="min-h-screen bg-brand-white py-16 md:py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Transforming / Dynamic Heading */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-black mb-4">
            Your Voice <span className="text-brand-red relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-1 after:bg-brand-red after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Matters</span>
          </h1>
          <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
            What should the next Governor of Kwara focus on in your area? Share your questions, suggestions, and ideas.
          </p>
        </div>

        {/* Google Form CTA */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-gray-100">
          <p className="text-xl text-brand-black font-bold mb-6">We want to hear from you!</p>
          <Link 
            href="https://docs.google.com/forms/d/e/1FAIpQLSeG8pNfX0WmO6ZHJifpaoiGDt-Yzc66notcgOR7rcsm9PCBfQ/viewform" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-brand-black text-white font-bold text-xl rounded-md hover:bg-gray-800 transition-colors shadow-lg"
          >
            Share Your Idea
          </Link>
        </div>

      </div>
    </div>
  );
}
