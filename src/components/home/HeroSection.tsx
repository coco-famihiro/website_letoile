"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { StarField } from "@/components/ui/StarField";
import { siteConfig } from "@/data/siteConfig";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-sky overflow-hidden">
      <StarField count={80} />

      {/* Soft glow behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lilac/10 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-lavender/60 text-xs tracking-[0.3em] mb-4">
            CONCEPT CAFE &amp; DINING
          </p>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-3 tracking-wider">
            星空食堂
          </h1>
          <p className="font-serif text-lg md:text-2xl text-star-gold tracking-[0.2em] mb-8">
            L&apos;Étoile
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lavender text-sm md:text-base tracking-widest mb-12 leading-relaxed"
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/menu"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-star-gold text-night text-sm font-medium hover:bg-star-pale hover:shadow-[0_0_20px_rgba(255,211,117,0.3)] transition-all duration-300"
          >
            メニューを見る
          </Link>
          <Link
            href="/access"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white/10 text-lavender border border-lavender/30 text-sm font-medium hover:bg-white/20 hover:text-white transition-all duration-300"
          >
            アクセス
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-lavender/40 text-[10px] tracking-widest">SCROLL</span>
          <svg
            className="w-4 h-4 text-lavender/40"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
