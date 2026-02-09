import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import EricAv from "@/assets/Eric Av.png";
import EricQuote from "@/assets/Eric Quote.png";
import RemyAv from "@/assets/Remy Av.png";
import RemyQuote from "@/assets/Remy Quote.png";
import VinceAv from "@/assets/Vince Av.png";
import VinceQuote from "@/assets/Vince Quote.png";
import PaulAv from "@/assets/Paul Graham's Av.png";
import PaulQuote from "@/assets/Paul Graham's Quote.png";
import FigureSvg from "@/assets/Figure Svg.svg";
import MITSvg from "@/assets/MIT SVG.svg";
import ZTESvg from "@/assets/ZTE Svg.svg";

const TESTIMONIALS_DATA = [
<<<<<<< HEAD
  {
    id: "eric",
    name: "Eric Migicovsky",
    avatar: EricAv,
    content: EricQuote,
    isCustom: false,
  },
  {
    id: "paul",
    name: "Paul Graham",
    avatar: null, // Custom layout
    content: null,
    isCustom: true,
  },
  {
    id: "vince",
    name: "Vincent Himpe",
    avatar: VinceAv,
    content: VinceQuote,
    isCustom: false,
  },
  {
    id: "remi",
    name: "Remi Cadene",
    avatar: RemyAv,
    content: RemyQuote,
    isCustom: false,
  },
=======
    {
        id: "eric",
        name: "Eric Migicovsky",
        avatar: EricAv,
        content: EricQuote,
        isCustom: false
    },
    {
        id: "paul",
        name: "Paul Graham",
        avatar: PaulAv,
        content: PaulQuote,
        isCustom: false
    },
    {
        id: "vince",
        name: "Vincent Himpe",
        avatar: VinceAv,
        content: VinceQuote,
        isCustom: false
    },
    {
        id: "remi",
        name: "Remi Cadene",
        avatar: RemyAv,
        content: RemyQuote,
        isCustom: false
    }
>>>>>>> dbf21f1 (feat: Add Paul Graham testimonial assets and enable standard card layout)
];

const PartnerTicker = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <motion.div
    className={`bg-[#F1F1F1] dark:bg-neutral-900 border-[0.2px] border-[#EDECEC] dark:border-neutral-700 rounded-full overflow-hidden flex items-center ${className}`}
    style={style}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="flex items-center gap-6 whitespace-nowrap overflow-hidden w-full mask-linear-fade">
      <motion.div
        className="flex items-center gap-8 min-w-full"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 8, ease: "linear", repeat: Infinity }}
      >
        {[...Array(2)].map((_, setIndex) => (
          <React.Fragment key={setIndex}>
            <div className="relative w-[72px] h-[36px] grayscale opacity-70 hover:opacity-100 dark:invert transition-opacity flex-shrink-0">
              <Image src={MITSvg} alt="MIT" fill className="object-contain" />
            </div>
            <div className="relative w-12 h-6 grayscale opacity-70 hover:opacity-100 dark:invert transition-opacity flex-shrink-0">
              <Image
                src={FigureSvg}
                alt="Figure"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-12 h-6 opacity-100 hover:opacity-100 dark:brightness-0 dark:invert transition-opacity flex-shrink-0">
              <Image src={ZTESvg} alt="ZTE" fill className="object-contain" />
            </div>
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  </motion.div>
);

interface TestimonialCardProps {
  name: string;
  avatarUrl: string | any;
  contentImageUrl?: string | any;
  badgeSrc?: string | any;
  // Dimensions & Positioning
  width: number;
  height: number;
  top: number;
  left: number;
  // Internal Layout
  contentTop?: number;
  contentHeight?: number;
  infoTop?: number; // Distance from top to the info row
  infoLeft?: number;
  delay?: number;
  // Hover Interaction
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
  isHovered?: boolean;
  isAnyHovered?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  avatarUrl,
  contentImageUrl,
  badgeSrc,
  width,
  height,
  top,
  left,
  contentTop = 8,
  contentHeight = 59,
  infoTop = 84,
  infoLeft = 4,
  delay = 0,
  onHoverStart,
  onHoverEnd,
  isHovered,
  isAnyHovered,
}) => {
  return (
    <motion.div
      className="absolute bg-[#F1F1F1] dark:bg-neutral-900 border-[0.2px] border-[#DCDBDB] dark:border-neutral-700 rounded-lg box-border hidden lg:block cursor-pointer"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        top: `${top}px`,
        left: `${left}px`,
        zIndex: isHovered ? 50 : isAnyHovered ? 1 : 10, // Lower z-index if another is hovered
      }}
      initial={{ opacity: 0, y: 20, scale: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      animate={{
        scale: isHovered ? 2 : 1,
        filter:
          isAnyHovered && !isHovered ? "blur(2px) brightness(0.8)" : "none",
      }}
      transition={{
        duration: 0.3, // Faster for hover
        ease: "easeOut",
      }}
      viewport={{ once: true }}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
    >
      {/* Content Image Area (Top) */}
      {contentImageUrl && (
        <div
          className="absolute bg-white dark:bg-neutral-800 rounded-md overflow-hidden"
          style={{
            left: "7px", // Consistent across most cards
            width: `${width - 14}px`, // 168 - 14 = 154 (approx 153/154)
            top: `${contentTop}px`,
            height: `${contentHeight}px`,
          }}
        >
          <Image
            src={contentImageUrl}
            alt="Testimonial content"
            className="w-full h-full object-cover"
            fill={false} // Using simplistic style for now to match structure
            style={{ objectFit: "contain" }} // Quotes might text, contain ensures visibility
          />
        </div>
      )}

      {/* User Info Row (Bottom) */}
      <div
        className="absolute flex items-center gap-1"
        style={{
          top: `${infoTop}px`,
          left: `${infoLeft}px`,
          width: "99px", // from frame 1000015379
          height: "26px",
        }}
      >
        {/* Avatar */}
        <div className="relative w-[26px] h-[26px] rounded-full overflow-hidden bg-white dark:bg-neutral-800 border border-[#EDECEC] dark:border-neutral-700 shrink-0">
          <Image
            src={avatarUrl}
            alt={name}
            className="w-full h-full object-cover"
            width={26}
            height={26}
          />
        </div>

        {/* Text Group */}
        <div className="flex flex-col gap-[1px]">
          <span className="font-['DM_Sans'] text-[8px] font-normal text-[#4F4F4F] dark:text-gray-300 leading-none whitespace-nowrap">
            {name}
          </span>
          {/* Badge */}
          {badgeSrc && (
            <div className="w-[25px] h-[9px] relative rounded-md overflow-hidden">
              <Image
                src={badgeSrc}
                alt="Badge"
                className="w-full h-full object-contain"
                fill={false}
                width={25}
                height={9}
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Simplified card for mobile (stacked) with no animations for performance
// Sticky card for mobile (stacked) with animations
<<<<<<< HEAD
const MobileTestimonialCard = ({
  name,
  avatarUrl,
  contentImageUrl,
  isCustom,
  index,
}: any) => {
  return (
    <motion.div
      className="sticky w-full max-w-sm mx-auto bg-[#F1F1F1] dark:bg-neutral-900 border border-[#DCDBDB] dark:border-neutral-700 rounded-lg p-3 box-border shadow-sm mb-24"
      style={{
        top: `${100 + index * 10}px`,
        zIndex: index + 10,
      }}
      initial={{ scale: 0.8, opacity: 0, y: 50 }}
      whileInView={{ scale: 1, opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {isCustom ? (
        // Paul Graham Custom Layout Mobile
        <div className="flex flex-col gap-4 p-2 min-h-[120px] justify-end relative">
          <div className="bg-white dark:bg-neutral-800 border-[0.3px] border-[#EDECEC] dark:border-neutral-700 rounded-lg p-2 absolute top-2 left-2 right-2 bottom-12" />
          <div className="relative z-10 mt-auto">
            <div className="w-[38px] h-[34px] bg-white dark:bg-neutral-800 border-[0.3px] border-[#EDECEC] dark:border-neutral-700 rounded-lg mb-2"></div>
            <p className="font-['DM_Sans'] text-[12px] text-[#4F4F4F] dark:text-gray-300">
              Paul Graham
            </p>
            <div className="w-[61px] h-[14px] bg-white dark:bg-neutral-800 border-[0.3px] border-[#EDECEC] dark:border-neutral-700 rounded-lg mt-1"></div>
          </div>
        </div>
      ) : (
        // Standard Card
        <>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-white dark:bg-neutral-800 overflow-hidden border border-gray-300 dark:border-neutral-700 relative shrink-0">
              {avatarUrl && (
                <Image
                  src={avatarUrl}
                  alt={name}
                  fill
                  className="object-cover"
                />
              )}
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-700 dark:text-gray-200">
                {name}
              </p>
            </div>
          </div>
          {contentImageUrl && (
            <div className="w-full h-32 bg-white dark:bg-neutral-800 rounded border border-gray-200 dark:border-neutral-700 overflow-hidden relative">
              <Image
                src={contentImageUrl}
                alt="Content"
                fill
                className="object-contain"
              />
            </div>
          )}
        </>
      )}
    </motion.div>
  );
=======
const MobileTestimonialCard = ({ name, avatarUrl, contentImageUrl, isCustom, index }: any) => {
    return (
        <motion.div
            className="sticky w-full max-w-sm mx-auto bg-[#F1F1F1] border border-[#DCDBDB] rounded-lg p-3 box-border shadow-sm mb-24"
            style={{
                top: `${100 + index * 10}px`,
                zIndex: index + 10
            }}
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {isCustom ? (
                // Paul Graham Custom Layout Mobile (Fallback if still somehow custom, but should be false now)
                <div className="flex flex-col gap-4 p-2 min-h-[120px] justify-end relative">
                    <div className="bg-white border-[0.3px] border-[#EDECEC] rounded-lg p-2 absolute top-2 left-2 right-2 bottom-12" />
                    <div className="relative z-10 mt-auto">
                        <div className="w-[38px] h-[34px] bg-white border-[0.3px] border-[#EDECEC] rounded-lg mb-2"></div>
                        <p className="font-['DM_Sans'] text-[12px] text-[#4F4F4F]">Paul Graham</p>
                        <div className="w-[61px] h-[14px] bg-white border-[0.3px] border-[#EDECEC] rounded-lg mt-1"></div>
                    </div>
                </div>
            ) : (
                // Standard Card
                <>
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-white overflow-hidden border border-gray-300 relative shrink-0">
                            {avatarUrl && <Image src={avatarUrl} alt={name} fill className="object-cover" />}
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-gray-700">{name}</p>
                        </div>
                    </div>
                    {contentImageUrl && (
                        <div className="w-full h-32 bg-white rounded border border-gray-200 overflow-hidden relative">
                            <Image src={contentImageUrl} alt="Content" fill className="object-contain" />
                        </div>
                    )}
                </>
            )}
        </motion.div>
    );
>>>>>>> dbf21f1 (feat: Add Paul Graham testimonial assets and enable standard card layout)
};

const ElitesTestimonials = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section
      className="
        w-full bg-white dark:bg-black relative px-4 overflow-visible min-h-[500px]
        py-16 mt-[-80px]
        lg:py-[140px]
      "
    >
      {/* ✅ Desktop: create a stable "stage" and center it vertically */}
      <div
        className="
          max-w-[1240px] mx-auto relative
          lg:min-h-[600px]        /* Reduced stage height */
          lg:flex lg:items-center /* vertically centers the stage inside the section */
        "
      >
        {/* ✅ Desktop: everything inside this gets shifted up slightly */}
        <div className="w-full relative lg:-translate-y-20">
          {/* Backdrop Blur Overlay - Moved here to share stacking context */}
          <AnimatePresence>
            {hoveredCard && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-40 bg-white/30 dark:bg-black/30 backdrop-blur-sm pointer-events-none rounded-xl"
                style={{
                  padding: "200px",
                  margin: "-200px",
                }}
              />
            )}
          </AnimatePresence>

          {/* Left Text Section */}
          <div className="relative z-10 lg:absolute lg:top-[352px] lg:left-[94px] lg:w-[315px] flex flex-col gap-5 mb-12 lg:mb-0">
            <h2 className="font-['DM_Sans'] font-light text-[36px] leading-[150%] tracking-[-0.01em] text-[#4F4F4F] dark:text-gray-200">
              Words from elites
            </h2>
            <p className="font-['DM_Sans'] font-normal text-[14px] leading-[150%] tracking-[-0.005em] text-[#777777] dark:text-gray-400">
              Industry leaders and everyone’s mentor have given us directives
              from early.
            </p>
          </div>

          {/* Desktop Cards (Absolute) */}
          <div className="relative w-full h-[600px] hidden lg:block">
            {/* Eric Migicovsky */}
            <TestimonialCard
              name="Eric Migicovsky"
              avatarUrl={EricAv}
              contentImageUrl={EricQuote}
              width={168}
              height={129}
              left={539}
              top={258}
              contentTop={8}
              contentHeight={59}
              infoTop={96}
              delay={0}
              onHoverStart={() => setHoveredCard("eric")}
              onHoverEnd={() => setHoveredCard(null)}
              isHovered={hoveredCard === "eric"}
              isAnyHovered={!!hoveredCard}
            />

            {/* Paul Graham - Custom Layout */}
            <motion.div
              className="absolute bg-[#F1F1F1] dark:bg-neutral-900 border-[0.3px] border-[#DCDBDB] dark:border-neutral-700 rounded-xl box-border cursor-pointer hidden lg:block"
              style={{
                width: "199.5px",
                height: "234px",
                left: "731px",
                top: "166px",
                zIndex: hoveredCard === "paul" ? 50 : hoveredCard ? 1 : 10,
              }}
              initial={{ opacity: 0, y: 20, scale: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{
                scale: hoveredCard === "paul" ? 2 : 1,
                filter:
                  hoveredCard && hoveredCard !== "paul"
                    ? "blur(2px) brightness(0.8)"
                    : "none",
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredCard("paul")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute top-[195px] left-[5px] w-[38px] h-[34px] bg-white dark:bg-neutral-800 border-[0.3px] border-[#EDECEC] dark:border-neutral-700 rounded-lg" />
              <p className="absolute left-[48px] top-[196px] font-['DM_Sans'] text-[12px] text-[#4F4F4F] dark:text-gray-300 whitespace-nowrap">
                Paul Graham
              </p>
              <div className="absolute left-[48px] top-[214px] w-[61px] h-[14px] bg-white dark:bg-neutral-800 border-[0.3px] border-[#EDECEC] dark:border-neutral-700 rounded-lg" />
            </motion.div>

            {/* Vincent Himpe */}
            <TestimonialCard
              name="Vincent Himpe"
              avatarUrl={VinceAv}
              contentImageUrl={VinceQuote}
              width={168}
              height={144}
              left={709}
              top={498}
              contentTop={8}
              contentHeight={68.7}
              infoTop={113}
              infoLeft={6}
              delay={2}
              onHoverStart={() => setHoveredCard("vince")}
              onHoverEnd={() => setHoveredCard(null)}
              isHovered={hoveredCard === "vince"}
              isAnyHovered={!!hoveredCard}
            />

            {/* Remi Cadene */}
            <TestimonialCard
              name="Remi Cadene"
              avatarUrl={RemyAv}
              contentImageUrl={RemyQuote}
              width={168}
              height={115}
              left={504}
              top={446}
              contentTop={9}
              contentHeight={55}
              infoTop={84}
              delay={1.5}
              onHoverStart={() => setHoveredCard("remi")}
              onHoverEnd={() => setHoveredCard(null)}
              isHovered={hoveredCard === "remi"}
              isAnyHovered={!!hoveredCard}
            />

<<<<<<< HEAD
            {/* Partners Bar (Desktop) */}
            <PartnerTicker
              className="absolute"
              style={{
                width: "234px",
                height: "45px",
                left: "690px",
                top: "423px",
                zIndex: 20,
              }}
            />
          </div>
=======
                        {/* Paul Graham */}
                        <TestimonialCard
                            name="Paul Graham"
                            avatarUrl={PaulAv}
                            contentImageUrl={PaulQuote}
                            width={199.5}
                            height={234}
                            left={731}
                            top={166}
                            contentTop={8}
                            contentHeight={176}
                            infoTop={195}
                            infoLeft={5}
                            delay={1}
                            onHoverStart={() => setHoveredCard("paul")}
                            onHoverEnd={() => setHoveredCard(null)}
                            isHovered={hoveredCard === "paul"}
                            isAnyHovered={!!hoveredCard}
                        />
>>>>>>> dbf21f1 (feat: Add Paul Graham testimonial assets and enable standard card layout)

          {/* Mobile Cards (Stacked Sticky Scroll) */}
          <div className="lg:hidden flex flex-col relative pb-20">
            {TESTIMONIALS_DATA.map((item, index) => (
              <MobileTestimonialCard
                key={item.id}
                name={item.name}
                avatarUrl={item.avatar}
                contentImageUrl={item.content}
                isCustom={item.isCustom}
                index={index}
              />
            ))}

            {/* Partners Bar (Mobile) */}
            <div className="sticky top-[300px] mt-10 flex justify-center pb-10">
              <PartnerTicker className="w-[80vw] h-[50px] max-w-[300px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElitesTestimonials;
