import React from 'react'
import { Link } from 'react-router-dom'

import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className=' bg-black px-4 py-32 mx-auto flex items-center justify-center'>
        <div className='text-white text-center'>
            <h1 className='lg:text-7xl text-5xl leading-snug font-bold mb-5'>Welcome to The Top 10 <span className="text-orange-500">Lists</span></h1>
            <p className='text-gray-100 lg:w-3/5 mx-auto mb-5'>We post Top 10 lists about everything in the world accrding to what is trending  </p>

            {/* btn here */}
            <div>
                <Link to="/" className='inline-flex items-center py-1 font-medium hover:text-orange-500'>Learn more <FaArrowRight className='mt-1 ml-2'/></Link>
            </div>
        </div>
    </div>
  )
}

export default Banner