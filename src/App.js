import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import TheCourse from "./Pages/TheCourse";
import Facilities from "./Pages/Facilities";
import FraserDrivingLounge from "./Pages/FraserDrivining&Lounge";
import Faq from "./Pages/Faq";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/the-course" element={<TheCourse />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/fraser-driving-lounge" element={<FraserDrivingLounge />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </Router>
  );
}

export default App;