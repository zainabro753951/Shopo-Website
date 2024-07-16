import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#F2F6FF] py-16 w-[98%] ml-3 rounded-3xl flex justify-between px-16 items-center">
      <div>
        <h1 className="mb-3 text-3xl text-blue-700 font-bold">
          Need Customization
        </h1>
        <h1 className="text-4xl font-[900]">We can Help!</h1>
      </div>
      <div>
        <div className="flex gap-3 justify-end items-center text-end mb-3">
          <img src="/img/Contact/skype.svg" alt="" />
          <h1 className="text-3xl font-extrabold">Shohel49</h1>
        </div>
        <div className="flex gap-3 items-center">
          <img src="/img/Contact/gmail.svg" alt="" />
          <h1 className="text-3xl font-extrabold">abdur.rohman2003@gmail.com</h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
