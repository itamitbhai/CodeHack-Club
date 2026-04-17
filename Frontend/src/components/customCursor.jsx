import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let posX = 0;
    let posY = 0;

    const moveMouse = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", moveMouse);

    const animate = () => {
      posX += (mouseX - posX) * 0.1;
      posY += (mouseY - posY) * 0.1;

      cursorRef.current.style.left = posX + "px";
      cursorRef.current.style.top = posY + "px";

      requestAnimationFrame(animate);
    };

    animate();

    return () => document.removeEventListener("mousemove", moveMouse);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-5 h-5 bg-blue-600 rounded-full rotate-45 pointer-events-none z-9999 mix-blend-difference"
    ></div>
  );
}
