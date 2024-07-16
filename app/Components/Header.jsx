import React from 'react'

const Header = () => {
  return (
    <div className='flex fixed z-50 w-[97%] bg-white overflow-hidden justify-between px-8 items-center py-3 rounded-xl m-5'>
        <div>
            <img src="/img/logo2.svg" alt="" />
        </div>
        <div className='w-[20%] flex justify-between'>
            {["Demos", "Get in Touch"].map((item)=>{
                return (
                    <a className='text-xl' href="#">{item}</a>
                )
            })}
        </div>
        <div>
            <a className='py-3 px-6 bg-[#FFBB38] text-md rounded-md transition-all duration-300 hover:bg-[#ffcd6f]' href="#">Buy Now</a>
        </div>
    </div>
  )
}

export default Header