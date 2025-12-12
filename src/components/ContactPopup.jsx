import React from 'react';
import Button from './Button';

const ContactPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white w-full h-full relative overflow-y-auto md:overflow-hidden">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors duration-200"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-2 sm:p-4 md:p-6 lg:p-0">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end w-full min-h-[100vh] md:h-[100vh] p-3 sm:p-6 md:p-8 lg:p-12 gap-20 md:gap-8 lg:gap-12">
            {/* Left Side - Content */}
            <div className="flex flex-col justify-center md:justify-between items-start h-auto md:h-full space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6 xl:space-y-8 w-full md:w-[40%]">
              {/* Title */}
              <div className='flex flex-col gap-5'>
                <h2 className="text-[30px] sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-optima text-[#24452D] font-medium mb-1 sm:mb-2 md:mb-3 lg:mb-4">
                  Let us know !
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm md:text-sm lg:text-base font-inter leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                </p>
                {/* Book Tee Time Button */}
              <div className="mb-2 sm:mb-3 md:mb-4 lg:mb-6 xl:mb-8">
                <Button 
                  label="BOOK Tee Time"
                  bgClass="bg-[#E4E9D4] hover:bg-[#D4D9C4]"
                  textClass="text-[#24452D] font-inter font-medium"
                  roundedClass="rounded-full"
                  className="px-3 sm:px-4 md:px-6 lg:px-8 py-1 sm:py-2 md:py-2 lg:py-3 transition-colors duration-300"
                  onClick={() => console.log('Book Tee Time clicked')}
                />
              </div>
              </div>

              

              {/* Visit Section */}
              <div className="bg-[#24452D] w-full rounded-xl lg:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 text-white">
                <h3 className="text-white font-optima text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium mb-2 sm:mb-3 md:mb-4 lg:mb-6">Visit</h3>
                
                <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-5 lg:mb-8">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <p className="text-white text-xs sm:text-sm md:text-sm lg:text-base font-inter">
                    Jl. Sumur Batu – Sentul City, Bogor
                  </p>
                </div>

                <h3 className="text-white font-optima text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium mb-2 sm:mb-3 md:mb-4 lg:mb-6">Contact</h3>
                
                <div className="space-y-1 sm:space-y-2 md:space-y-3 lg:space-y-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    <span className="text-white text-xs sm:text-sm md:text-sm lg:text-base font-inter">(021) 8796 - 0266</span>
                  </div>
                  
                  <div className="flex items-center gap-2 sm:gap-3">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                    </svg>
                    <span className="text-white text-xs sm:text-sm md:text-sm lg:text-base font-inter">CP : (+62) 811 - 1157 - 888</span>
                  </div>
                  
                  <div className="flex items-center gap-2 sm:gap-3">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <span className="text-white text-xs sm:text-sm md:text-sm lg:text-base font-inter">info@sentulhighlands.com</span>
                  </div>
                </div>
              </div>
              {/* Map Container */}
                <div className="mt-2 sm:mt-3 md:mt-4 lg:mt-6 xl:mt-8 bg-gray-200 w-full rounded-lg overflow-hidden h-[120px] sm:h-[140px] md:h-[160px] lg:h-[200px] xl:h-[250px]">
                  {/* Google Maps Embed */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4847299626764!2d106.94219731477426!3d-6.585844995308628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c58b38c15e7b%3A0x4fdbcaeb03f4b077!2sSentul%20Highlands%20Golf%20Club!5e0!3m2!1sen!2sid!4v1699267200000!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sentul Highlands Golf Club Location"
                  ></iframe>
                </div>
            </div>

            {/* Right Side - Form and Social */}
            <div className="flex flex-col  gap-5 justify-center md:justify-end items-start w-full md:w-[30%] md:ml-auto">
              {/* Social Icons */}
              <div className="flex justify-center lg:justify-end items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-6 lg:mb-8">
                <a href="#" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-transparent rounded flex items-center justify-center hover:bg-[#A4781A] hover:text-white transition-all duration-300">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <div className="w-px h-6 bg-[#A4781A]"></div>
                <a href="#" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-transparent rounded flex items-center justify-center hover:bg-[#A4781A] hover:text-white transition-all duration-300">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
                <div className="w-px h-6 bg-[#A4781A]"></div>
                <a href="#" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-transparent rounded flex items-center justify-center hover:bg-[#A4781A] hover:text-white transition-all duration-300">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                  </svg>
                </a>
                <div className="w-px h-6 bg-[#A4781A]"></div>
                <a href="#" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-transparent rounded flex items-center justify-center hover:bg-[#A4781A] hover:text-white transition-all duration-300">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>

              {/* Divider */}
              <div className="w-[20%] h-[1px] bg-[#A4781A] mb-2 sm:mb-3 md:mb-4 lg:mb-6 xl:mb-8"></div>

              {/* Description */}
              <p className="text-gray-600 text-xs sm:text-sm md:text-sm lg:text-base font-inter leading-relaxed mb-2 sm:mb-3 md:mb-4 lg:mb-6 xl:mb-8 text-left lg:text-left">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              </p>

              {/* Contact Form */}
              <div className="space-y-1 sm:space-y-2 md:space-y-3 lg:space-y-4">
                <input 
                  type="text" 
                  placeholder="Name .." 
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-700 placeholder-gray-500 border border-gray-200 focus:border-[#A4781A] focus:outline-none transition-colors duration-300 font-inter text-sm md:text-base"
                />
                <input 
                  type="email" 
                  placeholder="Email .." 
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-700 placeholder-gray-500 border border-gray-200 focus:border-[#A4781A] focus:outline-none transition-colors duration-300 font-inter text-sm md:text-base"
                />
                <textarea 
                  placeholder="Messages .." 
                  rows={2}
                  className="w-full px-2 sm:px-3 md:px-4 py-1 sm:py-2 md:py-2 lg:py-3 rounded-lg bg-gray-100 text-gray-700 placeholder-gray-500 border border-gray-200 focus:border-[#A4781A] focus:outline-none resize-none transition-colors duration-300 font-inter text-xs sm:text-sm md:text-sm lg:text-base"
                ></textarea>
                
                {/* Send Button */}
                <Button 
                  label="Send"
                  bgClass="bg-[#E4E9D4] hover:bg-[#D4D9C4]"
                  textClass="text-[#24452D] font-inter font-medium text-xs sm:text-sm md:text-sm lg:text-base"
                  roundedClass="rounded-full"
                  className="px-3 sm:px-4 md:px-5 lg:px-6 py-1 sm:py-2 md:py-2 lg:py-3 transition-colors duration-300"
                  onClick={() => console.log('Send clicked')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;