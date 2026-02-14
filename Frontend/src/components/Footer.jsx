import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0b1220] text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-emerald-500 p-2 rounded-lg">
                <span className="text-black font-bold">{`</>`}</span>
              </div>
              <h2 className="text-white text-lg font-semibold">
                CodeClub
              </h2>
            </div>

            <p className="text-sm leading-relaxed">
              Building the next generation of developers
              through workshops, hackathons, and open source.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-emerald-400 cursor-pointer">About</li>
              <li className="hover:text-emerald-400 cursor-pointer">Team</li>
              <li className="hover:text-emerald-400 cursor-pointer">Events</li>
              <li className="hover:text-emerald-400 cursor-pointer">Projects</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-emerald-400 cursor-pointer">Blog</li>
              <li className="hover:text-emerald-400 cursor-pointer">Join Us</li>
              <li className="hover:text-emerald-400 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Connect
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-[#111827] p-3 rounded-lg hover:bg-emerald-500/20 transition"
              >
                <Github size={18} />
              </a>
              <a
                href="#"
                className="bg-[#111827] p-3 rounded-lg hover:bg-emerald-500/20 transition"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="bg-[#111827] p-3 rounded-lg hover:bg-emerald-500/20 transition"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="bg-[#111827] p-3 rounded-lg hover:bg-emerald-500/20 transition"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm">
          © 2026 CodeClub. Built with 💚 by the community.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
