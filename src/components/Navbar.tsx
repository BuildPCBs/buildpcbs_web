"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useWaitlist } from "@/context/WaitlistContext";
import AnimatedText from "@/components/AnimatedText";
import AppDropdown from "@/components/AppDropdown";
import GuidesDropdown from "@/components/GuidesDropdown";
import BuildersDropdown from "@/components/BuildersDropdown";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAppHovered, setIsAppHovered] = useState(false);
  const [isGuidesHovered, setIsGuidesHovered] = useState(false);
  const [isBuildersHovered, setIsBuildersHovered] = useState(false);
  const [isMobileAppOpen, setIsMobileAppOpen] = useState(false);
  const { openWaitlist } = useWaitlist();

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
    { name: "App", href: "/app" },
    { name: "Guides", href: "/guides" },
    { name: "$BUILDERS", href: "/builders" },
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
        className={`hidden md:block w-full transition-opacity duration-300 py-[28px] ${isScrolled ? "opacity-0" : "opacity-100"
          }`}
      >
        <div className="mx-auto w-full max-w-[1192px] px-4">
          <div className="flex h-[42px] items-center justify-start">

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-[5px]">
                <Image
                  src="/logo.png"
                  alt="buildpcbs logo"
                  width={24}
                  height={20}
                />
                <span className="font-medium text-[17px] leading-[22px] tracking-[-0.04em] text-[#444444] dark:text-white">
                  BuildPCBs
                </span>
              </Link>
            </div>

            {/* Links + Button Group */}
            <div className="flex items-center gap-[24px] ml-auto">

              {/* Nav Links */}
              <div className="flex items-center gap-8">
                {navLinks.map((link) => {
                  if (link.name === "App") {
                    return (
                      <div
                        key={link.name}
                        className="relative flex items-center h-full"
                        onMouseEnter={() => setIsAppHovered(true)}
                        onMouseLeave={() => setIsAppHovered(false)}
                      >
                        <Link href={link.href} className="flex items-center">
                          <AnimatedText text={link.name} className="text-[17px] font-normal leading-[150%] tracking-[-0.005em] text-[#777777] dark:text-gray-300" />
                        </Link>
                        <AnimatePresence>
                          {isAppHovered && (
                            <motion.div
                              initial={{ opacity: 0, scaleY: 0.9, y: -10 }}
                              animate={{ opacity: 1, scaleY: 1, y: 0 }}
                              exit={{ opacity: 0, scaleY: 0.9, y: -10 }}
                              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                              className="absolute top-[35px] left-1/2 -translate-x-1/2 z-50 origin-top pt-4"
                            >
                              <AppDropdown />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  if (link.name === "Guides") {
                    return (
                      <div
                        key={link.name}
                        className="relative flex items-center h-full"
                        onMouseEnter={() => setIsGuidesHovered(true)}
                        onMouseLeave={() => setIsGuidesHovered(false)}
                      >
                        <Link href={link.href} className="flex items-center">
                          <AnimatedText text={link.name} className="text-[17px] font-normal leading-[150%] tracking-[-0.005em] text-[#777777] dark:text-gray-300" />
                        </Link>
                        <AnimatePresence>
                          {isGuidesHovered && (
                            <motion.div
                              initial={{ opacity: 0, scaleY: 0.9, y: -10 }}
                              animate={{ opacity: 1, scaleY: 1, y: 0 }}
                              exit={{ opacity: 0, scaleY: 0.9, y: -10 }}
                              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                              className="absolute top-[35px] left-1/2 -translate-x-1/2 z-50 origin-top pt-4"
                            >
                              <GuidesDropdown />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  if (link.name === "$BUILDERS") {
                    return (
                      <div
                        key={link.name}
                        className="relative flex items-center h-full"
                        onMouseEnter={() => setIsBuildersHovered(true)}
                        onMouseLeave={() => setIsBuildersHovered(false)}
                      >
                        <Link href={link.href} className="flex items-center">
                          <motion.span
                            initial="initial"
                            whileHover="hovered"
                            className="text-[17px] font-normal leading-[150%] tracking-[-0.005em] text-[#777777] dark:text-gray-300 cursor-pointer inline-block relative overflow-hidden"
                          >
                            <div className="flex">
                              {"$BUILDers".split("").map((char, index) => (
                                <motion.span
                                  key={index}
                                  variants={{ initial: { y: 0 }, hovered: { y: -5 } }}
                                  transition={{ duration: 0.2, delay: index * 0.03 }}
                                  className="inline-block"
                                >
                                  {char}
                                </motion.span>
                              ))}
                            </div>
                          </motion.span>
                        </Link>
                        <AnimatePresence>
                          {isBuildersHovered && (
                            <motion.div
                              initial={{ opacity: 0, scaleY: 0.9, y: -10 }}
                              animate={{ opacity: 1, scaleY: 1, y: 0 }}
                              exit={{ opacity: 0, scaleY: 0.9, y: -10 }}
                              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                              className="absolute top-[35px] left-1/2 -translate-x-1/2 z-50 origin-top pt-4"
                            >
                              <BuildersDropdown />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }
                })}
              </div>

              {/* Button */}
              <motion.button
                onClick={openWaitlist}
                initial="initial"
                whileHover="hovered"
                className="flex items-center justify-center w-[138px] h-[42px] rounded-full bg-gradient-to-r from-[#0038DF] to-[#001E79] text-[14px] font-medium leading-[22px] tracking-[-0.005em] text-white hover:opacity-90 overflow-hidden"
              >
                <div className="flex">
                  {"Join Waitlist".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      variants={{
                        initial: { y: 0 },
                        hovered: { y: -5 },
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        delay: index * 0.03,
                      }}
                      className="inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </div>
              </motion.button>
            </div>

          </div>
        </div>
      </nav>

      {/* Floating Navbar (Desktop & Mobile Pop-up) */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[349px] h-[72px] bg-white dark:bg-[#151515] rounded-[99px] p-[4px] border-[0.5px] border-[#DDDDDD] dark:border-gray-800/80 z-50 flex items-center justify-center shadow-[1px_2px_48px_1px_rgba(126,126,126,0.25)]"
          >
            <div className="w-[341px] h-[62px] rounded-[99px] border border-dashed border-[#DDDDDD] dark:border-[#262626] flex items-center justify-between px-4 gap-[43px]">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/logo.png"
                  alt="buildpcbs logo"
                  width={24}
                  height={20}
                />
                <span className="font-medium text-[17px] leading-none tracking-[-0.04em] text-black dark:text-white">
                  buildpcbs
                </span>
              </Link>

              <motion.button
                onClick={openWaitlist}
                initial="initial"
                whileHover="hovered"
                className="flex items-center justify-center w-[121px] h-[42px] rounded-[24px] bg-[#0038DF] text-sm font-medium text-white hover:opacity-90 whitespace-nowrap overflow-hidden"
              >
                <div className="flex">
                  {"Join Waitlist".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      variants={{
                        initial: { y: 0 },
                        hovered: { y: -5 },
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        delay: index * 0.03,
                      }}
                      className="inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </div>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Button (Only when NOT scrolled, as floating nav replaces it?) 
          Actually user said 'let it pop up from the bottom of the viewport both on mobile and desktop'.
          So the floating bar should likely replace the standard mobile header when scrolled.
          For now, I will keep the standard mobile header for top state, and show floating bar when scrolled.
       */}
      {!isScrolled && (
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
              <div className="flex flex-col items-center justify-center gap-1.5">
                <span className="block w-6 h-[5px] rounded-t-[2px] bg-[color:var(--primary-brand)] dark:bg-white"></span>
                <span className="block w-6 h-[5px] rounded-b-[2px] bg-[color:var(--primary-brand)] dark:bg-white"></span>
              </div>
            </button>
          </div>
        </div>
      )}

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
              {navLinks.map((link) => {
                if (link.name === "App") {
                  return (
                    <div key={link.name} className="flex flex-col items-center">
                      <motion.button
                        variants={menuItemVariants}
                        onClick={() => setIsMobileAppOpen(!isMobileAppOpen)}
                        className="text-2xl font-medium text-gray-800 dark:text-gray-200 hover:text-[color:var(--primary-brand)] transition-colors"
                      >
                        {link.name}
                      </motion.button>
                      <AnimatePresence>
                        {isMobileAppOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden mt-4"
                          >
                            <div className="scale-[0.85] origin-top">
                              <AppDropdown />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    variants={menuItemVariants}
                    className="text-2xl font-medium text-gray-800 dark:text-gray-200 hover:text-[color:var(--primary-brand)] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                );
              })}
              <motion.button
                onClick={() => {
                  openWaitlist();
                  setIsMobileMenuOpen(false);
                }}
                variants={menuItemVariants}
                whileHover="hovered"
                className="flex items-center justify-center w-[180px] h-[50px] rounded-full bg-[color:var(--primary-brand)] text-lg font-medium text-white hover:opacity-90 overflow-hidden"
              >
                <div className="flex">
                  {"Join Waitlist".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      variants={{
                        initial: { y: 0 },
                        hovered: { y: -5 },
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        delay: index * 0.03,
                      }}
                      className="inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </div>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
