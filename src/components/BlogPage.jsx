import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CategorySelection from "./CategorySelection";
import Pagination from "./Pagination";
import BlogCards from "./BlogCards";
import Sidebar from "./Sidebar";
import blogData from "../assets/blogsData.json";


const BlogPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12; // Number of blogs per page
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);
  
    // 1) Filter blogs by selected category (if any)
    const filteredBlogs = selectedCategory
      ? blogData.filter((blog) => blog.category === selectedCategory)
      : blogData;
  
    // 2) Handle pagination (slice the filtered array)
    const totalBlogs = filteredBlogs.length;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const blogsToShow = filteredBlogs.slice(startIndex, endIndex);
  
    // 3) Handle page change
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    // 4) Handle category change
    const handleCategoryChange = (category) => {
      setSelectedCategory(category);
      setActiveCategory(category);
      // Reset to first page whenever a new category is chosen
      setCurrentPage(1);
    };
  
    return (
        <div>
      {/* Category Bar */}
      <div className="sticky top-0 bg-white z-50">
        <CategorySelection onSelectCategory={handleCategoryChange} activeCategory={activeCategory} />
      </div>

      {/* Blog Cards + Sidebar */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="lg:w-[75%] w-full">
          <BlogCards
            blogs={blogsToShow}
            currentPage={currentPage}
            selectedCategory={selectedCategory}
            pageSize={pageSize}
          />
        </div>
        
        <div className="lg:w-[25%] w-full">
          <div className="lg:sticky lg:top-24">
            <Sidebar />
          </div>
        </div>
      </div>

      <Pagination
       currentPage={currentPage}
       onPageChange={handlePageChange}
       totalBlogs={filteredBlogs.length} 
       pageSize={pageSize}
      />
        </div>
    );
};


export default BlogPage;
