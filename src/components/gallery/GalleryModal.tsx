"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { GalleryItem } from "@/types";

type GalleryModalProps = {
  item: GalleryItem | null;
  onClose: () => void;
};

export function GalleryModal({ item, onClose }: GalleryModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (item) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-night/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute -top-10 right-0 text-lavender/60 hover:text-white transition-colors"
              aria-label="閉じる"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image area */}
            <div
              className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center`}
            >
              <div className="text-center">
                <span className="text-star-gold/40 text-5xl">&#10022;</span>
                <p className="text-lavender/40 text-xs mt-2">PHOTO</p>
              </div>
            </div>

            {/* Caption */}
            <div className="mt-4 text-center">
              <p className="text-white text-sm">{item.caption}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
