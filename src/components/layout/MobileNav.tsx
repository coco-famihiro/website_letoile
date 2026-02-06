"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/siteConfig";

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-night/60 backdrop-blur-sm md:hidden"
          />

          {/* Menu */}
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-72 gradient-sky md:hidden"
          >
            <div className="flex flex-col pt-20 px-6 gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={cn(
                      "block px-4 py-3 rounded-xl text-base transition-all",
                      pathname === link.href
                        ? "bg-star-gold/20 text-star-gold"
                        : "text-lavender hover:text-white hover:bg-white/10"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Decorative stars */}
            <div className="absolute bottom-10 left-6 right-6 text-center">
              <p className="text-lavender/40 text-xs font-serif tracking-widest">
                L&apos;Étoile
              </p>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
