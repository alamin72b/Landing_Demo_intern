import React from "react";

const Testimonials = ({
  title = "Testimonials",
  bio = "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium",
  testimonial = {
    quote:
      "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor quisque quis dui.",
    name: "Name",
    role: "CEO",
    photo: `${import.meta.env.BASE_URL}images/testimonial-photo.jpg`,
  },
}) => {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-4xl font-bold text-gray-900">{title}</h2>
        <p className="text-gray-600 text-sm leading-relaxed max-w-2xl mx-auto">
          {bio}
        </p>
      </div>
      {/* Testimonial Card */}
      <div className="max-w-2xl mx-auto bg-white rounded-lg p-6 shadow-sm relative">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left">
          <div className="flex flex-col items-center shrink-0">
            <img
              src={testimonial.photo}
              alt={`${testimonial.name}, ${testimonial.role}`}
              className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover shadow-md"
              loading="lazy"
            />
          </div>
          <div className="flex-1">
            <span className="text-orange-500 text-4xl leading-none">“</span>
            <blockquote className="text-gray-600 text-sm leading-relaxed inline">
              {testimonial.quote}
            </blockquote>
            <h3 className="text-lg font-semibold text-gray-800 mt-2">
              {testimonial.name}
            </h3>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        </div>
      </div>
      {/* Slider Indicators */}
      <div className="mt-8 flex justify-center space-x-2">
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
      </div>
    </section>
  );
};

export default Testimonials;
