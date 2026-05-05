"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[400px] h-[300px] bg-violet-600/10 rounded-full blur-[100px]" />
      </div>

      <div ref={ref} className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-8">
            <span className="text-blue-300 text-sm font-medium">🎉 No deposit required to start</span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-none mb-6">
            Your First Prop
            <br />
            <span className="text-blue-400">Is On Us.</span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Create an account, make your first bet, and if you lose — we refund it up to $50.
            No strings, no wagering requirements.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="px-10 py-5 bg-blue-500 hover:bg-blue-400 text-white font-black text-lg rounded-full transition-colors shadow-2xl shadow-blue-500/30"
            >
              Claim Your Free Bet
            </a>
            <a
              href="#"
              className="px-10 py-5 border border-white/12 hover:border-white/25 text-gray-300 hover:text-white font-semibold text-lg rounded-full transition-all"
            >
              See All Props →
            </a>
          </div>

          <p className="mt-8 text-gray-600 text-sm">
            18+ only. Terms apply. Gambling can be addictive — play responsibly.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
