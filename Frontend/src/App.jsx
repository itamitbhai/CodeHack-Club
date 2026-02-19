import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/customCursor";

import Home from "./Pages/Index";
import About from "./Pages/About";
import Team from "./Pages/Team";
import Events from "./Pages/Events";
import JoinUs from "./Pages/Join";
import Blog from "./Pages/FAQs";
import Project from "./Pages/Projects"


function App() {
  return (
    <BrowserRouter>
    <CustomCursor/>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/events" element={<Events />} />
        <Route path="/join" element={<JoinUs />} />
        <Route path="/faqs" element={<Blog/>} />
        <Route path="/projects" element={<Project />} />
     
      </Routes>
      <Footer/>
      
    </BrowserRouter>
  );
}

export default App;
