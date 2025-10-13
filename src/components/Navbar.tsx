"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Pricing", href: "/pricing" },
    { name: "Resources", href: "/resources" },
    { name: "Documentation", href: "/documentation" },
  ];

  const menuVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const menuItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <>
      {/* Main Static Navbar (Desktop) */}
      <nav
        className={`hidden md:block w-full border-b border-gray-200/60 dark:border-white/10 transition-opacity duration-300 ${
          isScrolled ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/logo.png"
                  alt="buildpcbs logo"
                  width={24}
                  height={20}
                />
                <span className="font-medium text-[17px] leading-none tracking-[-0.04em] text-gray-800 dark:text-white">
                  buildpcbs
                </span>
              </Link>
            </div>
            <div className="flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-black dark:text-white hover:text-[color:var(--primary-brand)] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div>
              <a
                href=""
                className="flex items-center justify-center w-[138px] h-[42px] rounded-3xl bg-[color:var(--primary-brand)] text-sm font-medium text-white hover:opacity-90"
              >
                Start Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Scrolled Navbar (Desktop) */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 w-[349px] h-[72px] bg-white rounded-full p-[4px] border border-gray-200/80 z-50 items-center justify-center shadow-subtle"
          >
            <div className="w-full h-full rounded-full border border-dashed border-gray-300 flex items-center justify-between px-4">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/logo.png"
                  alt="buildpcbs logo"
                  width={24}
                  height={20}
                />
                <span className="font-medium text-[17px] leading-none tracking-[-0.04em] text-gray-800">
                  buildpcbs
                </span>
              </Link>
              <a
                href=""
                className="flex items-center justify-center w-auto px-4 h-[42px] rounded-3xl bg-[color:var(--primary-brand)] text-sm font-medium text-white hover:opacity-90"
              >
                Start Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-8 left-1/2 -translate-x-1/2 w-[347px] z-50">
        <div className="flex items-center justify-between h-[62px] rounded-full px-4 bg-white/80 backdrop-blur-sm border border-[#DDDDDD] dark:bg-[#151515] dark:border-[#2A2A2A]">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="buildpcbs logo"
              width={24}
              height={20}
            />
            <span className="font-medium text-[17px] leading-none tracking-[-0.04em] text-[#444444] dark:text-white">
              buildpcbs
            </span>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <div className="flex flex-col items-center justify-center gap-1.5">
              <span className="block w-6 h-[5px] rounded-t-[2px] bg-[color:var(--primary-brand)] dark:bg-white"></span>
              <span className="block w-6 h-[5px] rounded-b-[2px] bg-[color:var(--primary-brand)] dark:bg-white"></span>
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-sm"
          >
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col items-center justify-center h-full gap-8"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  variants={menuItemVariants}
                  className="text-2xl font-medium text-gray-800 dark:text-gray-200 hover:text-[color:var(--primary-brand)] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href=""
                variants={menuItemVariants}
                className="flex items-center justify-center w-[180px] h-[50px] rounded-full bg-[color:var(--primary-brand)] text-lg font-medium text-white hover:opacity-90"
              >
                Start Now
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
