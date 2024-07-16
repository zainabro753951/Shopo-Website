let featureData = [
  {
    img: "/img/Features/Bootstrap.svg",
    name: "Tailwind CSS v3",
  },
  {
    img: "/img/Features/react.svg",
    name: "React v18",
  },
  {
    img: "/img/Features/ux.svg",
    name: "Browser Compatibility",
  },
  {
    img: "/img/Features/coding.svg",
    name: "Easy To Customize",
  },
];

import React from "react";

const Features = () => {
  return (
    <div className="bg-[#EFF0F1] w-full min-h-screen py-20 ">
      <div className="relative flex justify-center items-center w-full h-[30%]">
        <h1 className="absolute text-gray-400 text-7xl font-extrabold">
          Features
        </h1>
        <h1
          id="core"
          className="absolute text-5xl font-extrabold z-20 bottom-[-70px]"
        >
          Core Features
        </h1>
      </div>
      <div>
        <FeatureCard />
      </div>
    </div>
  );
};

export default Features;

let FeatureCard = () => {
  return (
    <div className="grid grid-cols-4 place-items-center gap-6 pt-20 px-6 my-16">
      {featureData.map((item, index) => {
        return (
          <div id="featurebox" className=" bg-white flex text-center justify-center items-center rounded-2xl w-[100%] h-[100%] py-7 px-14 flex-wrap">
            <img className="w-[80px] my-10 h-[80px]" src={item.img} alt="" />
            <h1 className="text-2xl font-extrabold">{item.name}</h1>
          </div>
        );
      })}
    </div>
  );
};
