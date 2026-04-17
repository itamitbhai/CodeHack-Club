import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from '../assets/image/CodeHack_Logo_White.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Team", path: "/team" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "FAQs", path: "/faqs" },
  ];

  return (
    <nav className="fixed top-0 left-0 h-20 w-full z-50 backdrop-blur-3xl shadow-lg">
      <div className="max-w-7xl mx-auto px-3 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink 
          to="/" 
          className="flex items-center justify-center"
          >
          <div className="flex items-center gap-1 text-white">

          {/* Logo Image */}
          <img 
            src={logo} 
            alt="Logo" 
            className="h-10 w-10 sm:h-10 sm:w-10 md:h-10 md:w-10 object-contain"
          />

          {/* Brand Name */}
          <h3 className="font-Xirod text-xl sm:text-2xl md:text-2xl font-bold">
            Code<span className="text-blue-600">Hack</span>
          </h3>

          </div>
        </NavLink>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-5 text-white font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative transition-all duration-300 font-FFMOON ${
                  isActive ? "text-blue-600" : "hover:text-red-600"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 w-full bg-red-600 transition-all duration-300 ${
                      isActive ? "scale-100" : "scale-0"
                    }`}
                  ></span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden text-white ">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#100f22] px-6 pb-4 flex flex-col gap-4 text-gray-300">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-left transition-all duration-300 font-FFMOON mt-2  ${
                  isActive ? "text-blue-600" : "hover:text-blue-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

