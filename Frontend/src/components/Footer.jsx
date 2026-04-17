import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import logo from '../assets/image/CodeHack_Logo_White.png'

const Footer = () => {
  return (
    <footer className="bg-[#05090f] text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
             <div className="flex items-center gap-1 text-white">
            
                      {/* Logo Image */}
                      <img 
                        src={logo} 
                        alt="Logo" 
                        className="h-6 w-6 sm:h-6 sm:w-6 md:h-6 md:w-6 object-contain"
                      />
            
                      {/* Brand Name */}
                      <h3 className="font-Xirod text-lg sm:text-lg md:text-lg font-bold">
                        Code<span className="text-[#097cc9]">Hack</span>
                      </h3>
            
              
            </div>

            <p className="font-ByteBounce text-2xl ">
              Building the next generation of developers
              through workshops, hackathons, and open source.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-Xirod  ">
              Quick Links
            </h3>
            <ul className=" font-ByteBounce text-2xl">
              <li className="hover:text-blue-600 cursor-pointer">About</li>
              <li className="hover:text-blue-600 cursor-pointer">Team</li>
              <li className="hover:text-blue-600 cursor-pointer">Events</li>
              <li className="hover:text-blue-600 cursor-pointer">Projects</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-Xirod">
              Resources
            </h3>
            <ul className="font-ByteBounce text-2xl">
              <li className="hover:text-blue-600 cursor-pointer">Blog</li>
              <li className="hover:text-blue-600 cursor-pointer">Join Us</li>
              <li className="hover:text-blue-600 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-Xirod mb-4">
              Connect
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-[#111827] p-3 rounded-lg hover:bg-blue-900/30 transition"
              >
                <Github size={18} />
              </a>
              <a
                href="#"
                className="bg-[#111827] p-3 rounded-lg hover:bg-blue-900/30 transition"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="bg-[#111827] p-3 rounded-lg hover:bg-blue-900/30 transition"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="bg-[#111827] p-3 rounded-lg hover:bg-blue-900/30 transition"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/30 font-mono mt-12 pt-6 text-center text-sm">
          © 2026 CodeClub. Built with Community 💗 by Amit Kumar & Suraj Kumar.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
