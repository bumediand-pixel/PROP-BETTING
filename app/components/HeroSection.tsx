"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const PROPS = [
  { player: "Patrick Mahomes", stat: "Passing Yards", line: "287.5", over: "-115", under: "-105", live: true },
  { player: "Jaylen Brown", stat: "Points", line: "24.5", over: "+105", under: "-125", live: true },
  { player: "Connor McDavid", stat: "Shots on Goal", line: "3.5", over: "-130", under: "+110", live: false },
  { player: "Shohei Ohtani", stat: "Strikeouts", line: "7.5", over: "+120", under: "-140", live: true },
];

function FloatingPropCard({
  prop,
  index,
}: {
  prop: (typeof PROPS)[0];
  index: number;
}) {
  const positions: { top: string; left?: string; right?: string }[] = [
    { top: "18%", left: "4%" },
    { top: "12%", right: "5%" },
    { top: "58%", left: "2%" },
    { top: "55%", right: "3%" },
  ];
  const rotations = [-4, 3, 2, -3];
  const pos = positions[index];

  return (
    <motion.div
      className="absolute hidden lg:block"
      style={pos}
      initial={{ opacity: 0, y: 30, rotate: rotations[index] }}
      animate={{ opacity: 1, y: 0, rotate: rotations[index] }}
      transition={{ delay: 0.8 + index * 0.15, duration: 0.7, ease: "easeOut" }}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 3 + index * 0.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.4,
        }}
        className="w-56 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 shadow-2xl"
      >
        {prop.live && (
          <div className="flex items-center gap-1.5 mb-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-red-400 text-xs font-semibold uppercase tracking-wider">Live</span>
          </div>
        )}
        <p className="text-white font-bold text-sm leading-tight">{prop.player}</p>
        <p className="text-gray-400 text-xs mt-0.5 mb-3">{prop.stat}</p>
        <div className="flex items-center justify-between">
          <div className="text-center">
            <p className="text-gray-500 text-xs mb-0.5">Over</p>
            <p className="text-white font-mono text-sm font-bold">{prop.line}</p>
            <p className="text-emerald-400 text-xs font-semibold">{prop.over}</p>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="text-center">
            <p className="text-gray-500 text-xs mb-0.5">Under</p>
            <p className="text-white font-mono text-sm font-bold">{prop.line}</p>
            <p className="text-blue-400 text-xs font-semibold">{prop.under}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const springProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const titleY = useTransform(springProgress, [0, 1], ["0%", "40%"]);
  const titleOpacity = useTransform(springProgress, [0, 0.5], [1, 0]);
  const subtitleY = useTransform(springProgress, [0, 1], ["0%", "60%"]);
  const subtitleOpacity = useTransform(springProgress, [0, 0.4], [1, 0]);
  const bgScale = useTransform(springProgress, [0, 1], [1, 1.15]);
  const glowOpacity = useTransform(springProgress, [0, 0.5, 1], [0.6, 0.9, 0.3]);

  const words = ["Bet", "Like", "You", "Know."];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <motion.div
        style={{ scale: bgScale }}
        className="absolute inset-0 bg-[#050508]"
      >
        <motion.div
          style={{ opacity: glowOpacity }}
          className="absolute inset-0"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-blue-600/20 rounded-full blur-[140px]" />
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-violet-600/15 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-[100px]" />
        </motion.div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </motion.div>

      {/* Floating prop cards */}
      {PROPS.map((prop, i) => (
        <FloatingPropCard key={prop.player} prop={prop} index={i} />
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-blue-300 text-sm font-medium">1,247 live props right now</span>
        </motion.div>

        <motion.h1
          style={{ y: titleY, opacity: titleOpacity }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-none mb-6"
        >
          {words.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={`inline-block mr-[0.2em] ${word === "Know." ? "text-blue-400" : ""}`}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          style={{ y: subtitleY, opacity: subtitleOpacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Prop bets with real-time odds, sharp lines, and payouts in minutes.
          The edge serious bettors have been waiting for.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#"
            className="group relative px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white font-bold text-base rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25"
          >
            <span className="relative z-10">Start Betting Free</span>
          </a>
          <a
            href="#live-props"
            className="px-8 py-4 border border-white/15 hover:border-white/30 text-gray-300 hover:text-white font-semibold text-base rounded-full transition-all duration-200"
          >
            View Live Props →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 flex items-center justify-center gap-8 text-center"
        >
          {[
            { value: "$2.4M", label: "Paid Out Today" },
            { value: "38K+", label: "Active Bettors" },
            { value: "99.1%", label: "Uptime" },
          ].map((stat) => (
            <div key={stat.label} className="px-6 py-3 rounded-xl border border-white/5 bg-white/3">
              <p className="text-white font-black text-2xl">{stat.value}</p>
              <p className="text-gray-500 text-xs mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{ opacity: subtitleOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gray-600 text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-0.5 h-8 bg-gradient-to-b from-gray-600 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}
