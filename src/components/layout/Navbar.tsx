"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/personal-os", label: "Personal OS" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/80 backdrop-blur-lg shadow-sm border-b border-navy-100"
            : "bg-transparent"
        )}
      >
        <nav className="section-container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <motion.span
                className="text-xl md:text-2xl font-bold text-navy-900"
                whileHover={{ scale: 1.02 }}
              >
                Taiki Horaguchi
                <span className="text-fresh-500">.</span>
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className="relative text-navy-700 hover:text-navy-900 font-medium transition-colors duration-300 group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fresh-500 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-navy-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-navy-900" />
              ) : (
                <Menu className="w-6 h-6 text-navy-900" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-40 bg-navy-900/50 backdrop-blur-sm md:hidden"
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          x: isMobileMenuOpen ? 0 : "100%",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed top-0 right-0 bottom-0 z-50 w-64 bg-white shadow-xl md:hidden"
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-navy-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-navy-900" />
            </button>
          </div>

          <nav className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : 20,
                }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-lg font-medium text-navy-900 hover:text-fresh-600 transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>
      </motion.div>
    </>
  );
}
