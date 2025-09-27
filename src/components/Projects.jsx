import React, { useState } from 'react';

const Projects = ({
  title = "My Projects",
  bio = "Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus",
  categories = ["All", "Ui/Ux", "Web Design", "App Design", "Graphic Design"],
  projects = [
    { image: '/images/aircalling.jpg', category: "Web Design", title: "AirCalling Landing Page Design" },
    { image: '/images/business.jpg', category: "Web Design", title: "Business Landing Page Design" },
    { image: '/images/ecom.jpg', category: "Web Design", title: "Ecom Web Page Design" },
    // Add more with categories for filtering
  ]
}) => {
  const [activeCategory, setActiveCategory] = useState("Web Design"); // Default active
  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-4xl font-bold text-gray-900">{title}</h2>
        <p className="text-gray-600 text-sm leading-relaxed max-w-2xl mx-auto">{bio}</p>
      </div>
      {/* Tabs */}
      <div className="flex flex-wrap justify-center space-x-4 space-y-2 mb-8">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
              activeCategory === cat
                ? 'bg-orange-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            aria-pressed={activeCategory === cat}
          >
            {cat}
          </button>
        ))}
      </div>
      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;