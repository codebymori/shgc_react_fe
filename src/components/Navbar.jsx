import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto px-8 py-4">
        <div className="bg-white rounded-b-3xl flex items-center justify-between px-10 py-3 shadow-lg">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">SH</span>
            </div>
            <div className="flex flex-col">
              <span className="text-yellow-600 font-bold text-xs leading-tight">SENTUL</span>
              <span className="text-yellow-600 font-bold text-xs leading-tight">HIGHLANDS</span>
            </div>
          </div>

          {/* Menu Items */}
          <div className="flex items-center gap-8">
            <Link to="/" className="text-gray-800 hover:text-green-900 font-medium transition">
              Home
            </Link>
            <a href="#facilities" className="text-gray-800 hover:text-green-900 font-medium transition">
              Facilities
            </a>
            <Link to="/the-course" className="text-gray-800 hover:text-green-900 font-medium transition">
              The Course
            </Link>
            <a href="#news" className="text-gray-800 hover:text-green-900 font-medium transition">
              News & Events
            </a>
            <a href="#membership" className="text-gray-800 hover:text-green-900 font-medium transition">
              Membership
            </a>
            <a href="#contact" className="text-gray-800 hover:text-green-900 font-medium transition">
              Contact
            </a>
            <a href="#faq" className="text-gray-800 hover:text-green-900 font-medium transition">
              FAQ
            </a>
          </div>

          {/* Right Side - Button & Language */}
          <div className="flex items-center gap-4">
            <button className="bg-green-900 text-white px-6 py-2 rounded-full hover:bg-green-800 font-medium transition">
              BOOK Tee Time
            </button>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🇬🇧</span>
              <span className="text-2xl">🇮🇩</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
