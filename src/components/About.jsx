import React from "react";
import profileImage from "../assets/images/about-profile.png";
import overlayImage from "../assets/images/overlay.png";

const About = ({
  title = "About Me",
  bio = "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra",
  skills = [
    { label: "UI", value: 90 },
    { label: "Website Design", value: 90 }, // 0-100 for bar length
    { label: "App Design", value: 80 },
    { label: "Graphic Design", value: 70 },
  ],
}) => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-12 w-full max-w-4xl mx-auto px-4 md:px-0">
        <div className="relative hidden md:flex justify-center w-full md:w-1/3">
          <div className="relative w-80 h-auto md:w-112 md:h-auto">
            <img
              src={profileImage}
              alt="Muhammad Umair in About section"
              className="w-full h-auto rounded-full object-contain max-h-96"
              loading="lazy"
            />
            <img
              src={overlayImage}
              alt="Overlay on profile image"
              className="absolute top-12 left-0 w-full h-10 opacity-90 md:top-7"
              loading="lazy"
            />
          </div>
        </div>
        {/* Right: Content */}
        <div className="flex-1 space-y-2 text-center md:text-left max-w-sm md:mt-0">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
          {/* Skills: UX Design Label + Progress Bars */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">UX Design</h3>
            {skills.map((skill, index) => (
              <div key={index} className="space-y-1">
                <label className="text-xs font-medium text-gray-700">
                  {skill.label}
                </label>
                <div
                  role="progressbar"
                  aria-valuenow={skill.value}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  className="h-2 bg-gray-200 rounded-full overflow-hidden"
                >
                  <div
                    className="h-full bg-gradient-to-r from-orange-500 to-orange-300"
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;