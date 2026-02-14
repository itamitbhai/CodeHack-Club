import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Code2, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Events", path: "/events" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Join Us", path: "/join" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0b1c22] shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 text-white font-semibold text-lg">
          <div className="bg-green-500 p-2 rounded-xl">
            <Code2 size={20} className="text-black" />
          </div>
          <span>CodeClub</span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-gray-400 font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative transition-all duration-300 ${
                  isActive ? "text-green-400" : "hover:text-green-400"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] w-full bg-green-400 transition-all duration-300 ${
                      isActive ? "scale-100" : "scale-0"
                    }`}
                  ></span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden text-white">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f2027] px-6 pb-4 flex flex-col gap-4 text-gray-300">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-left transition-all duration-300 ${
                  isActive ? "text-green-400" : "hover:text-green-400"
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

