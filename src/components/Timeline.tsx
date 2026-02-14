"use client";

import { motion } from "framer-motion";
import { moments } from "@/data/moments";
import TimelineItem from "./TimelineItem";

export default function Timeline() {
  return (
    <section className="relative py-20 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Section heading */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-pink-500 mb-4">
          Wow
        </h2>
        <p className="text-foreground/60 max-w-md mx-auto">
          whatever we have is very precious and I want to keep this, for some time? A billion years?
        </p>
      </motion.div>

      {/* Timeline container */}
      <div className="relative">
        {/* Center vertical line - hidden on mobile */}
        <div className="hidden md:block absolute left-1/2 -translate-x-[1px] top-0 bottom-0 w-[3px] timeline-line" />

        {/* Timeline items */}
        {moments.map((moment, index) => (
          <TimelineItem key={index} moment={moment} index={index} />
        ))}

        {/* End dot */}
        <motion.div
          className="hidden md:flex absolute left-1/2 -translate-x-1/2 bottom-0 w-8 h-8 rounded-full bg-pink-400 border-4 border-pink-100 shadow-lg items-center justify-center"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <span className="text-white text-xs">💕</span>
        </motion.div>
      </div>
    </section>
  );
}
