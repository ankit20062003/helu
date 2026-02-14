"use client";

import { useState, useCallback } from "react";

const ESCAPE_MESSAGES = [
  "Nice try! 😏",
  "Nope, not happening!",
  "You really thought? 😂",
  "I'm too fast for you!",
  "Just say Yes already! 💕",
];

interface RunawayButtonProps {
  onGiveUp: () => void;
}

export default function RunawayButton({ onGiveUp }: RunawayButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [escapeCount, setEscapeCount] = useState(0);
  const [message, setMessage] = useState("");

  const runAway = useCallback(() => {
    const newCount = escapeCount + 1;
    setEscapeCount(newCount);

    // After 5 escapes, turn into a Yes button
    if (newCount >= 5) {
      onGiveUp();
      return;
    }

    // Random position within viewport bounds
    const maxX = window.innerWidth - 120;
    const maxY = window.innerHeight - 60;
    const newX = Math.random() * maxX - maxX / 2;
    const newY = Math.random() * maxY - maxY / 2;

    setPosition({ x: newX, y: newY });
    setMessage(ESCAPE_MESSAGES[newCount - 1] || ESCAPE_MESSAGES[ESCAPE_MESSAGES.length - 1]);
  }, [escapeCount, onGiveUp]);

  const scale = Math.max(0.4, 1 - escapeCount * 0.12);

  return (
    <div className="relative">
      {/* Escape message */}
      {message && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm text-pink-400 font-medium animate-bounce">
          {message}
        </div>
      )}

      <button
        onMouseEnter={runAway}
        onClick={runAway}
        className="px-6 py-3 rounded-full bg-gray-200 text-gray-500 text-sm font-medium transition-all duration-200 hover:bg-gray-300"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
          transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
          position: "relative",
          zIndex: 50,
        }}
      >
        No 😢
      </button>
    </div>
  );
}
