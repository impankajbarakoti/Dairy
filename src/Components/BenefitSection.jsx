import React from "react";

// BenefitSection कॉम्पोनेंट (rafce पैटर्न का उपयोग करके)
const BenefitSection = () => {
  // इमेज URL और बेनिफ़िट्स डेटा
  const imageUrl =
    "https://milatte.like-themes.com/wp-content/uploads/2024/11/owner.jpg"; // Pexels से मिलती-जुलती पब्लिक इमेज

  const benefits = [
    {
      number: "01.",
      title: "Caring for the Animals",
      description:
        "Our artisans carefully follow traditions passed down through generations to ensure every wheel of cheese is flawless.",
    },
    {
      number: "02.",
      title: "Innovative Products",
      description:
        "Our range includes not only classic cheeses but also cheeses with herbs, spices, and other natural ingredients",
    },
    {
      number: "03.",
      title: "Follow Traditions",
      description:
        "We use only natural ingredients and age our cheeses in special conditions to achieve the perfect taste",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-16 px-4 sm:px-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* बायां हिस्सा: टेक्स्ट सामग्री (Text Content) */}
        <div className="flex flex-col text-left px-4">
          <p className="text-sm tracking-[0.3em] uppercase text-gray-600 mb-4 font-semibold">
            OUR BENEFITS
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-gray-800 font-bold leading-tight mb-8">
            Learn about the <br className="hidden sm:inline" />
            benefits of{" "}
            <span className="relative inline-block">
              natural
              <span className="absolute left-0 bottom-0 w-full h-2 bg-yellow-300 opacity-60 rounded-full -rotate-2 transform"></span>
            </span>{" "}
            dairy products
          </h2>

          {/* बेनिफ़िट आइटम्स */}
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-start sm:items-center"
              >
                <p className="text-3xl font-serif text-amber-500 font-bold mr-4 mb-2 sm:mb-0">
                  {benefit.number}
                </p>
                <div>
                  <h3 className="text-xl font-serif text-gray-800 font-semibold mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* दायां हिस्सा: इमेज (Image) */}
        <div className="relative flex justify-center lg:justify-end px-4">
          <div className="relative w-[350px] h-[500px] sm:w-[400px] sm:h-[550px] lg:w-[450px] lg:h-[600px] overflow-hidden shadow-2xl rounded-lg">
            <img
              src={imageUrl}
              alt="A happy cheesemaker with a large cheese wheel"
              className="w-full h-full object-cover"
            />
            {/* इमेज के ऊपर कोने में सफेद आकृति (Top-right decorative element) */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-90 transform translate-x-1/2 -translate-y-1/2 rotate-12 filter blur-sm"></div>
            {/* इमेज के नीचे कोने में सफेद आकृति (Bottom-left decorative element) */}
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-80 transform -translate-x-1/2 translate-y-1/2 -rotate-6 filter blur-sm"></div>
            {/* वॉटरमार्क या हस्ताक्षर */}
            <div className="absolute bottom-6 left-6 text-white text-lg font-serif italic opacity-90">
              Bunnetto
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitSection;
