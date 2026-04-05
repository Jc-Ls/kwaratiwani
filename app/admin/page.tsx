"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Volunteer {
  id: number;
  fullName: string;
  phone: string;
  email: string;
  lga: string;
  supportType: string;
  createdAt: string;
}

interface Idea {
  id: number;
  name: string | null;
  lga: string;
  suggestion: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'volunteers' | 'ideas'>('volunteers');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [volRes, ideasRes] = await Promise.all([
        fetch("/api/volunteers"),
        fetch("/api/ideas")
      ]);

      if (volRes.ok) {
        const data = await volRes.json();
        setVolunteers(data.data || []);
      }

      if (ideasRes.ok) {
        const data = await ideasRes.json();
        setIdeas(data.data || []);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const downloadCSV = async (type: 'volunteers' | 'ideas') => {
    try {
      const url = `/api/${type}/export`;
      const response = await fetch(url);
      const blob = await response.blob();

      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = `${type}-export.csv`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("Error downloading CSV:", error);
    }
  };

  return (
    <div className="min-h-screen bg-brand-gray py-8 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-extrabold text-brand-black">Admin Dashboard</h1>
            <Link href="/" className="text-brand-red hover:underline font-medium">← Back to Site</Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-l-brand-red">
            <h3 className="text-gray-600 text-sm font-medium">Total Volunteers</h3>
            <p className="text-4xl font-bold text-brand-black mt-2">{volunteers.length}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-l-brand-red">
            <h3 className="text-gray-600 text-sm font-medium">Total Ideas</h3>
            <p className="text-4xl font-bold text-brand-black mt-2">{ideas.length}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm">

          <div className="border-b border-gray-200 flex">
            <button
              onClick={() => setActiveTab('volunteers')}
              className={`flex-1 py-4 px-6 font-semibold text-center ${
                activeTab === 'volunteers'
                  ? 'text-brand-red border-b-2 border-b-brand-red'
                  : 'text-gray-600 hover:text-gray-900'
              }`}>
              Volunteers ({volunteers.length})
            </button>
            <button
              onClick={() => setActiveTab('ideas')}
              className={`flex-1 py-4 px-6 font-semibold text-center ${
                activeTab === 'ideas'
                  ? 'text-brand-red border-b-2 border-b-brand-red'
                  : 'text-gray-600 hover:text-gray-900'
              }`}>
              Ideas ({ideas.length})
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {loading ? (
              <p className="text-center text-gray-600">Loading...</p>
            ) : activeTab === 'volunteers' ? (
              <div>
                <button
                  onClick={() => downloadCSV('volunteers')}
                  className="mb-4 px-4 py-2 bg-brand-red text-white rounded-md hover:bg-red-700 transition-colors font-medium">
                  Download CSV
                </button>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold text-gray-700">Name</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-700">Email</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-700">Phone</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-700">LGA</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-700">Support Type</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-700">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {volunteers.length === 0 ? (
                        <tr><td colSpan={6} className="px-4 py-6 text-center text-gray-500">No volunteers yet</td></tr>
                      ) : (
                        volunteers.map((vol) => (
                          <tr key={vol.id} className="border-t border-gray-200 hover:bg-gray-50">
                            <td className="px-4 py-3">{vol.fullName}</td>
                            <td className="px-4 py-3 text-blue-600">{vol.email}</td>
                            <td className="px-4 py-3">{vol.phone}</td>
                            <td className="px-4 py-3">{vol.lga}</td>
                            <td className="px-4 py-3"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">{vol.supportType}</span></td>
                            <td className="px-4 py-3 text-gray-600 text-xs">{new Date(vol.createdAt).toLocaleDateString()}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div>
                <button
                  onClick={() => downloadCSV('ideas')}
                  className="mb-4 px-4 py-2 bg-brand-red text-white rounded-md hover:bg-red-700 transition-colors font-medium">
                  Download CSV
                </button>
                <div className="space-y-4">
                  {ideas.length === 0 ? (
                    <p className="text-center text-gray-500 py-8">No ideas submitted yet</p>
                  ) : (
                    ideas.map((idea) => (
                      <div key={idea.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-semibold text-brand-black">{idea.name || 'Anonymous'}</h4>
                            <p className="text-sm text-gray-600">LGA: {idea.lga}</p>
                          </div>
                          <span className="text-xs text-gray-500">{new Date(idea.createdAt).toLocaleDateString()}</span>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{idea.suggestion}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
