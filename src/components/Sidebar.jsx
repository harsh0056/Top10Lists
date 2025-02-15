import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import staticBlogData from '../assets/blogsData.json';

const Sidebar = () => {
    const [popularBlog] = useState(staticBlogData);

    return (
      <div>
        {/* Latest Blogs */}
        <div>
          <h3 className="text-2xl font-semibold px-4">Latest Blogs</h3>
          <div>
            {popularBlog.slice(0, 5).map(blog => (
              <div
                className="my-5 border-b-2 border-spacing-2 px-4"
                key={blog.id}
              >
                <Link to={`/blogs/${blog.id}`} className="group">
                  <h4 className="font-medium mb-2 group-hover:text-orange-500">{blog.title}</h4>
                  <span className="inline-flex items-center pb-2 text-base group-hover:text-orange-500">
                    Read now <FaArrowRight className="mt-1 ml-2" />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Blogs */}
        <div>
          <h3 className="text-2xl font-semibold mt-20 px-4">Popular Now</h3>
          <div>
            {popularBlog.slice(6, 10).map(blog => (
              <div
                className="my-5 border-b-2 border-spacing-2 px-4"
                key={blog.id}
              >
                <Link to={`/blogs/${blog.id}`} className="group">
                  <h4 className="font-medium mb-2 group-hover:text-orange-500">{blog.title}</h4>
                  <span className="inline-flex items-center pb-2 text-base group-hover:text-orange-500">
                    Read now <FaArrowRight className="mt-1 ml-2" />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Sidebar;