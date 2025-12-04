import Navbar from "../components/Navbar";
import Button from "../components/Button";

const TheCourse = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Image */}
      <div className="w-full pt-24">
        <div
          className="relative w-full h-96 bg-cover bg-center rounded-b-[40px] overflow-hidden"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1400&h=600&fit=crop')`,
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      </div>

      {/* White Card with Title - Positioned to overlap hero */}
      <div className="w-full flex justify-center -mt-20 relative z-10 px-4">
        <div className="bg-white rounded-t-[60px] w-full max-w-3xl px-12 py-12 text-center">
          <h1 className="text-6xl font-light text-black mb-6">The Course</h1>
          
          {/* Divider */}
          <div className="flex justify-center mb-6">
            <div className="w-0.5 h-8 bg-black"></div>
          </div>
        </div>
      </div>

      {/* Description and Button Section */}
      <div className="w-full flex justify-center px-4">
        <div className="max-w-3xl w-full text-center pb-16">
          {/* Description */}
          <p className="text-gray-600 text-base leading-relaxed mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>

          {/* Button */}
          <Button
            label="Inquire NOW"
            onClick={() => console.log("Inquire clicked")}
            className="bg-green-900 hover:bg-green-800 text-white px-8 py-3 rounded-full font-medium transition"
          />
        </div>
      </div>
    </div>
  );
};

export default TheCourse;
