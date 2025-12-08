import eagle1 from "../assets/img/eagle1.webp";
import highlanders2 from "../assets/img/highlanders2.webp";
import alba2 from "../assets/img/alba2.webp";
import building3 from "../assets/img/building3.webp";
import shop from "../assets/img/shop.webp";
import islay1 from "../assets/img/islay1.webp";

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
      <div className="w-full flex justify-center mt-32 pb-20">
        <div className="w-full">
          <div className="-mb-[100px] text-center">
            <h2 className="text-[70px] font-optima text-black">More Facilities</h2>
          </div>

          {/* Grid Layout - Exact like attachment: 2 rows */}
          <div className="space-y-5">
            {/* Row 1 - Fraser, Larassa, Locker */}
            <div className="flex gap-5 items-end">
              {/* Fraser Driving & Lounge */}
              <div className="relative w-[31%] h-[570px] rounded-[24px] overflow-hidden group cursor-pointer">
                <img src={eagle1} alt="Fraser Driving & Lounge" className="w-ful h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div 
                    className="backdrop-blur-sm rounded-[24px] p-7 transition-all duration-300"
                    style={{ 
                      background: 'linear-gradient(-45deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.2))',
                      backgroundSize: '400% 400%',
                      animation: 'gradient 15s ease infinite',
                      boxShadow: '0 0 30px rgba(0, 0, 0, 0.61), 0 8px 32px rgba(0, 0, 0, 0.61)'
                    }}
                  >
                    <h3 className="text-white text-[30px] font-optima mb-20">Fraser Driving & Lounge</h3>
                    <p className="text-white text-[12px] mb-5 font-inter leading-relaxed font-light">
                      Lorem Ipsum is simply dummy text of<br/>
                      the printing and typesetting industry.<br/>
                      Lorem Ipsum has been the industry's
                    </p>
                    <button className="px-4 py-1.5 bg-white text-black rounded-full text-[10px] font-inter font-medium hover:bg-gray-100 transition flex items-center gap-2">
                      Read More <span>→</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Larassa Resto */}
              <div className="relative w-[35%] h-[440px] rounded-[24px] overflow-hidden group cursor-pointer">
                <img src={highlanders2} alt="Larassa Resto" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div 
                    className="backdrop-blur-sm rounded-[24px] p-7 transition-all duration-300"
                    style={{ 
                      background: 'linear-gradient(-45deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.2))',
                      backgroundSize: '400% 400%',
                      animation: 'gradient 15s ease infinite',
                      boxShadow: '0 0 30px rgba(0, 0, 0, 0.61), 0 8px 32px rgba(0, 0, 0, 0.61)'
                    }}
                  >
                    <h3 className="text-white text-[30px] font-optima mb-20">Larassa Resto</h3>
                    <p className="text-white text-[12px] mb-5 font-inter leading-relaxed">
                      Lorem Ipsum is simply dummy text of<br/>
                      the printing and typesetting industry.<br/>
                      Lorem Ipsum has been the industry's
                    </p>
                    <button className="px-4 py-1.5 bg-white text-black rounded-full text-[10px] font-inter font-medium hover:bg-gray-100 transition flex items-center gap-2">
                      Read More <span>→</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Locker */}
              <div className="relative w-[31%] h-[570px] rounded-[24px] overflow-hidden group cursor-pointer">
                <img src={alba2} alt="Locker" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div 
                    className="backdrop-blur-sm rounded-[24px] p-7 transition-all duration-300"
                    style={{ 
                      background: 'linear-gradient(-45deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.2))',
                      backgroundSize: '400% 400%',
                      animation: 'gradient 15s ease infinite',
                      boxShadow: '0 0 30px rgba(0, 0, 0, 0.61), 0 8px 32px rgba(0, 0, 0, 0.61)'
                    }}
                  >
                    <h3 className="text-white text-[30px] font-optima mb-20 leading-tight">Locker</h3>
                    <p className="text-white text-[12px] mb-5 font-inter leading-relaxed font-light">
                      Lorem Ipsum is simply dummy text of<br/>
                      the printing and typesetting industry.<br/>
                      Lorem Ipsum has been the industry's
                    </p>
                    <button className="px-4 py-1.5 bg-white text-black rounded-full text-[10px] font-inter font-medium hover:bg-gray-100 transition flex items-center gap-2">
                      Read More <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2 - Bale Gede, Pro Shop, VIP Room */}
            <div className="flex gap-5">
              {/* Bale Gede */}
              <div className="relative w-[60%] h-[400px] rounded-[24px] overflow-hidden group cursor-pointer">
                <img src={building3} alt="Bale Gede" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div 
                    className="backdrop-blur-sm rounded-[24px] p-7 transition-all duration-300"
                    style={{ 
                      background: 'linear-gradient(-45deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.2))',
                      backgroundSize: '400% 400%',
                      animation: 'gradient 15s ease infinite',
                      boxShadow: '0 0 30px rgba(0, 0, 0, 0.61), 0 8px 32px rgba(0, 0, 0, 0.61)'
                    }}
                  >
                    <h3 className="text-white text-[30px] font-optima mb-20 leading-tight">Bale Gede</h3>
                    <p className="text-white text-[12px] mb-5 font-inter leading-relaxed font-light">
                      Lorem Ipsum is simply dummy text of<br/>
                      the printing and typesetting industry.<br/>
                      Lorem Ipsum has been the industry's
                    </p>
                    <button className="px-4 py-1.5 bg-white text-black rounded-full text-[10px] font-inter font-medium hover:bg-gray-100 transition flex items-center gap-2">
                      Read More <span>→</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Pro Shop */}
              <div className="relative w-[35%] h-[400px] rounded-[24px] overflow-hidden group cursor-pointer">
                <img src={shop} alt="Pro Shop" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div 
                    className="backdrop-blur-sm rounded-[24px] p-7 transition-all duration-300"
                    style={{ 
                      background: 'linear-gradient(-45deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.2))',
                      backgroundSize: '400% 400%',
                      animation: 'gradient 15s ease infinite',
                      boxShadow: '0 0 30px rgba(0, 0, 0, 0.61), 0 8px 32px rgba(0, 0, 0, 0.61)'
                    }}
                  >
                    <h3 className="text-white text-[30px] font-optima mb-20 leading-tight">Pro Shop</h3>
                    <p className="text-white text-[12px] mb-5 font-inter leading-relaxed font-light">
                      Lorem Ipsum is simply dummy text of<br/>
                      the printing and typesetting industry.<br/>
                      Lorem Ipsum has been the industry's
                    </p>
                    <button className="px-4 py-1.5 bg-white text-black rounded-full text-[10px] font-inter font-medium hover:bg-gray-100 transition flex items-center gap-2">
                      Read More <span>→</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* VIP Room */}
              <div className="relative w-[31%] h-[400px] rounded-[24px] overflow-hidden group cursor-pointer">
                <img src={islay1} alt="VIP Room" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div 
                    className="backdrop-blur-sm rounded-[24px] p-7 transition-all duration-300"
                    style={{ 
                      background: 'linear-gradient(-45deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.2))',
                      backgroundSize: '400% 400%',
                      animation: 'gradient 15s ease infinite',
                      boxShadow: '0 0 30px rgba(0, 0, 0, 0.61), 0 8px 32px rgba(0, 0, 0, 0.61)'
                    }}
                  >
                    <h3 className="text-white text-[30px] font-optima mb-20 leading-tight">VIP Room</h3>
                    <p className="text-white text-[12px] mb-5 font-inter leading-relaxed font-light">
                      Lorem Ipsum is simply dummy text of<br/>
                      the printing and typesetting industry.<br/>
                      Lorem Ipsum has been the industry's
                    </p>
                    <button className="px-4 py-1.5 bg-white text-black rounded-full text-[10px] font-inter font-medium hover:bg-gray-100 transition flex items-center gap-2">
                      Read More <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Facilities;
