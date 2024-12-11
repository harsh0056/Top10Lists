import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CategorySelection from "./CategorySelection";
import Pagination from "./Pagination";
import BlogCards from "./BlogCards";
import Sidebar from "./Sidebar";

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12; // Number of products to show per page
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        async function fetchBlogs() {
            let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;

            // If a category is selected, add it to the request
            if (selectedCategory) {
                url += `&category=${selectedCategory}`;
            }
            const response = await fetch(url);
            const data = await response.json();
            setBlogs(data);
        }

        fetchBlogs();
    }, [currentPage, pageSize, selectedCategory]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize} />

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1); // Reset the page to 1 when a new category is selected
        setActiveCategory(category)
    };

    return (
        <div>
            <div className="sticky top-0 px-4 mb-8 lg:space-x-16 gap-12 flex flex-wrap items-center border-b-2 py-5 text-gray-900 font-semibold bg-white z-10">
                <CategorySelection onSelectCategory={handleCategoryChange} activeCategory={activeCategory} />
            </div>

            <div className="flex flex-col lg:flex-row gap-12 ">

                <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize} />
                
                <div>
                    <Sidebar/>
                </div>
            </div>

            <Pagination
                currentPage={currentPage}
                onPageChange={handlePageChange}
                blogs={blogs}
                pageSize={pageSize}
            />
        </div>
    );
};


export default BlogPage;
