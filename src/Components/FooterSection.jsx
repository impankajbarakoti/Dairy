import React from "react";
import { Send } from "lucide-react"; // Using Lucide React for the send icon

// FooterSection Component (using rafce pattern)
const FooterSection = () => {
  // Navigation links data
  const exploreLinks = [
    { name: "HOME", href: "/home" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACTS", href: "/contact" },
    { name: "BLOGS", href: "/blogs" },
  ];

  const productLinks = [
    { name: "OUR BLOG", href: "/blogs" },
    { name: "BLOG DETAILS", href: "/blog/1" },
    
  ];

  return (
    <div className=" bg-[#1e1e3f] py-20 px-4 sm:px-8 font-sans overflow-hidden">
      {/* Background illustration (subtle, non-intrusive) */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center opacity-10"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/dark-barn.png')`, // Example subtle texture
          backgroundSize: "cover", // Adjust as needed
        }}
        aria-hidden="true" // Decorative, not crucial for screen readers
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-white">
        {/* Left Section: Main Title */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h2 className="text-1xl sm:text-2xl lg:text-2xl font-serif font-bold leading-tight">
            Dairy production <br />
            traditions, proven <br />
            by time
          </h2>
        </div>

        {/* Explore Links */}
        <div className="flex flex-col text-left mt-8 md:mt-0">
          <h3 className="text-xl font-serif font-semibold text-amber-300 mb-6">
            Explore
          </h3>
          <ul className="space-y-3">
            {exploreLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="flex items-center justify-start text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <span className="text-amber-300 mr-2 text-sm">&rsaquo;</span>{" "}
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Products Links */}
        <div className="flex flex-col text-left mt-8 md:mt-0">
          <h3 className="text-xl font-serif font-semibold text-amber-300 mb-6">
            Products
          </h3>
          <ul className="space-y-3">
            {productLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="flex items-center justify-start text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <span className="text-amber-300 mr-2 text-sm">&rsaquo;</span>{" "}
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Subscribe Section */}
        <div className="flex flex-col text-left mt-8 md:mt-0">
          <h3 className="text-xl font-serif font-semibold text-amber-300 mb-6">
            Subscribe
          </h3>
          <p className="text-gray-400 text-base mb-6 leading-relaxed max-w-xs md:max-w-none mx-auto md:mx-0">
            Subscribe to our newsletter and stay up to date with all the news
            and events
          </p>
          <div className="relative max-w-xs mx-auto md:mx-0">
            <input
              type="email"
              placeholder="Your email..."
              className="w-full pl-5 pr-12 py-3 rounded-full bg-[#313150] text-white placeholder-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors duration-200"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-400 hover:text-white transition-colors duration-200"
              aria-label="Subscribe"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
