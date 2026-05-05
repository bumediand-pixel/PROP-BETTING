"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FEATURES = [
  {
    icon: "⚡",
    title: "Real-Time Odds",
    description: "Lines sourced from 20+ books, updated every 500ms. You see the same lines the sharpest bettors see.",
    accent: "#3b82f6",
  },
  {
    icon: "📈",
    title: "Line Movement Tracker",
    description: "Watch lines shift in real time. See where public money vs. sharp money is going before you bet.",
    accent: "#f59e0b",
  },
  {
    icon: "🎯",
    title: "Prop Builder",
    description: "Stack up to 12 props into a custom parlay. Our correlation engine flags risky combos automatically.",
    accent: "#10b981",
  },
  {
    icon: "🔔",
    title: "Line Alert System",
    description: "Set alerts for any prop. Get notified the moment a line hits your target number.",
    accent: "#8b5cf6",
  },
  {
    icon: "🏆",
    title: "Leaderboard & Contests",
    description: "Compete in daily and weekly prop challenges. Top performers win bonus bankroll every week.",
    accent: "#ef4444",
  },
  {
    icon: "💳",
    title: "Instant Withdrawals",
    description: "Winnings hit your account within minutes, not days. No withdrawal minimums, no waiting periods.",
    accent: "#ec4899",
  },
];

function FeatureCard({ feature, index }: { feature: (typeof FEATURES)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="relative group rounded-2xl border border-white/8 bg-white/2 hover:bg-white/5 hover:border-white/15 p-7 transition-all duration-300"
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 border"
        style={{
          backgroundColor: `${feature.accent}15`,
          borderColor: `${feature.accent}25`,
        }}
      >
        {feature.icon}
      </div>

      <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>

      <div
        className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${feature.accent}60, transparent)` }}
      />
    </motion.div>
  );
}

export default function FeaturesSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Why PropEdge</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Built for Bettors
            <br />
            <span className="text-gray-500">Who Take It Seriously</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
