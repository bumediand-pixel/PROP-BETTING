"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const LIVE_PROPS = [
  {
    sport: "NFL",
    sportColor: "#3b82f6",
    game: "KC vs LAR",
    player: "Patrick Mahomes",
    stat: "Passing Yards",
    line: "287.5",
    over: "-115",
    under: "-105",
    trend: "+2.5",
    trendUp: true,
    volume: "High",
  },
  {
    sport: "NBA",
    sportColor: "#f59e0b",
    game: "BOS vs MIA",
    player: "Jaylen Brown",
    stat: "Points",
    line: "24.5",
    over: "+105",
    under: "-125",
    trend: "-1.0",
    trendUp: false,
    volume: "Very High",
  },
  {
    sport: "MLB",
    sportColor: "#10b981",
    game: "LAD vs NYM",
    player: "Shohei Ohtani",
    stat: "Strikeouts",
    line: "7.5",
    over: "+120",
    under: "-140",
    trend: "+0.5",
    trendUp: true,
    volume: "Medium",
  },
  {
    sport: "NHL",
    sportColor: "#8b5cf6",
    game: "EDM vs VGK",
    player: "Connor McDavid",
    stat: "Shots on Goal",
    line: "3.5",
    over: "-130",
    under: "+110",
    trend: "0.0",
    trendUp: true,
    volume: "Medium",
  },
  {
    sport: "UFC",
    sportColor: "#ef4444",
    game: "Main Event",
    player: "Jon Jones",
    stat: "Total Rounds",
    line: "2.5",
    over: "-110",
    under: "-110",
    trend: "+0.5",
    trendUp: true,
    volume: "High",
  },
  {
    sport: "NFL",
    sportColor: "#3b82f6",
    game: "SF vs DAL",
    player: "Christian McCaffrey",
    stat: "Rush Yards",
    line: "82.5",
    over: "-120",
    under: "+100",
    trend: "-5.0",
    trendUp: false,
    volume: "High",
  },
];

function PropCard({ prop, index }: { prop: (typeof LIVE_PROPS)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-2xl border border-white/8 bg-white/3 hover:bg-white/6 hover:border-white/15 transition-all duration-300 p-5 cursor-pointer"
    >
      {/* Sport badge */}
      <div className="flex items-center justify-between mb-4">
        <div
          className="px-2.5 py-1 rounded-full text-xs font-bold"
          style={{
            backgroundColor: `${prop.sportColor}20`,
            color: prop.sportColor,
          }}
        >
          {prop.sport}
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span className="text-red-400 text-xs font-medium">Live</span>
        </div>
      </div>

      <p className="text-gray-500 text-xs mb-1">{prop.game}</p>
      <p className="text-white font-bold text-base leading-tight mb-0.5">{prop.player}</p>
      <p className="text-gray-400 text-sm mb-4">{prop.stat}</p>

      {/* Odds */}
      <div className="flex items-stretch gap-2">
        <button className="flex-1 rounded-xl border border-white/8 hover:border-emerald-500/40 hover:bg-emerald-500/10 p-3 text-center transition-all duration-200 group/btn">
          <p className="text-gray-500 text-xs mb-1">Over</p>
          <p className="text-white font-mono font-bold text-base">{prop.line}</p>
          <p className="text-emerald-400 text-sm font-bold mt-0.5">{prop.over}</p>
        </button>
        <button className="flex-1 rounded-xl border border-white/8 hover:border-blue-500/40 hover:bg-blue-500/10 p-3 text-center transition-all duration-200 group/btn">
          <p className="text-gray-500 text-xs mb-1">Under</p>
          <p className="text-white font-mono font-bold text-base">{prop.line}</p>
          <p className="text-blue-400 text-sm font-bold mt-0.5">{prop.under}</p>
        </button>
      </div>

      {/* Line movement */}
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span className={`text-xs font-mono ${prop.trendUp ? "text-emerald-400" : "text-red-400"}`}>
            {prop.trendUp ? "↑" : "↓"} {prop.trend}
          </span>
          <span className="text-gray-600 text-xs">line move</span>
        </div>
        <span
          className="text-xs px-2 py-0.5 rounded-full"
          style={{
            backgroundColor: `${prop.sportColor}15`,
            color: prop.sportColor,
          }}
        >
          {prop.volume} Volume
        </span>
      </div>
    </motion.div>
  );
}

export default function LivePropsSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section id="live-props" className="relative py-24 px-6">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/8 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/25 bg-red-500/10 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-red-300 text-sm font-medium">Live Right Now</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Today&apos;s Hottest Props
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Lines updating in real time. Sharp money tracked. Tap any prop to add it to your slip.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {LIVE_PROPS.map((prop, i) => (
            <PropCard key={`${prop.player}-${prop.stat}`} prop={prop} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/12 hover:border-white/25 text-gray-300 hover:text-white text-sm font-semibold transition-all duration-200"
          >
            Browse All 1,247 Props
            <span className="text-blue-400">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
