import { useEffect, useRef } from "react"
import createGlobe from "cobe"
import { useScroll, useSpring, useMotionValue } from "framer-motion"

const MOVEMENT_DAMPING = 1400

const GLOBE_CONFIG = {
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 1.8,
  mapSamples: 24000,
  mapBrightness: 10,

  baseColor: [0.02, 0.04, 0.12],        // deep navy
  markerColor: [0.2, 0.6, 1],           // electric blue
  glowColor: [0.3, 0.7, 1],             // neon blue glow
  markers: [],
}

export function Globe({ className }) {
  const canvasRef = useRef(null)
  const pointerInteracting = useRef(null)

  const r = useMotionValue(0)
  const rs = useSpring(r, { damping: 30, stiffness: 120 })

  // 🔥 Scroll based rotation
  const { scrollYProgress } = useScroll()
  const scrollRotation = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
  })

  useEffect(() => {
    let phi = 0
    let width = 0

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth
      }
    }

    window.addEventListener("resize", onResize)
    onResize()

    const globe = createGlobe(canvasRef.current, {
      ...GLOBE_CONFIG,
      width: width * 2,
      height: width * 2,
      onRender: (state) => {
        if (!pointerInteracting.current) phi += 0.003

        state.phi =
          phi +
          rs.get() +
          scrollRotation.get() * 2   // scroll influence

        state.width = width * 2
        state.height = width * 2
      },
    })

    canvasRef.current.style.opacity = "1"

    return () => {
      globe.destroy()
      window.removeEventListener("resize", onResize)
    }
  }, [rs, scrollRotation])

  const updateMovement = (clientX) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      r.set(r.get() + delta / MOVEMENT_DAMPING)
      pointerInteracting.current = clientX
    }
  }

  return (
    <div
      className={`
        absolute inset-0 flex items-center justify-center
        ${className}
      `}
    >
      <canvas
        ref={canvasRef}
        className="w-[120vw] h-[120vw] max-w-[1400px] max-h-[1400px]
                   opacity-0 transition-opacity duration-1000
                   cursor-grab active:cursor-grabbing
                   [contain:layout_paint_size]"
        onPointerDown={(e) => (pointerInteracting.current = e.clientX)}
        onPointerUp={() => (pointerInteracting.current = null)}
        onPointerOut={() => (pointerInteracting.current = null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  )
}
