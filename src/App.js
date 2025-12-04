import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import TheCourse from "./Pages/TheCourse";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/the-course" element={<TheCourse />} />
      </Routes>
    </Router>
  );
}

export default App;