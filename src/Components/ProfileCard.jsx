import { div } from 'framer-motion/client';
import React from 'react';
import RatingStars from './Stars';
const InfoCard = () => {
    const cardData =[
        {
            image: "/src/assets/Images/p1.png",
            title: "Decentraland",
            rating: "3.94 / 5",
            votes: "Based on 16 votes",
            description: "Decentraland is a 3D virtual world browser-based platform. Users may buy virtual plots of land in the platform as NFTs via the MANA cryptocurrency, which uses the Ethereum blockchain. Designers can create and sell clothes and accessories for the avatars to be used in the virtual world.",
            button1: "Show less >",
            btn2: "Go to Website >", 
          },
          {
            image: "/src/assets/Images/p2.png",
            title: "Uniswap",
            rating: "4.5 / 5",
            votes: "Based on 19 votes",
            description: "Buckle up, fellow degens, because the House of Degenerates ($HOD) is here to redefine the Web3 experience! Embark on the Ultimate Gaming Odyssey...",
            button1: "Show less >",
            btn2: "Go to Website >", 
          },
          {
            image: "/src/assets/Images/p3.png",
            title: "Uniswap",
            rating: "3.44 / 5",
            votes: "Based on 16 votes",
            description: "Axie Infinity is a non-fungible token-based online video game developed by Vietnamese studio Sky Mavis, known for its in-game economy which uses...",
            button1: "Show less >",
            btn2: "Go to Website >", 
          },
          {
            image: "/src/assets/Images/p4.png",
            title: "Uniswap",
            rating: "3,65 / 5",
            votes: "Basedon 31 votes",
            description: "EverestCoin's Play to Earn Game, PeakXV is changing the way blockchain games are played, by bringing fun into the picture. Earn while you play, but...",
            button1: "Show less >",
            btn2: "Go to Website >", 
          },
    ]
  return (
    <div className='pt-32 flex flex-col gap-6'>
        {cardData.map((v,i)=>(
            
    <div
     className="max-w-[330px]   sm:max-w-2xl  bg-gray-900 text-white sm:rounded-2xl rounded-4xl p-5 py-12 shadow-lg  mx-auto ">
      <div className="flex items-center  space-x-4 ">
        <img
          src={v.image}
          alt={v.title}
          className="w-20 h-20 mb-5"
        />
        <div>
          <h2 className="text-xl font-bold">{v.title}</h2>
          <p>{v.rating}</p>
          <p className='text-[14px] text-gray-400'>{v.votes}</p>
          <RatingStars rating={v.rating} />
        </div>
      </div>
      <p className="mt-1 text-gray-300 sm:text-sm text-[10px] ml-24">
        {v.description}
      </p>
      <button className="mt-2 text-blue-400 hover:underline sm:text-sm text-[10px] ml-24">
       {v.button1} {v.btn2}
      </button>
    </div>
        ))}
    </div>
  );
};

export default InfoCard;
