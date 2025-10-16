import React from "react";

// PrinciplesSection Component (using rafce pattern)
const PrinciplesSection = () => {
  // Image URLs
  const milkBottleImage =
    "https://milatte.like-themes.com/wp-content/uploads/2024/11/milk-1-480x617.png"; // Milk bottle with label
  const cheeseWedgeImage =
    "https://milatte.like-themes.com/wp-content/uploads/2024/11/milk-2-300x198.png"; // Cheese wedge
  const woodenSpoonImage =
    "https://milatte.like-themes.com/wp-content/uploads/2024/11/milk-3.png"; // Wooden spoon with ingredient

  // Bottom principles/features data
  const principles = [
    {
      id: 1,
      icon: "https://cdn-icons-png.flaticon.com/512/3233/3233816.png", // Example icon for organic
      title: "100% organic product",
      description:
        "Remember to use our tools we have new technologies for producing milk.",
    },
    {
      id: 2,
      icon: "https://milatte.like-themes.com/wp-content/uploads/2024/11/milk-1-480x617.png", // Example icon for fresh milk
      title: "Only fresh milk",
      description:
        "Our main mission is to make available our available for delicious milk.",
    },
    {
      id: 3,
      icon: "https://cdn-icons-png.flaticon.com/512/3028/3028475.png", // Example icon for healthy
      title: "Safe & healthy",
      description:
        "We are provide 100% pure organic and fresh dairy products for the best.",
    },
  ];

  return (
    <div className="bg-white min-h-[70vh] flex flex-col items-center justify-center py-16 px-4 sm:px-8 font-sans overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {/* Floating Images for Decoration */}
        <img
          src={cheeseWedgeImage}
          alt="Cheese wedge"
          className="absolute top-0 left-0 w-20 sm:w-28 opacity-90 -translate-x-1/2 -translate-y-1/2 rotate-12 z-0"
        />
        <img
          src={woodenSpoonImage}
          alt="Wooden spoon with ingredient"
          className="absolute bottom-1/3 right-0 w-24 sm:w-32 opacity-90 translate-x-1/2 rotate-6 z-0"
        />

        {/* Overlapping Milk Bottle Image above Text */}
        <div className="absolute inset-0 flex justify-center items-center z-20 -mt-24 sm:-mt-32 lg:-mt-40">
          <img
            src={milkBottleImage}
            alt="Milk bottle"
            className="w-[200px] sm:w-[250px] lg:w-[300px] h-auto object-contain "
            style={{ transform: "rotate(-5deg)" }} // Slight rotation for effect
          />
        </div>

        {/* Main Headline (Text behind the Milk Bottle) */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-extrabold text-gray-800 leading-tight max-w-4xl mx-auto relative z-0">
          Freshness and <br />
          <span className="text-amber-500">naturalness</span> are the main{" "}
          <br />
          principles of our <span className="text-amber-500">production</span>
        </h2>
      </div>

      {/* Bottom Principles Section */}
      <div className="relative z-20 mt-20 sm:mt-24 lg:mt-12 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-8">
        {principles.map((principle) => (
          <div key={principle.id} className="flex flex-col items-center p-4">
            <img
              src={principle.icon}
              alt={principle.title}
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-lg font-serif font-semibold text-gray-800 mb-2">
              {principle.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {principle.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrinciplesSection;
