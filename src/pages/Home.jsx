import React, { useState } from 'react';
import heroVideo from '../assets/video/hero-video-dummy.mp4'
import Button from '../components/Button';
import ContactPopup from '../components/ContactPopup';
import ballImg from '../assets/img/ball.png'
import patternImg from '../assets/img/patern-1.png'
import driveImg from '../assets/img/drive.webp'
import shopImg from '../assets/img/shop.webp'
import faqImg from '../assets/img/msp4.webp'
import courseImg from '../assets/img/hole6.webp'
import partner1 from '../assets/img/partner1.png'
import partner2 from '../assets/img/partner2.png'
import NewsCards from '../components/newsCards';
import FAQ from '../components/faq';

const Home = () => {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  const openContactPopup = () => {
    setIsContactPopupOpen(true);
  };

  const closeContactPopup = () => {
    setIsContactPopupOpen(false);
  };

  return (
      <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-white">
    
        {/* Hero */}

      <div className="relative h-[80vh] rounded-[24px] text-white flex justify-end items-center overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          className="absolute inset-0 w-full h-full object-cover rounded-[24px]"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r sm:bg-gradient-to-l from-black/90 to-transparent rounded-[24px]"></div>
        <div className="relative z-10 p-7 md:p-5 md:mr-2 lg:mr-20 md:w-[50%] lg:w-[40%] text-left">
            <h1 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px] leading-normal font-optima mb-6">The Golfer's <br/> Paradise</h1>
            <p className=" text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-light leading-loose mb-8 w-[70%] md:w-[80%] lg:w-[70%]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
            <Button 
              label="Book NOW"
              bgClass="bg-white"
              textClass="text-black"
              iconClass="text-black"
              secondWordClass='font-optima font-medium  text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px]'
              onClick={() => {
                    window.location.href = "/book-tee-time";
                  }}/>
        </div>
      </div>

      {/* about */}

      <div className='relative flex flex-col md:flex-row justify-center gap-4 sm:gap-6 md:gap-10 lg:gap-16 xl:gap-20 mt-10 sm:mt-12 md:mt-16 lg:mt-20'>
         <img src={ballImg} alt="ball" className="absolute z-10 right-10 md:right-0 md:left-2 bottom-[250px] sm:bottom-60 md:-bottom-20 lg:-bottom-32 object-contain pointer-events-none" style={{ width: '55%', height: 'auto' }} />
        <div className='p-4 sm:p-6 md:p-8 lg:p-10 w-[60%] md:w-[40%] relative bg-[#24452D] z-0 rounded-[16px] sm:rounded-[18px] md:rounded-[20px] lg:rounded-[24px] overflow-visible'>
          {/* absolute ball image positioned relative to the Our Story card */}
          <h2 className='text-[24px] sm:text-[32px] md:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px] text-[#E4E9D4] font-optima'>Our Story</h2>
        </div>
        <div className='p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 w-full md:w-[60%] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] lg:rounded-[24px] bg-[#F5F5F5] flex flex-col items-start gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-[200px]'>
          <p className='font-inter font-light text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] leading-relaxed sm:leading-loose'>Officially opened in 1997, the 18-holes championship golf course of the Sentul Highlands Golf Club is a genuine masterpiece designed by no one less than South African golf legend and multiple PGA – and the Major winner, Gary Player. It is situated in the prestigious and fully integrated and up-market Sentul City housing estate. Back-dropped by several mountains that overlook the stunning "Sentul Highlands", playing this challenging course comes with sweeping vistas in nearly every direction.</p>
          <Button 
            label="See Course"
            bgClass="bg-[#24452D]"
            textClass="text-white"
            iconClass="text-white"
            secondWordClass='font-optima'
            onClick={() => {
                    window.location.href = "/the-course";
                  }}/>
        </div>
      </div>

      {/* Facilities */}

      <div
        className='h-[150px] md:h-[150px] lg:h-[200px] xl:h-[250px] pl-[50px] md:pl-[50px] lg:pl-[150px] rounded-[24px] mt-[130px] md:mt-[150px] lg:mt-[250px] flex items-center justify-start text-black relative '
        style={{
          backgroundImage: `url(${patternImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundColor: '#24452D',
          backgroundPosition: 'center',
        }}
      >
        <div className='bg-white px-6 md:px-10 xl:px-20 py-2 w-[350px] md:w-[500px]  xl:w-[600px] rounded-[50px] mt-[-100px] md:mt-[-150px] lg:mt-[-200px] '>
          <h2 className='text-[32px] sm:text-[20px] md:text-[30px] lg:text-[40px] xl:text-[50px] font-optima mb-4'>Facilities</h2>
          <p className='font-inter font-light leading-loose text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] mb-8 w-[100%]'>Stay updated with the latest news, offers, and events from Sentul Highlands Golf Club by subscribing to our newsletter.</p> 
        </div>
      </div>

      <div className='mt-6 sm:mt-8 md:mt-10 flex flex-col gap-10 sm:gap-10 md:gap-8 lg:gap-10 mb-20 sm:mb-30 md:mb-40 rounded-[16px] sm:rounded-[20px] md:rounded-[24px]'>
        <div className='w-[100%] flex flex-col  md:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 rounded-[16px] sm:rounded-[20px] md:rounded-[24px]'>
          <div className='h-[250px] sm:h-[350px] md:h-[350px] lg:h-[450px] rounded-[16px] sm:rounded-[20px] md:rounded-[24px] w-full md:w-[60%] lg:w-[65%]' 
              style={{
            backgroundImage: `url(${driveImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundColor: '#24452D',
            backgroundPosition: 'center',
            }}></div>
          
          <div className='px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[50px] py-4 sm:py-6 md:py-8 lg:py-[30px] bg-[#E3EBD3] mt-[-100px] md:mt-[0px] w-full md:w-[40%] lg:w-[35%] rounded-[16px] sm:rounded-[20px] md:rounded-[24px] flex flex-col justify-between'>
            <div className='flex flex-col'>
              <h1 className='font-optima text-[20px] sm:text-[24px] md:text-[28px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px] text-[#0F3563]'>Fraser Driving & Lounge</h1>
              <p className='font-inter font-light text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] leading-relaxed sm:leading-loose my-4 sm:my-6 md:my-8'>Fraser Driving & Lounge is the perfect place to unwind after a round of golf or to simply enjoy a casual meal with friends and family.</p>
            </div>
            <Button
                label="See Details"
                bgClass="bg-white"
                textClass="text-[#24452D]"
                iconClass="text-[#24452D]"
                secondWordClass='font-optima font-medium'
                onClick={() => console.log('clicked')}/>
          </div>
        </div>

        <div className='w-[100%] flex flex-col-reverse md:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 rounded-[16px] sm:rounded-[20px] md:rounded-[24px]'>
          <div className='px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[50px] py-4 sm:py-6 md:py-8 lg:py-[30px] bg-[#24452D]  mt-[-100px] md:mt-[0px] w-full md:w-[40%] lg:w-[35%] rounded-[16px] sm:rounded-[20px] md:rounded-[24px] flex flex-col items-start justify-between'>
            <div className='flex flex-col'>
              <h1 className='font-optima text-[20px] sm:text-[24px] md:text-[28px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px] text-[#E4E9D4]'>Pro Shop</h1>
              <p className='font-inter font-light text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] text-[#E4E9D4] leading-relaxed sm:leading-loose my-4 sm:my-6 md:my-8'>Fraser Driving & Lounge is the perfect place to unwind after a round of golf or to simply enjoy a casual meal with friends and family.</p>
            </div>
            <Button
                label="See Details"
                bgClass="bg-white"
                textClass="text-[#24452D]"
                iconClass="text-[#24452D]"
                secondWordClass='font-optima font-medium'
                onClick={() => console.log('clicked')}/>
          </div>
          <div className='h-[250px] sm:h-[350px] md:h-[350px] lg:h-[450px] rounded-[16px] sm:rounded-[20px] md:rounded-[24px] w-full md:w-[60%] lg:w-[65%]' 
              style={{
            backgroundImage: `url(${shopImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundColor: '#24452D',
            backgroundPosition: 'center',
            }}></div>
        </div>
        <div className='w-[100%] flex mt-10 flex flex-col gap-5 justify-center items-center'>
          <p className='text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px]'>basj jasa sjanb</p>
           <Button
                label="More Facilities"
                bgClass="bg-[#24452D] py-3 px-6"
                textClass="text-[#E4E9D4]"
                iconClass="text-[#E4E9D4]"
                secondWordClass='font-optima font-medium'
                onClick={() => {
                    window.location.href = "/facilities";
                  }}/>
        </div>

        {/* The Course */}

        <div className='mt-20 w-[100%] flex flex-col rounded-[24px]'>
          <div className='py-2 px-2 text-center self-end rounded-[52px] z-10 mr-5 sm:mr-10 lg:mr-20'>
            <h1 className='bg-white text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px] px-10 py-2 rounded-[30px] sm:rounded-[40px] md:rounded-[50px] font-optima text-black'>The Course</h1>
          </div>
          <div className='rounded-[24px] h-[800px] flex flex-col justify-end md:flex-row md:justify-center md:items-end gap-7 md:gap-10 lg:gap-10 xl:gap-20 p-10 md:p-10 lg:p-20 w-[100%] mt-[-50px] z-0 relative'
            style={{
                backgroundImage: `url(${courseImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}>
            {/* transformed background layer (parallax + zoom) */}
            
            {/* gradient overlay: black (bottom) -> transparent (top) */}
            <div className="absolute inset-0 bg-gradient-to-r md:bg-gradient-to-t from-black/80 to-transparent rounded-[24px] z-10 pointer-events-none"></div>
            <div className=' w-[100%]  md:w-[33%] gap-10 md:gap-20 flex flex-col rounded-[24px] relative z-20  justify-between'>
              <h1 className='text-[20px] sm:text-[20px] md:text-[20px] font-optima text-white w-full sm:w-[50%] md:w-[100%] xl:w-[90%]'>SIGNATURE HOLE OF 
              SENTUL HIGHLANDS GOLF CLUB
              </h1>
              <Button
                 label="See Course"
                bgClass="bg-white py-3 px-6"
                textClass="text-[#24452D]"
                iconClass="text-[#24452D]"
                secondWordClass='font-optima font-medium'
                onClick={() => {
                    window.location.href = "/the-course";
                  }}/>
            </div>
              <div className='p-6 lg:p-10  md:w-[33%] gap-5 sm:gap-10 xl:gap-32 flex flex-col rounded-[24px] relative z-20 justify-between 
                 bg-black/10 backdrop-blur-xl border border-white/20 shadow-lg shadow-black/5 text-white leading-loose text-inter text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px]'> 
              <h1>5th Hole Par 4 – 473 Yards</h1>
              <p>This hole plays easier than it might look. There is a wide landing area for short hitters.
                  A stream cuts across the fairway and a beauty is yet to come.</p>
            </div>
            <div className='p-6 lg:p-10 md:w-[33%] gap-5 sm:gap-10 xl:gap-32 flex flex-col rounded-[24px] relative z-20 justify-between 
                 bg-black/10 backdrop-blur-xl border border-white/20 shadow-lg shadow-black/5 text-white leading-loose text-inter text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px]'>
              <h1>5th Hole Par 4 – 473 Yards</h1>
              <p>This hole plays easier than it might look. There is a wide landing area for short hitters.
                  A stream cuts across the fairway and a beauty is yet to come.</p>
            </div>
            
          </div>
        </div>

        {/* News & Events */}

        <div className='w-[100%] mt-10 md:mt-20'>
          <div className=' text-center flex flex-col items-center justify-center'>
            <h1 className='font-optima text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px]'>News & Events</h1>
            <p className='font-inter font-light leading-loose text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] w-[60%] md:w-[70%] lg:w-[50%] xl:w-[30%] text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
          </div>
          <div className=' py-10  gap-10 flex flex-col justify-center items-center'>
            <NewsCards count={3} />
            <Button
                 label="See More"
                bgClass="bg-[#E4E9D4] py-3 px-6"
                textClass="text-[#24452D]"
                iconClass="text-[#24452D]"
                secondWordClass='font-optima font-medium'
                onClick={() => {
                    window.location.href = "/news-event";
                  }}/>
          </div>
        </div>

        {/* FAQ */}

        <div className='w-[100%] mt-10 md:mt-20 md:mb-20 xl:mb-40 bg-gray-100 rounded-[24px] p-10 md:p-10 xl:p-20 gap-10 md:gap-10 xl:gap-10 flex flex-col md:flex-row justify-between'
        style={{
                backgroundImage: `url(${faqImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}>
          <div className='md:w-[40%] h-fit md:sticky top-28 md:bg-[#24452D]/60  backdrop-blur-sm md:backdrop-blur-xl md:border md:border-white/20 md:p-5 lg:p-10 rounded-[24px] flex flex-col items-start justify-between '>
            <h1 className='font-optima text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px] md:text-white text-left'>FAQ</h1>
            <p className='font-inter font-light md:text-white text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] leading-loose'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
            <div className='mt-10 flex md:flex-col xl:flex-row gap-5 md:gap-5 xl:gap-5'>
              <Button
                 label="Contact Us"
                bgClass="bg-white py-2 sm:py-3 px-4 sm:px-6"
                textClass="text-[#24452D]"
                iconClass="text-[#24452D]"
                secondWordClass='font-optima font-medium'
                className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px]"
                iconSize={14}
                onClick={openContactPopup}/>
                <Button
                 label="More FAQ"
                bgClass="bg-[#E4E9D4] py-2 sm:py-3 px-4 sm:px-6"
                textClass="text-[#24452D]"
                iconClass="text-[#24452D]"
                secondWordClass='font-optima font-medium'
                className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px]"
                iconSize={14}
               onClick={() => {
                    window.location.href = "/faq";
                  }}/>
            </div>
          </div>
          <div className='md:w-[60%]'>
              <FAQ />
          </div>
        </div>

        {/* Partners */}
        <div className='w-[100%] mt-0'>
          <div className=' text-center flex flex-col items-center justify-center'>
            <h1 className='font-optima text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px]'>Partners</h1>
            <p className='font-inter font-light leading-loose text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] w-[60%] md:w-[70%] lg:w-[50%] xl:w-[30%] text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          </div>
          <div className='py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-10 gap-6 sm:gap-8 md:gap-10 flex flex-col justify-center items-center'>
            <div className='w-[100%] flex justify-center items-center gap-2 sm:gap-12 md:gap-16 lg:gap-20'>
              <img src={partner1} alt="Partner 1" className='h-[80px] sm:h-[140px] md:h-[130px] lg:h-[180px] xl:h-[200px] object-contain' />
              <img src={partner2} alt="Partner 2" className='h-[30px] sm:h-[50px] md:h-[50px] lg:h-[90px] xl:h-[100px] object-contain' />
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Popup */}
      <ContactPopup 
        isOpen={isContactPopupOpen} 
        onClose={closeContactPopup} 
      />
    </div>
  );
};

export default Home;
