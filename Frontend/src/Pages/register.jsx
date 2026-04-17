import { Link } from "react-router-dom";
import { HexagonPattern } from "../components/ui/hexagon-pattern";
import { cn } from "@/lib/utils";
import { BorderBeam } from "../components/ui/border-beam";
import { Particles } from "../components/ui/particles";
import { motion } from "framer-motion";

export default function RegisterSelect() {
  return (
    <div className="min-h-screen w-screen relative flex items-center justify-center bg-[black] text-white overflow-hidden">
      
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Particles
          className="w-full h-full"
          quantity={window.innerWidth < 768 ? 40 : 100}
          ease={60}
          size={0.6}
          staticity={40}
        />
      </div>

      {/* HEX BG */}
      <HexagonPattern
        hexagons={[
          [1, 1],[4, 4],[2, 2],[3, 4],[5, 4],
          [8, 2],[6, 3],[8, 5],[10, 10],
        ]}
        className={cn(
          "absolute inset-0 opacity-100",
          "mask-[radial-gradient(600px_circle_at_center,white,transparent)]",
          "skew-y-6"
        )}
      />

      {/* CARDS */}
      <div className="relative z-10 grid md:grid-cols-3 gap-8 px-4 text-red-500">

        {/* CARD 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ rotateX: 8, rotateY: -8, scale: 1.05 }}
          transition={{ duration: 0.6 }}
          style={{ perspective: 1000 }}
        >
          <Link to="/register/hackathon">
            <div className="card relative overflow-hidden font-Xirod text-xl">
              
              {/* Glow */}
              <motion.div
                className="absolute inset-0 rounded-xl pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(0,140,255,0.25), transparent 70%)",
                }}
              />

              <div className="absolute top-30 right-24 w-40 h-40 bg-blue-500 rounded-full blur-3xl animate-float2"></div>

              Hackathon

              <div className="flex items-center justify-center text-2xl font-ByteBounce text-white">
                Team ( 1 Leader & 2 Members )
              </div>

              <BorderBeam
                size={800}
                duration={5}
                delay={100}
                borderWidth={3}
                className="opacity-100"
              />
            </div>
          </Link>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ rotateX: 8, rotateY: -8, scale: 1.05 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ perspective: 1000 }}
        >
          <Link to="/register/debug-master">
            <div className="card relative overflow-hidden font-Xirod text-xl">

              
              
              {/* Glow */}
              <motion.div
                className="absolute inset-0 rounded-xl pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(0,140,255,0.25), transparent 70%)",
                }}
              />

        <div className="absolute top-30 right-24 w-40 h-40 bg-blue-500 rounded-full blur-3xl animate-float2"></div>
              

              Debug Master

              <div className="text-2xl font-ByteBounce text-white">
                Solo Participants
              </div>

              <BorderBeam
                size={800}
                duration={5}
                delay={100}
                borderWidth={3}
                className="opacity-100"
              />
            </div>
          </Link>
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ rotateX: 8, rotateY: -8, scale: 1.05 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ perspective: 1000 }}
        >
          <Link to="/register/code-relay">
            <div className="card relative overflow-hidden font-Xirod text-xl">
              
              {/* Glow */}
              <motion.div
                className="absolute inset-0 rounded-xl pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(0,140,255,0.25), transparent 70%)",
                }}
              />

              <div className="absolute top-30 right-24 w-40 h-40 bg-blue-500 rounded-full blur-3xl animate-float2"></div>

              Code Relay

              <div className="flex items-center justify-center text-2xl font-ByteBounce text-white">
                Team ( 1 Leader & 2 Members )
              </div>

              <BorderBeam
                size={800}
                duration={5}
                delay={100}
                borderWidth={3}
                className="opacity-100"
              />
            </div>
          </Link>
        </motion.div>

      </div>

      {/* STYLE (UNCHANGED) */}
      <style jsx>{`
        .card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          padding: 40px;
          border-radius: 20px;
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid rgba(255,255,255,0.1);
          font-weight: 600;
        }

        .card:hover {
          transform: translateY(-5px) scale(1.05);
          background: rgba(255,255,255,0.1);
          box-shadow: 0 0 40px rgba(0, 140, 255, 0.2);
        }
      `}</style>

    </div>
  );
}