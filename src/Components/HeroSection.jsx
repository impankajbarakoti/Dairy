import React from "react";

// Main component using the rafce pattern
const HeroSection = () => {
  // Define content and styles in constants for clarity

  const BACKGROUND_IMAGE_URL =
    "https://milatte.like-themes.com/wp-content/uploads/2024/11/SLIDE_01.jpg";

  // Custom font setup for a classic, high-impact look
  // Note: For a true custom font (like the original's serif), you'd normally configure
  // it in tailwind.config.js. Here, we'll leverage 'font-serif' and system fonts.

  return (
    <div className="h-auto md:min-h-screen  font-sans">
      {/* Hero Section - Full Viewport with Background Image and Dark Overlay */}
      <div
        className="relative h-auto md:h-screen w-full bg-cover mt-5 bg-center flex items-center justify-center p-4 sm:p-8"
        style={{ backgroundImage: `url('${BACKGROUND_IMAGE_URL}')` }}
      >
        {/* Dark Overlay for text contrast (mimics the original's mood) */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Centered Content Container */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          {/* Subtitle / Motto */}
          <p className="text-sm tracking-[0.3em] uppercase text-amber-500 mb-4 font-semibold">
            BORN OF NATURE
          </p>

          {/* Main Title - Uses a serif font and large size for dramatic effect */}
          <h1 className="text-white font-serif text-5xl sm:text-7xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
            CRAFT DAIRY FARM
          </h1>

          {/* Secondary Title / Date */}
          <h2 className="text-white font-serif text-3xl sm:text-5xl lg:text-6xl font-light tracking-wide mb-8">
            SINCE 1965
          </h2>

          {/* Descriptive Text */}
          <p className="text-white text-opacity-80 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            We carefully follow traditions passed down through generations to
            ensure every wheel of cheese is flawless. We use only natural
            ingredients and age our cheeses in special conditions.
          </p>

          {/* Action Button */}
          <button
            className="px-8 py-3 bg-amber-500 text-black font-semibold text-sm uppercase tracking-wider rounded-lg shadow-lg hover:bg-amber-500 transition duration-300 transform hover:scale-105"
            aria-label="Read more about the Craft Dairy Farm"
          >
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
