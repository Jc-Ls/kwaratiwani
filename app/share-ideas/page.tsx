"use client";

import { submitIdea } from "../actions";

export default function ShareIdeas() {
  const lgas = [
    "Asa", "Baruten", "Edu", "Ekiti", "Ifelodun", "Ilorin East", "Ilorin South", 
    "Ilorin West", "Irepodun", "Isin", "Kaiama", "Moro", "Offa", "Oke Ero", 
    "Oyun", "Patigi"
  ];

  async function clientAction(formData: FormData) {
    const response = await submitIdea(formData);
    
    if (response.success) {
      alert("Thank you! Your voice has been heard.");
      document.querySelector("form")?.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="min-h-screen bg-brand-white py-16 md:py-24 px-6">
      <div className="max-w-3xl mx-auto">
        
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-black mb-4">
            Your Voice <span className="text-brand-red relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-1 after:bg-brand-red after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Matters</span>
          </h1>
          <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
            What should the next Governor of Kwara focus on in your area? Share your questions, suggestions, and ideas.
          </p>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100">
          <form action={clientAction} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Name <span className="text-gray-400 font-normal">(Optional)</span></label>
                <input type="text" name="name" placeholder="Anonymous" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-red transition-all" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Local Government Area</label>
                <select name="lga" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-red bg-white transition-all" required>
                  <option value="">Select your LGA...</option>
                  {lgas.map(lga => <option key={lga} value={lga}>{lga}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Your question or suggestion</label>
              <textarea 
                name="suggestion"
                rows={6} 
                placeholder="I believe we should focus on..." 
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-red transition-all resize-y" 
                required
              ></textarea>
            </div>

            <button type="submit" className="w-full py-4 mt-4 bg-brand-black text-white font-bold text-lg rounded-md hover:bg-gray-800 transition-colors shadow-md">
              Submit
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
