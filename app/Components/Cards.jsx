let cardsData = [
  { img: "/img/Cards/card1.png" },
  { img: "/img/Cards/card2.png" },
  { img: "/img/Cards/card3.png" },
  { img: "/img/Cards/card4.png" },
  { img: "/img/Cards/card5.png" },
  { img: "/img/Cards/card6.png" },
];

import React from "react";

const Cards = () => {
  return (
    <div className="my-16 p-3">
      <div className="w-full h-[50vh] flex justify-center items-center mb-24">
        <div className="w-[50%] text-center">
          <h1 className="text-5xl font-extrabold leading-[4rem]">ShopO- Tailwind React </h1>
          <h2 className="text-4xl font-extrabold leading-[3rem] mb-5">eCommerce Template + Admin Dashboard</h2>
          <a className='py-4 px-10 text-lg bg-[#FFBB38] text-black mr-4 rounded-lg' href="#">Web Template</a>
          <a className='py-4 px-10 text-lg bg-black text-white mr-4 rounded-lg' href="#">Explore Admin Template</a>
        </div>
      </div>
      <CardsItem />
    </div>
  );
};

export default Cards;

let CardsItem = () => {
  return (
    <div className="grid grid-cols-3 gap-5 relative mb-16 rounded-2xl">
      {cardsData.map((items) => {
        return (
          <div id="hover" className="relative">
            <img className="w-full h-full rounded-2xl" src={items.img} alt="" />
            <div id="hoverable" className=" rounded-2xl transition-all duration-[0.8s] absolute bottom-0 h-[0%] overflow-hidden flex items-center justify-center bg-blue-950/90 w-full">
                <button className="py-3 px-6 bg-[#FFBB38] rounded-lg">View Demo</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
