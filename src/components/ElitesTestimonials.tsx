"use client";

import React from "react";
import { motion } from "framer-motion";

interface TestimonialCardProps {
    name: string;
    avatarUrl: string;
    contentImageUrl?: string;
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
    hasBadge?: boolean;
    delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
    name,
    avatarUrl,
    contentImageUrl,
    width,
    height,
    top,
    left,
    contentTop = 8,
    contentHeight = 59,
    infoTop = 84,
    infoLeft = 4,
    hasBadge = true,
    delay = 0,
}) => {
    return (
        <motion.div
            className="absolute bg-[#F1F1F1] border-[0.2px] border-[#DCDBDB] rounded-lg box-border hidden lg:block"
            style={{
                width: `${width}px`,
                height: `${height}px`,
                top: `${top}px`,
                left: `${left}px`,
            }}
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
            }}
            viewport={{ once: false }} // Animates whenever in viewport (or always running)
        >
            {/* Content Image Area (Top) */}
            {contentImageUrl && (
                <div
                    className="absolute bg-white rounded-md overflow-hidden"
                    style={{
                        left: '7px', // Consistent across most cards
                        width: `${width - 14}px`, // 168 - 14 = 154 (approx 153/154)
                        top: `${contentTop}px`,
                        height: `${contentHeight}px`
                    }}
                >
                    <div
                        className="w-full h-full bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${contentImageUrl})` }}
                    />
                </div>
            )}

            {/* User Info Row (Bottom) */}
            <div
                className="absolute flex items-center gap-1"
                style={{
                    top: `${infoTop}px`,
                    left: `${infoLeft}px`,
                    width: '99px', // from frame 1000015379
                    height: '26px'
                }}
            >
                {/* Avatar */}
                <div className="relative w-[26px] h-[26px] rounded-full overflow-hidden bg-white border border-[#EDECEC] shrink-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${avatarUrl})` }}
                    />
                </div>

                {/* Text Group */}
                <div className="flex flex-col gap-[1px]">
                    <span className="font-['DM_Sans'] text-[8px] font-normal text-[#4F4F4F] leading-none whitespace-nowrap">
                        {name}
                    </span>
                    {/* Badge Placeholder */}
                    {hasBadge && (
                        <div className="w-[25px] h-[9px] bg-white border-[0.2px] border-[#EDECEC] rounded-md" />
                    )}
                </div>
            </div>
        </motion.div>
    );
};

// Simplified card for mobile (stacked) with no animations for performance
const MobileTestimonialCard = ({ name, avatarUrl, contentImageUrl }: any) => (
    <div className="bg-[#F1F1F1] border border-[#DCDBDB] rounded-lg p-3 w-full max-w-sm mx-auto mb-4">
        {/* Mobile layout: Content then Info? Or Info then Content? 
         Standard mobile feed usually has Header then Content. 
         But sticking to the desktop "inverted" style might be weird. 
         Let's stick to standard readable: Header -> Content. 
     */}
        <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden border border-gray-300">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${avatarUrl})` }} />
            </div>
            <div>
                <p className="text-xs font-semibold text-gray-700">{name}</p>
                <div className="w-8 h-3 bg-white border border-gray-200 rounded mt-1"></div>
            </div>
        </div>
        {contentImageUrl && (
            <div className="w-full h-32 bg-white rounded border border-gray-200 overflow-hidden">
                <div className="w-full h-full bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${contentImageUrl})` }} />
            </div>
        )}
    </div>
);

const ElitesTestimonials = () => {
    return (
        <section className="w-full bg-white relative py-20 px-4 overflow-hidden min-h-[700px]">
            <div className="max-w-[1240px] mx-auto relative h-full">

                {/* Left Text Section */}
                <div className="relative z-10 lg:absolute lg:top-[352px] lg:left-[94px] lg:w-[315px] flex flex-col gap-5 mb-12 lg:mb-0">
                    <h2 className="font-['DM_Sans'] font-light text-[36px] leading-[150%] tracking-[-0.01em] text-[#4F4F4F]">
                        Words from elites
                    </h2>
                    <p className="font-['DM_Sans'] font-normal text-[14px] leading-[150%] tracking-[-0.005em] text-[#777777]">
                        Industry leaders and everyone’s mentor have given us directives from early.
                    </p>
                </div>

                {/* Desktop Cards (Absolute) */}
                <div className="relative w-full h-[600px] hidden lg:block">
                    {/* Eric Migicovsky */}
                    <TestimonialCard
                        name="Eric Migicovsky"
                        avatarUrl="/IMG_9496.png"
                        contentImageUrl="/IMG_9500.png"
                        width={168}
                        height={129}
                        left={539}
                        top={258}
                        contentTop={8}
                        contentHeight={59}
                        infoTop={96}
                        delay={0}
                    />

                    {/* Paul Graham - Custom Layout */}
                    <motion.div
                        className="absolute bg-[#F1F1F1] border-[0.3px] border-[#DCDBDB] rounded-xl box-border"
                        style={{
                            width: '199.5px',
                            height: '234px',
                            left: '731px',
                            top: '166px'
                        }}
                        initial={{ y: 0 }}
                        animate={{ y: [0, -12, 0] }} // Slightly different movement
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                        }}
                    >
                        {/* PAUL GRAHAM SPECIFIC INNER LAYOUT */}
                        {/* Info Group at Bottom */}
                        <div className="absolute top-[195px] left-[5px] w-[38px] h-[34px] bg-white border-[0.3px] border-[#EDECEC] rounded-lg"></div>
                        <p className="absolute left-[48px] top-[196px] font-['DM_Sans'] text-[12px] text-[#4F4F4F] whitespace-nowrap">Paul Graham</p>
                        <div className="absolute left-[48px] top-[214px] w-[61px] h-[14px] bg-white border-[0.3px] border-[#EDECEC] rounded-lg"></div>

                        {/* Content Placeholder (Assuming big empty space above is the content area) */}
                        {/* <div className="absolute top-2 left-2 right-2 bottom-[50px] bg-white rounded-lg"></div>  */}
                        {/* Prompt didn't specify content box for Paul, just the info, so leaving blank/background as per prompt */}
                    </motion.div>

                    {/* Vincent Himpe */}
                    <TestimonialCard
                        name="Vincent Himpe"
                        avatarUrl="/IMG_9501.png"
                        contentImageUrl="/IMG_9502.png"
                        width={168}
                        height={144}
                        left={709}
                        top={498}
                        contentTop={8}
                        contentHeight={68.7}
                        infoTop={113}
                        infoLeft={6}
                        delay={2}
                    />

                    {/* Remi Cadene */}
                    <TestimonialCard
                        name="Remi Cadene"
                        avatarUrl="/IMG_9498.png"
                        contentImageUrl="/IMG_9499.png"
                        width={168}
                        height={115}
                        left={504}
                        top={446}
                        contentTop={9}
                        contentHeight={55}
                        infoTop={84}
                        delay={1.5}
                    />

                    {/* Blue Shape/Decor item */}
                    <motion.div
                        className="absolute bg-[#C5C4C4] border-[0.2px] border-[#EDECEC] rounded-md opacity-50 overflow-hidden"
                        style={{
                            width: '234px',
                            height: '45px',
                            left: '690px',
                            top: '423px'
                        }}
                        initial={{ y: 0 }}
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5,
                        }}
                    >
                        {/* Decorative elements */}
                        <div className="absolute left-[43px] top-[11px] w-[43px] h-[21px] bg-[#008ED3]"></div>
                        <div className="absolute left-[13px] top-[10px] w-[12px] h-[24px] bg-black"></div>
                    </motion.div>
                </div>

                {/* Mobile Cards (Stacked) */}
                <div className="lg:hidden flex flex-col items-center gap-6">
                    <MobileTestimonialCard name="Eric Migicovsky" avatarUrl="/IMG_9496.png" contentImageUrl="/IMG_9500.png" />
                    <MobileTestimonialCard name="Paul Graham" avatarUrl="" contentImageUrl="" />
                    <MobileTestimonialCard name="Vincent Himpe" avatarUrl="/IMG_9501.png" contentImageUrl="/IMG_9502.png" />
                    <MobileTestimonialCard name="Remi Cadene" avatarUrl="/IMG_9498.png" contentImageUrl="/IMG_9499.png" />
                </div>

            </div>
        </section>
    );
};

export default ElitesTestimonials;
