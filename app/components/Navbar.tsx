"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 80], ["rgba(5,5,8,0)", "rgba(5,5,8,0.95)"]);
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 0.15]);

  return (
    <motion.nav
      style={{ backgroundColor: bg }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <motion.div
        style={{ borderBottomColor: `rgba(255,255,255,${borderOpacity})` }}
        className="max-w-7xl mx-auto flex items-center justify-between border-b border-transparent pb-4"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">P</span>
          </div>
          <span className="text-white font-bold text-xl tracking-tight">PropEdge</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["Sports", "Live Bets", "Leaderboard", "Odds"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-400 hover:text-white text-sm font-medium transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="text-gray-300 hover:text-white text-sm font-medium transition-colors px-4 py-2"
          >
            Sign In
          </a>
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
          >
            Get Started
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
}
