import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import TheCourse from "./Pages/TheCourse";
import TheCourse2 from "./Pages/TheCourse2";
import Facilities from "./Pages/Facilities";
import FraserDrivingLounge from "./Pages/FraserDrivining&Lounge";
import Faq from "./Pages/Faq";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/the-course" element={<TheCourse />} />
        <Route path="/the-course2" element={<TheCourse2 />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/fraser-driving-lounge" element={<FraserDrivingLounge />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;