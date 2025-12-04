import { useState } from "react";
import hole1 from "../assets/img/hole1.webp";
import hole2 from "../assets/img/hole2.webp";
import hole3 from "../assets/img/hole3.webp";

const CourseCarousel = () => {
  const courses = [
    {
      id: 1,
      name: "21-Hole Course",
      par: "1",
      yards: "418",
      description: "Lorem ipsum dolor sit amet consectetur. Natoque risus diam posuere purus duis arcu. Pretium augue facilisis amet integer ac hendrerit nisi neque semper. Adipiscing non volutpat eget cursus. Faucibus magna consectetur lorem sagittis ullamcorper. In sapien velit molestie laoreet aenean in cras. Fermentum convallis netus odio sed ipsum quis mi.",
      image: hole1,
    },
    {
      id: 2,
      name: "18-Hole Course",
      par: "2",
      yards: "520",
      description: "Lorem ipsum dolor sit amet consectetur. Natoque risus diam posuere purus duis arcu. Pretium augue facilisis amet integer ac hendrerit nisi neque semper.",
      image: hole2,
    },
    {
      id: 3,
      name: "9-Hole Course",
      par: "3",
      yards: "380",
      description: "Lorem ipsum dolor sit amet consectetur. Natoque risus diam posuere purus duis arcu. Pretium augue facilisis amet integer ac hendrerit nisi neque semper.",
      image: hole3,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? courses.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === courses.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const currentCourse = courses[currentIndex];
  const nextCourse = courses[(currentIndex + 1) % courses.length];

  return (
    <div
      className="relative w-full h-[550px] bg-cover bg-center rounded-[40px] overflow-hidden"
      style={{
        backgroundImage: `url(${currentCourse.image})`,
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content Container */}
      <div className="relative h-full flex items-center justify-between px-12 gap-8">
        {/* Left Side - Text Content */}
        <div className="w-1/4 text-white z-10 flex flex-col justify-center">
          {/* Navigation Arrows */}
          <div className="flex gap-3 mb-8">
            <button
              onClick={handlePrev}
              className="w-14 h-14 rounded-full bg-white/40 hover:bg-white/60 flex items-center justify-center transition"
            >
              <span className="text-white text-2xl font-bold">&lt;</span>
            </button>
            <button
              onClick={handleNext}
              className="w-14 h-14 rounded-full bg-white/40 hover:bg-white/60 flex items-center justify-center transition"
            >
              <span className="text-white text-2xl font-bold">&gt;</span>
            </button>
          </div>

          {/* Title */}
          <h2 className="text-4xl font-bold text-white mb-3">
            {currentCourse.name}
          </h2>

          {/* Par and Yards */}
          <p className="text-white text-sm mb-6">
            Par : {currentCourse.par} | Yards: {currentCourse.yards}
          </p>

          {/* Description */}
          <p className="text-white text-xs leading-relaxed mb-8 text-justify">
            {currentCourse.description}
          </p>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {courses.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  index === currentIndex ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Center - Large Image Card */}
        <div className="w-2/5 h-96 z-10 flex-shrink-0 aspect-square">
          <div className="rounded-[30px] overflow-hidden h-full aspect-square border-8 border-white shadow-2xl">
            <img
              src={currentCourse.image}
              alt={currentCourse.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side - Small Image Card */}
        <div className="w-1/5 h-80 z-10 flex-shrink-0 aspect-square">
          <div className="rounded-[25px] overflow-hidden h-full aspect-square border-6 border-gray-600 shadow-xl relative">
            <img
              src={nextCourse.image}
              alt={nextCourse.name}
              className="w-full h-full object-cover opacity-80"
            />
            {/* Dark overlay on small card */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCarousel;
