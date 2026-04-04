export default function GetInvolved() {
  const lgas = [
    "Asa", "Baruten", "Edu", "Ekiti", "Ifelodun", "Ilorin East", "Ilorin South", 
    "Ilorin West", "Irepodun", "Isin", "Kaiama", "Moro", "Offa", "Oke Ero", 
    "Oyun", "Pategi"
  ];

  return (
    <div className="min-h-screen bg-brand-gray py-16 md:py-24 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-sm border-t-4 border-t-brand-red">
        
        {/* Transforming / Dynamic Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-black mb-4">
            Be Part of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-600 animate-pulse">Movement</span>
          </h1>
          <p className="text-lg text-gray-600 font-medium">
            Join others who want to contribute their time, skills, and voice toward a better Kwara.
          </p>
        </div>

        {/* The UI Form (No backend yet) */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
              <input type="text" placeholder="Engr. John Doe" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all" required />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
              <input type="tel" placeholder="0801 234 5678" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all" required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email Address */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
              <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all" required />
            </div>

            {/* LGA Dropdown */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Local Government Area</label>
              <select className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-red bg-white transition-all" required>
                <option value="">Select your LGA...</option>
                {lgas.map(lga => <option key={lga} value={lga}>{lga}</option>)}
              </select>
            </div>
          </div>

          {/* Support Type */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">How would you like to support?</label>
            <select className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-red bg-white transition-all" required>
              <option value="">Select an area of support...</option>
              <option value="Volunteer">Volunteer</option>
              <option value="Mobilization">Mobilization</option>
              <option value="Professional Support">Professional Support</option>
              <option value="Media/Content">Media/Content</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Submit Button */}
          <button type="button" className="w-full py-4 mt-4 bg-brand-red text-white font-bold text-lg rounded-md hover:bg-red-700 transition-colors shadow-md">
            Submit Application
          </button>
        </form>

      </div>
    </div>
  );
}
