import React from "react";
// Importing specific icons from Lucide React
import { Phone, MapPin, Mail } from "lucide-react";

// HeroContactSection Component (using rafce pattern)
const HeroContactSection = () => {
  // Use a high-quality public domain image to mimic the atmospheric, foggy look
  const BACKGROUND_IMAGE_URL =
    "https://milatte.like-themes.com/wp-content/uploads/2024/11/contact_bg.jpg";

  const contactInfo = [
    {
      id: 1,
      icon: Phone, // React Icon component
      title: "Phone",
      line1: "+1 234 567 890",
      line2: "+1 234 567 891",
    },
    {
      id: 2,
      icon: MapPin, // React Icon component
      title: "Address",
      line1: "9580 Wilshire Blvd.",
      line2: "Beverly Hills, CA 90210",
    },
    {
      id: 3,
      icon: Mail, // React Icon component
      title: "Email/Work Hours",
      line1: "hello@milatte.com",
      line2: "Mon-Sat 9:00 - 18:00",
    },
  ];

  return (
    <div
      className="relative h-[700px] sm:h-[600px] lg:h-[500px] w-full bg-cover overflow-hidden bg-center flex items-center justify-center p-4   sm:p-8 font-sans"
      style={{ backgroundImage: `url('${BACKGROUND_IMAGE_URL}')` }}
    >
      {/* Dark/Brown Overlay for Mood and Text Contrast (Matches the original's tone) */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Fog/Light Overlay (Optional: Helps mimic the hazy glow) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-yellow-900/10"></div>

      {/* Centered Content Container */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Subtitle / Motto */}
        <p className="text-white text-opacity-80 text-sm tracking-widest uppercase mb-4 font-semibold">
          — — —
        </p>

        {/* Main Question / Headline */}
        <h2 className="text-white font-serif text-2xl sm:text-3xl lg:text-4xl font-light italic mb-8 sm:mb-12 leading-normal">
          Why are our dairy products so delicious?
          <span className="block font-bold mt-1">Discover the secret!</span>
        </h2>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-4 lg:gap-12 mt-8 sm:mt-12">
          {contactInfo.map((item) => {
            const IconComponent = item.icon; // Assign the component to a variable
            return (
              <div key={item.id} className="text-center">
                {/* Icon Container */}
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-amber-400 bg-opacity-80">
                  <IconComponent className="text-white w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-serif font-semibold text-amber-300 mb-2">
                  {item.title}
                </h3>

                {/* Contact Lines */}
                <p className="text-white text-opacity-90 text-sm font-light leading-relaxed">
                  {item.line1}
                </p>
                <p className="text-white text-opacity-90 text-sm font-light leading-relaxed">
                  {item.line2}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
 
};

export default HeroContactSection; 
