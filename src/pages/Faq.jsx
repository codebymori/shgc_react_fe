import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import FaqDynamic from "../components/FaqDynamic";
import msp5 from "../assets/img/msp5.webp";

const Faq = () => {
  const [activeCategory, setActiveCategory] = useState('General');

  // FAQ data berdasarkan kategori
  const faqCategories = {
    'General': {
      title: 'General Question',
      description: 'Common questions about Sentul Highlands Golf Club facilities and services',
      faqs: [
        {
          id: 1,
          question: 'What are the operating hours of the golf course?',
          answer: 'The golf course is open daily from 6:00 AM to 6:00 PM. Last tee time is at 4:30 PM to ensure all players can complete their round before closing.'
        },
        {
          id: 2,
          question: 'Do you provide golf equipment rental?',
          answer: 'Yes, we offer a complete set of golf equipment rental including clubs, golf carts, and accessories. Please contact our pro shop for availability and pricing.'
        },
        {
          id: 3,
          question: 'Are lessons available for beginners?',
          answer: 'We offer professional golf lessons for all skill levels, including beginners. Our certified PGA instructors provide both individual and group lessons.'
        }
      ]
    },
    'Book Tee Time': {
      title: 'Book Tee Time',
      description: 'Everything you need to know about booking your tee time',
      faqs: [
        {
          id: 4,
          question: 'How far in advance can I book a tee time?',
          answer: 'Members can book tee times up to 14 days in advance, while guests can book up to 7 days in advance through our online booking system.'
        },
        {
          id: 5,
          question: 'Can I cancel or reschedule my tee time?',
          answer: 'Yes, you can cancel or reschedule your tee time up to 24 hours before your scheduled time without any penalty. Cancellations within 24 hours may be subject to fees.'
        },
        {
          id: 6,
          question: 'What is the minimum group size for booking?',
          answer: 'You can book for a minimum of 1 player up to a maximum of 4 players per tee time. Groups larger than 4 will need to book multiple consecutive tee times.'
        }
      ]
    },
    'Membership': {
      title: 'Membership',
      description: 'Information about golf club membership options and benefits',
      faqs: [
        {
          id: 7,
          question: 'What types of membership are available?',
          answer: 'We offer Individual, Family, and Corporate membership options. Each membership type includes different benefits and privileges at the club.'
        },
        {
          id: 8,
          question: 'What are the membership benefits?',
          answer: 'Members enjoy priority booking, discounted green fees, access to exclusive events, complimentary use of practice facilities, and dining privileges at our clubhouse.'
        },
        {
          id: 9,
          question: 'How do I apply for membership?',
          answer: 'You can apply for membership by visiting our clubhouse, calling our membership department, or filling out the online application form on our website.'
        }
      ]
    },
    'Payment': {
      title: 'Payment',
      description: 'Payment methods, policies, and billing information',
      faqs: [
        {
          id: 10,
          question: 'What payment methods do you accept?',
          answer: 'We accept cash, credit cards (Visa, MasterCard, AMEX), debit cards, and bank transfers. Members can also charge to their membership account.'
        },
        {
          id: 11,
          question: 'Is there a deposit required for bookings?',
          answer: 'A deposit may be required for large group bookings or special events. Regular tee time bookings typically do not require a deposit for members.'
        },
        {
          id: 12,
          question: 'What is your refund policy?',
          answer: 'Refunds are available for cancellations made 24 hours in advance. Weather-related cancellations are handled on a case-by-case basis with full refunds or credits offered.'
        }
      ]
    },
    'Other': {
      title: 'Other Questions',
      description: 'Additional questions and miscellaneous information',
      faqs: [
        {
          id: 13,
          question: 'Do you host tournaments and events?',
          answer: 'Yes, we regularly host tournaments, corporate events, and private functions. Please contact our events coordinator for more information and booking.'
        },
        {
          id: 14,
          question: 'Is there a dress code for the golf course?',
          answer: 'Yes, we maintain a smart casual dress code. Collared shirts, appropriate golf attire, and golf shoes are required on the course. Tank tops and denim are not permitted.'
        },
        {
          id: 15,
          question: 'Do you provide caddy services?',
          answer: 'Professional caddy services are available upon request. We recommend booking caddy services in advance, especially during peak hours and weekends.'
        }
      ]
    }
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const currentCategoryData = faqCategories[activeCategory];
  
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
                {Object.keys(faqCategories).map((category) => (
                  <button 
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={`block w-full text-left py-2 text-[15px] font-inter transition-colors ${
                      activeCategory === category 
                        ? 'text-black font-bold' 
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    {category}
                  </button>
                ))}
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
              <h2 className="text-[30px] font-optima text-black mb-2"># {currentCategoryData.title}</h2>
              <p className="text-[15px] font-inter leading-loose text-gray-600">
                {currentCategoryData.description}
              </p>
            </div>
            
            {/* FAQ Dynamic Component */}
            <FaqDynamic faqData={currentCategoryData.faqs} />
          </div>

        </div>
      </div>

    </div>
  );
};

export default Faq;