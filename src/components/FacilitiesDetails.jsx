import Navbar from "./Navbar";
import NewsCards from "./newsCards";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useState } from "react";
import { motion } from "framer-motion";
import aksenfooter from "../assets/img/aksenfooter.png";

// Gallery Card Component
function GalleryCard({ image, isActive, cardWidth = "w-[230px]", cardHeight = "h-[400px]" }) {
  return (
    <motion.div
      className={`card-wrapper ${cardWidth} ${cardHeight} flex-shrink-0 relative p-0`}
      animate={{}}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      layout
    >
      <motion.div
        className="w-full h-full rounded-[24px] overflow-hidden"
        animate={{
          scale: isActive ? 1 : 1,
          opacity: 1,
          filter: isActive ? "brightness(1) grayscale(0%)" : "brightness(0.7) grayscale(100%)",
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          transformOrigin: "bottom center",
        }}
      >
        <img
          src={image}
          alt="Gallery"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
}

const FacilitiesDetails = ({ 
  heroImage, 
  title, 
  description, 
  galleryImages, 
  exploreData, 
  buttonText = "Check Availability",
  backgroundColor = "#E4E9D4" 
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <>
    <div className="w-full min-h-screen flex flex-col bg-white p-10">

      {/* Hero Section with Image */}
      <div className="flex justify-center">
        <div className="w-full">
          <img
            src={heroImage}
            alt={title}
            className="w-full h-[60vh] object-cover rounded-[24px]"
          />
        </div>
      </div>

      {/* White Card with Title - Positioned to overlap hero */}
      <div className="w-full flex justify-center -mt-9 relative z-10 px-4">
        <div className="bg-white rounded-[50px] w-[55vw] p-0 text-center">
          <h1 className="text-[70px] font-optima text-black mb-2">{title}</h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="w-full flex justify-center mt-40 pb-20">
        <div 
          className=" w-full rounded-[24px] p-16 relative"
          style={{ backgroundColor }}
        >
          
          {/* Check Availability Button */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <button className="px-6 py-3 bg-[#24452D] text-white rounded-full font-inter font-medium hover:bg-green-800 transition-all duration-300 flex justify-center items-center gap-2">
              {buttonText}
              <span>→</span>
            </button>
          </div>

          <div className="flex gap-6 items-center h-full">
            {/* Left Side - Text Content */}
            <div className="flex-[3] flex flex-col justify-center pr-2">
              <p className="text-black text-[15px] leading-loose font-inter font-light mb-8">
                {description}
              </p>
              
              {/* Navigation Arrows */}
              <div className="flex gap-4 mt-8">
                <button
                  onClick={prevImage}
                  className="w-12 h-12 rounded-full bg-[#24452D] hover:bg-green-800 flex items-center justify-center transition-all duration-300"
                >
                  <HiChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className="w-12 h-12 rounded-full bg-[#24452D] hover:bg-green-800 flex items-center justify-center transition-all duration-300"
                >
                  <HiChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Right Side - Gallery Slider */}
            <div className="flex-[1] flex flex-col items-end justify-center">
              <h2 className="text-[70px] font-optima text-black -mb-[130px] self-end">Our Gallery</h2>
              
              {/* Gallery Carousel Container */}
              <div className="relative w-[60vw] h-[550px] overflow-hidden left-[105px]">
                {/* Cards Slider */}
                <div className="absolute left-0 bottom-0 h-full flex items-end overflow-hidden">
                  <motion.div
                    className="flex gap-4"
                    animate={{ x: -currentImageIndex * 296 }}
                    transition={{
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{ alignItems: "flex-end" }}
                  >
                    {galleryImages.map((image, idx) => {
                      const isActive = idx === currentImageIndex;
                      
                      // Set ukuran card dengan perbedaan width dan height untuk aktif/tidak aktif
                      let cardWidth = isActive ? "w-[400px]" : "w-[280px]";
                      let cardHeight = isActive ? "h-[550px]" : "h-[380px]";

                      return (
                        <motion.div
                          key={idx}
                          className="cursor-pointer"
                          onClick={() => setCurrentImageIndex(idx)}
                        >
                          <GalleryCard
                            image={image}
                            isActive={isActive}
                            cardWidth={cardWidth}
                            cardHeight={cardHeight}
                          />
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </div>

              </div>
              
              {/* Dots Pagination - Centered */}
              {/* <div className="w-full flex justify-center gap-2 mt-8">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? "w-3 h-3 bg-[#24452D]"
                        : "w-2 h-2 bg-gray-300"
                    }`}
                  />
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </div>
      
    </div>

    {/* Explore More Section - Outside parent container for full width */}
    <div className="w-full py-16 relative overflow-hidden"
      style={{
        minHeight: "80vh",
        backgroundImage: `url(${aksenfooter})`,
        backgroundSize: "160% auto",
        backgroundPosition: "center -110%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full relative z-10">
        <h2 className="text-[70px] font-optima text-black mb-6 px-16">Explore More</h2>
        <NewsCards count={6} customData={exploreData} />
      </div>
    </div>
    </>
  );
};

export default FacilitiesDetails;