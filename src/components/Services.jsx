import React from "react";

const Services = ({
  title = "Services",
  bio = "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium",
  services = [
    {
      icon: `${import.meta.env.BASE_URL}icons/ui-ux.png`,
      title: "Ui/Ux",
      desc: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    },
    {
      icon: `${import.meta.env.BASE_URL}icons/web.png`,
      title: "Web Design",
      desc: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    },
    {
      icon: `${import.meta.env.BASE_URL}icons/app.png`,
      title: "App Design",
      desc: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    },
    {
      icon: `${import.meta.env.BASE_URL}icons/graphic.png`,
      title: "Graphic Design",
      desc: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    },
  ],
}) => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-4xl font-bold text-gray-900">{title}</h2>
        <p className="text-gray-600 text-sm leading-relaxed max-w-2xl mx-auto">
          {bio}
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200 space-y-4"
          >
            <img
              src={service.icon}
              alt={`${service.title} icon`}
              className="w-12 h-12 text-orange-500" // SVG fill via class if needed
            />
            <h3 className="text-xl font-semibold text-gray-800">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
