import Navbar from "../components/Navbar";
import Button from "../components/Button";
import CourseCarousel from "../components/CourseCarousel";
import hole1 from "../assets/img/hole1.webp";

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
      <div className="w-full flex justify-center -mt-16 relative z-10 px-4">
        <div className="bg-white rounded-[50px] w-[30vw] max-w-3xl p-2 text-center">
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
            industry. Lorem Ipsum has been the industry's
          </p>

          {/* Button */}
          <Button
            label="Inquire NOW"
            onClick={() => console.log("Inquire clicked")}
            className="bg-green-900 hover:bg-green-800 text-white px-8 py-3 rounded-full font-medium transition"
          />
        </div>
      </div>

      {/* Carousel Section */}
      <div className="w-full flex justify-center py-16 px-4">
        <div className="w-[95vw]">
          <CourseCarousel />
        </div>
      </div>
    </div>
  );
};

export default TheCourse;
