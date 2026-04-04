export default function Agenda() {
  const pillars = [
    {
      title: "Jobs & Enterprise",
      desc: "Creating an enabling environment for businesses, startups, and entrepreneurs.",
      icon: "💼"
    },
    {
      title: "Education & Skills",
      desc: "Improving access to quality education and practical skills.",
      icon: "📚"
    },
    {
      title: "Infrastructure & Urban Order",
      desc: "Developing organized, functional public systems.",
      icon: "🏗️"
    },
    {
      title: "Security & Community Trust",
      desc: "Advocating effective and collaborative security structures.",
      icon: "🛡️"
    },
    {
      title: "Youth & Innovation",
      desc: "Supporting creativity, technology, and innovation.",
      icon: "💡"
    },
    {
      title: "Inclusive Governance",
      desc: "Ensuring every voice and community matters.",
      icon: "🤝"
    }
  ];

  return (
    <div className="bg-brand-gray min-h-screen py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-black mb-6">
            Kwara Ti Wa Ni in Action
          </h1>
          <div className="h-1 w-24 bg-brand-red mx-auto"></div>
        </div>

        {/* 6-Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow border-t-4 border-t-brand-red"
            >
              <div className="text-4xl mb-4">{pillar.icon}</div>
              <h3 className="text-2xl font-bold text-brand-black mb-3">{pillar.title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium">{pillar.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
