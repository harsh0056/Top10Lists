import React from 'react'
import { useParams } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { FaClock } from 'react-icons/fa6';
import Sidebar from '../components/Sidebar';
import blogData from '../assets/blogsData.json';

const SingleBlog = () => {
    const { id } = useParams();
    const blog = blogData.find(blog => blog.id === parseInt(id));

    if (!blog) {
        return (
            <div className='py-36 bg-black text-white text-center px-4'>
                <h1 className='text-5xl leading-snug font-bold mb-5'>Blog not found</h1>
            </div>
        );
    }

    return (
        <div>
            <div className='py-36 bg-black text-white text-center px-4'>
                <h1 className='text-5xl leading-snug font-bold mb-5'>Single Blog</h1>
            </div>

            <div className='max-w-7xl mx-auto my-12 flex flex-col lg:flex-row gap-12 px-4 lg:px-0'>
                <div className='w-full lg:w-3/4 mx-auto'>
                    <div>
                        <img src={blog.image} alt="" className='w-full rounded mb-5' />
                    </div>
                    <h2 className='text-3xl font-bold mb-4 text-blue-600 cursor-pointer'>{blog.title}</h2>
                    <p className='mb-3 text-gray-600'>
                        <FaUser className='inline-flex items-center mr-2' /> 
                        {blog.author} | {blog.published_date}
                    </p>
                    <p className='mb-6 text-gray-600'>
                        <FaClock className='inline-flex items-center mr-2' /> 
                        {blog.reading_time}
                    </p>
                    <p className='text-base text-gray-500 mb-6'>{blog.content}</p>
                </div>
                <div className='lg:w-1/4'>
                    <Sidebar />
                </div>
            </div>
        </div>
    );
}

export default SingleBlog;