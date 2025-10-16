import React from "react";
import Blogs from "./Blogs";

const BlogHeader = () => {
  return (
    <>
      <div className="py-4 mt-20 flex justify-center shadow-md bg-stone-800">
        <nav className="text-white text-lg">
          <ol className="flex space-x-2">
            <li>
              <a href="/" className="hover:text-lime-500">
                Home
              </a>
            </li>
            <li>
              <span className="text-gray-500"> &gt; </span>
            </li>
            <li>
              <a href="/blogs" className="">
                Our Blogs
              </a>
            </li>
          </ol>
        </nav>
      </div>
      <Blogs />
    </>
  );
};

export default BlogHeader;
