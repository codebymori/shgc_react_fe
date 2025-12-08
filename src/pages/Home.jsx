import heroVideo from '../assets/video/hero-video-dummy.mp4'
import Button from '../components/Button';
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

  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      <div className="p-10 bg-white">
    
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
        <div className="absolute inset-0 bg-gradient-to-l from-black/90 to-transparent rounded-[24px]"></div>
        <div className="relative z-10 p-5 mr-20 w-[40%]  text-left">
            <h1 className="text-[70px] leading-normal font-optima mb-6">The Golfer's <br/> Paradise</h1>
            <p className="text-[15px] font-light leading-loose mb-8 w-[70%]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
            <Button 
              label="Book NOW"
              bgClass="bg-white"
              textClass="text-black"
              iconClass="text-black"
              secondWordClass='font-optima font-medium'
              onClick={() => console.log('clicked')}/>
        </div>
      </div>

      {/* about */}

      <div className='relative flex justify-center gap-20 mt-20'>
         <img src={ballImg} alt="ball" className="absolute z-10 left-2 -bottom-32 object-contain pointer-events-none" style={{ width: '55%', height: 'auto' }} />
        <div className='p-10 w-[40%] relative bg-[#24452D] z-0 rounded-[24px] overflow-visible'>
          {/* absolute ball image positioned relative to the Our Story card */}
          <h2 className='text-[70px] text-[#E4E9D4] font-optima'>Our Story</h2>
        </div>
        <div className='p-20 w-[60%] rounded-[24px] bg-[#F5F5F5] flex flex-col items-start gap-[200px]'>
          <p className='font-inter font-light text-[15px] leading-loose'>Officially opened in 1997, the 18-holes championship golf course of the Sentul Highlands Golf Club is a genuine masterpiece designed by no one less than South African golf legend and multiple PGA – and the Major winner, Gary Player. It is situated in the prestigious and fully integrated and up-market Sentul City housing estate. Back-dropped by several mountains that overlook the stunning “Sentul Highlands”, playing this challenging course comes with sweeping vistas in nearly every direction.</p>
          <Button 
            label="See Course"
            bgClass="bg-[#24452D]"
            textClass="text-white"
            iconClass="text-white"
            secondWordClass='font-optima'
            onClick={() => console.log('clicked')}/>
        </div>
      </div>

      {/* Facilities */}

      <div
        className='h-[250px] pl-[150px] rounded-[24px] mt-[250px] flex items-center justify-start text-black relative '
        style={{
          backgroundImage: `url(${patternImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundColor: '#24452D',
          backgroundPosition: 'center',
        }}
      >
        <div className='bg-white px-20 py-2 w-[40%] rounded-[50px] mt-[-200px] '>
          <h2 className='text-[50px] font-optima mb-4'>Facilities</h2>
          <p className='font-inter font-light leading-loose text-[15px] mb-8 w-[100%]'>Stay updated with the latest news, offers, and events from Sentul Highlands Golf Club by subscribing to our newsletter.</p> 
        </div>
      </div>

      <div className='mt-10 flex flex-col gap-10 mb-40 rounded-[24px]'>
        <div className=' w-[100%] flex gap-10 rounded-[24px] flex '>
          <div className='h-[550px] rounded-[24px] w-[65%]' 
              style={{
            backgroundImage: `url(${driveImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundColor: '#24452D',
            backgroundPosition: 'center',
            }}></div>
          
          <div className='px-[50px] py-[30px] bg-[#E3EBD3] w-[35%] rounded-[24px] flex flex-col justify-between'>
            <h1 className='font-optima text-[50px] text-[#0F3563]'>Fraser Driving & Lounge</h1>
            <div className='flex flex-col'>
              <p className='font-inter font-light text-[15px] leading-loose my-8'>Fraser Driving & Lounge is the perfect place to unwind after a round of golf or to simply enjoy a casual meal with friends and family. Our menu features a variety of delicious dishes made from fresh, locally sourced ingredients, as well as a selection of refreshing beverages.</p>
              <Button
                label="See Details"
                bgClass="bg-white"
                textClass="text-[#24452D]"
                iconClass="text-[#24452D]"
                secondWordClass='font-optima font-medium'
                onClick={() => console.log('clicked')}/>
            </div>
          </div>
        </div>

        <div className=' w-[100%] flex gap-10 rounded-[24px]'>
          <div className='px-[50px] py-[30px] bg-[#24452D] w-[35%] rounded-[24px] flex flex-col items-start justify-between'>
            <h1 className='font-optima text-[50px] text-[#E4E9D4]'>Pro Shop</h1>
            <div className='flex flex-col'>
              <p className='font-inter font-light text-[15px] text-[#E4E9D4] leading-loose my-8'>Fraser Driving & Lounge is the perfect place to unwind after a round of golf or to simply enjoy a casual meal with friends and family. Our menu features a variety of delicious dishes made from fresh, locally sourced ingredients, as well as a selection of refreshing beverages.</p>
              <Button
                label="See Details"
                bgClass="bg-white"
                textClass="text-[#24452D]"
                iconClass="text-[#24452D]"
                secondWordClass='font-optima font-medium'
                onClick={() => console.log('clicked')}/>
            </div>
          </div>
          <div className='h-[550px] rounded-[24px] w-[65%]' 
              style={{
            backgroundImage: `url(${shopImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundColor: '#24452D',
            backgroundPosition: 'center',
            }}></div>
        </div>
        <div className='w-[100%] flex mt-10 flex flex-col gap-5 justify-center items-center'>
          <p>basj jasa sjanb</p>
           <Button
                label="More Facilities"
                bgClass="bg-[#24452D] py-3 px-6"
                textClass="text-[#E4E9D4]"
                iconClass="text-[#E4E9D4]"
                secondWordClass='font-optima font-medium'
                onClick={() => console.log('clicked')}/>
        </div>

        {/* The Course */}

        <div className='mt-20 w-[100%] flex flex-col rounded-[24px]'>
          <div className='py-2 px-2 bg-white text-center self-end rounded-[52px] z-10 w-[28%] mr-20'>
            <h1 className='text-[70px] font-optima'>The Course</h1>
          </div>
          <div className='rounded-[24px] h-[800px] flex justify-center items-end gap-20 p-20 w-[100%] mt-[-50px] z-0 relative'
            style={{
                backgroundImage: `url(${courseImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}>
            {/* transformed background layer (parallax + zoom) */}
            
            {/* gradient overlay: black (bottom) -> transparent (top) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-[24px] z-10 pointer-events-none"></div>
            <div className=' px-10 w-[33%] gap-20 flex flex-col rounded-[24px] relative z-20 h-[270px] justify-between'>
              <h1 className='font-optima text-[25px] text-white w-[90%]'>SIGNATURE HOLE OF 
              SENTUL HIGHLANDS GOLF CLUB
              </h1>
              <Button
                 label="See Course"
                bgClass="bg-white py-3 px-6"
                textClass="text-[#24452D]"
                iconClass="text-[#24452D]"
                secondWordClass='font-optima font-medium'
                onClick={() => console.log('clicked')}/>
            </div>
              <div className='p-10 w-[33%] gap-20 flex flex-col rounded-[24px] relative z-20 justify-between 
                 bg-black/10 backdrop-blur-xl border border-white/20 shadow-lg shadow-black/5 text-white leading-loose text-inter tex-[20px]'> 
              <h1>5th Hole Par 4 – 473 Yards</h1>
              <p>This hole plays easier than it might look. There is a wide landing area for short hitters.
                  A stream cuts across the fairway and a beauty is yet to come.</p>
            </div>
            <div className='p-10 w-[33%] gap-20 flex flex-col rounded-[24px] relative z-20 justify-between 
                 bg-black/10 backdrop-blur-xl border border-white/20 shadow-lg shadow-black/5 text-white leading-loose text-inter tex-[20px]'>
              <h1>5th Hole Par 4 – 473 Yards</h1>
              <p>This hole plays easier than it might look. There is a wide landing area for short hitters.
                  A stream cuts across the fairway and a beauty is yet to come.</p>
            </div>
            
          </div>
        </div>

        {/* News & Events */}

        <div className='w-[100%] mt-20'>
          <div className=' text-center flex flex-col items-center justify-center'>
            <h1 className='font-optima text-[70px]'>News & Events</h1>
            <p className='font-inter font-light leading-loose text-[15px] w-[30%] text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
          </div>
          <div className=' py-10 px-10 gap-10 flex flex-col justify-center items-center'>
            <NewsCards count={3} />
            <Button
                 label="See More"
                bgClass="bg-[#E4E9D4] py-3 px-6"
                textClass="text-[#24452D]"
                iconClass="text-[#24452D]"
                secondWordClass='font-optima font-medium'
                onClick={() => console.log('clicked')}/>
          </div>
        </div>

        {/* FAQ */}

        <div className='w-[100%] mt-20 mb-40 bg-gray-100 rounded-[24px] p-20 gap-20 flex justify-between'
        style={{
                backgroundImage: `url(${faqImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}>
          <div className='w-[40%] h-fit sticky top-28 bg-[#24452D]/60 backdrop-blur-xl border border-white/20 p-10 rounded-[24px] flex flex-col items-start justify-between '>
            <h1 className='font-optima text-[70px] text-white text-left'>FAQ</h1>
            <p className='font-inter font-light text-white text-[15px] leading-loose'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
            <div className='mt-10 flex gap-10'>
              <Button
                 label="Contact Us"
                bgClass="bg-white py-3 px-6"
                textClass="text-[#24452D]"
                iconClass="text-[#24452D]"
                secondWordClass='font-optima font-medium'
                onClick={() => console.log('clicked')}/>
                <Button
                 label="More FAQ"
                bgClass="bg-[#E4E9D4] py-3 px-6"
                textClass="text-[#24452D]"
                iconClass="text-[#24452D]"
                secondWordClass='font-optima font-medium'
                onClick={() => console.log('clicked')}/>
            </div>
          </div>
          <div className='w-[60%]'>
              <FAQ />
          </div>
        </div>

        {/* Partners */}
        <div className='w-[100%] mt-0'>
          <div className=' text-center flex flex-col items-center justify-center'>
            <h1 className='font-optima text-[70px]'>Partners</h1>
            <p className='font-inter font-light leading-loose text-[15px] w-[30%] text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
          </div>
          <div className='py-10 px-10 gap-10 flex flex-col justify-center items-center'>
            <div className='w-[100%] flex justify-center items-center gap-20'>
              <img src={partner1} alt="Partner 1" className='h-[200px] object-contain' />
              <img src={partner2} alt="Partner 2" className='h-[100px] object-contain' />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
