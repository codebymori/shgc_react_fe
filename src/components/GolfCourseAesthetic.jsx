"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import msp1 from "../assets/img/msp1.webp";
import msp3 from "../assets/img/msp3.webp";
import msp2 from "../assets/img/msp2.webp";
import hole4 from "../assets/img/hole4.webp";
import hole5 from "../assets/img/hole5.webp";
import hole6 from "../assets/img/hole6.webp";
import aksenfooter from "../assets/img/aksenfooter.png";

// 6 courses
const courses = [
  {
    id: 1,
    name: "1-Hole Course",
    par: "1",
    yards: "418",
    image: msp1,
  },
  {
    id: 2,
    name: "2-Hole Course",
    par: "2",
    yards: "520",
    image: msp3,
  },
  {
    id: 3,
    name: "3-Hole Course",
    par: "3",
    yards: "380",
    image: msp2,
  },
  {
    id: 4,
    name: "4-Hole Course",
    par: "4",
    yards: "610",
    image: hole4,
  },
  {
    id: 5,
    name: "5-Hole Course",
    par: "5",
    yards: "720",
    image: hole5,
  },
  {
    id: 6,
    name: "6-Hole Course",
    par: "6",
    yards: "480",
    image: hole6,
  },
];

// Card component - pisah per course
function CourseCard({ course, isActive, cardWidth = "w-[400px]", cardHeight = "h-[70vh]" }) {
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
          src={course.image}
          alt={course.name}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
}

export default function GolfCourseAesthetic() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? courses.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((next) =>
      next === courses.length - 1 ? 0 : next + 1
    );
  };

  return (
    <section
      className="w-full relative overflow-hidden"
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${aksenfooter})`,
        backgroundSize: "160% auto",
        backgroundPosition: "center -53%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10 py-10 mt-[80px] ">
        {/* Title */}
        <h2 className="text-[70px] font-optima mb-1 text-black -ml-20">
          Golf Course Aesthetic
        </h2>

        {/* Carousel Container */}
        <div className="relative w-[100vw] h-[80vh] rounded-[24px] overflow-hidden">
          {/* Left Arrows */}
          <div className="absolute left-2 top-1/2 -translate-y-1/2 flex gap-5 z-30">
            <button
              onClick={handlePrev}
              className="w-14 h-14 rounded-full bg-[#24452D] hover:bg-green-800  flex items-center justify-center transition-all duration-300 shadow-lg"
            >
              <HiChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={handleNext}
              className="w-14 h-14 rounded-full bg-[#24452D] hover:bg-green-800  flex items-center justify-center transition-all duration-300 shadow-lg"
            >
              <HiChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Cards Slider */}
          <div className="absolute left-80 bottom-10 h-full flex items-end overflow-hidden perspective z-30">
            <motion.div
              className="flex gap-4"
              animate={{ x: -currentIndex * 445 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ alignItems: "flex-end" }}
            >
              {courses.map((course, idx) => {
                const isActive = idx === currentIndex;

                // Set ukuran card yang konsisten
                let cardWidth = "w-[430px]";
                let cardHeight = isActive ? "h-[70vh]" : "h-[50vh]";

                return (
                  <CourseCard
                    key={course.id}
                    course={course}
                    isActive={isActive}
                    cardWidth={cardWidth}
                    cardHeight={cardHeight}
                  />
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Dots Pagination */}
        <div className="flex justify-center gap-3 mt-16 relative z-30">
          {courses.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-3 h-3 bg-white"
                  : "w-2 h-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
