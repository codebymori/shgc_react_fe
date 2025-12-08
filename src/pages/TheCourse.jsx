import Navbar from "../components/Navbar";
import Button from "../components/Button";
import CourseCarousel from "../components/CourseCarousel";
import GolfCourseAesthetic from "../components/GolfCourseAesthetic";
import hole1 from "../assets/img/hole1.webp";
import golfMapImg from "../assets/img/maps.png";

const TheCourse = () => {
  
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Image */}
      <div className="flex justify-center pt-24">
        <div className="w-[95vw]">
          <img
            src={hole1}
            alt="The Course - Golf Course Hole 1"
            className="w-full h-[60vh] object-cover rounded-[24px]"
          />
        </div>
      </div>

      {/* White Card with Title - Positioned to overlap hero */}
      <div className="w-full flex justify-center -mt-10 relative z-10 px-4">
        <div className="bg-white rounded-[50px] w-[30vw] max-w-3xl p-0 text-center">
          <h1 className="text-[70px] font-optima text-black mb-2">The Course</h1>
          
          {/* Divider */}
          <div className="flex justify-center mb-2">
            <div className="w-px h-8 bg-black"></div>
          </div>
        </div>
      </div>

      {/* Description and Button Section */}
      <div className="w-full flex justify-center px-4">
        <div className="w-[35vw] text-center pb-16">
          {/* Description */}
          <p className="font-inter font-light leading-loose mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          {/* Button */}
          <div className="flex justify-center">
            <Button
              label="Inquire Now"
              onClick={() => console.log("Inquire clicked")}
              bgClass="bg-[#24452D]"
              textClass="text-white"
              roundedClass="rounded-full"
              iconClass="text-white"
              secondWordClass="font-semibold"
            />
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="w-full flex justify-center mt-15 px-4">
        <div className="w-[95vw]">
          <CourseCarousel />
        </div>
      </div>

      {/* Golf Course Section */}
      <div className="w-full flex justify-center mt-32">
        <div className="w-[95vw] bg-[#E4E9D4] rounded-3xl p-12 relative">
          {/* Title - "Golf Course" - Top Right with overlap */}
          <div className="flex justify-end mr-20 -mt-[100px] mb-8">
            <h2 className="text-[70px] font-optima text-[#24452D] bg-white rounded-[50px] px-12 py-1">Golf Course</h2>
          </div>

          <div className="flex gap-20 items-center">
            {/* Left Side - Text Card */}
            <div className="flex-1 flex flex-col gap-6">
              {/* Text Card */}
              <div className="bg-white rounded-[24px] p-8 min-h-[300px] flex flex-col justify-between">
                <p className="text-[15px] leading-relaxed font-inter font-light">
                    GOLF COURSE <br></br>
                    Many well-known golf courses around the world are using the Sub-Air System, including the Augusta National and the Wentworth Golf Club.
                    <br></br><br></br>
                    SIGNATURE HOLE OF ROBINSWOOD GOLF CLUB
                    <br></br>
                    5th Hole Par 4 473 Yards
                    <br></br>
                    This hole plays easier than it might look. There is a wide landing area for short hitters.
                    <br></br><br></br>
                    A stream cuts across the fairway and a beauty is yet to come. After you walk pass the second shot, you will certainly hear the noise of a big waterfall, one of the iconic signatures at Robinswood Golf Club and also a picture spot.
                    <br></br><br></br>
                    12th Hole Par 3 204 Yards<br></br>
                    This stunning Par 3 signature hole is perhaps one of the most exciting holes at Robinswood. The apple-shaped island green sits in the middle of the water. Don’t let the yardage fool you in this hole. Choosing the right club is extremely significance, as this is one of the highest and windiest sections of the entire course. Be daring and commit to your tee shot.
                                    </p>
              </div>
            </div>

            {/* Right Side - Golf Course Map */}
            <div className="flex-1 relative">
              {/* Map Image */}
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={golfMapImg}
                  alt="Golf Course Map"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Golf Course Aesthetic Section */}
      <GolfCourseAesthetic />
    </div>
  );
};

export default TheCourse;
