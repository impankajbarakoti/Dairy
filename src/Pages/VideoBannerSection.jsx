import React from "react";
import { Play } from "lucide-react"; // Using Lucide React for the play icon

// VideoBannerSection Component (using rafce pattern)
const VideoBannerSection = () => {
  // Use a high-quality public domain image to mimic the overhead view of animals
  const BACKGROUND_IMAGE_URL =
    "https://milatte.like-themes.com/wp-content/uploads/2024/11/video_parallax_02.jpg";

  // Function to handle video tour click (placeholder for now)
 

  return (
    <div
      className="relative h-[400px] sm:h-[400px] w-full flex items-center justify-center p-4 sm:p-8 font-sans overflow-hidden"
      style={{
        backgroundImage: `url('${BACKGROUND_IMAGE_URL}')`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed", // This makes the background image fixed
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for text contrast and mood */}
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

      {/* Centered Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-white font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-8 max-w-2xl mx-auto">
          Work Every Day <br />
          to Produce Delicious and Fresh Milk
        </h2>

        {/* Video Tour Play Button */}
      
      </div>
    </div>
  );
};

export default VideoBannerSection;
