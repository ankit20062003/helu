"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FULL_TEXT = "Khushi...";

const heartEmojis = ["💕", "💗", "💖", "🩷", "💝", "🤍"];

interface HeartItem {
  id: number;
  heart: string;
  left: string;
  size: number;
  duration: number;
  delay: number;
}

function FloatingHearts() {
  const [items, setItems] = useState<HeartItem[]>([]);

  useEffect(() => {
    setItems(
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        heart: heartEmojis[i % heartEmojis.length],
        left: `${Math.random() * 100}%`,
        size: 14 + Math.random() * 20,
        duration: 8 + Math.random() * 12,
        delay: Math.random() * 10,
      }))
    );
  }, []);

  return (
    <>
      {items.map((h) => (
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
          {h.heart}
        </span>
      ))}
    </>
  );
}

export default function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [doneTyping, setDoneTyping] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(FULL_TEXT.slice(0, i));
      if (i >= FULL_TEXT.length) {
        clearInterval(interval);
        setTimeout(() => setDoneTyping(true), 600);
      }
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-pink-50 to-background px-6">
      <FloatingHearts />

      {/* Main title */}
      <motion.h1
        className="font-[family-name:var(--font-playfair)] text-5xl sm:text-7xl md:text-8xl font-bold text-pink-500 z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className={doneTyping ? "" : "typing-cursor"}>{displayed}</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="mt-6 text-lg sm:text-xl text-foreground/70 z-10 text-center max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={doneTyping ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        I made this little corner of the internet for you.
        <br />
        Scroll down to relive our journey, hehe
      </motion.p>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={doneTyping ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <span className="text-sm text-foreground/50">Scroll down</span>
        <span className="bounce-arrow text-2xl text-pink-400">↓</span>
      </motion.div>
    </section>
  );
}
