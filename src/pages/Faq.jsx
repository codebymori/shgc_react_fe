import Navbar from "../components/Navbar";
import Button from "../components/Button";
import FAQ from "../components/faq";
import msp5 from "../assets/img/msp5.webp";

const Faq = () => {
  
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Image */}
      <div className="flex justify-center pt-24">
        <div className="w-[95vw]">
          <img
            src={msp5}
            alt="FAQ - Frequently Asked Questions"
            className="w-full h-[60vh] object-cover object-bottom rounded-[24px]"
          />
        </div>
      </div>

      {/* White Card with Title - Positioned to overlap hero */}
      <div className="w-full flex justify-center -mt-10 relative z-10 px-4">
        <div className="bg-white rounded-[50px] w-[30vw] max-w-3xl p-0 text-center">
          <h1 className="text-[70px] font-optima text-black mb-2">FAQ</h1>
          
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
            Find answers to commonly asked questions about Sentul Highlands Golf Club, 
            from membership information to course policies and facilities.
          </p>

          {/* Button */}
          <div className="flex justify-center">
            <Button
              label="Contact Us"
              onClick={() => console.log("Contact clicked")}
              bgClass="bg-[#24452D]"
              textClass="text-white"
              roundedClass="rounded-full"
              iconClass="text-white"
              secondWordClass="font-semibold"
            />
          </div>
        </div>
      </div>

      {/* FAQ Content Section */}
      <div className="w-full flex justify-center px-4 pb-20 mt-20">
        <div className="w-[95vw] flex gap-16">
          
          {/* Left Side - Categories */}
          <div className="flex-1 max-w-sm">
            <div className="bg-white rounded-[24px] p-8 sticky top-24 h-fit">
              <h2 className="text-[30px] font-optima text-[#24452D] mb-6">Your Question<br />Answered</h2>
              
              {/* Category Menu */}
              <div className="space-y-4 mb-8">
                <button className="block w-full text-left py-2 text-[15px] font-inter text-black font-bold">
                  General
                </button>
                <button className="block w-full text-left py-2 text-[15px] font-inter text-gray-600 hover:text-black">
                  Book Tee Time
                </button>
                <button className="block w-full text-left py-2 text-[15px] font-inter text-gray-600 hover:text-black">
                  Membership
                </button>
                <button className="block w-full text-left py-2 text-[15px] font-inter text-gray-600 hover:text-black">
                  Payment
                </button>
                <button className="block w-full text-left py-2 text-[15px] font-inter text-gray-600 hover:text-black">
                  Other
                </button>
              </div>

              {/* Contact Section */}
              <div className="pt-6">
                <div className="w-16 h-px bg-[#A4781A] mb-6"></div>
                <p className="text-[15px] font-inter text-gray-600 mb-2">
                  Still have question ? Don't worry !
                </p>
                <p className="text-[15px] font-inter text-gray-600 mb-4">
                  Please feel free to ask
                </p>
                <Button
                  label="Contact Us"
                  onClick={() => console.log("Contact clicked")}
                  bgClass="bg-[#E8F4E6]"
                  textClass="text-[#24452D]"
                  roundedClass="rounded-full"
                  iconClass="text-[#24452D]"
                  secondWordClass="font-semibold"
                  className="text-sm px-4 py-2"
                />
              </div>
            </div>
          </div>

          {/* Right Side - FAQ Accordion */}
          <div className="flex-[2] bg-[#F5F5F5]/30 rounded-[24px] pb-10">
            <div className="mb-6 mt-8 pl-20">
              <h2 className="text-[30px] font-optima text-black mb-2"># General Question</h2>
              <p className="text-[15px] font-inter leading-loose text-gray-600">
                Lorem Ipsum is simply dummy text of the printing <br></br> and typesetting industry. Lorem Ipsum has been the industry's
              </p>
            </div>
            
            {/* FAQ Component */}
            <FAQ />
          </div>

        </div>
      </div>

    </div>
  );
};

export default Faq;