"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import RunawayButton from "./RunawayButton";
import Celebration from "./Celebration";
import { useScreenCapture } from "./ScreenCaptureContext";

const PROPOSAL_TEXT =
  "Khushi, from the moment you came into my life, everything changed for the better. Your smile lights up my darkest days, your laugh is my favorite sound, and your love makes me want to be the best version of myself. Every moment with you feels like a gift I never want to stop unwrapping.";

export default function Proposal() {
  const [typedText, setTypedText] = useState("");
  const [doneTyping, setDoneTyping] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasStartedTyping, setHasStartedTyping] = useState(false);
  const { capturedImage } = useScreenCapture();

  useEffect(() => {
    if (!isInView || hasStartedTyping) return;
    setHasStartedTyping(true);

    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTypedText(PROPOSAL_TEXT.slice(0, i));
      if (i >= PROPOSAL_TEXT.length) {
        clearInterval(interval);
        setTimeout(() => setDoneTyping(true), 800);
        setTimeout(() => setShowButtons(true), 1600);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [isInView, hasStartedTyping]);

  const handleYes = useCallback(() => {
    setShowCelebration(true);
  }, []);

  const handleNoGiveUp = useCallback(() => {
    setShowCelebration(true);
  }, []);

  return (
    <>
      {showCelebration && <Celebration />}

      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-background to-pink-50">
        {/* "And the next chapter..." intro */}
        <motion.p
          className="text-lg sm:text-xl text-pink-400 mb-8 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onViewportEnter={() => setIsInView(true)}
        >
          And the next chapter starts now...
        </motion.p>

        {/* Captured screenshot from timeline */}
        {capturedImage && (
          <motion.div
            className="max-w-2xl w-full mb-8"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-pink-200/40 border-2 border-pink-200">
              <img
                src={capturedImage}
                alt="Us, right now"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                <p className="text-white text-sm font-medium text-center">
                  Us, right now. 💕
                </p>
              </div>
            </div>
          </motion.div>
        )}


        {/* The big question */}
        <motion.h2
          className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-pink-500 mt-12 mb-10 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={doneTyping ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, type: "spring" }}
        >
          Will you be my forever? 💕
        </motion.h2>

        {/* Buttons */}
        {showButtons && (
          <motion.div
            className="flex items-center gap-8 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={handleYes}
              className="glow-button px-10 py-4 rounded-full bg-pink-500 text-white text-lg font-bold hover:bg-pink-600 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Yes! 💕
            </button>

            <RunawayButton onGiveUp={handleNoGiveUp} />
          </motion.div>
        )}
      </section>
    </>
  );
}
