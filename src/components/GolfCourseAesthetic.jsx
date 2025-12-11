"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import msp1 from "../assets/img/msp1.webp";
import msp3 from "../assets/img/msp3.webp";
import msp2 from "../assets/img/msp2.webp";
import hole4 from "../assets/img/hole4.webp";
import hole5 from "../assets/img/hole5.webp";
import hole6 from "../assets/img/hole6.webp";

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

// Card component was removed because it was unused (cleaner to render inline)
export default function GolfCourseAesthetic() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const [wrapperX, setWrapperX] = useState(0);
  // Layout constants (landscape cards, 3 visible)
  const 
  CARD_W = 550; // card aktif
  const INACTIVE_CARD_W = 400; // card tidak aktif
  const CARD_H = 380; // px
  const GAP = 24; // px between cards
  const VISIBLE_COUNT = 3;
  const visibleWidth = CARD_W * VISIBLE_COUNT + GAP * (VISIBLE_COUNT - 7);
  // gunakan array asli saja, tanpa clone

  useEffect(() => {
    const step = CARD_W + GAP;
    const centerOffset = (visibleWidth - CARD_W) / 2;
    const desiredX = -step + centerOffset;
    setWrapperX(desiredX);

    const onResize = () => {
      const desired = -step + centerOffset;
      setWrapperX(desired);
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [currentIndex, CARD_W, GAP, visibleWidth]);



  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(courses.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex === courses.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <section className="w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-50">
        {/* Title */}
          <h2 className="text-[70px] font-optima text-black mt-20 text-center">
          Golf Course Aesthetic
        </h2>
      </div>

      {/* Carousel Container - full-bleed */}
        <div className="relative  overflow-hidden flex items-center justify-center z-10 bg-white">
                <div className="w-full h-[60vh] flex items-center justify-center z-20 overflow-hidden bg-white">
          {/* viewport: fixed width showing 3 cards, hilangkan mx-auto agar full bleed */}
          <div ref={containerRef} style={{ width: '100%', height: '80%' }} className="relative flex items-center h-full justify-center">
            {/* Card kiri, center, kanan dalam flex dengan gap */}
            <div className="flex items-end justify-center w-full h-full gap-8">
              {/* Card kiri */}
              {(() => {
                const prevIdx = (currentIndex - 1 + courses.length) % courses.length;
                const nextIdx = (currentIndex + 1) % courses.length;
                const prevCourse = courses[prevIdx];
                const currentCourse = courses[currentIndex];
                const nextCourse = courses[nextIdx];
                return (
                  <>
                    <div
                      key={prevCourse.id}
                      className="flex items-end cursor-pointer"
                      style={{ width: INACTIVE_CARD_W, height: 290, zIndex: 5 }}
                      onClick={() => setCurrentIndex(prevIdx)}
                    >
                      <div className="relative rounded-3xl overflow-hidden w-full h-full" style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}>
                        <img src={prevCourse.image} alt={prevCourse.name} className="w-full h-full object-cover" style={{ filter: 'grayscale(100%)', transition: 'filter 300ms ease' }} />
                      </div>
                    </div>
                    {/* Card aktif center */}
                    <div
                      key={currentCourse.id}
                      className="flex items-end"
                      style={{ width: CARD_W, height: 380, zIndex: 20 }}
                    >
                      <div className="relative rounded-3xl overflow-hidden w-full h-full" style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.25)' }}>
                        <img src={currentCourse.image} alt={currentCourse.name} className="w-full h-full object-cover" style={{ filter: 'none', transition: 'filter 300ms ease' }} />
                      </div>
                    </div>
                    {/* Card kanan */}
                    <div
                      key={nextCourse.id}
                      className="flex items-end cursor-pointer"
                      style={{ width: INACTIVE_CARD_W, height: 290, zIndex: 5 }}
                      onClick={() => setCurrentIndex(nextIdx)}
                    >
                      <div className="relative rounded-3xl overflow-hidden w-full h-full" style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}>
                        <img src={nextCourse.image} alt={nextCourse.name} className="w-full h-full object-cover" style={{ filter: 'grayscale(100%)', transition: 'filter 300ms ease' }} />
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        {/* Bottom Arrows - now outside card images container */}
        <div className="flex justify-center gap-5 mt-2 z-40">
          <button
            onClick={handlePrev}
            className="w-14 h-14 rounded-full bg-[#24452D] hover:bg-green-800 flex items-center justify-center transition-all duration-300 shadow-lg"
          >
            <HiChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={handleNext}
            className="w-14 h-14 rounded-full bg-[#24452D] hover:bg-green-800 flex items-center justify-center transition-all duration-300 shadow-lg"
          >
            <HiChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Dots Pagination */}
        <div className="flex justify-center gap-3 mt-16 relative z-20">
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
