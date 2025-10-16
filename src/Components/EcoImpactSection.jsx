import React from "react";

// EcoImpactSection Component (using rafce pattern)
const EcoImpactSection = () => {
  // Static content details
  const cheeseImageUrl =
    "https://milatte.like-themes.com/wp-content/uploads/2024/11/img_01-1279x1536.jpg"; // Rustic cheese image
  const kidWithGoatImageUrl =
    "https://milatte.like-themes.com/wp-content/uploads/2024/11/img_02-1536x1029.jpg"; // Child with goat image

  const textBlocks = [
    {
      title: "Laboratory Testing",
      description:
        "Our artisans carefully follow traditions passed down through generations to ensure every wheel of cheese is flawless.",
    },
    {
      title: "Pasteurization",
      description:
        "We pride ourselves on processing milk directly from the farm, preserving its maximum nutritional benefits and flavor.",
    },
  ];

  return (
    <div className="bg-[#1e1e3f] min-h-[70vh] py-20 px-4 sm:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <h2 className="text-2xl sm:text-4xl font-serif font-extrabold text-white max-w-2xl mb-16 leading-tight">
          Our farm uses{" "}
          <span className="text-amber-300">eco-friendly technologies</span> and
          practices to minimize the environmental impact.
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Cheese Image and Text Blocks */}
          <div className="flex flex-col space-y-12">
            {/* Top Text Blocks (Side by side for large screens) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-white">
              {textBlocks.map((block, index) => (
                <div key={index} className="flex flex-col">
                  <h3 className="text-xl font-serif font-semibold text-amber-300 mb-3">
                    {block.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                    {block.description}
                  </p>
                  <a
                    href="#"
                    className="flex items-center text-sm font-semibold text-amber-300 group hover:text-white transition duration-300"
                  >
                    READ MORE
                    <span className="ml-2 transform group-hover:translate-x-1 transition duration-300">
                      &rarr;
                    </span>
                  </a>
                </div>
              ))}
            </div>

            {/* Bottom Left Image (Cheese) */}
            <div className="relative w-full overflow-hidden rounded-lg shadow-xl">
              <img
                src={cheeseImageUrl}
                alt="Artisan cheese rounds sprinkled with herbs"
                className="w-[700px] h-[500px] object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Right Column: Large Image (Child with Goat) */}
          <div className="relative w-full h-[550px] lg:h-[550px] overflow-hidden rounded-lg shadow-2xl">
            <img
              src={kidWithGoatImageUrl}
              alt="Smiling child hugging a white baby goat"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoImpactSection;
