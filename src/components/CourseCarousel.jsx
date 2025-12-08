"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import hole1 from "../assets/img/hole1.webp";
import hole2 from "../assets/img/hole2.webp";
import hole3 from "../assets/img/hole3.webp";
import hole4 from "../assets/img/hole4.webp";
import hole5 from "../assets/img/hole5.webp";
import hole6 from "../assets/img/hole6.webp";
import hole7 from "../assets/img/hole7.webp";
import hole8 from "../assets/img/hole8.webp";
import hole9 from "../assets/img/hole9.webp";
import hole10 from "../assets/img/hole10.webp";
import hole11 from "../assets/img/hole11.webp";
import hole12 from "../assets/img/hole12.webp";
import hole13 from "../assets/img/hole13.webp";
import hole14 from "../assets/img/hole14.webp";
import hole15 from "../assets/img/hole15.webp";
import hole16 from "../assets/img/hole16.webp";
import hole17 from "../assets/img/hole17.webp";
import hole18 from "../assets/img/hole18.webp";
import hole19 from "../assets/img/hole19.webp";
import hole20 from "../assets/img/hole20.webp";
import hole21 from "../assets/img/hole21.webp";

const courses = [
  {
    id: 1,
    name: "1-Hole Course",
    par: "1",
    yards: "418",
    description: "Lorem ipsum dolor sit amet consectetur. Natoque risus diam posuere purus duis arcu. Pretium augue facilisis amet integer ac hendrerit nisi neque semper. Adipiscing non volutpat eget cursus. Faucibus magna consectetur lorem sagittis ullamcorper. In sapien velit molestie laoreet aenean in cras.Fermentum convallis netus odio sed ipsum quis mi.",
    image: hole1,
  },
  {
    id: 2,
    name: "2-Hole Course",
    par: "2",
    yards: "520",
    description: "Lorem ipsum dolor sit amet consectetur. Natoque risus diam posuere purus duis arcu",
    image: hole2,
  },
  {
    id: 3,
    name: "3-Hole Course",
    par: "3",
    yards: "380",
    description: "Lorem ipsum dolor sit amet consectetur. Natoque risus diam posuere purus duis arcu",
    image: hole3,
  },
  {
    id: 4,
    name: "4-Hole Course",
    par: "4",
    yards: "425",
    description: "Lorem ipsum dolor sit amet consectetur. Natoque risus diam posuere purus duis arcu",
    image: hole4,
  },
  {
    id: 5,
    name: "5-Hole Course",
    par: "3",
    yards: "325",
    description: "Lorem ipsum dolor sit amet consectetur. Natoque risus diam posuere purus duis arcu",
    image: hole5,
  },
  {
    id: 6,
    name: "6-Hole Course",
    par: "4",
    yards: "450",
    description: "Lorem ipsum dolor sit amet consectetur. Natoque risus diam posuere purus duis arcu",
    image: hole6,
  },
  {
    id: 7,
    name: "7-Hole Course",
    par: "3",
    yards: "380",
    description: "Lorem ipsum dolor sit amet consectetur. Natoque risus diam posuere purus duis arcu",
    image: hole7,
  },
  {
    id: 8,
    name: "8-Hole Course",
    par: "4",
    yards: "435",
    description: "Lorem ipsum dolor sit amet consectetur. Natoque risus diam posuere purus duis arcu",
    image: hole8,
  },
  {
    id: 9,
    name: "9-Hole Course",
    par: "5",
    yards: "550",
    description: "Lorem ipsum dolor sit amet consectetur. Natoque risus diam posuere purus duis arcu",
    image: hole9,
  },
  {
    id: 10,
    name: "10-Hole Course",
    par: "4",
    yards: "420",
    description: "Lorem ipsum dolor sit amet consectetur. Natoque risus diam posuere purus duis arcu",
    image: hole10,
  },
  {
    id: 11,
    name: "11-Hole Course",
    par: "3",
    yards: "330",
    description: "Lorem ipsum dolor sit amet consectetur. Natoque risus diam posuere purus duis arcu",
    image: hole11,
  },
  {
    id: 12,
    name: "12-Hole Course",
    par: "4",
    yards: "440",
    description: "Lorem ipsum dolor sit amet consectetur. Natoque risus diam posuere purus duis arcu",
    image: hole12,
  },
  {
    id: 13,
    name: "13-Hole Course",
    par: "5",
    yards: "560",
    description: "Lorem ipsum dolor sit amet consectetur. Natoque risus diam posuere purus duis arcu",
    image: hole13,
  },
  {
    id: 14,
    name: "14-Hole Course",
    par: "3",
    yards: "350",
    description: "Lorem ipsum dolor sit amet consectetur. Natoque risus diam posuere purus duis arcu",
    image: hole14,
  },
  {
    id: 15,
    name: "15-Hole Course",
    par: "4",
    yards: "455",
    description: "Lorem ipsum dolor sit amet consectetur. Natoque risus diam posuere purus duis arcu",
    image: hole15,
  },
  {
    id: 16,
    name: "16-Hole Course",
    par: "3",
    yards: "320",
    description: "Lorem ipsum dolor sit amet consectetur. Natoque risus diam posuere purus duis arcu",
    image: hole16,
  },
  {
    id: 17,
    name: "17-Hole Course",
    par: "5",
    yards: "570",
    description: "Lorem ipsum dolor sit amet consectetur. Natoque risus diam posuere purus duis arcu",
    image: hole17,
  },
  {
    id: 18,
    name: "18-Hole Course",
    par: "4",
    yards: "430",
    description: "Lorem ipsum dolor sit amet consectetur. Natoque risus diam posuere purus duis arcu",
    image: hole18,
  },
  {
    id: 19,
    name: "19-Hole Course",
    par: "3",
    yards: "340",
    description: "Lorem ipsum dolor sit amet consectetur. Natoque risus diam posuere purus duis arcu",
    image: hole19,
  },
  {
    id: 20,
    name: "20-Hole Course",
    par: "4",
    yards: "445",
    description: "Lorem ipsum dolor sit amet consectetur. Natoque risus diam posuere purus duis arcu",
    image: hole20,
  },
  {
    id: 21,
    name: "21-Hole Course",
    par: "5",
    yards: "580",
    description: "Lorem ipsum dolor sit amet consectetur. Natoque risus diam posuere purus duis arcu",
    image: hole21,
  },
];

export default function CourseCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % courses.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + courses.length) % courses.length);
  };

  const current = courses[index];

  return (
    <div className="relative w-full h-[80vh] bg-black rounded-[24px] overflow-hidden">
      {/* BACKGROUND FADE SLIDE */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current.id}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${current.image})` }}
          initial={{ opacity: 1, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      {/* DARK LAYER */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT AREA */}
      <div className="relative z-10 h-full flex items-end justify-between px-[160px] pb-12 text-white gap-12">
        {/* LEFT TEXT */}
        <div className="w-1/4 text-center flex flex-col items-center justify-center gap-1">
          {/* ARROWS */}
          <div className="flex gap-6 mb-4">
            <button
              onClick={prev}
              className="w-14 h-14 rounded-full bg-white/5 hover:bg-white/20 flex items-center justify-center transition-all duration-300"
              style={{
                boxShadow: "0 0 30px rgba(0, 0, 0, 0.61), 0 8px 32px rgba(0, 0, 0, 0.61)"
              }}
            >
              <HiChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={next}
              className="w-14 h-14 rounded-full bg-white/5  hover:bg-white/20 flex items-center justify-center  transition-all duration-300"
              style={{
                boxShadow: "0 0 30px rgba(0, 0, 0, 0.61), 0 8px 32px rgba(0, 0, 0, 0.61)"
              }}
            >
              <HiChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* TITLE STATIC */}
          <h2 className="text-[70px] font-optima font-bold whitespace-nowrap mb-2">
            21-Hole Course
          </h2>

          {/* PAR | YARDS */}
          <AnimatePresence mode="wait">
            <motion.p
              key={current.par}
              className="text-sm font-inter mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              Par : {current.par} | Yards : {current.yards}
            </motion.p>
          </AnimatePresence>

          {/* DESCRIPTION SLIDE UP */}
          <div className="h-[80px] flex items-center justify-center mb-20">
            <AnimatePresence mode="wait">
              <motion.p
                key={current.id}
                className="text-[15px] font-inter font-light leading-relaxed w-[28vw]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                {current.description}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* DOTS */}
          <div className="flex gap-2">
            {courses.map((_, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
                  index === i ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT CARDS CAROUSEL */}
        <div className="absolute right-10 bottom-10 h-full w-1/2 flex items-end gap-6 overflow-hidden perspective">
          <motion.div
            className="flex gap-1"
            animate={{ x: -index * 353 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              alignItems: "flex-end"
            }}
          >
            {courses.map((course, idx) => {
              const isActive = idx === index;

              return (
                <div
                  key={course.id}
                  className="flex gap-2 items-end flex-shrink-0"
                  style={{ width: "350px" }}
                >
                  {/* MAIN CARD - LARGE */}
                  <motion.div
                    className="relative w-[350px] h-[55vh] rounded-[24px] overflow-hidden flex-shrink-0"
                    animate={{
                      scale: isActive ? 1 : 0.8,
                      opacity: 1,
                      borderWidth: isActive ? 5 : 0,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{
                      transformOrigin: "bottom center",
                      borderColor: "white",
                      boxShadow: isActive ? "0 20px 25px -5px rgba(0, 0, 0, 0.1)" : "none",
                      filter: isActive ? "brightness(1)" : "brightness(0.7)",
                    }}
                  >
                    <img
                      src={course.image}
                      alt={course.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}