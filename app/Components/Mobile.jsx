import React from "react";

const Mobile = () => {
  return (
    <div className="bg-[#EEF3FF] py-24 grid grid-cols-3">
      <div className="col-span-2">
        <img className="w-full h-full object-cover" src="/img/Mobile.png" alt="" />
      </div>
      <div className="">
        <h1 className="text-5xl font-semibold leading-[3.4rem]">Fully Responsive & Mobile Optimized</h1>
        <p className="text-xl font-extralight my-8">
          99.99% Responsive including high-resolution devices. Accept Desktop,
          Laptop, iPad, Android & iPhone also with a wonderful interfaces
        </p>
        <a className='py-4 px-10 text-xl bg-[#FFBB38] text-black mr-4 rounded-lg' href="#">View Demo</a>

      </div>
    </div>
  );
};

export default Mobile;
