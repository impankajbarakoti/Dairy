import React from "react";
import {
  Phone,
  MapPin,
  Mail,
  User,
  BookOpen,
  MessageSquare,
  Mail as EmailIcon,
  Phone as PhoneIcon,
  PenSquare,
} from "lucide-react";

// ContactFormSection Component (using rafce pattern)
const ContactFormSection = () => {
  return (
    <div className="bg-white py-20 px-4 sm:px-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
        {/* Left Column: Contact Info and Motto */}
        <div className="flex flex-col text-left">
          <p className="text-sm tracking-[0.3em] uppercase text-gray-600 mb-2 font-semibold">
            CONTACT FORM
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif text-gray-800 font-bold leading-tight mb-8">
            Have a questions? <br />
            Contact us now
          </h2>

          {/* Description / Motto */}
          <p className="text-gray-600 text-base leading-relaxed mb-10 max-w-md">
            Our service allows you to hide your geolocation, bypass blocking and
            protect your data. Join over 150 thousand people who trust us to
            keep their life safe.
          </p>

          {/* Contact Details */}
          <div className="space-y-4">
            <div className="flex items-center text-gray-800">
              <Phone className="w-5 h-5 text-amber-500 mr-3" />
              <p className="text-base font-serif font-semibold">
                +9-800-3215-700
              </p>
            </div>
            <div className="flex items-center text-gray-800">
              <MapPin className="w-5 h-5 text-amber-500 mr-3" />
              <p className="text-base font-serif font-semibold">
                256th North Nauville Avenue, TV9302, USA
              </p>
            </div>
            <div className="flex items-center text-gray-800">
              <EmailIcon className="w-5 h-5 text-amber-500 mr-3" />
              <p className="text-base font-serif font-semibold">
                support@emailaddress.com
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="w-full">
          <form className="space-y-6">
            {/* Row 1: Name and Phone Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors duration-200"
                />
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
              <div className="relative">
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors duration-200"
                />
                <PhoneIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Row 2: Email and Subject */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors duration-200"
                />
                <EmailIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors duration-200"
                />
                <BookOpen className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Row 3: Message */}
            <div className="relative">
              <textarea
                placeholder="Message"
                rows="6"
                className="w-full pl-12 pr-4 pt-4 pb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors duration-200 resize-none"
              ></textarea>
              <PenSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="px-10 py-4 bg-amber-500 text-white font-semibold uppercase tracking-wider rounded-full shadow-md hover:bg-amber-600 transition duration-300 transform hover:scale-[1.02]"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
