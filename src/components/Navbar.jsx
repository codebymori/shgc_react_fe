import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../assets/img/shgc-logo.png";
import Button from "./Button";
import enFlag from "../assets/img/en.png";
import jpnFlag from "../assets/img/jpn.webp";
import koreaFlag from "../assets/img/korea.webp";

const Navbar = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState({ code: "en", image: enFlag, name: "English" });

  const languages = [
    { code: "en", image: enFlag, name: "English" },
    { code: "ja", image: jpnFlag, name: "日本語" },
    { code: "ko", image: koreaFlag, name: "한국어" }
  ];

  const handleLanguageChange = (language) => {
    setCurrentLanguage(language);
    setIsLanguageOpen(false);
    // TODO: Implement language switching logic here
    console.log("Language changed to:", language.name);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsLanguageOpen(false); // Close language dropdown when opening mobile menu
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle loading animation
  useEffect(() => {
    // Start container expansion animation
    const containerTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Start content fade-in after container expansion
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 800);

    return () => {
      clearTimeout(containerTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <nav className={`fixed left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
      isScrolled ? 'top-2' : 'top-0'
    }`}>
      <div className={`mx-auto px-10 sm:px-20 md:px-8 lg:px-16 xl:px-24 transition-all duration-300 ${
        isScrolled ? 'pt-0' : 'pt-0'
      }`}>
        <div className={`bg-white rounded-full flex items-center justify-between px-8 sm:px-3 md:px-4 lg:px-5 py-0 transition-all duration-700 ease-out transform origin-center ${
          isScrolled ? 'shadow-lg shadow-black/10 backdrop-blur-md bg-white/95' : 'shadow-none'
        } ${
          isLoaded ? 'w-full scale-x-100' : 'w-0 scale-x-0'
        }`}>
          {/* Logo */}
          <div className={`flex items-center gap-1 md:gap-2 flex-shrink-0 transition-all duration-500 delay-500 ${
            showContent ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
          }`}>
            <div className="w-20 h-20 sm:w-20 sm:h-20 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 rounded-full flex items-center justify-center">
              <img src={Logo} alt="Logo" className="w-20 sm:w-16 md:w-18 lg:w-20 xl:w-24" />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className={`hidden md:flex items-center w-full transition-all duration-500 delay-700 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}>
            {/* Left Spacer */}
            <div className="flex-shrink-0 w-0 md:w-4 lg:w-8"></div>
            
            {/* Center Menu Items - Fills available space */}
            <div className="flex-1 font-optima flex items-center justify-between mx-auto px-1 md:px-2 lg:px-4 xl:px-8 min-w-0">
              <Link to="/" className="relative overflow-hidden font-medium whitespace-nowrap text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] py-1 md:py-2 px-1 md:px-2 lg:px-3 xl:px-4 group">
                <span className="bg-gradient-to-r from-gray-800 to-gray-800 bg-clip-text text-transparent group-hover:from-gray-800 group-hover:via-[#A4781A] group-hover:to-gray-800 transition-all duration-700 ease-out bg-[length:200%_100%] bg-left group-hover:bg-right">Home</span>
              </Link>
              <Link to="/facilities" className="relative overflow-hidden font-medium whitespace-nowrap text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] py-1 md:py-2 px-1 md:px-2 lg:px-3 xl:px-4 group">
                <span className="bg-gradient-to-r from-gray-800 to-gray-800 bg-clip-text text-transparent group-hover:from-gray-800 group-hover:via-[#A4781A] group-hover:to-gray-800 transition-all duration-700 ease-out bg-[length:200%_100%] bg-left group-hover:bg-right">Facilities</span>
              </Link>
              <Link to="/the-course" className="relative overflow-hidden font-medium whitespace-nowrap text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] py-1 md:py-2 px-1 md:px-2 lg:px-3 xl:px-4 group">
                <span className="bg-gradient-to-r from-gray-800 to-gray-800 bg-clip-text text-transparent group-hover:from-gray-800 group-hover:via-[#A4781A] group-hover:to-gray-800 transition-all duration-700 ease-out bg-[length:200%_100%] bg-left group-hover:bg-right">The Course</span>
              </Link>
              <a href="/#news" className="relative overflow-hidden font-medium whitespace-nowrap text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] py-1 md:py-2 px-1 md:px-2 lg:px-3 xl:px-4 group">
                <span className="bg-gradient-to-r from-gray-800 to-gray-800 bg-clip-text text-transparent group-hover:from-gray-800 group-hover:via-[#A4781A] group-hover:to-gray-800 transition-all duration-700 ease-out bg-[length:200%_100%] bg-left group-hover:bg-right">News & Events</span>
              </a>
              <a href="/#membership" className="relative overflow-hidden font-medium whitespace-nowrap text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] py-1 md:py-2 px-1 md:px-2 lg:px-3 xl:px-4 group">
                <span className="bg-gradient-to-r from-gray-800 to-gray-800 bg-clip-text text-transparent group-hover:from-gray-800 group-hover:via-[#A4781A] group-hover:to-gray-800 transition-all duration-700 ease-out bg-[length:200%_100%] bg-left group-hover:bg-right">Membership</span>
              </a>
              <Link to="/faq" className="relative overflow-hidden font-medium whitespace-nowrap text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] py-1 md:py-2 px-1 md:px-2 lg:px-3 xl:px-4 group">
                <span className="bg-gradient-to-r from-gray-800 to-gray-800 bg-clip-text text-transparent group-hover:from-gray-800 group-hover:via-[#A4781A] group-hover:to-gray-800 transition-all duration-700 ease-out bg-[length:200%_100%] bg-left group-hover:bg-right">FAQ</span>
              </Link>
              <a href="/#contact" className="relative overflow-hidden font-medium whitespace-nowrap text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] py-1 md:py-2 px-1 md:px-2 lg:px-3 xl:px-4 group">
                <span className="bg-gradient-to-r from-gray-800 to-gray-800 bg-clip-text text-transparent group-hover:from-gray-800 group-hover:via-[#A4781A] group-hover:to-gray-800 transition-all duration-700 ease-out bg-[length:200%_100%] bg-left group-hover:bg-right">Contact</span>
              </a>
            </div>
            
            {/* Right Side - Button & Language */}
            <div className={`flex items-center gap-1 md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-5 flex-shrink-0 transition-all duration-500 delay-900 ${
              showContent ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}>
              <div className="flex-shrink-0">
                <Button    
                  label="BOOK Tee Time"
                  bgClass="bg-green-900 py-2 md:py-3 px-3 md:px-4 lg:px-5 xl:px-6"
                  textClass="text-white font-optima font-bold whitespace-nowrap text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px]"
                  roundedClass="rounded-full"
                  iconClass="hidden"
                  secondWordClass="font-inter"
                  onClick={() => {
                    window.location.href = "/booking";
                  }}
                />
              </div>
              {/* Language Selector */}
              <div className="relative flex-shrink-0 z-50">
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 rounded-full bg-gray-50 border-2 border-gray-300 flex items-center justify-center overflow-hidden hover:shadow-lg hover:border-gray-400 transition-all duration-200"
                  title="Select Language"
                >
                  <img src={currentLanguage.image} alt={currentLanguage.name} className="w-full h-full object-cover rounded-full" />
                </button>
                
                {isLanguageOpen && (
                  <div className="absolute right-0 mt-2 w-44 md:w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[9999]">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => handleLanguageChange(language)}
                        className={`w-full px-3 md:px-4 py-2 md:py-3 text-left flex items-center gap-2 md:gap-3 hover:bg-gray-100 transition ${
                          currentLanguage.code === language.code ? "bg-gray-100 font-semibold" : ""
                        }`}
                      >
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 overflow-hidden flex-shrink-0">
                          <img src={language.image} alt={language.name} className="w-full h-full object-cover" />
                        </div>
                        <span className="text-gray-800 text-sm md:text-base">{language.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Menu Controls */}
          <div className={`flex md:hidden items-center gap-3 transition-all duration-500 delay-900 ${
            showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            {/* Language Selector for Mobile */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-50 border-2 border-gray-300 flex items-center justify-center overflow-hidden hover:shadow-lg hover:border-gray-400 transition-all duration-200"
                title="Select Language"
              >
                <img src={currentLanguage.image} alt={currentLanguage.name} className="w-full h-full object-cover rounded-full" />
              </button>
              
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-44 sm:w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageChange(language)}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-left flex items-center gap-2 sm:gap-3 hover:bg-gray-100 transition ${
                        currentLanguage.code === language.code ? "bg-gray-100 font-semibold" : ""
                      }`}
                    >
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-300 overflow-hidden flex-shrink-0">
                        <img src={language.image} alt={language.name} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-gray-800 text-sm sm:text-base">{language.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Full Screen Overlay */}
        <div className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          {/* Background Overlay */}
          <div 
            className="absolute inset-0"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          {/* Menu Content */}
          <div className={`absolute top-24 left-4 right-4 bottom-4 bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 ease-out ${
            isMobileMenuOpen ? 'translate-y-0 scale-100' : '-translate-y-8 scale-95'
          }`}>
            <div className="h-full flex flex-col">
              {/* Menu Items and Description Container */}
              <div className="flex-1 flex">
                {/* Left Side - Menu Items */}
                <div className="flex-1 p-6 space-y-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 font-optima">Navigation</h3>
                  
                  <Link 
                    to="/" 
                    className="block text-gray-700 hover:text-[#A4781A] font-medium transition-all duration-300 py-3 px-4 rounded-xl hover:bg-gray-50 text-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    to="/facilities" 
                    className="block text-gray-700 hover:text-[#A4781A] font-medium transition-all duration-300 py-3 px-4 rounded-xl hover:bg-gray-50 text-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Facilities
                  </Link>
                  <Link 
                    to="/the-course" 
                    className="block text-gray-700 hover:text-[#A4781A] font-medium transition-all duration-300 py-3 px-4 rounded-xl hover:bg-gray-50 text-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    The Course
                  </Link>
                  <a 
                    href="/#news" 
                    className="block text-gray-700 hover:text-[#A4781A] font-medium transition-all duration-300 py-3 px-4 rounded-xl hover:bg-gray-50 text-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    News & Events
                  </a>
                  <a 
                    href="/#membership" 
                    className="block text-gray-700 hover:text-[#A4781A] font-medium transition-all duration-300 py-3 px-4 rounded-xl hover:bg-gray-50 text-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Membership
                  </a>
                  <Link 
                    to="/faq" 
                    className="block text-gray-700 hover:text-[#A4781A] font-medium transition-all duration-300 py-3 px-4 rounded-xl hover:bg-gray-50 text-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    FAQ
                  </Link>
                  <a 
                    href="/#contact" 
                    className="block text-gray-700 hover:text-[#A4781A] font-medium transition-all duration-300 py-3 px-4 rounded-xl hover:bg-gray-50 text-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </a>
                </div>

                {/* Right Side - Description & CTA */}
                <div className="w-48 bg-gradient-to-br from-gray-50 to-gray-100 p-6 flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 font-optima">Welcome to SHGC</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      Experience premium golf at Singapore Handicapped Golf Club. Join our exclusive community today.
                    </p>
                    <div className="space-y-3">
                      <Button    
                        label="BOOK Tee Time"
                        bgClass="bg-[#24452D] hover:bg-[#8A6515] py-3 w-full"
                        textClass="text-white font-optima font-bold text-center text-sm"
                        roundedClass="rounded-full"
                        iconClass="hidden"
                        secondWordClass="font-inter"
                        onClick={() => {
                          window.location.href = "/booking";
                          setIsMobileMenuOpen(false);
                        }}
                      />
                      <Button    
                        label="Membership"
                        bgClass="bg-[#A4781A] py-3 w-full"
                        textClass="text-white font-optima font-bold text-center text-sm"
                        roundedClass="rounded-full"
                        iconClass=""
                        secondWordClass="font-inter"
                        onClick={() => {
                          window.location.href = "/booking";
                          setIsMobileMenuOpen(false);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Social Icons */}
              <div className="border-t border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Follow us</p>
                    <div className="flex gap-4">
                      <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#A4781A] hover:text-white transition-all duration-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#A4781A] hover:text-white transition-all duration-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#A4781A] hover:text-white transition-all duration-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.219-5.175 1.219-5.175s-.219-.438-.219-1.085c0-1.016.219-1.775.219-1.775s.877.219 1.314.219c.657 0 .975-.219.975-.657 0-.548-.219-1.095-.219-1.314 0-.548.438-.548.657-.548.548 0 .877.219.877.877 0 .219 0 .438-.219.657-.219.219-.438.438-.438.877 0 .657.219 1.314.657 1.314.438 0 .877-.219.877-.877 0-.438-.219-.877-.219-1.314 0-.877.438-1.533 1.095-1.533.657 0 1.314.438 1.314 1.095 0 .877-.438 1.533-1.095 1.533-.438 0-.877-.219-.877-.657 0-.219.219-.438.219-.877 0-.438-.219-.877-.657-.877-.438 0-.877.438-.877.877 0 .657.438 1.314 1.095 1.314.877 0 1.533-.657 1.533-1.533 0-1.095-.657-1.971-1.533-1.971-.438 0-.877.219-1.095.548-.219-.328-.548-.548-.877-.548-.548 0-1.095.438-1.095.877 0 .219.219.438.438.657.219.219.438.438.438.877 0 .438-.219.877-.657.877-.438 0-.877-.219-.877-.657 0-.219.219-.438.219-.657 0-.219-.219-.438-.438-.438-.219 0-.438.219-.438.438 0 .438.219.877.657.877.438 0 .877-.219.877-.657 0-.219-.219-.438-.219-.657 0-.438.219-.877.657-.877.438 0 .877.219.877.657 0 .438-.219.877-.657.877-.219 0-.438-.219-.438-.438 0-.219.219-.219.438-.219.219 0 .438.219.438.438 0 .219-.219.438-.438.438-.219 0-.438-.219-.438-.438z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#A4781A] hover:text-white transition-all duration-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400">© 2024 SHGC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
