"use client";

import { useState } from "react";
import { submitVolunteer } from "../actions";

export default function GetInvolved() {
  const lgas = [
    "Asa", "Baruten", "Edu", "Ekiti", "Ifelodun", "Ilorin East", "Ilorin South",
    "Ilorin West", "Irepodun", "Isin", "Kaiama", "Moro", "Offa", "Oke Ero",
    "Oyun", "Pategi"
  ];

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    lga: "",
    supportType: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch("/api/volunteers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: "success", text: "Thank you! Your application has been submitted." });
        setFormData({ fullName: "", phone: "", email: "", lga: "", supportType: "" });
      } else {
        setMessage({ type: "error", text: data.error || "Something went wrong. Please try again." });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Failed to submit. Please check your connection." });
    } finally {
      setLoading(false);
    }
  };

  // This function intercepts the form submission to run our Server Action
  async function clientAction(formData: FormData) {
    const response = await submitVolunteer(formData);
    
    if (response.success) {
      alert("Application submitted successfully! Welcome to the movement.");
      document.querySelector("form")?.reset(); // Clears the form after success
    } else {
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="min-h-screen bg-brand-gray py-16 md:py-24 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-sm border-t-4 border-t-brand-red">
        
                <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-black mb-4">
            Be Part of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-600 animate-pulse">Movement</span>
          </h1>
        </div>


        {/* Messages */}
        {message && (
          <div className={`p-4 mb-6 rounded-md ${message.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>
            {message.text}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} action={clientAction} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Engr. John Doe"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="0801 234 5678"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Local Government Area</label>
              <select
                name="lga"
                value={formData.lga}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-red bg-white transition-all"
                required>
                <option value="">Select your LGA...</option>
                {lgas.map(lga => <option key={lga} value={lga}>{lga}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">How would you like to support?</label>
            <select
              name="supportType"
              value={formData.supportType}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-red bg-white transition-all"
              required>
              <option value="">Select an area of support...</option>
              <option value="Volunteer">Volunteer</option>
              <option value="Mobilization">Mobilization</option>
              <option value="Professional Support">Professional Support</option>
              <option value="Media/Content">Media/Content</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 mt-4 bg-brand-red text-white font-bold text-lg rounded-md hover:bg-red-700 transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed">
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>

      </div>
    </div>
  );
}