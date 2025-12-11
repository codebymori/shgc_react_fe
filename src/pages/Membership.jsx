import heroImg from "../assets/img/msp5.webp";
import Button from "../components/Button";
import Hero from "../components/Hero";

const Membership = () => {
    // Fungsi untuk handle redirect
    const handleMembershipInquiry = () => {
        const formSection = document.getElementById('membership-form');
        if (formSection) {
            formSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-white">
            <Hero
            heroImage={heroImg}
            title="Membership"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's "
            buttonLabel="Inquire NOW"
            onButtonClick={handleMembershipInquiry}
            />
            {/* Membership Content Section */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-start" id="membership-form">
                {/* Left Side - Content */}
                <div className="space-y-6 max-w-lg md:sticky top-32 bg-white z-10">
                    <div className="border-l-2 border-black pl-4 py-0">
                        <h2 className="text-2xl font-optima font-medium text-black mb-4">
                            ENQUIRE ABOUT MEMBERSHIP
                        </h2>
                    </div>
                    
                    <div className="space-y-4">
                        <p className="text-gray-700 font-inter text-sm leading-relaxed">
                            With world-class facilities, exceptional service, and unmatched 
                            leisure, membership at Ridgewood is something truly special.
                        </p>
                        
                        <p className="text-gray-700 font-inter text-sm leading-relaxed">
                            There are a number of Memberships to suit individuals, families, 
                            companies, or people overseas. For those residing at Ridgewood 
                            Park we also offer a House and Spa Membership.
                        </p>
                        
                        <p className="text-gray-700 font-inter text-sm leading-relaxed">
                            If you would like to know more about how to join Sentul Highlands 
                            Golf Club, please contact our sales team
                        </p>
                        
                        <p className="text-gray-700 font-inter text-sm leading-relaxed">
                            at <span className="underline text-blue-600">membership@sentulhighlands.com</span> or telephone <span className="font-medium">02-978 8888</span>
                        </p>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div id="membership-form" className="bg-gray-50 p-8 rounded-[24px]">
                    <form className="space-y-4">
                        {/* First Row */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="First Name*" 
                                    className="w-full px-4 py-3 border-b border-[#A4781A] bg-transparent focus:border-[#A4781A] focus:outline-none font-inter text-sm"
                                />
                            </div>
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="Last Name*" 
                                    className="w-full px-4 py-3 border-b border-[#A4781A] bg-transparent focus:border-[#A4781A] focus:outline-none font-inter text-sm"
                                />
                            </div>
                        </div>

                        {/* Second Row */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div>
                                <input 
                                    type="email" 
                                    placeholder="Email Address*" 
                                    className="w-full px-4 py-3 border-b border-[#A4781A] bg-transparent focus:border-[#A4781A] focus:outline-none font-inter text-sm"
                                />
                            </div>
                            <div>
                                <input 
                                    type="tel" 
                                    placeholder="Phone Number*" 
                                    className="w-full px-4 py-3 border-b border-[#A4781A] bg-transparent focus:border-[#A4781A] focus:outline-none font-inter text-sm"
                                />
                            </div>
                        </div>

                        {/* Third Row */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="Occupation*" 
                                    className="w-full px-4 py-3 border-b border-[#A4781A] bg-transparent focus:border-[#A4781A] focus:outline-none font-inter text-sm"
                                />
                            </div>
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="Company Name*" 
                                    className="w-full px-4 py-3 border-b border-[#A4781A] bg-transparent focus:border-[#A4781A] focus:outline-none font-inter text-sm"
                                />
                            </div>
                        </div>

                        {/* Address Details */}
                        <div>
                            <textarea 
                                placeholder="Address Details*" 
                                rows={3}
                                className="w-full px-4 py-3 border-b border-[#A4781A] bg-transparent focus:border-[#A4781A] focus:outline-none resize-none font-inter text-sm"
                            ></textarea>
                        </div>

                        {/* Additional Questions */}
                        <div className="space-y-4 mt-6">
                            <div>
                                <p className="font-inter text-sm font-medium text-black mb-3">
                                    Have you ever been a member of any Golf club?
                                </p>
                                <div className="space-y-2">
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name="golf_member" value="yes" className="text-black" />
                                        <span className="font-inter text-sm">Yes</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name="golf_member" value="no" className="text-black" />
                                        <span className="font-inter text-sm">No</span>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <p className="font-inter text-sm font-medium text-black mb-3">
                                    What type of membership at Sentul Highlands Golf Club are you interested in?
                                </p>
                                <div className="space-y-2">
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name="membership" value="ordinary" className="text-black" />
                                        <span className="font-inter text-sm">Ordinary</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name="membership" value="premium" className="text-black" />
                                        <span className="font-inter text-sm">Premium</span>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <p className="font-inter text-sm font-medium text-black mb-3">
                                    How did you hear about Sentul Highlands Golf Club?
                                </p>
                                <div className="space-y-2">
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name="source" value="social_media" className="text-black" />
                                        <span className="font-inter text-sm">Social Media</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name="source" value="website" className="text-black" />
                                        <span className="font-inter text-sm">Website</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name="source" value="newsletter" className="text-black" />
                                        <span className="font-inter text-sm">Newsletter</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name="source" value="other" className="text-black" />
                                        <span className="font-inter text-sm">Other</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Privacy Notice */}
                        <div className="mt-6 p-4 bg-white rounded-[20px] border">
                            <h4 className="font-inter text-sm font-medium text-black mb-2">
                                Personal Privacy Notice
                            </h4>
                            <p className="font-inter text-xs text-gray-600 leading-relaxed mb-4">
                                In compliance with the Personal Data Protection Act 2010, PW Wellness Co., Ltd. and its 
                                affiliated companies prioritize your privacy and the protection of the data you provide to us. 
                                The company may share your personal data with affiliated companies, joint ventures, 
                                customers, project developers, sales partners...
                            </p>
                            <Button 
                                label="Send"
                                bgClass="bg-[#24452D] hover:bg-[#1a3322]"
                                textClass="text-white font-inter font-medium"
                                roundedClass="rounded-full"
                                className="px-6 py-2 transition-colors duration-300"
                                onClick={() => console.log('Form submitted')}
                            />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Membership;
