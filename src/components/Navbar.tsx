"use client";

import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const navLinks = [
    { name: "Pricing", href: "/pricing" },
    { name: "Resources", href: "/resources" },
    { name: "Documentation", href: "/documentation" },
  ];

  return (
    <>
      {/* Main Static Navbar (Desktop) */}
      <nav className="hidden md:block w-full border-b border-gray-200/60 dark:border-white/10">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-2">
                <Image src="/logo.png" alt="buildpcbs logo" width={24} height={20} />
                <span className="font-medium text-[17px] leading-none tracking-[-0.04em] text-gray-800 dark:text-white">buildpcbs</span>
              </Link>
            </div>
            <div className="flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-sm font-medium text-black dark:text-white hover:text-[color:var(--primary-brand)] transition-colors">{link.name}</a>
              ))}
            </div>
            <div>
              <a href="" className="flex items-center justify-center w-[138px] h-[42px] rounded-3xl bg-[color:var(--primary-brand)] text-sm font-medium text-white hover:opacity-90">
                Start Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Scrolling Pill Navbar (Desktop) */}
      <motion.div
        initial={{ y: "-150%" }}
        animate={{ y: isScrolled ? 0 : "-150%" }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-50"
      >
        <div className="w-[349px] h-[72px] rounded-full border-[0.5px] border-[#DDDDDD] dark:border-[#262626] bg-white/80 dark:bg-[#151515]/80 backdrop-blur-sm flex items-center justify-center">
          <div className="w-[341px] h-[62px] rounded-full border border-dashed border-[#DDDDDD] dark:border-[#262626] flex items-center justify-between px-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="buildpcbs logo" width={24} height={20} />
              <span className="font-medium text-[17px] leading-none tracking-[-0.04em] text-gray-800 dark:text-white">buildpcbs</span>
            </Link>
            <a href="" className="flex items-center justify-center w-[157px] h-[50px] rounded-full text-white font-medium bg-[#0038DF] hover:opacity-90 transition-opacity">
              Start Now
            </a>
          </div>
        </div>
      </motion.div>

      {/* Mobile Navbar (Restored) */}
      <div className="md:hidden absolute top-8 left-1/2 -translate-x-1/2 w-[347px] z-20">
        <div className="flex items-center justify-between h-[62px] rounded-full px-4 bg-white/80 backdrop-blur-sm border border-[#DDDDDD] dark:bg-[#151515] dark:border-[#2A2A2A]">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="buildpcbs logo" width={24} height={20} />
            <span className="font-medium text-[17px] leading-none tracking-[-0.04em] text-[#444444] dark:text-white">buildpcbs</span>
          </Link>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="inline-flex items-center justify-center rounded-md p-2" aria-controls="mobile-menu" aria-expanded={isMobileMenuOpen}>
            <span className="sr-only">Open main menu</span>
            <div className="flex flex-col items-center justify-center gap-1.5">
              <span className="block w-6 h-[5px] rounded-t-[2px] bg-[color:var(--primary-brand)] dark:bg-white"></span>
              <span className="block w-6 h-[5px] rounded-b-[2px] bg-[color:var(--primary-brand)] dark:bg-white"></span>
            </div>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden z-10" id="mobile-menu">
          <div className="space-y-1 px-2 pt-20 pb-3 sm:px-3">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">{link.name}</a>
            ))}
            <a href="" className="block rounded-md bg-blue-600 px-3 py-2 text-base font-medium text-white hover:bg-blue-700">Start Now</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
