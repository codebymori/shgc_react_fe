import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import TheCourse from "./Pages/TheCourse";
import TheCourse2 from "./Pages/TheCourse2";
import Facilities from "./Pages/Facilities";
import FraserDrivingLounge from "./Pages/FraserDrivining&Lounge";
import Faq from "./Pages/Faq";
import VIPRoom from "./Pages/VIPRoom";
import VIPRoomDetails from "./Pages/VIPRoomDetails";
import Membership from "./Pages/Membership";
import NewsEvent from "./Pages/News&Event";
import ArticleDetail from "./Pages/ArticleDetail";
import BookTeeTime from "./Pages/BookTeeTime";

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
        <Route path="/vip-room" element={<VIPRoom />} />
        <Route path="/vip-room-details" element={<VIPRoomDetails />} />
        <Route path="/membership"  element={<Membership />} />
        <Route path="/book-tee-time" element={<BookTeeTime />} />
        <Route path="/news-event" element={<NewsEvent />} />
        <Route path="/news-event/:id" element={<ArticleDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;