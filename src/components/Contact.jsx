import React, { useState } from "react";

const Contact = ({
  title = "Lets Design Together",
  bio = "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium",
}) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", email); // Integrate with email API (e.g., Formspree)
    setEmail("");
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="text-center space-y-4 mb-8">
        <h2 className="text-4xl font-bold text-gray-900">{title}</h2>
        <p className="text-gray-600 text-sm leading-relaxed max-w-2xl mx-auto">
          {bio}
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email"
          className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
          required
          aria-label="Enter your email"
        />
        <button
          type="submit"
          className="px-6 py-3 text-white bg-orange-500 rounded-md font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all duration-200 shadow-sm"
        >
          Contact Me
        </button>
      </form>
    </section>
  );
};

export default Contact;
