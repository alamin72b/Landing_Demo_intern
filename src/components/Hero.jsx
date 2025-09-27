import React from "react";
import profileImage from "../assets/images/Group.png";
import overlayImage from "../assets/images/overlay.png";

const Hero = ({
  intro = "Hi I am",
  name = "Muhammad Umair",
  title = "UI & UX",
  deg = "Designer",
  bio = "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra",
  buttonText = "Hire Me",
  socialLinks = [
    {
      icon: "/icons/Vector.png",
      href: "https://facebook.com/yourhandle",
      label: "Facebook",
    },
    {
      icon: "/icons/Vector(1).png",
      href: "https://twitter.com/yourhandle",
      label: "Twitter",
    },
    {
      icon: "/icons/Vector(2).png",
      href: "https://instagram.com/yourhandle",
      label: "Instagram",
    },
    {
      icon: "/icons/Vector(3).png",
      href: "https://linkedin.com/in/yourhandle",
      label: "LinkedIn",
    },
  ],
  onHireClick = () => alert("Opening contact form!"),
}) => {
  return (
    <section
      id="home"
      className="py-12 bg-white flex items-center justify-center relative overflow-hidden"
    >
      <div className="flex flex-col items-center md:items-start md:flex-row md:justify-between gap-8 md:gap-12 w-full max-w-4xl px-4 md:px-0">
        {/* Left: Text Content */}
        <div className="flex-1 space-y-2 text-center md:text-left max-w-sm">
          <p className="text-base font-medium text-gray-700">{intro}</p>
          <h2 className="text-3xl font-bold text-orange-500 leading-tight">
            {name}
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-none">
            {title}
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-none md:ml-32">
            {deg}
          </h1>
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">{bio}</p>
          <button
            onClick={onHireClick}
            className="mt-4 px-6 py-2 text-white bg-orange-500 rounded-md font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all duration-200"
            aria-label="Hire Muhammad Umair for UI/UX design"
          >
            {buttonText}
          </button>
        </div>
        {/* Right: Profile Image with Overlays and Social Below */}
        <div className="hidden md:flex-1 md:flex flex-col items-center relative mt-8 md:mt-0">
          <div className="relative w-56 h-56 md:w-64 md:h-64">
            <img
              src={profileImage}
              alt={`${name}, ${title}`}
              className="w-full h-[90%] object-contain"
              loading="lazy"
            />
            {/* Orange Rectangular Bar over Eyes */}
            <img
              src={overlayImage}
              alt="Overlay on profile image"
              className="absolute top-10 left-0 w-full h-10 opacity-90 md:top-7"
              loading="lazy"
            />
          </div>
          {/* Social Links Below Photo */}
          <div className="mt-6 md:mt-14 flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 flex items-center justify-center text-gray-800 hover:text-orange-500 transition-colors duration-200"
                aria-label={`Follow on ${link.label}`}
              >
                <img src={link.icon} alt={link.label} className="w-5 h-5" />{" "}
                {/* Or use font icons */}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;