import React from 'react'
import { Link } from 'react-router-dom'

import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className='bg-black px-4 py-16 sm:py-24 lg:py-32 mx-auto flex items-center justify-center'>
        <div className='text-white text-center'>
            <h1 className='text-3xl sm:text-5xl lg:text-7xl leading-snug font-bold mb-5'>Welcome to The Top 10 <span className="text-orange-500">Lists</span></h1>
            <p className='text-gray-100 sm:w-3/5 lg:w-3/5 mx-auto mb-5'>Discover the ultimate collection of the Top 10 must-know trends, facts, and picks across the world of entertainment, bizarre phenomena, technology, society, and many more. Your one-stop hub for the best of everything! </p>

            {/* btn here */}
            <div>
                <Link to="/" className='inline-flex items-center py-1 font-medium hover:text-orange-500 text-lg sm:text-xl lg:text-2xl'>Learn more <FaArrowRight className='mt-1 ml-2'/></Link>
            </div>
        </div>
    </div>
  )
}

export default Banner