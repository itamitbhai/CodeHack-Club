import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/customCursor";
import Home from "./Pages/Index";
import About from "./Pages/About";
import Team from "./Pages/Team";
import Events from "./Pages/Events";
import Register from "./Pages/register";
import Blog from "./Pages/FAQs";
import Project from "./Pages/Projects"
import DebugMaster from "./Pages/DebugMaster";
import CodeRelay from "./Pages/CodeRelay";
import Hackathon from "./Pages/Hackathon";


function App() {
  return (
    <BrowserRouter>
    <CustomCursor/>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/debug-master" element={<DebugMaster />} />
        <Route path="/register/code-relay" element={<CodeRelay />} />
        <Route path="/register/hackathon" element={<Hackathon />} />
        <Route path="/faqs" element={<Blog/>} />
        <Route path="/projects" element={<Project />} />
     
      </Routes>
      <Footer/>
      
    </BrowserRouter>
  );
}

export default App;
