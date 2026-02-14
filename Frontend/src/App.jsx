import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";

import Home from "./Pages/Index";
import About from "./Pages/About";
import Team from "./Pages/Team";
import Events from "./Pages/Events";
import JoinUs from "./Pages/Join";
import Blog from "./Pages/Blog";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/events" element={<Events />} />
        <Route path="/join" element={<JoinUs />} />
        <Route path="/blog" element={<Blog />} />
     
      </Routes>
      <Footer/>
      
    </BrowserRouter>
  );
}

export default App;
