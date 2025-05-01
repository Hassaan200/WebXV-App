import React from "react";

const partners = [
  { name: "Onramp", src: "/Logos/17 (1) 1.png" },
  { name: "PinkSale", src: "/Logos/L2.png" },
  { name: "Uniswap", src: "/Logos/L3.png" },
  { name: "CoinGecko", src: "/Logos/L4.png" },
  { name: "PancakeSwap", src: "/Logos/L5.png" },
  { name: "DEXView", src: "/Logos/L6.png" },
  { name: "CoinMarketCap", src: "/Logos/L7.png" },
];

export default function Carosal() {
  const logos = [...partners, ...partners]; // Duplicate for seamless loop

  return (
    <section className="py-8 text-center  overflow-hidden sm:pt-5 pt-13">
      <h2 className="text-blue-500 font-semibold text-lg mb-6">OUR PARTNERS</h2>
      <div className="relative w-full overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {logos.map((partner, index) => (
            <img
              key={index}
              src={partner.src}
              alt={partner.name}
              className="h-10 mx-6 inline-block"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
