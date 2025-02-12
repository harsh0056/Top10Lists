import React from 'react'
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

const BlogCards = ({ blogs, currentPage, pageSize, selectedCategory }) => {
  const filteredBlogs = blogs
    .filter((blog) => !selectedCategory || blog.category === selectedCategory)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      {filteredBlogs.map((blog) => (
        <Link
          to={`blogs/${blog.id}`}
          state={blog}
          key={blog.id}
          className="block p-5 shadow-lg rounded cursor-pointer flex flex-col h-full"
        >
          {/* Image */}
          <div>
            <img src={blog.image} alt="" className="w-64 h-40 object-cover object-top rounded-lg" />
          </div>

          {/* Title */}
          <h3 className="mt-4 font-bold hover:text-blue-600 cursor-pointer">{blog.title}</h3>

          {/* Spacer to push author & published date to the bottom */}
          <div className="flex-grow"></div>

          {/* Author & Published Date (Stacked at the Bottom) */}
          <div className="mt-auto pt-4">
            <p className="text-gray-600 text-sm flex items-center">
              <FaUser className="mr-2" /> {blog.author}
            </p>
            <p className="text-gray-500 text-xs mt-1">Published: {blog.published_date}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};



export default BlogCards