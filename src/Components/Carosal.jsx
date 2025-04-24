import React from 'react'


// components/PartnersSection.jsx

const partners = [
  { name: "Onramp", src: "/public/Logos/17 (1) 1.png" },
  { name: "PinkSale", src: "/public/Logos/L2.png" },
  { name: "Uniswap", src: "/public/Logos/L3.png" },
  { name: "CoinGecko", src: "/public/Logos/L4.png" },
  { name: "PancakeSwap", src: "/public/Logos/L5.png" },
  { name: "DEXView", src: "/public/Logos/L6.png" },
  { name: "CoinMarketCap", src: "/public/Logos/L7.png" },
];

export default function Carosal() {
  return (
    <section className=" py-8 text-center">
      <h2 className="text-blue-500 font-semibold text-lg mb-6">OUR PARTNERS</h2>
      <div className="flex justify-center flex-wrap gap-6">
        {partners.map((partner) => (
          <img
            key={partner.name}
            src={partner.src}
            alt={partner.name}
            className="h-10"
          />
        ))}
      </div>
    </section>
  );
}

