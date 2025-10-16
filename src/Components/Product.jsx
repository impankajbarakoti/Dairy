import React from "react";

// Component using the rafce pattern, named ProductSection
const Product = () => {
  const products = [
    {
      id: 1,
      name: "Fresh Milk",
      imageUrl:
        "https://milatte.like-themes.com/wp-content/uploads/2024/11/cat_01-753x1024.jpg",
      altText: "Bottles of fresh milk",
    },
    {
      id: 2,
      name: "Blue Cheeses",
      imageUrl:
        "https://milatte.like-themes.com/wp-content/uploads/2024/11/cheese_02-753x1024.jpg",
      altText: "Wedges of blue cheese on a cutting board",
    },
    {
      id: 3,
      name: "Dairy Products",
      imageUrl:
        "https://milatte.like-themes.com/wp-content/uploads/2024/11/cat_03-753x1024.jpg",
      altText: "Jar of yogurt or cream being drizzled with milk",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center justify-center py-16 px-4 font-sans">
      {/* Hero Section Styling */}
    

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white mb-16">
        <p className="text-sm tracking-[0.3em] uppercase font-semibold">
          OUR PRODUCTS
        </p>
        <h2 className="text-5xl sm:text-6xl font-serif font-bold leading-tight">
          Natural Dairy Products
        </h2>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative group overflow-hidden bg-white rounded-lg shadow-lg"
          >
            {/* Image Container with Custom Aspect Ratio (Hero Look) */}
            <div className="relative w-full h-72 sm:h-96 lg:h-[400px] overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.altText}
                
              />
            </div>

            {/* Product Name */}
            <div className=" p-6 text-center absolute inset-x-0 bottom-0 rounded-b-lg">
              <h3 className="text-2xl  text-white  sm:text-3xl font-serif font-semibold group-hover:text-amber-300 transition-colors duration-300">
                {product.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
