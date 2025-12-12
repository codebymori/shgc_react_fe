import React, { useState } from "react";
import vipHero from "../assets/img/alba1.webp";
import eagle1 from "../assets/img/eagle1.webp";
import highlanders1 from "../assets/img/highlanders1.webp";
import islay2 from "../assets/img/islay2.webp";
import islay3 from "../assets/img/islay3.webp";
import legend1 from "../assets/img/legend1.webp";
import { FiMaximize2, FiGrid } from "react-icons/fi";

const sliderCards = [
  { title: "Eagle Room", img: eagle1 },
  { title: "Highlanders Room", img: highlanders1 },
  { title: "Islay Room", img: islay2 },
  { title: "Islay Room 2", img: islay3 },
  { title: "Legend Room", img: legend1 },
];

const VIPRoomDetails = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  // Looping prev/next
  const handlePrev = () => setSliderIndex((prev) => (prev - 1 + sliderCards.length) % sliderCards.length);
  const handleNext = () => setSliderIndex((prev) => (prev + 1) % sliderCards.length);

  // Helper to get 3 cards berurutan secara melingkar
  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      cards.push(sliderCards[(sliderIndex + i) % sliderCards.length]);
    }
    return cards;
  };

  return (
    <div className="w-full flex flex-col relative z-20 p-10 pb-0">
      {/* Hero Section with Image */}
      <div className="flex justify-center">
        <div className="w-full">
          <img
            src={vipHero}
            alt="VIP Room Hero"
            className="w-full h-[60vh] object-cover rounded-[24px]"
          />
        </div>
      </div>

      {/* White Card with Title - Positioned to overlap hero */}
      <div className="w-full flex justify-center -mt-10 relative z-10 px-4">
        <div className="bg-white rounded-[50px] w-[30vw] max-w-3xl p-0 text-center">
          <h1 className="text-[70px] font-optima text-black mb-2">Alba Room</h1>
        </div>
      </div>
      {/* Section: Venue Description & Info Grid */}
      <div className="w-screen flex flex-col lg:flex-row justify-center items-end gap-20 mt-24 bg-[#F5F5F5] relative left-1/2 right-1/2 -translate-x-1/2 p-16 py-20">
        {/* Left: Title & Description */}
        <div className="flex-1 flex flex-col items-start justify-center pl-10 max-w-3xl">
          <h2 className="text-[55px] font-optima text-black leading-tight mb-12">A Premium Venue for<br/>Grand & Elegant Events</h2>
          <p className="text-[15px] font-inter font-light leading-loose max-w-xl">
            Alba Room is a grand, expansive venue spanning 1,014 m² with an impressive 7-meter ceiling height, crafted to elevate every event into a memorable experience. With flexible capacities—800 for theatre, 500 for classroom, 400 for banquet, and 120 for U-shape—it seamlessly accommodates conferences, seminars, celebrations, and corporate gatherings.
            Its spacious and elegant atmosphere allows every moment to stand out. From lighting to acoustics, each element is designed to ensure comfort and connection for every guest. Alba Room is more than just a large venue—it is a premium space that enhances and completes your most important occasions.
          </p>
        </div>
        {/* Right: Info Grid */}
        <div className=" flex flex-col items-end justify-center">
          <div className="grid grid-cols-2 gap-6">
            {/* Theatre */}
            <div className="border border-[#24452D] rounded-[14px]  w-[116px] h-[100px] flex flex-col items-center justify-center ">
              <span className="text-[15px] font-inter  mb-1">Theatre</span>
              {/* Icon: can use FiGrid as placeholder */}
              <FiGrid size={25} color="#B89B5E" strokeWidth={1.2} />
              <span className="text-[15px] font-inter mt-1">400</span>
            </div>
            {/* U Shape */}
            <div className="border border-[#24452D] rounded-[14px]  w-[116px] h-[100px] flex flex-col items-center justify-center">
              <span className="text-[15px] font-inter  mb-1">U Shape</span>
              {/* Icon: can use FiGrid as placeholder */}
              <FiGrid size={25} color="#B89B5E" strokeWidth={1.2} />
              <span className="text-[15px] font-inter mt-1">120</span>
            </div>
            {/* Banquet */}
            <div className="border border-[#24452D] rounded-[14px]  w-[116px] h-[100px] flex flex-col items-center justify-center ">
              <span className="text-[15px] font-inter  mb-1">Banquet</span>
              {/* Icon: can use FiGrid as placeholder */}
              <FiGrid size={25} color="#B89B5E" strokeWidth={1.2} />
              <span className="text-[15px] font-inter mt-1">500</span>
            </div>
            {/* Class Room */}
            <div className="border border-[#24452D] rounded-[14px]  w-[116px] h-[100px] flex flex-col items-center justify-center ">
              <span className="text-[15px] font-inter  mb-1">Class Room</span>
              {/* Icon: can use FiGrid as placeholder */}
              <FiGrid size={25} color="#B89B5E" strokeWidth={1.2} />
              <span className="text-[15px] font-inter mt-1">400</span>
            </div>
            {/* Height */}
            <div className="border border-[#24452D] rounded-[14px]  w-[116px] h-[100px] flex flex-col items-center justify-center ">
              <span className="text-[15px] font-inter  mb-1">Height</span>
              <FiMaximize2 size={25} color="#B89B5E" strokeWidth={1.2} />
              <span className="text-[15px] font-inter mt-1">7 m</span>
            </div>
            {/* Surface */}
            <div className="border border-[#24452D] rounded-[14px]  w-[116px] h-[100px] flex flex-col items-center justify-center ">
              <span className="text-[15px] font-inter  mb-1">Surface</span>
              <FiGrid size={25} color="#B89B5E" strokeWidth={1.2} />
              <span className="text-[15px] font-inter mt-1">1014 m²</span>
            </div>
          </div>
        </div>
      </div>
      {/* Section: Impressions - Experience the Exclusivity of Our Alba Room */}
      <div className="w-full flex flex-col justify-center items-center mt-16 relative  py-20 ">
        <div>
          <div className="mb-20">
            <span className="text-[18px] font-inter text-[#24452D] mb-2 block">Impressions</span>
            <h2 className="text-[55px] font-optima text-black leading-tight mb-12">Experience the Exclusivity of<br/>Our Alba Room</h2>
          </div>
          <div className=" w-full flex flex-row gap-8 ">
            <img src={require("../assets/img/alba1.webp")} alt="Alba Room 1" className="w-[550px] h-[289px] object-cover rounded-[24px]" />
            <img src={require("../assets/img/alba2.webp")} alt="Alba Room 2" className="w-[400px] h-[289px] object-cover rounded-[24px]" />
            <img src={require("../assets/img/alba3.webp")} alt="Alba Room 3" className="w-[400px] h-[289px] object-cover rounded-[24px]" />
          </div>
        </div>
      </div>
      {/* Section: Discover More Rooms Slider */}
      <div className="w-screen relative left-1/2 right-1 -translate-x-1/2 bg-[#F5F5F5] py-20 mt-16">
        <div className="max-w-[1600px] mx-auto px-14">
          <div className="flex flex-row justify-between items-center mb-16 ">
            <div className="flex gap-4">
              <button onClick={handlePrev} className="w-12 h-12 rounded-full bg-[#24452D] flex items-center justify-center text-white text-2xl"><span>&lt;</span></button>
              <button onClick={handleNext} className="w-12 h-12 rounded-full bg-[#24452D] flex items-center justify-center text-white text-2xl"><span>&gt;</span></button>
            </div>
            <h2 className="text-[55px] font-optima text-black leading-tight text-right">Discover More Rooms That<br/>Fit Your Needs</h2>
          </div>
          <div className="overflow-visible flex justify-center px-8">
            <div className="flex justify-center gap-x-6">
              {getVisibleCards().map((card, idx) => {
                // idx: 0 (left), 1 (center), 2 (right)
                const isActive = idx === 1;
                return (
                  <div
                    key={card.title + idx}
                    className={`relative rounded-[24px] shadow-lg overflow-hidden flex-shrink-0 w-[450px] h-[624px] bg-cover bg-center transition-all duration-500 ${isActive ? 'scale-105 opacity-100 z-10' : 'scale-95 opacity-70 z-0'}`}
                    style={{ backgroundImage: `url(${card.img})` }}
                  >
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-start p-6">
                      <h3 className="text-white text-[32px] font-optima mb-4">{card.title}</h3>
                      <div className="flex flex-col gap-3 mb-6">
                        <div className="inline-flex items-center gap-1 bg-white/30 rounded-full px-4 py-2 backdrop-blur-md border border-white/40 shadow-sm w-[7vw]">
                          <FiGrid size={18} color="#ffffffff" strokeWidth={1.2} />
                          <span className="text-white font-inter font-light text-[15px]">1014m²</span>
                        </div>
                        <div className="inline-flex items-center gap-1 bg-white/30 rounded-full px-4 py-2 backdrop-blur-md border border-white/40 shadow-sm w-[7vw]">
                          <FiMaximize2 size={18} color="#ffffffff" strokeWidth={1.2} />
                          <span className="text-white font-inter font-light text-[15px]">70 m</span>
                        </div>
                      </div>
                      <div className="flex flex-1 justify-center items-center" />
                      <div className="flex justify-center w-full">
                        <button className="inline-flex justify-center text-white font-inter font-light items-center gap-1 bg-white/30 rounded-full px-4 py-2 backdrop-blur-md border border-white/40 shadow-sm w-[10vw]">Details</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VIPRoomDetails;
