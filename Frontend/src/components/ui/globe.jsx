import { useEffect, useRef } from "react"
import createGlobe from "cobe"
import { useScroll, useSpring, useMotionValue } from "framer-motion"

const GLOBE_CONFIG = {
devicePixelRatio: 2,
phi: 0,
theta: 0.3,
dark: 1,
diffuse: 1.8,
mapSamples: 24000,
mapBrightness: 10,

baseColor: [0.02, 0.04, 0.12],      // deep navy
markerColor: [0.1, 0.5, 1],         // blue
glowColor: [0.1, 0.6, 1.2],         // glow

//  INDIA MARKER
markers: [],
}

export function Globe({ className }) {
const canvasRef = useRef(null)
const pointerInteracting = useRef(null)

const r = useMotionValue(0)

// smoother spring
const rs = useSpring(r, {
damping: 40,
stiffness: 90,
})

// scroll rotation
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
    // auto rotation (only when not dragging)
    if (pointerInteracting.current === null) {
      phi += 0.002
    }

    // combine all rotations
    state.phi =
      phi +
      rs.get() +
      scrollRotation.get() * 2

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

// SMOOTH DRAG ROTATION
const updateMovement = (clientX) => {
if (pointerInteracting.current !== null) {
const delta = clientX - pointerInteracting.current


  // smoother feel
  r.set(r.get() + delta * 0.005)

  pointerInteracting.current = clientX
}


}

return (
<div
className={`absolute inset-0 flex items-center justify-center ${className}`}
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
