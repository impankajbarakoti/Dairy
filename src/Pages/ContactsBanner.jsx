import React from "react";

// AboutUsBanner Component (using rafce pattern)
const ContactsBanner = () => {
  // Use a high-quality public domain image for the barn background
  const BACKGROUND_IMAGE_URL =
    "https://images.pexels.com/photos/355747/pexels-photo-355747.jpeg";
  // Another option: "https://images.pexels.com/photos/161858/house-old-home-architecture-161858.jpeg"

  return (
    <div
      className="relative h-[400px] sm:h-[500px] w-full flex items-center justify-center p-4 sm:p-8 font-sans overflow-hidden"
      style={{
        backgroundImage: `url('${BACKGROUND_IMAGE_URL}')`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed", // This makes the background image fixed
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for text contrast and mood */}
      {/* <div className="absolute inset-0 bg-black opacity-40"></div> */}

      {/* Centered Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-white font-serif text-5xl sm:text-6xl font-bold mb-4">
          Contact Us
        </h1>
        {/* Breadcrumbs */}
        <p className="text-gray-300 text-sm">
          <a
            href="/"
            className="hover:text-amber-400 transition-colors duration-200"
          >
            HOME
          </a>
          <span className="mx-2">/</span>
          <span className="text-amber-400">CONTACT US</span>
        </p>
      </div>
    </div>
  );
};

export default ContactsBanner;
