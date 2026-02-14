"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import type { Moment } from "@/data/moments";
import ScreenCapture from "./ScreenCapture";

interface TimelineItemProps {
  moment: Moment;
  index: number;
}

function EnvelopeReply({ onSave }: { onSave?: () => void }) {
  const [message, setMessage] = useState("");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    if (message.trim()) {
      setSaved(true);
      onSave?.();
    }
  };

  if (saved) {
    return (
      <div className="mt-4 p-4 rounded-xl bg-pink-50 border border-pink-200">
        <p className="text-xs text-pink-400 mb-1">Her reply:</p>
        <p className="font-[family-name:var(--font-playfair)] text-foreground/80 leading-relaxed text-sm sm:text-base italic">
          &ldquo;{message}&rdquo;
        </p>
        <button
          onClick={() => setSaved(false)}
          className="mt-2 text-xs text-pink-400 hover:text-pink-500 underline"
        >
          Edit
        </button>
      </div>
    );
  }

  return (
    <div className="mt-4">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your heart out..."
        className="w-full p-4 rounded-xl bg-pink-50/50 border border-pink-200 text-foreground/80 placeholder-pink-300 font-[family-name:var(--font-playfair)] text-sm sm:text-base leading-relaxed resize-none focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent min-h-[100px]"
        rows={3}
      />
      {message.trim() && (
        <button
          onClick={handleSave}
          className="mt-2 px-5 py-2 rounded-full bg-pink-400 text-white text-sm font-medium hover:bg-pink-500 transition-colors"
        >
          Save my reply 💕
        </button>
      )}
    </div>
  );
}

export default function TimelineItem({ moment, index }: TimelineItemProps) {
  const isLeft = index % 2 === 0;
  const cardRef = useRef<HTMLDivElement>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  // Normalize photos to always be an array
  const photos: string[] = moment.photo
    ? Array.isArray(moment.photo)
      ? moment.photo
      : [moment.photo]
    : [];
  const hasMultiple = photos.length > 1;

  // Auto-scroll every 5 seconds
  useEffect(() => {
    if (!hasMultiple || paused || lightboxOpen) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % photos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [hasMultiple, paused, lightboxOpen, photos.length]);

  const goToSlide = useCallback((i: number) => {
    setCurrentSlide(i);
    setPaused(true);
    // Resume auto-scroll after 10s of inactivity
    setTimeout(() => setPaused(false), 10000);
  }, []);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const emojiY = useTransform(scrollYProgress, [0, 1], ["10px", "-10px"]);
  const emojiRotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);
  const cardY = useTransform(scrollYProgress, [0, 1], ["20px", "-20px"]);

  const isEnvelopeCard = moment.camera;
  const [sheSaidYes, setSheSaidYes] = useState(false);

  return (
    <>
      {/* Photo lightbox */}
      <AnimatePresence>
        {lightboxOpen && photos.length > 0 && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 cursor-pointer backdrop-blur-md bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setLightboxOpen(false)}
          >
            <motion.img
              key={photos[currentSlide]}
              src={photos[currentSlide]}
              alt={moment.title}
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25 }}
            />
            {/* Dots in lightbox */}
            {hasMultiple && (
              <div
                className="absolute bottom-8 flex gap-2"
                onClick={(e) => e.stopPropagation()}
              >
                {photos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToSlide(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i === currentSlide
                        ? "bg-white scale-110"
                        : "bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

    <div ref={cardRef} className="relative flex items-center w-full mb-12 md:mb-16">
      {/* Center dot */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <motion.div
          className="w-5 h-5 rounded-full bg-pink-400 border-4 border-pink-100 shadow-lg"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
        />
      </div>

      {/* Card */}
      <motion.div
        className={`
          w-full ${isEnvelopeCard ? "md:w-[calc(70%)]  md:mx-auto" : `md:w-[calc(55%-1rem)] ${isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}
        `}
        initial={{
          opacity: 0,
          x: isEnvelopeCard ? 0 : isLeft ? -60 : 60,
          y: isEnvelopeCard ? 40 : 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ y: isEnvelopeCard ? undefined : cardY }}
      >
        <div
          className={`group relative backdrop-blur-sm rounded-2xl shadow-md border transition-all duration-300 ${
            isEnvelopeCard
              ? "bg-white/90 p-8 sm:p-10 border-pink-200 shadow-lg shadow-pink-100/50"
              : "bg-white/80 p-6 border-pink-100 hover:shadow-xl hover:shadow-pink-200/30 hover:-translate-y-1"
          }`}
        >
          {/* Date badge */}
          <span className="inline-block px-3 py-1 rounded-full bg-pink-100 text-pink-600 text-xs font-semibold tracking-wide mb-3">
            {moment.date}
          </span>

          {/* Screen capture (for the last card — only after reply is saved) */}
          {moment.camera && sheSaidYes && (
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ScreenCapture />
            </motion.div>
          )}

          {/* Photo carousel / single photo */}
          {photos.length > 0 && !moment.camera && (
            <div
              className="relative w-full h-[24rem] sm:h-[30rem] rounded-xl overflow-hidden mb-4 cursor-pointer bg-pink-50"
              onClick={() => setLightboxOpen(true)}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  src={photos[currentSlide]}
                  alt={moment.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover rounded-xl"
                  initial={hasMultiple ? { opacity: 0 } : false}
                  animate={{ opacity: 1 }}
                  exit={hasMultiple ? { opacity: 0 } : undefined}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>

              {/* Dot indicators */}
              {hasMultiple && (
                <div
                  className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10"
                  onClick={(e) => e.stopPropagation()}
                >
                  {photos.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => {
                        e.stopPropagation();
                        goToSlide(i);
                      }}
                      className={`rounded-full transition-all duration-300 ${
                        i === currentSlide
                          ? "w-6 h-2 bg-white"
                          : "w-2 h-2 bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Emoji with subtle float (hide for envelope card since we have 💌) */}
          {!isEnvelopeCard && (
            <motion.div
              className="text-4xl mb-2 inline-block"
              style={{ y: emojiY, rotate: emojiRotate }}
            >
              {moment.emoji}
            </motion.div>
          )}

          {/* Title */}
          <h3
            className={`font-[family-name:var(--font-playfair)] font-bold text-pink-600 mb-2 ${
              isEnvelopeCard ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
            }`}
          >
            {moment.title}
          </h3>

          {/* Description */}
          {isEnvelopeCard ? (
            <>
              <p className="text-foreground/70 leading-relaxed text-sm sm:text-base">
                {moment.description}
              </p>
              <EnvelopeReply onSave={() => setSheSaidYes(true)} />
              {sheSaidYes && (
                <motion.div
                  className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-pink-100 to-pink-200 border border-pink-300 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <p className="text-3xl sm:text-4xl font-[family-name:var(--font-playfair)] font-bold text-pink-600">
                    Guys, she said yes! 💍
                  </p>
                </motion.div>
              )}
            </>
          ) : (
            <p className="text-foreground/70 leading-relaxed text-sm sm:text-base">
              {moment.description}
            </p>
          )}

          {/* Decorative corner */}
          <div className="absolute top-3 right-3 text-pink-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            ♥
          </div>
        </div>
      </motion.div>
    </div>
    </>
  );
}
