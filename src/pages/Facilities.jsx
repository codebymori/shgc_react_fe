import eagle1 from "../assets/img/eagle1.webp";
import MoreFacilities from "../components/MoreFacilities";

const Facilities = () => {
  
  return (
    <div className="w-full min-h-screen flex flex-col bg-white p-10">

      {/* Hero Section with Image */}
      <div className="flex justify-center">
        <div className="w-full">
          <img
            src={eagle1}
            alt="Facilities"
            className="w-full h-[60vh] object-cover rounded-[24px]"
          />
        </div>
      </div>

      {/* White Card with Title - Positioned to overlap hero */}
      <div className="w-full flex justify-center -mt-10 relative z-10 px-4">
        <div className="bg-white rounded-[50px] w-[30vw] max-w-3xl p-0 text-center">
          <h1 className="text-[70px] font-optima text-black mb-2">Facilities</h1>
        </div>
      </div>


      {/* Golf Course Facilities Section */}
      <div className="w-full flex justify-center mt-20 ">
        <div className="w-full py-16">
          <div className="flex gap-20 items-end justify-between">
            {/* Left Side - Text Content */}
            <div className="flex-1 flex flex-col gap-[60px]">
              <h2 className="text-[70px] font-optima text-black mb-2">Golf Course Facilities</h2>
              
              <p className="text-[15px] leading-loose font-inter font-light max-w-xl">
                At Sentul Highlands Golf Club, the experience extends far beyond the course. After a rewarding round surrounded by the calm Sentul hills, you'll find a collection of thoughtfully designed facilities that elevate your visit with comfort and understated luxury.
                
                From inviting lounges perfect for unwinding, to refined dining that lets you savor the moment, every space flows naturally into your day. Well-appointed locker areas offer privacy, while premium retail selections and exclusive rooms provide everything from personal comfort to intimate business gatherings. Open, airy spaces also set the stage for group events and memorable occasions.
                
                Here, each facility plays a role in the rhythm of your game—seamlessly blending sport, relaxation, and connection. Sentul Highlands Golf Club brings harmony to every moment, making each visit a truly memorable experience.
              </p>

              {/* Button */}
              <div>
                <button className="px-6 py-3 bg-[#24452D] text-white rounded-full font-inter font-light hover:bg-green-800 transition-all duration-300 flex items-center gap-3 w-fit">
                  Explore Membership
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex justify-end">
              <img
                src={eagle1}
                alt="Golf Course Facilities"
                className="w-[38vw] h-[70vh] rounded-[24px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* More Facilities Section */}
      <MoreFacilities />
      
    </div>
  );
};

export default Facilities;
