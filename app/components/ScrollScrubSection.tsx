"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const FRAMES = [
  {
    label: "01 — Browse",
    heading: "Every Prop.\nEvery Sport.",
    body: "From NFL passing yards to NBA three-pointers, UFC strikes to MLB home runs — if it can be bet, we have it live.",
    accent: "#3b82f6",
    icon: "🏟️",
  },
  {
    label: "02 — Analyze",
    heading: "Sharp Lines.\nReal Edge.",
    body: "Our odds engine sources from 20+ sharp books in real time. See line movement, public money percentages, and where the sharp money lands.",
    accent: "#f59e0b",
    icon: "📊",
  },
  {
    label: "03 — Bet",
    heading: "Place Your\nProp Instantly.",
    body: "One tap to lock in your prop. Parlay up to 12 legs. Instant confirmation, no waiting, no delays.",
    accent: "#10b981",
    icon: "⚡",
  },
  {
    label: "04 — Win",
    heading: "Cash Out\nIn Minutes.",
    body: "Winning props pay out automatically. No forms, no waiting periods. Your money hits your account faster than any other platform.",
    accent: "#8b5cf6",
    icon: "💸",
  },
];

export default function ScrollScrubSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  const frame0Opacity = useTransform(smoothProgress, [0, 0.18, 0.25], [1, 1, 0]);
  const frame1Opacity = useTransform(smoothProgress, [0.2, 0.38, 0.45, 0.5], [0, 1, 1, 0]);
  const frame2Opacity = useTransform(smoothProgress, [0.45, 0.58, 0.65, 0.72], [0, 1, 1, 0]);
  const frame3Opacity = useTransform(smoothProgress, [0.7, 0.82, 1], [0, 1, 1]);

  const frameOpacities = [frame0Opacity, frame1Opacity, frame2Opacity, frame3Opacity];

  const progressWidth = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  const bgColor0 = useTransform(smoothProgress, [0, 0.25], ["#050508", "#050508"]);

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: "500vh" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/5 z-20">
          <motion.div
            style={{ width: progressWidth }}
            className="h-full bg-blue-500"
          />
        </div>

        {/* Background layers */}
        <div className="absolute inset-0">
          {FRAMES.map((frame, i) => (
            <motion.div
              key={i}
              style={{ opacity: frameOpacities[i] }}
              className="absolute inset-0"
            >
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background: `radial-gradient(ellipse 70% 60% at 50% 50%, ${frame.accent}33, transparent 70%)`,
                }}
              />
            </motion.div>
          ))}

          {/* Persistent grid */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* Step indicators */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-3">
          {FRAMES.map((frame, i) => (
            <motion.div
              key={i}
              style={{ opacity: frameOpacities[i] }}
              className="flex items-center gap-2"
            >
              <span
                className="text-xs font-mono"
                style={{ color: frame.accent }}
              >
                {frame.label.split("—")[0].trim()}
              </span>
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: frame.accent }}
              />
            </motion.div>
          ))}
        </div>

        {/* Frame content */}
        <div className="relative z-10 flex-1 flex items-center justify-center px-6">
          <div className="max-w-5xl w-full mx-auto">
            {FRAMES.map((frame, i) => (
              <motion.div
                key={i}
                style={{ opacity: frameOpacities[i] }}
                className="absolute inset-0 flex items-center justify-center px-6"
              >
                <div className="max-w-4xl w-full mx-auto grid lg:grid-cols-2 gap-16 items-center">
                  {/* Text */}
                  <div>
                    <div
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 border"
                      style={{
                        color: frame.accent,
                        borderColor: `${frame.accent}40`,
                        backgroundColor: `${frame.accent}15`,
                      }}
                    >
                      {frame.label}
                    </div>
                    <h2 className="text-5xl sm:text-6xl font-black text-white leading-none tracking-tight mb-6 whitespace-pre-line">
                      {frame.heading}
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                      {frame.body}
                    </p>
                  </div>

                  {/* Visual */}
                  <div className="flex items-center justify-center">
                    <div
                      className="w-64 h-64 rounded-3xl flex items-center justify-center text-8xl border"
                      style={{
                        backgroundColor: `${frame.accent}12`,
                        borderColor: `${frame.accent}25`,
                        boxShadow: `0 0 80px ${frame.accent}20`,
                      }}
                    >
                      {frame.icon}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom hint */}
        <motion.div
          style={{ opacity: useTransform(smoothProgress, [0.85, 1], [1, 0]) }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-600 text-xs uppercase tracking-widest"
        >
          Keep scrolling
        </motion.div>
      </div>
    </section>
  );
}
