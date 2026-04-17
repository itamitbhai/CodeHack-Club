import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { BorderBeam } from "../components/ui/border-beam";
import { PulsatingButton } from "../components/ui/pulsating-button";
import { RainbowButton } from "../components/ui/rainbow-button";
import { Particles } from "../components/ui/particles";


export default function Hackathon() {
  const [form, setForm] = useState({
    teamName: "",
    leaderName: "",
    registrationNumber: "",
    email: "",
    phone: "",
    branch: "",
    batch: "",
    semester: "",
    year: "",
    college: "",
    members: []
  });

  const getYearFromSemester = (sem) => {
    const s = Number(sem);
    if (s >= 1 && s <= 2) return "1st";
    if (s >= 3 && s <= 4) return "2nd";
    if (s >= 5 && s <= 6) return "3rd";
    if (s >= 7 && s <= 8) return "4th";
    return "";
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addMember = () => {
    if (form.members.length >= 2) {
      alert("Max 2 members allowed");
      return;
    }

    setForm({
      ...form,
      members: [
        ...form.members,
        {
          registrationNumber: "",
          name: "",
          branch: "",
          semester: "",
          year: "",
          gender: "",
        }
      ]
    });
  };

  const removeMember = (index) => {
    const updated = [...form.members];
    updated.splice(index, 1);
    setForm({ ...form, members: updated });
  };

  const handleMemberChange = (i, field, value) => {
    const updated = [...form.members];
    updated[i][field] = value;
    setForm({ ...form, members: updated });
  };

  const handleSubmit = async () => {
    try {
      const cleanedForm = {
        ...form,
        registrationNumber: form.registrationNumber.trim(),
        members: form.members.map(m => ({
          ...m,
          registrationNumber: m.registrationNumber.trim()
        }))
      };

      await axios.post("http://localhost:3000/event/code-relay", cleanedForm);
      alert("Code Relay Team Registered 🚀");
    } catch (err) {
      alert(err.response?.data?.message || "Code relay team registration issue");
    }
  };

  return (
    <div className="min-h-screen w-screen bg-[black] pt-24 pb-10 px-4 flex justify-center">

      {/* Particles Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Particles
          className="w-full h-full"
          quantity={window.innerWidth < 768 ? 40 : 100}
          ease={60}
          size={0.6}
          staticity={40}
        />
      </div>

      {/* Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-6xl backdrop-blur-xl bg-white/5 border border-white/10 overflow-hidden flex flex-col md:flex-row"
      >

        {/* LEFT SIDE BORDER BEAM */}
        <div className="absolute inset-0 pointer-events-none opacity-100">
          <BorderBeam size={5000} duration={10} delay={1} borderWidth={3} />
        </div>

        {/* LEFT FORM */}
        <div className="relative w-full md:w-1/2 p-6 md:p-10 overflow-y-auto max-h-[85vh]">

          {/* OVERLAYS */}
          <div className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

          <h2 className="text-3xl font-bold font-Siegra text-blue-600 mb-4">Code Relay</h2>
          

          <input
            name="teamName"
            value={form.teamName}
            placeholder="Team Name"
            onChange={handleChange}
            className="w-full p-3 font-ByteBounce text-3xl py-1 mb-3 rounded-xl bg-gray-800/10 text-white border border-white/30 outline-none"
          />

          <input name="leaderName" placeholder="Leader Name" onChange={handleChange} className="w-full font-ByteBounce text-3xl py-1 p-3 mb-3 rounded-xl bg-gray-800/10 text-white border border-white/30 outline-none" />
          <input name="registrationNumber" placeholder="Leader Reg Number" onChange={handleChange} className="w-full font-ByteBounce text-3xl py-1 p-3 mb-3 rounded-xl bg-gray-800/10 text-white border border-white/30 outline-none" />
          <input name="email" placeholder="Email" onChange={handleChange} className="w-full font-ByteBounce text-3xl py-1 p-3 mb-3 rounded-xl bg-gray-800/10 text-white border border-white/30 outline-none" />
          <input name="phone" placeholder="Phone" onChange={handleChange} className="w-full font-ByteBounce text-3xl py-1 p-3 mb-3 rounded-xl bg-gray-800/10 text-white border border-white/30 outline-none" />
          <input name="branch" placeholder="Branch" onChange={handleChange} className="w-full font-ByteBounce text-3xl py-1 p-3 mb-3 rounded-xl bg-gray-800/10 text-white border border-white/30 outline-none" />
          <input name="batch" placeholder="Batch" onChange={handleChange} className="w-full font-ByteBounce text-3xl py-1 p-3 mb-3 rounded-xl bg-gray-800/10 text-white border border-white/30 outline-none" />

          <input
            placeholder="Semester (1 to 8)"
            onChange={(e) => {
              const val = e.target.value;
              setForm({
                ...form,
                semester: Number(val),
                year: getYearFromSemester(val)
              });
            }}
            className="w-full font-ByteBounce text-3xl py-1 p-3 mb-3 rounded-xl bg-gray-800/10 text-white border border-white/30 outline-none"
          />

          <input
            value={form.year}
            readOnly
            placeholder="Year"
            className="w-full font-ByteBounce text-3xl py-1 p-3 mb-3 rounded-xl bg-gray-800/10 text-white border border-white/30 outline-none"
          />

          <input name="college" placeholder="College" onChange={handleChange} className="w-full font-ByteBounce text-3xl py-1 p-3 mb-3 rounded-xl bg-gray-800/10 text-white border border-white/30 outline-none" />

          <PulsatingButton
            onClick={addMember}
            className="font-ByteBounce  mb-4 bg-linear-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition"
          >
            + Add Members
          </PulsatingButton>

          {form.members.map((m, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl mb-4 backdrop-blur-md">
              <div className="flex justify-between mb-2 font-ByteBounce">
                <p className="text-3xl text-blue-600 font-semibold">
                  Member {i + 1}
                </p>
                <button onClick={() => removeMember(i)} className="text-red-400 text-xs hover:underline">
                  Remove
                </button>
              </div>

              <input placeholder="Registration Number" onChange={(e)=>handleMemberChange(i,"registrationNumber",e.target.value)} className="w-full font-ByteBounce text-2xl py-1 p-2 mb-2 rounded-lg bg-gray-800/10 text-white border border-white/30" />
              <input placeholder="Name" onChange={(e)=>handleMemberChange(i,"name",e.target.value)} className="w-full font-ByteBounce text-2xl py-1 p-2 mb-2 rounded-lg bg-gray-800/10 text-white border border-white/30" />
              <input placeholder="Branch" onChange={(e)=>handleMemberChange(i,"branch",e.target.value)} className="w-full font-ByteBounce text-2xl py-1 p-2 mb-2 rounded-lg bg-gray-800/10 text-white border border-white/30" />

              <input
                type="number"
                placeholder="Semester"
                onChange={(e) => {
                  const val = e.target.value;
                  const updated = [...form.members];
                  updated[i].semester = Number(val);
                  updated[i].year = getYearFromSemester(val);
                  setForm({ ...form, members: updated });
                }}
                className="w-full font-ByteBounce text-2xl py-1 p-2 mb-2 rounded-lg bg-gray-800/10 text-white border border-white/30"
              />

              <input value={m.year} readOnly placeholder="Year (Auto fill by Sem)" className="w-full font-ByteBounce text-2xl py-1 p-2 mb-2 rounded-lg bg-gray-800/10 text-white border border-white/30" />

              <select onChange={(e)=>handleMemberChange(i,"gender",e.target.value)} className="w-full font-ByteBounce text-2xl py-3 p-2 rounded-lg bg-gray-800/10 text-gray-400 border border-white/30">
                <option value=""> Gender </option>
                <option value="male"> Male </option>
                <option value="female"> Female </option>
              </select>
            </div>
          ))}

          <RainbowButton onClick={handleSubmit} className="w-full h-12 text-white">
            Submit
          </RainbowButton>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden md:block md:w-1/2 relative">
          <div className="absolute z-10 inset-0 pointer-events-none opacity-100">
            <BorderBeam size={400} duration={10} delay={50} borderWidth={3} />
          </div>

          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-xl p-4 rounded-xl border border-white/20">
            <p className="text-white font-Kapilar">Code Relay </p>
            <p className="text-gray-300 text-xl font-ByteBounce ">
              Innovate. Build. Dominate 🚀
            </p>
          </div>
        </div>

      </motion.div>
    </div>
  );
}