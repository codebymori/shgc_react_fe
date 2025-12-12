import { useState } from 'react';
import bookImg from '../assets/img/msp4.webp';
import aboutImg from '../assets/img/msp1.webp';
import Button from '../components/Button';
import teeTimeData from '../data/teeTimeData.json';

const BookTeeTime = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [numberOfGolfers, setNumberOfGolfers] = useState(1);
    const [isAvailable, setIsAvailable] = useState(null);
    const [showBookingForm, setShowBookingForm] = useState(false);
    const [bookingData, setBookingData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        option1: '',
        option2: ''
    });

    // Get minimum date (today)
    const getMinDate = () => {
        const today = new Date();
        return today.toISOString().split('T')[0];
    };

    // Get maximum date (3 months from today)
    const getMaxDate = () => {
        const today = new Date();
        const maxDate = new Date(today);
        maxDate.setMonth(today.getMonth() + 3);
        return maxDate.toISOString().split('T')[0];
    };

    // Format date for display with smaller year font (e.g., "24 Dec 25")
    const formatDisplayDate = (dateString) => {
        if (!dateString) return null;
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleDateString('en-US', { month: 'short' });
        const year = date.getFullYear().toString().slice(-2);
        return (
            <span>
                {day} {month} <span className="text-[15px]">{year}</span>
            </span>
        );
    };

    // Generate time options
    const generateTimeOptions = () => {
        const times = [];
        for (let hour = 7; hour <= 16; hour++) {
            for (let minute = 0; minute < 60; minute += 30) {
                const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
                times.push(timeString);
            }
        }
        return times;
    };

    const checkAvailability = () => {
        if (!selectedDate || !selectedTime || numberOfGolfers < 1) {
            alert('Please select all required fields');
            return;
        }

        // Check if the selected date and time are available
        let dateData = teeTimeData.availableSlots.find(slot => slot.date === selectedDate);
        
        // If no specific data for this date, generate random availability
        if (!dateData) {
            // Generate random availability pattern for the selected date
            const timeSlots = generateTimeOptions().map(time => ({
                time,
                available: Math.random() > 0.3, // 70% chance of being available
                maxGolfers: 4
            }));
            
            dateData = { date: selectedDate, timeSlots };
        }

        const timeSlot = dateData.timeSlots.find(slot => slot.time === selectedTime);
        
        if (!timeSlot || !timeSlot.available || numberOfGolfers > timeSlot.maxGolfers) {
            setIsAvailable(false);
            setShowBookingForm(false);
            return;
        }

        setIsAvailable(true);
        setShowBookingForm(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBookingData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleBookNow = () => {
        // Validate required fields
        if (!bookingData.firstName || !bookingData.lastName || !bookingData.email || !bookingData.phone) {
            alert('Please fill in all required fields');
            return;
        }

        // Format selected date for display
        const selectedDateObj = new Date(selectedDate);
        const displayDate = selectedDateObj.toLocaleDateString('en-GB', { 
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });

        // Prepare email body
        const emailSubject = `Tee Time Booking Request - ${displayDate}`;
        const emailBody = `
        Tee Time Booking Request

        SCHEDULE DETAILS:
        Play Date: ${displayDate}
        Tee Time: ${selectedTime}
        Number of Golfers: ${numberOfGolfers}

        CUSTOMER INFORMATION:
        First Name: ${bookingData.firstName}
        Last Name: ${bookingData.lastName}
        Email: ${bookingData.email}
        Phone: ${bookingData.phone}
        Option 1: ${bookingData.option1 || 'Not specified'}
        Option 2: ${bookingData.option2 || 'Not specified'}

        Please confirm this booking request.

        Best regards,
        SHGC Online Booking System
        `.trim();

        // Create mailto link
        const mailtoLink = `mailto:booking@shgc.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show confirmation
        alert('Booking request sent! Please check your email client.');
        
        // Reset form
        setShowBookingForm(false);
        setIsAvailable(null);
        setSelectedDate('');
        setSelectedTime('');
        setNumberOfGolfers(1);
        setBookingData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            option1: '',
            option2: ''
        });
    };

    return (
        <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-white">
            <div className="relative h-[300px] sm:h-[300px]  md:h-[300px] lg:h-[500px]  rounded-[16px] sm:rounded-[20px] md:rounded-[24px] text-white flex justify-end items-center bg-white overflow-hidden"
            style={{
                backgroundImage: bookImg ? `url(${bookImg})` : 'none',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundColor: '#24452D',
                backgroundPosition: 'center',
                }}
            >
            </div>
            {/* Tee Time Search Form - Always Visible */}
            <div className="flex flex-col justify-center items-center mt-[-50px]">
                <div className="bg-white backdrop-blur-sm px-5 sm:px-4 md:px-6 lg:px-10 py-5 rounded-[24px] shadow-2xl md:max-w-2xl lg:max-w-5xl mx-auto w-full">
                    
                    <div className="flex flex-wrap gap-4 md:gap-6  lg:gap-6 justify-center items-center">
                        {/* Play Date */}
                        <div className="flex-1 min-w-[120px] md:min-w-[150px]">
                            <label className="block font-optima text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] font-medium text-gray-700 mb-2">
                                Play Date
                            </label>
                            <div className="relative ">
                                <input
                                    type="date"
                                    value={selectedDate}
                                    onChange={(e) => setSelectedDate(e.target.value)}
                                    min={getMinDate()}
                                    max={getMaxDate()}
                                    className="w-full focus:ring-2 focus:ring-[#A4781A] focus:border-transparent text-gray-800 cursor-pointer opacity-0 absolute inset-0 z-10"
                                />
                                <div className="w-full rounded-lg text-gray-800 cursor-pointer bg-white flex items-center justify-between">
                                    <span className={selectedDate ? 'text-gray-800 md:text-[25px] lg:text-[30px] font-optima' : 'text-gray-500 text-base font-normal'}>
                                        {selectedDate ? formatDisplayDate(selectedDate) : 'Select Date'}
                                    </span>
                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Tee Time */}
                        <div className="flex-1 min-w-[100px] md:min-w-[120px]">
                            <label className="block font-optima text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] font-medium text-gray-700 mb-2">
                                Tee Time
                            </label>
                            <select
                                value={selectedTime}
                                onChange={(e) => setSelectedTime(e.target.value)}
                                className={`w-full rounded-lg focus:ring-2 focus:ring-[#A4781A] focus:border-transparent bg-white ${
                                    selectedTime 
                                        ? 'text-gray-800 md:text-[25px] lg:text-[30px] font-optima' 
                                        : 'text-gray-500 text-base font-normal'
                                }`}
                            >
                                <option value="">Select Time</option>
                                {generateTimeOptions().map((time) => (
                                    <option key={time} value={time}>
                                        {time}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Number of Golfers */}
                        <div className="flex-1 min-w-[90px] md:min-w-[100px]">
                            <label className="block font-optima text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] font-medium text-gray-700 mb-2">
                                No. of Golfers
                            </label>
                            <select
                                value={numberOfGolfers}
                                onChange={(e) => setNumberOfGolfers(parseInt(e.target.value))}
                                className="w-full rounded-lg focus:ring-2 focus:ring-[#A4781A] focus:border-transparent text-gray-800 bg-white md:text-[25px] lg:text-[30px] font-optima"
                            >
                                {[1,2,3,4].map((num) => (
                                    <option key={num} value={num}>{num}</option>
                                ))}
                            </select>
                        </div>

                        {/* Check Button */}
                        <div className="flex-shrink-1">
                            <Button
                                label="Check Availability"
                                bgClass="bg-[#24452D] hover:bg-[#1a3222] sm:px-6 sm:py-3"
                                textClass="text-white font-optima font-bold whitespace-nowrap text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px]"
                                iconClass="text-white  text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px]"
                                roundedClass="rounded-full"
                                onClick={checkAvailability}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Search Results Container - Appears Below When There's a Result */}
            {isAvailable !== null && (
                <div className="mt-32 flex flex-col justify-center">
                    <div className="bg-[#F6F6F6] rounded-[20px] p-6 md:p-8 max-w-5xl mx-auto w-full">
                        
                        {/* Not Available Message */}
                        {isAvailable === false && (
                            <div className="p-4 bg-red-100 border border-red-300 rounded-lg">
                                <p className="text-red-700 text-center font-medium">
                                    Sorry, the selected time slot is not available. Please choose a different date or time.
                                </p>
                            </div>
                        )}

                        {/* Available - Booking Form */}
                        {isAvailable === true && (
                            <div className="h-full">
                                {/* Available Message */}
                                <div className="text-center bg-white w-[60%] sm:w-[50%] mx-auto px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-10 mt-[-50px] sm:mt-[-70px] z-10">
                                    <h3 className="text-xs sm:text-sm md:text-md font-inter text-gray-600 mb-1 sm:mb-2">Your Schedule is</h3>
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#A4781A] font-optima">Available !</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-5 gap-0 p-4 sm:p-6 md:p-10">
                                    {/* Left Side - Selected Schedule */}
                                    <div className="flex gap-7 sm:gap-3 md:flex-col md:space-y-4">
                                        <div className="bg-white p-3 md:p-4 rounded-[16px] md:rounded-[24px] flex-1">
                                            <h4 className="font-optima text-[10px] sm:text-base text-gray-800 mb-2">Play Date</h4>
                                            <p className="text-lg sm:text-xl md:text-2xl font-optima text-gray-900">
                                                {new Date(selectedDate).toLocaleDateString('en-GB', { 
                                                    day: '2-digit',
                                                    month: 'short'
                                                })}
                                            </p>
                                        </div>
                                        <div className="bg-white p-3 md:p-4 rounded-[16px] md:rounded-[24px] flex-1">
                                            <h4 className="font-optima text-[10px] sm:text-base text-gray-800 mb-2">Tee Time</h4>
                                            <p className="text-lg sm:text-xl md:text-2xl font-optima text-gray-900">{selectedTime}</p>
                                        </div>
                                        <div className="bg-white p-3 md:p-4 rounded-[16px] md:rounded-[24px] flex-1">
                                            <h4 className="font-optima text-[10px] sm:text-base text-gray-800 mb-2">No. of Golfers</h4>
                                            <p className="text-lg sm:text-xl md:text-2xl font-optima text-gray-900">{numberOfGolfers}</p>
                                        </div>
                                    </div>

                                    {/* Divider */}
                                    <div className="flex items-center justify-center">
                                        <div className="h-full w-[2px] md:bg-[#A4781A]"></div>
                                    </div>

                                    {/* Right Side - Booking Form */}
                                    <div className='col-span-3 py-10 md:py-0'>
                                        <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">Personal Privacy Notice</h4>
                                        <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's
                                        </p>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                                            <input
                                                type="text"
                                                name="firstName"
                                                placeholder="First Name .."
                                                value={bookingData.firstName}
                                                onChange={handleInputChange}
                                                className="py-2 px-3 sm:px-4 rounded-lg focus:ring-2 focus:ring-[#A4781A] focus:border-transparent text-xs sm:text-sm"
                                                required
                                            />
                                            <input
                                                type="text"
                                                name="lastName"
                                                placeholder="Last Name .."
                                                value={bookingData.lastName}
                                                onChange={handleInputChange}
                                                className="py-2 px-3 sm:px-4 rounded-lg focus:ring-2 focus:ring-[#A4781A] focus:border-transparent text-xs sm:text-sm"
                                                required
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email .."
                                                value={bookingData.email}
                                                onChange={handleInputChange}
                                                className="py-2 px-3 sm:px-4 rounded-lg focus:ring-2 focus:ring-[#A4781A] focus:border-transparent text-xs sm:text-sm"
                                                required
                                            />
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Phone Number .."
                                                value={bookingData.phone}
                                                onChange={handleInputChange}
                                                className="py-2 px-3 sm:px-4 rounded-lg focus:ring-2 focus:ring-[#A4781A] focus:border-transparent text-xs sm:text-sm"
                                                required
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                                            <input
                                                type="text"
                                                name="option1"
                                                placeholder="Option 1"
                                                value={bookingData.option1}
                                                onChange={handleInputChange}
                                                className="py-2 px-3 sm:px-4 rounded-lg focus:ring-2 focus:ring-[#A4781A] focus:border-transparent text-xs sm:text-sm"
                                            />
                                            <input
                                                type="text"
                                                name="option2"
                                                placeholder="Option 2"
                                                value={bookingData.option2}
                                                onChange={handleInputChange}
                                                className="py-2 px-3 sm:px-4 rounded-lg focus:ring-2 focus:ring-[#A4781A] focus:border-transparent text-xs sm:text-sm"
                                            />
                                        </div>

                                        <Button
                                            label="Book NOW"
                                            bgClass="bg-[#24452D] hover:bg-[#1a3222] py-2 sm:py-3"
                                            textClass="text-white font-semibold text-xs sm:text-sm md:text-base"
                                            roundedClass="rounded-full"
                                            onClick={handleBookNow}
                                        />

                                        <button
                                            onClick={() => {
                                                setShowBookingForm(false);
                                                setIsAvailable(null);
                                            }}
                                            className="mt-2 sm:mt-3 w-full py-2 text-gray-600 hover:text-gray-800 transition-colors text-xs sm:text-sm"
                                        >
                                            ← Back to Search
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Golf Experience Package Section */}
            <div className="mt-8 sm:mt-12 md:mt-16 mb-8">
                <div className="rounded-[16px] sm:rounded-[20px] md:rounded-[24px] p-4 sm:p-6 md:p-8 lg:p-12 mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
                        {/* Left Side - Content */}
                        <div className="text-white">
                            <h2 className="text-[#A4781A] font-optima text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-4 sm:mb-6 tracking-wide">
                                SENTUL HIGHLAND GOLF CLUB UNIQUE WORRY-FREE GOLF EXPERIENCE PACKAGE
                            </h2>
                            
                            {/* Pricing */}
                            <div className="mb-6 sm:mb-8 space-y-3 sm:space-y-4">
                                <div>
                                    <h3 className="text-black font-optima text-lg sm:text-xl font-medium mb-1 sm:mb-2">Weekday</h3>
                                    <p className="text-[#A4781A] font-optima text-base sm:text-lg">5,500 THB per golfer</p>
                                </div>
                                <div>
                                    <h3 className="text-black font-optima text-lg sm:text-xl font-medium mb-1 sm:mb-2">Weekend/Public Holiday</h3>
                                    <p className="text-[#A4781A] font-optima text-base sm:text-lg">6,500 THB per golfer</p>
                                </div>
                            </div>

                            {/* Includes */}
                            <div className="mb-6 sm:mb-8">
                                <h3 className="text-black font-optima text-lg sm:text-xl font-medium mb-3 sm:mb-4">Includes</h3>
                                <div className="space-y-1 sm:space-y-2 text-black text-sm sm:text-base">
                                    <p>- 18 Uniquely Designed Holes Green Fee</p>
                                    <p>- Professionally Trained Caddie Fee</p>
                                    <p>- Caddie Tips (additional gratuity is permitted)</p>
                                    <p>- Ultimate Golf Cart Experience with GPS Technology</p>
                                    <p>- All Day Thai & International Dining at Kan</p>
                                    <p>- On-Course Snacks at the Kiosks</p>
                                    <p>- Complimentary sport towel</p>
                                    <p>- Unlimited Nikanti Mineral Water</p>
                                    <p>- Umbrella service DURING the golf round</p>
                                </div>
                            </div>

                            {/* Remarks */}
                            <div>
                                <p className="text-black font-optima text-xs sm:text-sm italic mb-1 sm:mb-2">Remarks:</p>
                                <p className="text-black font-optima text-xs sm:text-sm italic">
                                    For booking of 3, 6, 9, 12 or 15 holes game, please call us at +66 34 965 666
                                </p>
                            </div>
                        </div>

                        {/* Right Side - Image */}
                        <div className="flex justify-center lg:justify-end mt-6 lg:mt-0">
                            <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
                                <img 
                                    src={aboutImg} 
                                    alt="Golf Course View" 
                                    className="w-full h-[250px] sm:h-[300px] md:h-full object-cover rounded-xl sm:rounded-2xl shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookTeeTime;