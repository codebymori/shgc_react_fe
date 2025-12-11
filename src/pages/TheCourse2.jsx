import Button from "../components/Button";
import CourseCarousel from "../components/CourseCarousel";
import GolfCourseAesthetic from "../components/GolfCourseAesthetic";
import { useState, useEffect, useRef } from "react";
import hole1 from "../assets/img/hole1.webp";
import hole2 from "../assets/img/hole2.webp";
import hole3 from "../assets/img/hole3.webp";
import hole8 from "../assets/img/hole8.webp";
import hole12 from "../assets/img/hole12.webp";
import golfMapImg from "../assets/img/maps.png";

// Course Timeline Component
const CourseTimeline = () => {
  const [currentHole, setCurrentHole] = useState(0);
  const [previousHole, setPreviousHole] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timelineRef = useRef(null);

  // Data untuk 15 holes
  const holes = [
    {
      id: 1,
      title: "Hole 1",
      par: "Par 4",
      yards: "418 Yards",
      description: "A challenging opening hole that sets the tone for the entire course. The fairway slopes gently downward, offering a good opportunity for a strong drive.",
      image: hole1,
    },
    {
      id: 2,
      title: "Hole 2",
      par: "Par 3",
      yards: "165 Yards",
      description: "A beautiful par 3 with water hazards surrounding the green. Precision is key as any mishit will find the water.",
      image: hole2,
    },
    {
      id: 3,
      title: "Hole 3", 
      par: "Par 5",
      yards: "520 Yards",
      description: "The longest hole on the course, requiring three well-placed shots to reach the green in regulation.",
      image: hole3,
    },
    {
      id: 4,
      title: "Hole 4",
      par: "Par 4",
      yards: "395 Yards",
      description: "A strategic hole with bunkers protecting the green. Club selection is crucial for the approach shot.",
      image: hole8,
    },
    {
      id: 5,
      title: "Hole 5",
      par: "Par 3",
      yards: "185 Yards",
      description: "An elevated tee shot over a ravine to a well-protected green surrounded by sand traps.",
      image: hole12,
    },
    {
      id: 6,
      title: "Hole 6",
      par: "Par 4",
      yards: "435 Yards",
      description: "A long par 4 with a narrow fairway. Accuracy off the tee is rewarded with a clear approach to the green.",
      image: hole1,
    },
    {
      id: 7,
      title: "Hole 7",
      par: "Par 5",
      yards: "545 Yards",
      description: "The longest par 5 on the course. Risk-reward opportunity for long hitters to reach in two shots.",
      image: hole2,
    },
    {
      id: 8,
      title: "Hole 8",
      par: "Par 4",
      yards: "380 Yards",
      description: "A dogleg right that rewards accurate placement off the tee. The approach shot is to an elevated green.",
      image: hole3,
    },
    {
      id: 9,
      title: "Hole 9",
      par: "Par 3",
      yards: "155 Yards",
      description: "The finishing hole for the front nine. A short but tricky par 3 with water guarding the front of the green.",
      image: hole8,
    },
    {
      id: 10,
      title: "Hole 10",
      par: "Par 4",
      yards: "425 Yards",
      description: "Starting the back nine with a challenging dogleg left. Position is key for the second shot.",
      image: hole12,
    },
    {
      id: 11,
      title: "Hole 11",
      par: "Par 5",
      yards: "510 Yards",
      description: "A reachable par 5 for longer hitters, but out-of-bounds runs along the entire left side.",
      image: hole1,
    },
    {
      id: 12,
      title: "Hole 12",
      par: "Par 4",
      yards: "410 Yards",
      description: "The signature hole featuring an island green. This stunning par 4 requires both courage and precision.",
      image: hole2,
    },
    {
      id: 13,
      title: "Hole 13",
      par: "Par 3",
      yards: "195 Yards",
      description: "A demanding par 3 with crosswinds affecting club selection. The green slopes severely from back to front.",
      image: hole3,
    },
    {
      id: 14,
      title: "Hole 14",
      par: "Par 4",
      yards: "445 Yards",
      description: "One of the toughest holes on the course. A long, straight par 4 with no room for error.",
      image: hole8,
    },
    {
      id: 15,
      title: "Hole 15",
      par: "Par 5",
      yards: "565 Yards",
      description: "The final par 5 offers a chance for birdie or eagle. Water comes into play on both the second and third shots.",
      image: hole12,
    },
    {
      id: 16,
      title: "Hole 16",
      par: "Par 3",
      yards: "175 Yards",
      description: "A scenic par 3 over water with an elevated tee. Club selection is critical as wind can significantly affect ball flight.",
      image: hole1,
    },
    {
      id: 17,
      title: "Hole 17",
      par: "Par 4",
      yards: "390 Yards",
      description: "A risk-reward hole with multiple route options. The aggressive line offers a shorter approach but requires precision.",
      image: hole2,
    },
    {
      id: 18,
      title: "Hole 18",
      par: "Par 4",
      yards: "450 Yards",
      description: "The championship finishing hole. A demanding par 4 that requires two quality shots to reach the well-protected green.",
      image: hole3,
    },
    {
      id: 19,
      title: "Hole 19",
      par: "Par 5",
      yards: "530 Yards",
      description: "An additional challenge hole. A sweeping dogleg left with strategic bunkers and a two-tiered green.",
      image: hole8,
    },
    {
      id: 20,
      title: "Hole 20",
      par: "Par 3",
      yards: "200 Yards",
      description: "The longest par 3 on the course. A demanding tee shot to a narrow green surrounded by deep bunkers.",
      image: hole12,
    },
    {
      id: 21,
      title: "Hole 21",
      par: "Par 4",
      yards: "425 Yards",
      description: "The ultimate test. This final hole combines length, accuracy, and course management for a memorable finish.",
      image: hole1,
    },
  ];

  // Static timeline - no scroll effects
  useEffect(() => {
    // Initialize timeline in static mode - no scroll progress needed
  }, [currentHole, holes.length]);

  // Smooth transition handler untuk click navigation
  const handleHoleChange = (newHoleIndex) => {
    if (newHoleIndex !== currentHole) {
      setIsTransitioning(true);
      setPreviousHole(currentHole);
      
      setTimeout(() => {
        setCurrentHole(newHoleIndex);
        setTimeout(() => setIsTransitioning(false), 400);
      }, 200);
    }
  };

  return (
    <div 
      ref={timelineRef}
      className="w-full h-screen bg-black relative"
    >
      {/* Ultra Smooth Background Image Transition */}
      <div className="fixed inset-0 overflow-hidden">
        {/* Layer 1 - Previous/Outgoing Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-[1500ms] ease-linear"
          style={{
            backgroundImage: `url(${holes[previousHole]?.image})`,
            filter: 'saturate(1.15) contrast(1.08) brightness(1.02)',
            opacity: isTransitioning ? 0 : (currentHole === previousHole ? 1 : 0),
          }}
        />
        
        {/* Layer 2 - Current/Incoming Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-[1500ms] ease-linear"
          style={{
            backgroundImage: `url(${holes[currentHole]?.image})`,
            filter: 'saturate(1.15) contrast(1.08) brightness(1.02)',
            opacity: 1,
          }}
        />
        
        {/* Light Overlay for better text readability */}
        <div 
          className="absolute inset-0 transition-all duration-[2000ms] ease-out"
          style={{
            background: `linear-gradient(
              135deg, 
              rgba(0,0,0,0.08) 0%, 
              rgba(0,0,0,0.03) 50%, 
              rgba(0,0,0,0.12) 100%
            )`,
          }}
        />
      </div>



        {/* Main Content Area */}
        <div className="fixed inset-0 z-10 flex items-center">
          <div className="w-full max-w-7xl mx-auto px-8 flex items-center justify-between">
            
            {/* Left Side - Timeline Navigation */}
            <div className="w-80 bg-black/40 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
              <h3 className="text-xl font-optima font-semibold text-white mb-6 text-center">
                Course Navigation
              </h3>
              <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
                {holes.map((hole, index) => (
                  <div
                    key={hole.id}
                    className={`group flex items-center space-x-4 p-3 rounded-xl cursor-pointer transition-all duration-300 ${
                      index === currentHole 
                        ? 'bg-white/20 scale-105 border border-white/30' 
                        : 'hover:bg-white/10 border border-transparent'
                    }`}
                    onClick={() => handleHoleChange(index)}
                  >
                    {/* Timeline Dot */}
                    <div className={`relative flex-shrink-0 w-8 h-8 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                      index === currentHole 
                        ? 'bg-white border-white shadow-lg' 
                        : 'bg-transparent border-white/60 group-hover:border-white/80'
                    }`}>
                      <span className={`text-xs font-bold ${
                        index === currentHole ? 'text-black' : 'text-white'
                      }`}>
                        {index + 1}
                      </span>
                    </div>
                    
                    {/* Hole Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-optima transition-all duration-300 truncate ${
                        index === currentHole 
                          ? 'text-lg font-bold text-white' 
                          : 'text-base font-medium text-white/90 group-hover:text-white'
                      }`}>
                        {hole.title}
                      </h4>
                      <p className={`text-xs font-inter transition-all duration-300 ${
                        index === currentHole 
                          ? 'text-white/90' 
                          : 'text-white/70 group-hover:text-white/80'
                      }`}>
                        {hole.par} • {hole.yards}
                      </p>
                    </div>
                </div>
              ))}
            </div>
          </div>
            
            {/* Right Side - Hole Details */}
            <div className="w-96 ml-12">
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-lg">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-1 mb-3">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-xs font-inter font-medium text-white">
                      Hole {currentHole + 1} of {holes.length}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-optima font-bold text-white mb-3">
                    {holes[currentHole]?.title}
                  </h2>
                  
                  <div className="flex justify-center items-center space-x-4">
                    <div className="text-center">
                      <p className="text-xs font-inter text-white/80 uppercase tracking-wide mb-1">Par</p>
                      <p className="text-xl font-optima font-bold text-white">
                        {holes[currentHole]?.par?.replace('Par ', '')}
                      </p>
                    </div>
                    <div className="w-px h-8 bg-white/40"></div>
                    <div className="text-center">
                      <p className="text-xs font-inter text-white/80 uppercase tracking-wide mb-1">Distance</p>
                      <p className="text-xl font-optima font-bold text-white">
                        {holes[currentHole]?.yards?.replace(' Yards', '')}<span className="text-sm">yds</span>
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Description */}
                <div>
                  <h3 className="text-sm font-optima font-semibold text-white mb-2">Description</h3>
                  <p className="text-white/90 leading-relaxed font-inter text-sm">
                    {holes[currentHole]?.description}
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>


      
      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
        .custom-scrollbar-horizontal::-webkit-scrollbar {
          height: 4px;
        }
        .custom-scrollbar-horizontal::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }
        .custom-scrollbar-horizontal::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 2px;
        }
      `}</style>
    </div>
  );
};

const TheCourse = () => {
  
  return (
    <div className="w-full min-h-screen flex flex-col bg-white overflow-x-hidden">
    <div className="w-full min-h-screen flex flex-col bg-white">

      <div className="w-full min-h-screen flex flex-col bg-white p-10 relative z-20">

     

      {/* Hero Section with Image */}
      <div className="flex justify-center">
        <div className="w-full">
          <img
            src={hole1}
            alt="The Course - Golf Course Hole 1"
            className="w-full h-[60vh] object-cover rounded-[24px]"
          />
        </div>
      </div>

      {/* White Card with Title - Positioned to overlap hero */}
      <div className="w-full flex justify-center -mt-10 relative z-10 px-4">
        <div className="bg-white rounded-[50px] w-[30vw] max-w-3xl p-0 text-center">
          <h1 className="text-[70px] font-optima text-black mb-2">The Course</h1>
          
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          {/* Button */}
          <div className="flex justify-center">
            <Button
              label="Inquire Now"
              onClick={() => console.log("Inquire clicked")}
              bgClass="bg-[#24452D]"
              textClass="text-white"
              roundedClass="rounded-full"
              iconClass="text-white"
              secondWordClass="font-semibold"
            />
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="w-full flex justify-center mt-15 ">
        <div className="w-[95vw]">
          <CourseCarousel />
        </div>
      </div>

      {/* Golf Course Section */}
      <div className="w-full flex justify-center mt-32">
        <div className="w-[95vw] bg-[#E4E9D4] rounded-3xl p-12 relative">
          {/* Title - "Golf Course" - Top Right with overlap */}
          <div className="flex justify-end mr-20 -mt-[100px] mb-8">
            <h2 className="text-[70px] font-optima text-[#24452D] bg-white rounded-[50px] px-12 py-1">Golf Course</h2>
          </div>

          <div className="flex gap-20 items-center">
            {/* Left Side - Text Card */}
            <div className="flex-1 flex flex-col gap-6">
              {/* Text Card */}
              <div className="bg-white rounded-[24px] p-8 min-h-[300px] flex flex-col justify-between">
                <p className="text-[15px] leading-relaxed font-inter font-light">
                    GOLF COURSE <br></br>
                    Many well-known golf courses around the world are using the Sub-Air System, including the Augusta National and the Wentworth Golf Club.
                    <br></br><br></br>
                    SIGNATURE HOLE OF ROBINSWOOD GOLF CLUB
                    <br></br>
                    5th Hole Par 4 473 Yards
                    <br></br>
                    This hole plays easier than it might look. There is a wide landing area for short hitters.
                    <br></br><br></br>
                    A stream cuts across the fairway and a beauty is yet to come. After you walk pass the second shot, you will certainly hear the noise of a big waterfall, one of the iconic signatures at Robinswood Golf Club and also a picture spot.
                    <br></br><br></br>
                    12th Hole Par 3 204 Yards<br></br>
                    This stunning Par 3 signature hole is perhaps one of the most exciting holes at Robinswood. The apple-shaped island green sits in the middle of the water. Don't let the yardage fool you in this hole. Choosing the right club is extremely significance, as this is one of the highest and windiest sections of the entire course. Be daring and commit to your tee shot.
                                    </p>
              </div>
            </div>

            {/* Right Side - Golf Course Map */}
            <div className="flex-1 relative">
              {/* Map Image */}
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={golfMapImg}
                  alt="Golf Course Map"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      
       </div>
    </div>

    {/* Timeline Section with Scroll Animation */}
    <div className="w-full min-h-screen">
      <CourseTimeline />
    </div>

    {/* Golf Course Aesthetic Section */}
    <div className="relative z-50 bg-white min-h-screen">
      <GolfCourseAesthetic />
    </div>

    </div>
  );
};

export default TheCourse;