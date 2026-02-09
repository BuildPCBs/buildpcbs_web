import React, { useState, useLayoutEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Reply, MoreHorizontal, ChevronDown } from "lucide-react";

import EricAv from "@/assets/Eric Av.png";
import RemyAv from "@/assets/Remy Av.png";
import VinceAv from "@/assets/Vince Av.png";
import PaulAv from "@/assets/Paul Graham's Av.png";
import FigureSvg from "@/assets/Figure Svg.svg";
import MITSvg from "@/assets/MIT SVG.svg";
import ZTESvg from "@/assets/ZTE Svg.svg";

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS_DATA = [
    {
        id: "eric",
        name: "Eric Migicovsky",
        avatar: EricAv,
        date: "12 Mar 2025",
        content: "I wish I had this when I started Pebble. It would have saved us months of iteration.",
        isCustom: false
    },
    {
        id: "paul",
        name: "Paul Graham",
        avatar: PaulAv,
        date: "17 Oct 2025", // From snippet
        content: "Hardware is hard. But with tools like this, it's becoming as accessible as software. This is strictly the future of manufacturing.",
        isCustom: false
    },
    {
        id: "vince",
        name: "Vincent Himpe",
        avatar: VinceAv,
        date: "22 Jan 2025",
        content: "The layout generation is incredible. It respects all the design rules I typically check manually.",
        isCustom: false
    },
    {
        id: "remi",
        name: "Remi Cadene",
        avatar: RemyAv,
        date: "05 Feb 2025",
        content: "Finally, an AI that understands electronics engineering. This accelerates our prototyping cycle significantly.",
        isCustom: false
    }
];

const PartnerTicker = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <motion.div
        className={`bg-[#F1F1F1] dark:bg-neutral-800 border-[0.2px] border-[#EDECEC] dark:border-neutral-700 rounded-full overflow-hidden flex items-center ${className}`}
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
                        <div className="relative w-[72px] h-[36px] grayscale opacity-70 hover:opacity-100 transition-opacity flex-shrink-0 invert dark:invert-0">
                            <Image src={MITSvg} alt="MIT" fill className="object-contain dark:brightness-200" />
                        </div>
                        <div className="relative w-12 h-6 grayscale opacity-70 hover:opacity-100 transition-opacity flex-shrink-0">
                            <Image src={FigureSvg} alt="Figure" fill className="object-contain dark:brightness-200" />
                        </div>
                        <div className="relative w-12 h-6 opacity-100 hover:opacity-100 transition-opacity flex-shrink-0">
                            <Image src={ZTESvg} alt="ZTE" fill className="object-contain dark:brightness-200" />
                        </div>
                    </React.Fragment>
                ))}
            </motion.div>
        </div>
    </motion.div>
);

interface EmailCardProps {
    item: typeof TESTIMONIALS_DATA[0];
    width?: number; // Optional override
    height?: number; // Optional override
}

// Reusable Inner Content Component matching Figma Spec
const EmailCardContent = ({ item }: { item: typeof TESTIMONIALS_DATA[0] }) => {
    return (
        <div className="w-full h-full flex flex-col gap-[10px] p-[10px] box-border">
            {/* Header Row */}
            <div className="flex flex-row items-center gap-[12px] w-full">
                {/* Avatar */}
                <div className="relative w-[25px] h-[25px] rounded-full overflow-hidden shrink-0 border border-gray-100 dark:border-neutral-700">
                    {item.avatar && (
                        <Image src={item.avatar} alt={item.name} fill className="object-cover" />
                    )}
                </div>

                {/* Info Column */}
                <div className="flex flex-col flex-1 min-w-0">
                    {/* Name + Date + Icons Row */}
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-[6px] lg:gap-[16px] overflow-hidden">
                            {/* Reduced gap slightly for small cards */}
                            <span className="font-['DM_Sans'] text-[8px] text-[#444444] dark:text-gray-300 whitespace-nowrap overflow-hidden text-ellipsis">
                                {item.name}
                            </span>
                            <span className="font-['DM_Sans'] text-[8px] text-[#777777] dark:text-gray-500 whitespace-nowrap shrink-0">
                                {item.date}
                            </span>
                        </div>

                        {/* Icons: Star, Reply, Dots. Hidden on very small width if needed, but flex justify-between handles spacing */}
                        <div className="flex items-center gap-[6px] lg:gap-[10px] shrink-0 text-[#666666] dark:text-gray-500">
                            <Star size={8} fill="none" strokeWidth={1.5} className="opacity-70" />
                            <Reply size={8} strokeWidth={1.5} className="opacity-70" />
                            <MoreHorizontal size={8} strokeWidth={1.5} className="opacity-70" />
                        </div>
                    </div>

                    {/* to me row */}
                    <div className="flex items-center gap-[4px] mt-[1px]">
                        <span className="font-['DM_Sans'] text-[8px] text-[#444444] dark:text-gray-400">to me</span>
                        {/* Dropdown arrow styled as small chevron */}
                        <ChevronDown size={6} className="text-[#666666] dark:text-gray-500" strokeWidth={2} />
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className="w-full flex-1 overflow-hidden">
                <p className="font-['DM_Sans'] text-[10px] leading-[130%] text-[#656565] dark:text-gray-300 tracking-[-0.005em]">
                    {item.content}
                </p>
            </div>
        </div>
    );
}


interface TestimonialCardProps {
    item: typeof TESTIMONIALS_DATA[0]
    // Dimensions & Positioning
    width: number;
    height: number;
    top: number;
    left: number;
    delay?: number;
    // Hover Interaction
    onHoverStart?: () => void;
    onHoverEnd?: () => void;
    isHovered?: boolean;
    isAnyHovered?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
    item,
    width,
    height,
    top,
    left,
    delay = 0,
    onHoverStart,
    onHoverEnd,
    isHovered,
    isAnyHovered,
}) => {
    return (
        <motion.div
            className="absolute bg-[#FFFFFF] dark:bg-neutral-900 border-[1px] border-[#CDCDCD] dark:border-neutral-700 rounded-[20px] box-border hidden lg:block cursor-pointer overflow-hidden"
            style={{
                width: `${width}px`,
                height: `${height}px`,
                top: `${top}px`,
                left: `${left}px`,
                zIndex: isHovered ? 50 : (isAnyHovered ? 1 : 10),
            }}
            initial={{ opacity: 0, y: 20, scale: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{
                scale: isHovered ? 1.5 : 1, // Reduced scale zoom slightly as cards are cleaner
                boxShadow: isHovered ? "0px 10px 40px rgba(0,0,0,0.1)" : "none",
                filter: (isAnyHovered && !isHovered) ? "blur(2px) opacity(0.5)" : "none",
            }}
            transition={{
                duration: 0.3,
                ease: "easeOut",
            }}
            viewport={{ once: true }}
            onMouseEnter={onHoverStart}
            onMouseLeave={onHoverEnd}
        >
            <EmailCardContent item={item} />
        </motion.div>
    );
};

// --- Mobile Sticky Stack (Replicates God-Speed Layout) ---

const ElitesMobileStackCard = ({ item }: { item: typeof TESTIMONIALS_DATA[0] }) => {
    return (
        <div
            className="relative w-full aspect-square rounded-[20px] bg-[#FFFFFF] dark:bg-neutral-900 border border-[#CDCDCD] dark:border-neutral-700 overflow-hidden"
            style={{ transformOrigin: "bottom center" }}
        >
            <EmailCardContent item={item} />
        </div>
    );
};

function ElitesMobileStack() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const pinRef = useRef<HTMLDivElement | null>(null);

    const cardRefs = useRef<HTMLDivElement[]>([]);
    cardRefs.current = [];
    const addCardRef = (el: HTMLDivElement | null) => {
        if (!el) return;
        if (!cardRefs.current.includes(el)) cardRefs.current.push(el);
    };

    const [active, setActive] = useState(0);

    useLayoutEffect(() => {
        const reduce =
            typeof window !== "undefined" &&
            window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (reduce) return;

        const ctx = gsap.context(() => {
            const cards = cardRefs.current;

            // Start all cards tiny at the base (bottom), hidden
            gsap.set(cards, { opacity: 0, scale: 0.06, y: 120, transformOrigin: "bottom center" });

            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            cards.forEach((card, i) => {
                tl.addLabel(`card-${i}`, i === 0 ? 0 : "+=1");
                tl.to(
                    card,
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        duration: 0.55,
                        onStart: () => setActive(i),
                    },
                    `card-${i}`
                );
            });

            const steps = cards.length;
            const end = () => `+=${Math.round(window.innerHeight * (steps + 0.8))}`;

            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top top",
                end: end(),
                pin: pinRef.current,
                scrub: 1,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                snap: {
                    snapTo: "labelsDirectional",
                    duration: { min: 0.08, max: 0.22 },
                    delay: 0.02,
                    ease: "power1.inOut",
                },
                animation: tl,
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const jumpTo = (index: number) => {
        const st = ScrollTrigger.getAll().find((t) => t.trigger === sectionRef.current);
        if (!st) return;

        const progress = index / Math.max(1, TESTIMONIALS_DATA.length - 1);
        const y = st.start + (st.end - st.start) * progress;

        window.scrollTo({ top: y, behavior: "smooth" });
    };

    return (
        <section ref={sectionRef as any} className="lg:hidden w-full bg-white dark:bg-black relative">
            <div ref={pinRef} className="relative h-[100vh] overflow-hidden px-[13px]">
                <div className="mx-auto w-full max-w-[375px] h-full pt-[70px]">
                    <div className="flex gap-[12px]">
                        {/* LEFT COLUMN (Names) */}
                        <div className="w-[139px] flex flex-col items-start gap-[25px]">
                            <div className="flex flex-col gap-[12px]">
                                {TESTIMONIALS_DATA.map((f, i) => (
                                    <button
                                        key={f.id}
                                        onClick={() => jumpTo(i)}
                                        className="group w-[130px] text-left"
                                        type="button"
                                    >
                                        <div className="flex items-center justify-between gap-[10px] h-auto min-h-[17px]">
                                            <span
                                                className={[
                                                    "font-['DM_Sans'] text-[14px] leading-[140%] tracking-[-0.005em]",
                                                    i === active
                                                        ? "text-[#4F4F4F] dark:text-gray-100"
                                                        : "text-[#888888] dark:text-gray-500",
                                                ].join(" ")}
                                            >
                                                {f.name}
                                            </span>

                                            <span
                                                className={[
                                                    "h-[1px] w-[9px] transition-opacity shrink-0 mt-2",
                                                    i === active
                                                        ? "opacity-100 bg-[#4F4F4F] dark:bg-gray-100"
                                                        : "opacity-0 bg-[#888888] dark:bg-gray-500",
                                                ].join(" ")}
                                            />
                                        </div>

                                        <div
                                            className={[
                                                "mt-[4px] h-[1px] w-full transition-opacity",
                                                i === active ? "opacity-20 bg-[#0038DF]" : "opacity-0",
                                            ].join(" ")}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT COLUMN (Stacked Cards) */}
                        <div className="w-[222px] flex flex-col gap-[10px] relative">
                            <div className="relative w-[222px] h-[221px]">
                                {TESTIMONIALS_DATA.map((item, idx) => (
                                    <div
                                        key={item.id}
                                        ref={addCardRef}
                                        className="absolute inset-0"
                                        style={{ zIndex: 10 + idx }}
                                    >
                                        <ElitesMobileStackCard item={item} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Partners Ticker (Below layout) */}
                    <div className="absolute bottom-10 left-0 right-0 flex justify-center">
                        <PartnerTicker className="w-[280px] h-[48px]" />
                    </div>
                </div>
            </div>
        </section>
    );
}

const ElitesTestimonials = () => {
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);

    return (
        <React.Fragment>
            {/* Desktop Section */}
            <section
                className="
                    hidden lg:block
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
                                        padding: '200px', margin: '-200px'
                                    }}
                                />
                            )}
                        </AnimatePresence>

                        {/* Left Text Section */}
                        <div className="relative z-10 lg:absolute lg:top-[352px] lg:left-[94px] lg:w-[315px] flex flex-col gap-5 mb-12 lg:mb-0">
                            <h2 className="font-['DM_Sans'] font-light text-[36px] leading-[150%] tracking-[-0.01em] text-[#4F4F4F] dark:text-white">
                                Words from elites
                            </h2>
                            <p className="font-['DM_Sans'] font-normal text-[14px] leading-[150%] tracking-[-0.005em] text-[#777777] dark:text-gray-400">
                                Industry leaders and everyone’s mentor have given us directives from early.
                            </p>
                        </div>

                        {/* Desktop Cards (Absolute) */}
                        <div className="relative w-full h-[600px] hidden lg:block">
                            {/* Eric Migicovsky */}
                            <TestimonialCard
                                item={TESTIMONIALS_DATA[0]}
                                width={168}
                                height={129}
                                left={539}
                                top={258}
                                delay={0}
                                onHoverStart={() => setHoveredCard("eric")}
                                onHoverEnd={() => setHoveredCard(null)}
                                isHovered={hoveredCard === "eric"}
                                isAnyHovered={!!hoveredCard}
                            />

                            {/* Paul Graham */}
                            <TestimonialCard
                                item={TESTIMONIALS_DATA[1]}
                                width={199.5}
                                height={234}
                                left={731}
                                top={166}
                                delay={1}
                                onHoverStart={() => setHoveredCard("paul")}
                                onHoverEnd={() => setHoveredCard(null)}
                                isHovered={hoveredCard === "paul"}
                                isAnyHovered={!!hoveredCard}
                            />

                            {/* Vincent Himpe */}
                            <TestimonialCard
                                item={TESTIMONIALS_DATA[2]}
                                width={168}
                                height={144}
                                left={709}
                                top={498}
                                delay={2}
                                onHoverStart={() => setHoveredCard("vince")}
                                onHoverEnd={() => setHoveredCard(null)}
                                isHovered={hoveredCard === "vince"}
                                isAnyHovered={!!hoveredCard}
                            />

                            {/* Remi Cadene */}
                            <TestimonialCard
                                item={TESTIMONIALS_DATA[3]}
                                width={168}
                                height={115}
                                left={504}
                                top={446}
                                delay={1.5}
                                onHoverStart={() => setHoveredCard("remi")}
                                onHoverEnd={() => setHoveredCard(null)}
                                isHovered={hoveredCard === "remi"}
                                isAnyHovered={!!hoveredCard}
                            />

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
                    </div>
                </div>
            </section>

            {/* Mobile Sticky Stack (Replicates God-Speed Effect) */}
            <ElitesMobileStack />
        </React.Fragment>
    );
};

export default ElitesTestimonials;
