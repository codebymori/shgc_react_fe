import Button from "../components/Button";
import vipHero from "../assets/img/alba1.webp";
import eagle1 from "../assets/img/eagle1.webp";
import highlanders1 from "../assets/img/highlanders1.webp";
import islay1 from "../assets/img/islay1.webp";
import legend1 from "../assets/img/legend1.webp";
import { FiMaximize2, FiGrid, FiCoffee } from "react-icons/fi";
import MoreFacilities from "../components/MoreFacilities";

const VIPRoom = () => {
  return (
    <div className="w-full min-h-screen flex flex-col overflow-x-hidden p-10">
      <div className="w-full flex flex-col bg-white  relative z-20 rounded-b-[24px]">
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
            <h1 className="text-[70px] font-optima text-black mb-2">VIP Room</h1>
            
          </div>
        </div>
      </div>

      {/* Section berikutnya: Video dan Deskripsi */}
      <div className="w-full flex flex-col items-center justify-center mt-20 p-10">
        <div className="flex flex-col md:flex-row  justify-center items-end gap-16 w-full max-w-6xl">
          {/* Kiri: Teks */}
          <div className="flex-1 max-w-xl flex flex-col items-start text-left pl-20">
            <h2 className="text-[55px] font-optima leading-tight text-black mb-16">Private Lounge <br></br> Sentul</h2>
            <p className="text-[15px] font-inter font-light leading-loose mb-10">
              The private lounge at Sentul Highlands Golf Club offers premium facilities designed for maximum comfort and complete privacy. Perfect for exclusive business meetings, hosting VIP guests, or relaxing after a round of golf, this elegant space delivers an unmatched luxury experience. With refined interiors, professional service, and a calm atmosphere, the private lounge is the top choice for visitors seeking the finest golf facilities in Sentul.
            </p>
            <Button
              label="Book Now"
              bgClass="bg-[#24452D]"
              textClass="text-white"
              roundedClass="rounded-full"
              iconClass="text-white"
              iconSize={20}
              onClick={() => { /* TODO: handle book now click */ }}
            />
          </div>
          {/* Kanan: Video */}
          <div className="flex-1 flex justify-end items-center pr-20">
            <video
              src={require("../assets/video/VipRoom.mp4")}
              autoPlay
              muted
              loop
              className="rounded-[24px] w-[273px] h-[485px] object-cover shadow-lg"
              poster={vipHero}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      {/* Section berikutnya: Alba Room */}
      <div className="w-screen flex flex-col items-center justify-center mt-24 bg-[#F5F5F5] relative left-1/2 right-1/2 -translate-x-1/2 py-10">
        {/* Alba Room */}
        <div className="flex flex-row justify-between items-center w-full mb-20 p-10 px-40">
          {/* Kiri: Gambar */}
          <div className=" flex justify-center items-center">
            <img
              src={vipHero}
              alt="Alba Room"
              className="rounded-[24px] w-[611px] h-[423px] object-cover shadow-lg"
            />
          </div>
          {/* Kanan: Konten */}
          <div className="flex-col items-start text-left">
            <h2 className="text-[55px] font-optima mb-8">Alba Room</h2>
            <p className="text-[15px] font-inter font-light leading-loose mb-8 max-w-md">
              Lorem ipsum dolor sit amet consectetur. Dignissim turpis nulla arcu odio vel leo placerat nec a. Purus in cum nisl tincidunt amet turpis. Amet orci velit vehicula vestibulum sit tincidunt sed. Suspendisse nam sem porttitor a.
            </p>
            <div className="flex gap-16 mb-10">
              <div className="flex flex-col items-center">
                {/* Icon Height */}
                <FiMaximize2 size={30} color="#B89B5E" strokeWidth={1.2} />
                <span className="mt-2 text-[#B89B5E] text-[13px]">Height: 7m</span>
              </div>
              <div className="flex flex-col items-center">
                {/* Icon Surface */}
                <FiGrid size={30} color="#B89B5E" strokeWidth={1.2} />
                <span className="mt-2 text-[#B89B5E] text-[13px]">Surface : 1014m²</span>
              </div>
              <div className="flex flex-col items-center">
                {/* Icon Banquet */}
                <FiCoffee size={30} color="#B89B5E" strokeWidth={1.2} />
                <span className="mt-2 text-[#B89B5E] text-[13px]">Banquet</span>
              </div>
            </div>
            <Button
              label="Discover More"
              bgClass="bg-[#24452D]"
              textClass="text-white"
              roundedClass="rounded-full"
              iconClass="text-white"
              iconSize={20}
              onClick={() => { /* TODO: handle discover more click */ }}
            />
          </div>
        </div>

        {/* Eagle Room */}
       <div className="flex flex-row justify-between items-center w-full mb-20 p-10 px-40">

        {/* Kanan: Konten */}
          <div className="flex-col items-start text-left">
            <h2 className="text-[55px] font-optima mb-8">Eagle Room</h2>
            <p className="text-[15px] font-inter font-light leading-loose mb-8 max-w-md">
              Lorem ipsum dolor sit amet consectetur. Dignissim turpis nulla arcu odio vel leo placerat nec a. Purus in cum nisl tincidunt amet turpis. Amet orci velit vehicula vestibulum sit tincidunt sed. Suspendisse nam sem porttitor a.
            </p>
            <div className="flex gap-16 mb-10">
              <div className="flex flex-col items-center">
                {/* Icon Height */}
                <FiMaximize2 size={30} color="#B89B5E" strokeWidth={1.2} />
                <span className="mt-2 text-[#B89B5E] text-[13px]">Height: 7m </span>
              </div>
              <div className="flex flex-col items-center">
                {/* Icon Surface */}
                <FiGrid size={30} color="#B89B5E" strokeWidth={1.2} />
                <span className="mt-2 text-[#B89B5E] text-[13px]">Surface: 1014m²</span>
              </div>
              <div className="flex flex-col items-center">
                {/* Icon Banquet */}
                <FiCoffee size={30} color="#B89B5E" strokeWidth={1.2} />
                <span className="mt-2 text-[#B89B5E] text-[13px]">Banquet</span>
              </div>
            </div>
            <Button
              label="Discover More"
              bgClass="bg-[#24452D]"
              textClass="text-white"
              roundedClass="rounded-full"
              iconClass="text-white"
              iconSize={20}
              onClick={() => { /* TODO: handle discover more click */ }}
            />
          </div>
          {/* Kiri: Gambar */}
          <div className=" flex justify-center items-center">
            <img
              src={eagle1}
              alt="Alba Room"
              className="rounded-[24px] w-[611px] h-[423px] object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Highlanders Room */}
        <div className="flex flex-row justify-between items-center w-full mb-20 p-10 px-40">
          {/* Kiri: Gambar */}
          <div className=" flex justify-center items-center">
            <img
              src={highlanders1}
              alt="Alba Room"
              className="rounded-[24px] w-[611px] h-[423px] object-cover shadow-lg"
            />
          </div>
          {/* Kanan: Konten */}
          <div className="flex-col items-start text-left">
            <h2 className="text-[55px] font-optima mb-8">Highlanders Room</h2>
            <p className="text-[15px] font-inter font-light leading-loose mb-8 max-w-md">
              Lorem ipsum dolor sit amet consectetur. Dignissim turpis nulla arcu odio vel leo placerat nec a. Purus in cum nisl tincidunt amet turpis. Amet orci velit vehicula vestibulum sit tincidunt sed. Suspendisse nam sem porttitor a.
            </p>
            <div className="flex gap-16 mb-10">
              <div className="flex flex-col items-center">
                {/* Icon Height */}
                <FiMaximize2 size={30} color="#B89B5E" strokeWidth={1.2} />
                <span className="mt-2 text-[#B89B5E] text-[13px]">Height: 7m</span>
              </div>
              <div className="flex flex-col items-center">
                {/* Icon Surface */}
                <FiGrid size={30} color="#B89B5E" strokeWidth={1.2} />
                <span className="mt-2 text-[#B89B5E] text-[13px]">Surface : 1014m²</span>
              </div>
              <div className="flex flex-col items-center">
                {/* Icon Banquet */}
                <FiCoffee size={30} color="#B89B5E" strokeWidth={1.2} />
                <span className="mt-2 text-[#B89B5E] text-[13px]">Banquet</span>
              </div>
            </div>
            <Button
              label="Discover More"
              bgClass="bg-[#24452D]"
              textClass="text-white"
              roundedClass="rounded-full"
              iconClass="text-white"
              iconSize={20}
              onClick={() => { /* TODO: handle discover more click */ }}
            />
          </div>
        </div>

        {/* Islay Room */}
       <div className="flex flex-row justify-between items-center w-full mb-20 p-10 px-40">

        {/* Kanan: Konten */}
          <div className="flex-col items-start text-left">
            <h2 className="text-[55px] font-optima mb-8">Islay Room</h2>
            <p className="text-[15px] font-inter font-light leading-loose mb-8 max-w-md">
              Lorem ipsum dolor sit amet consectetur. Dignissim turpis nulla arcu odio vel leo placerat nec a. Purus in cum nisl tincidunt amet turpis. Amet orci velit vehicula vestibulum sit tincidunt sed. Suspendisse nam sem porttitor a.
            </p>
            <div className="flex gap-16 mb-10">
              <div className="flex flex-col items-center">
                {/* Icon Height */}
                <FiMaximize2 size={30} color="#B89B5E" strokeWidth={1.2} />
                <span className="mt-2 text-[#B89B5E] text-[13px]">Height: 7m </span>
              </div>
              <div className="flex flex-col items-center">
                {/* Icon Surface */}
                <FiGrid size={30} color="#B89B5E" strokeWidth={1.2} />
                <span className="mt-2 text-[#B89B5E] text-[13px]">Surface: 1014m²</span>
              </div>
              <div className="flex flex-col items-center">
                {/* Icon Banquet */}
                <FiCoffee size={30} color="#B89B5E" strokeWidth={1.2} />
                <span className="mt-2 text-[#B89B5E] text-[13px]">Banquet</span>
              </div>
            </div>
            <Button
              label="Discover More"
              bgClass="bg-[#24452D]"
              textClass="text-white"
              roundedClass="rounded-full"
              iconClass="text-white"
              iconSize={20}
              onClick={() => { /* TODO: handle discover more click */ }}
            />
          </div>
          {/* Kiri: Gambar */}
          <div className=" flex justify-center items-center">
            <img
              src={islay1}
              alt="Alba Room"
              className="rounded-[24px] w-[611px] h-[423px] object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Legend Room */}
        <div className="flex flex-row justify-between items-center w-full mb-0 p-10 px-40">
          {/* Kiri: Gambar */}
          <div className=" flex justify-center items-center">
            <img
              src={legend1}
              alt="Alba Room"
              className="rounded-[24px] w-[611px] h-[423px] object-cover shadow-lg"
            />
          </div>
          {/* Kanan: Konten */}
          <div className="flex-col items-start text-left">
            <h2 className="text-[55px] font-optima mb-8">Legend Room</h2>
            <p className="text-[15px] font-inter font-light leading-loose mb-8 max-w-md">
              Lorem ipsum dolor sit amet consectetur. Dignissim turpis nulla arcu odio vel leo placerat nec a. Purus in cum nisl tincidunt amet turpis. Amet orci velit vehicula vestibulum sit tincidunt sed. Suspendisse nam sem porttitor a.
            </p>
            <div className="flex gap-16 mb-10">
              <div className="flex flex-col items-center">
                {/* Icon Height */}
                <FiMaximize2 size={30} color="#B89B5E" strokeWidth={1.2} />
                <span className="mt-2 text-[#B89B5E] text-[13px]">Height: 7m</span>
              </div>
              <div className="flex flex-col items-center">
                {/* Icon Surface */}
                <FiGrid size={30} color="#B89B5E" strokeWidth={1.2} />
                <span className="mt-2 text-[#B89B5E] text-[13px]">Surface : 1014m²</span>
              </div>
              <div className="flex flex-col items-center">
                {/* Icon Banquet */}
                <FiCoffee size={30} color="#B89B5E" strokeWidth={1.2} />
                <span className="mt-2 text-[#B89B5E] text-[13px]">Banquet</span>
              </div>
            </div>
            <Button
              label="Discover More"
              bgClass="bg-[#24452D]"
              textClass="text-white"
              roundedClass="rounded-full"
              iconClass="text-white"
              iconSize={20}
              onClick={() => { /* TODO: handle discover more click */ }}
            />
          </div>
        </div>
      </div>

      {/* More Facilities Section */}
      <MoreFacilities />
    </div>
  );
};

export default VIPRoom;
