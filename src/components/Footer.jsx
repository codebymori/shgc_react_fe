import { Link } from "react-router-dom";
import logo from '../assets/img/logo-2.png';
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="bg-[#24452D] text-white">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Desktop Layout (md and above) */}
        <div className="hidden md:grid md:grid-cols-4 md:gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="col-span-1 flex flex-col justify-start items-center gap-10">
            <div className="">
              {/* Logo */}
              <div className="flex justify-center md:justify-center">
                <img src={logo} alt="Sentul Highlands Golf Club" className="w-64 sm:w-44 md:w-44 lg:w-64 h-auto" />
              </div>
            </div>
            <p className="text-gray-300 text-center text-xs sm:text-sm lg:text-base font-inter leading-loose">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              </p>
                {/* Divider */}
            <div className="w-[30%] h-[1px] bg-[#A4781A]"></div>
            {/* Social Icons */}
            <div className="flex justify-center items-center gap-2">
              <a href="#" className="w-10 h-10 bg-transparent rounded flex items-center justify-center hover:bg-[#A4781A] transition-all duration-300">
                {/* YouTube Icon */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <div className="w-px h-6 bg-gray-600"></div>
              <a href="#" className="w-10 h-10 bg-transparent rounded flex items-center justify-center hover:bg-[#A4781A] transition-all duration-300">
                {/* TikTok Icon */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
              <div className="w-px h-6 bg-gray-600"></div>
              <a href="#" className="w-10 h-10 bg-transparent rounded flex items-center justify-center hover:bg-[#A4781A] transition-all duration-300">
                {/* Instagram Icon */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.219-5.175 1.219-5.175s-.219-.438-.219-1.085c0-1.016.219-1.775.877-1.775.657 0 .975.438.975.877 0 .548-.219 1.314-.438 2.062-.219.877.438 1.533 1.314 1.533 1.533 0 2.719-1.533 2.719-3.72 0-1.971-1.314-3.283-3.502-3.283-2.5 0-4.031 1.875-4.031 3.72 0 .766.219 1.314.548 1.971.109.219.109.328.109.438-.109.438-.328 1.314-.438 1.533-.109.328-.438.438-.657.328-1.095-.548-1.752-2.062-1.752-3.72 0-2.719 1.971-5.175 5.613-5.175 2.938 0 5.175 2.062 5.175 4.795 0 3.283-1.971 5.832-4.685 5.832-.877 0-1.752-.438-2.062-1.095 0 0-.438 1.752-.548 2.172-.219.766-.657 1.533-1.095 2.172C9.635 23.67 10.854 24 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
              <div className="w-px h-6 bg-gray-600"></div>
              <a href="#" className="w-10 h-10 bg-transparent rounded flex items-center justify-center hover:bg-[#A4781A] transition-all duration-300">
                {/* Facebook Icon */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Explore Column */}
          <div className="col-span-1 md:pl-10 lg:pl-20">
            <h3 className="text-white font-optima text-lg mb-6">Explore</h3>
            <ul className="space-y-3 font-inter">
              <li><Link to="/" className="text-gray-300 hover:text-[#A4781A] transition-colors duration-300 text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px]">Home</Link></li>
              <li><Link to="/facilities" className="text-gray-300 hover:text-[#A4781A] transition-colors duration-300 text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px]">Facilities</Link></li>
              <li><Link to="/the-course" className="text-gray-300 hover:text-[#A4781A] transition-colors duration-300 text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px]">The Course</Link></li>
              <li><a href="/#news" className="text-gray-300 hover:text-[#A4781A] transition-colors duration-300 text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px]">News & Events</a></li>
              <li><a href="/#membership" className="text-gray-300 hover:text-[#A4781A] transition-colors duration-300 text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px]">Membership</a></li>
              <li><a href="/#contact" className="text-gray-300 hover:text-[#A4781A] transition-colors duration-300 text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px]">Contact</a></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-[#A4781A] transition-colors duration-300 text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px]">FAQ</Link></li>
            </ul>
          </div>

          {/* Visit Column */}
          <div className="col-span-1">
            <h3 className="text-white font-optima text-lg mb-6">Visit</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-white mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <p className="text-gray-300 text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] font-inter">Jl. Sumur Batu – Sentul City, Bogor</p>
              </div>
            </div>

            <h3 className="text-white font-optima text-lg mb-6 mt-8">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span className="text-gray-300 text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] font-inter">(021) 8796 - 0266</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                </svg>
                <span className="text-gray-300 text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] font-inter">CP : (+62) 811 - 1157 - 888</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span className="text-gray-300 text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] font-inter">info@sentulhighlands.com</span>
              </div>
            </div>
          </div>

          {/* Membership Column */}
          <div className="col-span-1">
            <h3 className="text-white font-optima font-medium text-base sm:text-lg lg:text-xl mb-6">Get membership for better experience</h3>
            <Button 
              label="Membership"
              bgClass="bg-[#E4E9D4]"
              textClass="text-[#24452D]"
              iconClass="text-[#24452D]"
              secondWordClass='font-optima font-medium'
              onClick={() => console.log('clicked')}/>
            <div className="space-y-4 pt-8">
               <div className="w-[30%] h-[1px] bg-[#A4781A]"></div>
              <div className="space-y-3 pt-4">
                <input 
                  type="email" 
                  placeholder="Email .." 
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white text-[#24452D] placeholder-gray-400 border border-gray-600 focus:border-[#A4781A] focus:outline-none transition-colors duration-300 font-inter text-sm sm:text-base"
                />
                <textarea 
                  placeholder="Messages .." 
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white text-[#24452D] placeholder-gray-400 border border-gray-600 focus:border-[#A4781A] focus:outline-none resize-none transition-colors duration-300 font-inter text-sm sm:text-base"
                ></textarea>
                <Button 
                  label="Send"
                  bgClass="bg-white"
                  textClass="text-[#24452D] font-inter font-medium text-sm sm:text-base"
                  roundedClass="rounded-full"
                  className="px-4 sm:px-6 py-2 sm:py-3 transition-colors duration-300 justify-center"
                  onClick={() => console.log('Send clicked')}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout (below md) */}
        <div className="md:hidden space-y-8">
          {/* Logo and Description */}
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <img src={logo} alt="Sentul Highlands Golf Club" className="w-[60%] sm:w-64 h-auto" />
            </div>
            <p className="text-gray-300 text-xs sm:text-sm font-inter leading-relaxed mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </p>
            
            {/* Divider */}
            <div className="w-full h-[1px] bg-gray-600 mb-6"></div>
            
            {/* Social Icons */}
            <div className="flex justify-center items-center gap-2 mb-8">
              <a href="#" className="w-10 h-10 bg-transparent rounded flex items-center justify-center hover:bg-[#A4781A] transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <div className="w-px h-6 bg-gray-600"></div>
              <a href="#" className="w-10 h-10 bg-transparent rounded flex items-center justify-center hover:bg-[#A4781A] transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
              <div className="w-px h-6 bg-gray-600"></div>
              <a href="#" className="w-10 h-10 bg-transparent rounded flex items-center justify-center hover:bg-[#A4781A] transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.219-5.175 1.219-5.175s-.219-.438-.219-1.085c0-1.016.219-1.775.877-1.775.657 0 .975.438.975.877 0 .548-.219 1.314-.438 2.062-.219.877.438 1.533 1.314 1.533 1.533 0 2.719-1.533 2.719-3.72 0-1.971-1.314-3.283-3.502-3.283-2.5 0-4.031 1.875-4.031 3.72 0 .766.219 1.314.548 1.971.109.219.109.328.109.438-.109.438-.328 1.314-.438 1.533-.109.328-.438.438-.657.328-1.095-.548-1.752-2.062-1.752-3.72 0-2.719 1.971-5.175 5.613-5.175 2.938 0 5.175 2.062 5.175 4.795 0 3.283-1.971 5.832-4.685 5.832-.877 0-1.752-.438-2.062-1.095 0 0-.438 1.752-.548 2.172-.219.766-.657 1.533-1.095 2.172C9.635 23.67 10.854 24 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
              <div className="w-px h-6 bg-gray-600"></div>
              <a href="#" className="w-10 h-10 bg-transparent rounded flex items-center justify-center hover:bg-[#A4781A] transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-6">
            {/* Explore */}
            <div>
              <h3 className="text-white font-optima text-base sm:text-lg mb-4">Explore</h3>
              <ul className="space-y-3 font-inter">
                <li><Link to="/" className="text-gray-300 hover:text-[#A4781A] transition-colors duration-300 text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px]">Home</Link></li>
                <li><Link to="/facilities" className="text-gray-300 hover:text-[#A4781A] transition-colors duration-300 text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px]">Facilities</Link></li>
                <li><Link to="/the-course" className="text-gray-300 hover:text-[#A4781A] transition-colors duration-300 text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px]">The Course</Link></li>
                <li><a href="/#news" className="text-gray-300 hover:text-[#A4781A] transition-colors duration-300 text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px]">News & Events</a></li>
                <li><a href="/#membership" className="text-gray-300 hover:text-[#A4781A] transition-colors duration-300 text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px]">Membership</a></li>
                <li><a href="/#contact" className="text-gray-300 hover:text-[#A4781A] transition-colors duration-300 text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px]">Contact</a></li>
                <li><Link to="/faq" className="text-gray-300 hover:text-[#A4781A] transition-colors duration-300 text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px]">FAQ</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-optima text-base sm:text-lg mb-4">Contact</h3>
              <div className="space-y-3 font-inter">
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-white mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <p className="text-gray-300 text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px]">Jl. Sumur Batu – Sentul City, Bogor</p>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <span className="text-gray-300 text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px]">(021) 8796 - 0266</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                  </svg>
                  <span className="text-gray-300 text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px]">CP: (+62) 811 - 1157 - 888</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span className="text-gray-300 text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px]">info@sentulhighlands.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Membership Section */}
          <div>
            <h3 className="text-white font-optima text-base sm:text-lg mb-4 text-center">Get membership for better experience</h3>
            <div className="space-y-4 flex flex-col items-center">
               <Button 
              label="Membership"
              bgClass="bg-[#E4E9D4]"
              textClass="text-[#24452D]"
              iconClass="text-[#24452D]"
              secondWordClass='font-optima font-medium'
              onClick={() => console.log('clicked')}/>
               <div className="w-[30%] h-[1px] bg-[#A4781A]"></div>
              <div className="space-y-3 flex flex-col items-center pt-4 w-full">
                <input 
                  type="email" 
                  placeholder="Email .." 
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white text-gray-700 placeholder-gray-400 border border-gray-600 focus:border-[#A4781A] focus:outline-none transition-colors duration-300 font-inter text-sm sm:text-base"
                />
                <textarea 
                  placeholder="Messages .." 
                  rows={3}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white text-gray-700 placeholder-gray-400 border border-gray-600 focus:border-[#A4781A] focus:outline-none resize-none transition-colors duration-300 font-inter text-sm sm:text-base"
                ></textarea>
                <Button 
                  label="Send"
                  bgClass="bg-white"
                  textClass="text-[#24452D] font-inter font-medium text-sm sm:text-base"
                  roundedClass="rounded-full"
                  className="px-4 sm:px-6 py-2 sm:py-3 transition-colors duration-300 justify-center"
                  onClick={() => console.log('Send clicked')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400 text-[11px] sm:text-[12px] font-inter">
            Copyright © 2020 by PT Padang Golf Bukit Sentul. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
