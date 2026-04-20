import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { BorderBeam } from "../components/ui/border-beam";
import { RainbowButton } from "../components/ui/rainbow-button";


export default function DebugMaster() {

  const [form, setForm] = useState({
    registrationNumber: "",
    name: "",
    email: "",
    phone: "",
    branch: "",
    batch: "",
    semester: "",
    gender: "",
    college: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: name === "semester" ? Number(value) : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      // import.meta.env.VITE_API_URL का उपयोग करें
await axios.post(`${import.meta.env.FRONTEND_URL}/event/debug-master`, form);


      alert("Registered Successfully 🚀");

  
      setForm({
        registrationNumber: "",
        name: "",
        email: "",
        phone: "",
        branch: "",
        batch: "",
        semester: "",
        gender: "",
        college: ""
      });

    } catch (err) {
      alert(err.response?.data?.message || "Error from DebugMaster.jsx");
    }
  };

  return (
    <div className="min-h-scree overflow-y-auton w-screen p-10 bg-[black] pt-25 px-3 flex justify-center">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md md:max-w-5xl flex flex-col md:flex-row overflow-hidden border border-white/10 backdrop-blur-xl bg-white/5 shadow-xl"
      >
        <div className="absolute inset-0 pointer-events-none opacity-100">
          <BorderBeam size={5000} duration={10} delay={1} borderWidth={3} />
        </div>

        {/* LEFT FORM */}
        <div className=" relative w-full  md:w-1/2 p-6 md:p-10  max-h-[85vh]">
          <div className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

          <h2 className="text-2xl md:text-3xl font-Siegra text-blue-600  mb-3">
            Debug Master
          </h2>
          

          <form onSubmit={handleSubmit}>

            <input
              name="registrationNumber"
              placeholder="Registration Number"
              value={form.registrationNumber}
              onChange={handleChange}
              className="w-full p-3 font-ByteBounce text-3xl py-1 mb-3 rounded-xl bg-gray-800/10 text-white border border-white/30 outline-none"
            />

            <input
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 font-ByteBounce text-3xl py-1 mb-3 rounded-xl bg-gray-800/10 text-white border border-white/30 outline-none"
            />

            <input
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 font-ByteBounce text-3xl py-1 mb-3 rounded-xl bg-gray-800/10 text-white border border-white/30 outline-none"
            />

            <input
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full p-3 font-ByteBounce text-3xl py-1 mb-3 rounded-xl bg-gray-800/10 text-white border border-white/30 outline-none"
            />

            <input
              name="branch"
              placeholder="Branch"
              value={form.branch}
              onChange={handleChange}
              className="w-full p-3 font-ByteBounce text-3xl py-1 mb-3 rounded-xl bg-gray-800/10 text-white border border-white/30 outline-none"
            />

            <input
              name="batch"
              placeholder="Batch (e.g. 2023-2027)"
              value={form.batch}
              onChange={handleChange}
              className="w-full p-3 font-ByteBounce text-3xl py-1 mb-3 rounded-xl bg-gray-800/10 text-white border border-white/30 outline-none"
            />

            <input
              name="semester"
              placeholder="Semester (1-8)"
              type="number"
              value={form.semester}
              onChange={handleChange}
              className="w-full p-3 font-ByteBounce text-3xl py-1 mb-3 rounded-xl bg-gray-800/10 text-white border border-white/30 outline-none"
            />

            <div className="relative">
              <select
                name="gender"
                required
                value={form.gender}
                onChange={handleChange}
                className="w-full mb-3 px-4 py-1.5 pr-10 rounded-xl 
                bg-gray-800/30 backdrop-blur-md 
                border border-white/30 
                text-gray-400 
                outline-none font-ByteBounce text-3xl
                focus:ring-2 focus:ring-yellow-400 
                appearance-none"
              >
                <option value="" className="bg-[#0b0f1a] text-gray-400">
                  Select Gender
                </option>
                <option value="male" className="bg-[#0b0f1a] text-white">
                  Male
                </option>
                <option value="female" className="bg-[#0b0f1a] text-white">
                  Female
                </option>
              </select>

              {/* Arrow */}
              <div className="absolute right-4 top-6 -translate-y-1/2 text-xs text-gray-300 pointer-events-none">
                ▼
              </div>
            </div>

            <input
              name="college"
              placeholder="College Name"
              value={form.college}
              onChange={handleChange}
              className="w-full p-3 font-ByteBounce text-3xl py-1 mb-3 rounded-xl bg-gray-800/10 text-white border border-white/30 outline-none"
            />

            <RainbowButton
              type="submit"
              className="w-full h-12 py-4 rounded-xl  text-white font-semibold hover:opacity-90 transition"
            >
              Submit
            </RainbowButton>

          </form>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden md:block md:w-1/2 relative">

          <div className="absolute inset-0 z-10 pointer-events-none opacity-100">
            <BorderBeam size={400} duration={10} delay={50} borderWidth={3} />
          </div>

          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-xl p-4 rounded-xl border border-white/20">
            <p className="text-white font-semibold">
              Debug Master
            </p>
            <p className="text-gray-300 text-sm">
              Fix. Think. Win 🧠
            </p>
          </div>

        </div>

      </motion.div>
    </div>
  );
}