import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [trailPositions, setTrailPositions] = useState<{ x: number; y: number }[]>([]);
  const trailCount = 10;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    setTrailPositions((prev) => {
      const newPositions = [position, ...prev.slice(0, trailCount - 1)];
      return newPositions;
    });
  }, [position]);

  useEffect(() => {
    const handleInteractiveElements = () => {
      const interactiveElements = document.querySelectorAll(
        "a, button, input, textarea, [role='button']"
      );

      const handleMouseEnter = () => setCursorVariant("hover");
      const handleMouseLeave = () => setCursorVariant("default");

      interactiveElements.forEach((element) => {
        element.addEventListener("mouseenter", handleMouseEnter);
        element.addEventListener("mouseleave", handleMouseLeave);
      });

      return () => {
        interactiveElements.forEach((element) => {
          element.removeEventListener("mouseenter", handleMouseEnter);
          element.removeEventListener("mouseleave", handleMouseLeave);
        });
      };
    };

    const cleanup = handleInteractiveElements();
    return cleanup;
  }, []);

  const variants = {
    default: {
      width: 20,
      height: 20,
      backgroundColor: "rgba(138, 43, 226, 0.7)",
      mixBlendMode: "difference" as const,
    },
    hover: {
      width: 30,
      height: 30,
      backgroundColor: "rgba(0, 255, 255, 0.7)",
      mixBlendMode: "difference" as const,
    },
  };

  // Use media query to hide custom cursor on small screens
  const isMobile = typeof window !== 'undefined' && window.matchMedia("(max-width: 768px)").matches;
  if (isMobile) return null;

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-50 rounded-full"
        animate={cursorVariant}
        variants={variants}
        style={{
          left: position.x,
          top: position.y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      {trailPositions.map((pos, i) => (
        <motion.div
          key={i}
          className="fixed pointer-events-none z-40 rounded-full"
          style={{
            left: pos.x,
            top: pos.y,
            translateX: "-50%",
            translateY: "-50%",
            width: 6 - i * 0.5,
            height: 6 - i * 0.5,
            opacity: 1 - i / trailCount,
            backgroundColor: "rgba(0, 255, 255, 0.5)",
          }}
          transition={{ duration: 0.05 }}
        />
      ))}
      <style dangerouslySetInnerHTML={{
        __html: `
        body {
          cursor: none;
        }
        @media (max-width: 768px) {
          body {
            cursor: auto;
          }
        }
        `
      }} />
    </>
  );
};

export default CustomCursor;
