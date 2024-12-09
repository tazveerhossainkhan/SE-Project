import React from 'react'

import bannerImg from "../../assets/pet.png"

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>
         <div className='md:w-1/2 w-full flex items-center md:justify-end'>
            <img src={bannerImg} alt="" /> 
        </div>
        
        <div className='md:w-1/2 w-full'>
            <h1 className='md:text-5xl text-2xl font-medium mb-7'>From Tiny Paws to Big Adventures, Your Perfect Pet Awaits!</h1>
            <p className='mb-10'>
            It's time to welcome a new furry friend into your life! From playful puppies to cuddly kittens, our latest arrivals feature the perfect companions for every home. Start your journey to unconditional love today!</p>

            <button className='btn-primary'>Subscribe</button>
        </div>

       
    </div>
  )
}

export default Banner