import React from "react";
// Lucide React icons for the bottom section
// Fix: 'Goat' and 'Cheese' were replaced with available icons.
import { Leaf, Milk, Store, Package } from "lucide-react";

// TraditionsSection Component (using rafce pattern)
const TraditionsSection = () => {
  // Image URL for the farmer with sheep
  const farmerImage =
    "https://milatte.like-themes.com/wp-content/uploads/2024/11/about_img-1-450x309.jpg";

  // Data for the bottom feature cards
  const features = [
    {
      id: 1,
      icon: Leaf,
      title: "100% Organic Product",
      description: "Guaranteed quality from our farm to your table",
    },
    {
      id: 2,
      // Icon changed from Goat to Milk
      icon: Milk,
      title: "High Quality Milk",
      description:
        "Freshness and naturalness are the main principles of our production",
    },
    {
      id: 3,
      // Icon changed from Cheese to Store (representing a wide assortment)
      icon: Store,
      title: "Wide Assortment",
      description:
        "We produce not only traditional but also innovative products",
    },
    {
      id: 4,
      icon: Package,
      title: "Perfect Packaging",
      description:
        "Freshness and naturalness are the main principles of our production",
    },
  ];

  return (
    <div className="bg-white py-20 px-4 sm:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Title, Description, Signature & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Side: Text Content */}
          <div className="flex flex-col text-center lg:text-left px-4">
            <h2 className="text-4xl sm:text-5xl font-serif text-gray-800 font-bold leading-tight mb-6">
              Dairy Production <br className="hidden sm:inline" />
              Traditions, Proven by <br className="hidden sm:inline" />
              Time
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
              Our artisans carefully follow traditions passed down through
              generations to ensure every wheel of cheese is flawless. We use
              only natural ingredients and age our cheeses in special
              conditions.
            </p>
            {/* Signature Placeholder */}
            <div className="text-gray-800 font-serif text-2xl italic mt-4">
              {/* This could be an image of a signature, or just stylized text */}
              Bunnetto
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-lg h-[400px] sm:h-[450px] overflow-hidden rounded-lg shadow-xl">
              <img
                src={farmerImage}
                alt="Smiling farmer with sheep in a barn"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section: Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-gray-200">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="flex flex-col items-center text-center p-4"
              >
                {/* Icon */}
                <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-gray-100 text-amber-500">
                  <IconComponent className="w-8 h-8" />
                </div>
                {/* Title */}
                <h3 className="text-lg font-serif font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  {feature.description}
                </p>
                {/* Arrow Link */}
                <a
                  href="#"
                  className="flex items-center text-sm font-semibold text-amber-500 hover:text-gray-800 transition duration-200"
                >
                  <span className="mr-1">&rarr;</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TraditionsSection;
