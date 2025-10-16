import React from "react";

// FarmStats Component (using rafce pattern)
const FarmStats = () => {
  // Stats data
  const stats = [
    {
      id: 1,
      image:
        "https://milatte.like-themes.com/wp-content/uploads/2024/11/01_cow-768x698.jpg", // Pexels image for cow
      alt: "Brown and white cow standing",
      number: "87",
      label: "Cows",
      description:
        "Our cows are fed only the best grasses and feeds, which directly affects the quality of the milk. We carefully monitor their diet",
    },
    {
      id: 2,
      image:
        "https://milatte.like-themes.com/wp-content/uploads/2024/11/02_goat-768x698.jpg", // Pexels image for goat
      alt: "White goat standing",
      number: "236",
      label: "Goats",
      description:
        "Fresh milk is the foundation of our products. We milk our cows twice a day to provide you with the highest quality milk",
    },
    {
      id: 3,
      image:
        "https://milatte.like-themes.com/wp-content/uploads/2024/11/03_milk-768x698.jpg", // Pexels image for milk bottles
      alt: "Crate of fresh milk bottles",
      number: "4K+",
      label: "Liters per day",
      description:
        "We are proud to follow centuries-old cheese-making traditions. Every batch of cheese is the result of a long aging process and meticulous effort",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-16 px-4 sm:px-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 xl:gap-16">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="flex flex-col items-center text-center px-4"
          >
            {/* Image Section */}
            <div className="relative w-full max-w-[250px] h-[200px] mb-8 overflow-hidden flex items-end justify-center">
              <img
                src={stat.image}
                alt={stat.alt}
                className="max-h-full w-auto object-contain" // object-contain to ensure entire animal is visible
              />
            </div>

            {/* Number */}
            <h3 className="text-6xl font-serif text-gray-800 font-bold mb-4">
              {stat.number}
            </h3>

            {/* Label */}
            <p className="text-2xl font-serif text-gray-700 font-semibold mb-4">
              {stat.label}
            </p>

            {/* Description */}
            <p className="text-gray-600 text-base leading-relaxed max-w-xs">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FarmStats;
