"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

interface HeartItem {
  id: number;
  left: string;
  delay: number;
  duration: number;
  size: number;
}

export default function Celebration() {
  useEffect(() => {
    // Initial big burst
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors: ["#E91E63", "#EC407A", "#F48FB1", "#FF8A65", "#FCE4EC", "#FFD700"],
    });

    // Follow-up bursts
    const timer1 = setTimeout(() => {
      confetti({
        particleCount: 80,
        angle: 60,
        spread: 60,
        origin: { x: 0, y: 0.7 },
        colors: ["#E91E63", "#FF8A65", "#FFD700"],
      });
    }, 500);

    const timer2 = setTimeout(() => {
      confetti({
        particleCount: 80,
        angle: 120,
        spread: 60,
        origin: { x: 1, y: 0.7 },
        colors: ["#EC407A", "#F48FB1", "#FFD700"],
      });
    }, 1000);

    // Continuous gentle confetti
    const interval = setInterval(() => {
      confetti({
        particleCount: 20,
        spread: 80,
        origin: { x: Math.random(), y: 0.3 },
        colors: ["#E91E63", "#EC407A", "#F48FB1", "#FFD700"],
        gravity: 0.6,
      });
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearInterval(interval);
    };
  }, []);

  const [hearts, setHearts] = useState<HeartItem[]>([]);

  useEffect(() => {
    setHearts(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 3,
        duration: 3 + Math.random() * 4,
        size: 16 + Math.random() * 24,
      }))
    );
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-pink-50/95 to-pink-100/95 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Floating celebration hearts */}
      {hearts.map((h) => (
        <span
          key={h.id}
          className="floating-heart"
          style={{
            left: h.left,
            bottom: "-40px",
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
          }}
        >
          💕
        </span>
      ))}

      {/* Main message */}
      <motion.div
        className="text-center z-10 px-6"
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
      >
        <div className="text-6xl sm:text-8xl mb-6">💕</div>
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-6xl md:text-7xl font-bold text-pink-500 mb-4">
          She Said Yes!
        </h2>
        <motion.p
          className="text-lg sm:text-xl text-foreground/70 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          This is just the beginning of forever, Khushi.
          <br />
          I love you more than words on a screen could ever say. 💝
        </motion.p>
      </motion.div>

      {/* Subtle bottom text */}
      <motion.p
        className="absolute bottom-8 text-sm text-pink-300 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        Made with all my love, just for you ♥
      </motion.p>
    </motion.div>
  );
}
