import React from 'react'

const Hero = () => {
  return (
    <div className='w-full min-h-screen bg-[url(/img/Herobackground.png)] flex-col flex justify-center items-center'>
        <div className='text-white w-[50%] h-[80vh] flex items-end text-center'>
            <div>
            <h1 className='text-4xl font-extrabold leading-[2.8rem]'>ShopO - Tailwind React Ecommerce Template</h1>
            <h1 className='text-3xl text-[#FFBB38] mt-3 mb-10 font-bold'>HTML Admin Dashboard Template (FREE)</h1>
            <a className='py-4 px-10 text-xl bg-[#FFBB38] text-black mr-4 rounded-lg' href="#">View Demo</a>
            <a className='py-4 px-10 text-xl bg-white text-black rounded-lg'  href="#">Purchase Now</a>
            </div>
        </div>
        <div>
            <img src="img/heroimg.png" alt="" />
        </div>
        <div className='bg-[#FFBB38] w-full mt-6 py-5 flex justify-around text-2xl'>
            <h1>9000+ Happy Customers Worldwide</h1>
            <h1>9000+ Happy Customers Worldwide</h1>
        </div>
    </div>
  )
}

export default Hero