import React from 'react'
import {Link} from 'react-router-dom'
import laptop from '../assets/website/laptop.png'
import saleImg1 from '../assets/website/saleImg1.jpg';
import saleImg2 from '../assets/website/saleImg2.jpg';
const Sales = () => {
  return (
    <div>
        <div className='container'>
            <div className='w-full h-auto md:h-[550px] flex flex-col md:flex-row items-center justify-center gap-10 dark:bg-white'>
                <div className='w-full md:w-1/2 h-[250px] md:h-full border border-gray-300 rounded-md overflow-hidden relative group '>
                     <img src={laptop} className='w-full h-full object-cover group-hover:scale-110 duration-500 ease-out' alt='image'/>
                     <div className='absolute w-full h-full top-0 left-0 bg-black/50 text-white flex md:items-center md:justify-center sm:items-start'>
                        <div className='flex flex-col md:items-center gap-2 sm:items-start m-15 p-10 '>
                            <p className='text-sm md:text-lg font-medium text-white'>10% Sales ongoing on Electronic Items</p>
                            <p className='text-sm md:text-xl font-semibold'>Offer on limited time</p>
                            <Link to='/shop' className='bg-orange-500 px-6 py-3 rounded-lg '>Shop Now</Link>
                        </div>
                     </div>
                </div>
                <div className='w-full md:w-1/2'>
                        fff
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sales