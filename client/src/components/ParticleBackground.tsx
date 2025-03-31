import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particleCount = 80;

  const createParticles = () => {
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 3 + 1;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const duration = Math.random() * 15 + 15;
      const delay = Math.random() * 5;
      const moveX = Math.random() * 100 - 50;
      const moveY = Math.random() * 100 - 50;
      const color = i % 3 === 0 ? "rgba(138, 43, 226, 0.7)" : "rgba(0, 255, 255, 0.5)";

      particles.push(
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: size,
            height: size,
            backgroundColor: color,
            top: `${y}%`,
            left: `${x}%`,
          }}
          animate={{
            x: [0, moveX, 0],
            y: [0, moveY, 0],
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      );
    }
    return particles;
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full z-[-1] overflow-hidden"
    >
      {createParticles()}
    </div>
  );
};

export default ParticleBackground;
