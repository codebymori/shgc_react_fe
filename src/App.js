import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import TheCourse from "./Pages/TheCourse";
import Facilities from "./Pages/Facilities";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/the-course" element={<TheCourse />} />
        <Route path="/facilities" element={<Facilities />} />
      </Routes>
    </Router>
  );
}

export default App;