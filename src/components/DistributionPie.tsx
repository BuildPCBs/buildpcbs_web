"use client";

import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const data = [
    { label: "Public / LaunchLab", percent: 40, color: "#0038DF", desc: "The supply people trade and access via the bonding curve." },
    { label: "Ecosystem & Rewards", percent: 17, color: "#255CFF", desc: "Incentives for people actually using the AI tool." },
    { label: "Development Treasury", percent: 13, color: "#5E89FF", desc: "Locked (10% cliff). Servers, AI models, and R&D." },
    { label: "VC & Strategic Round", percent: 10, color: "#88AAFF", desc: "Reserved for a lead investor. Liquid, but controlled." },
    { label: "Future Hires", percent: 5, color: "#BDE2FF", desc: "Liquid. Hiring a CTO / Lead AI Developer." },
    { label: "Founders", percent: 15, color: "#FFFFFF", desc: "Locked & vested. Builders eat last." }
];

const DistributionPie = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const pieRef = useRef<SVGSVGElement>(null);
    const textContainerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useGSAP(() => {
        if (!containerRef.current) return;

        // Pin the entire section
        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top top",
            end: "+=3000", // Length of scroll interaction
            pin: true,
            scrub: 1,
            onUpdate: (self) => {
                // Map progress to active index (0 to data.length - 1)
                const idx = Math.min(
                    Math.floor(self.progress * data.length),
                    data.length - 1
                );
                setActiveIndex(idx);
            }
        });

    }, { scope: containerRef });

    // Calculate Pie Segments
    let cumulativePercent = 0;
    const segments = data.map((d, i) => {
        const startObj = getCoordinatesForPercent(cumulativePercent);
        cumulativePercent += d.percent;
        const endObj = getCoordinatesForPercent(cumulativePercent);

        // Large arc flag
        const largeArc = d.percent > 50 ? 1 : 0;

        const path = [
            `M 0 0`,
            `L ${startObj.x} ${startObj.y}`,
            `A 1 1 0 ${largeArc} 1 ${endObj.x} ${endObj.y}`,
            `Z`
        ].join(" ");

        return { ...d, path, rotation: 0 }; // Paths are built assuming 0,0 center and radius 1. We scale in CSS.
    });

    function getCoordinatesForPercent(percent: number) {
        const x = Math.cos(2 * Math.PI * (percent / 100));
        const y = Math.sin(2 * Math.PI * (percent / 100));
        return { x, y };
    }

    return (
        <div ref={containerRef} className="h-screen w-full flex flex-col md:flex-row items-center justify-center bg-black overflow-hidden relative">

            {/* --- Pie Chart Side (Left) --- */}
            <div className="w-full md:w-1/2 flex items-center justify-center h-full relative">
                <svg
                    ref={pieRef}
                    viewBox="-1.2 -1.2 2.4 2.4"
                    className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] -rotate-90 overflow-visible"
                >
                    {segments.map((seg, i) => (
                        <path
                            key={i}
                            d={seg.path}
                            fill={seg.color}
                            className="transition-all duration-500 ease-out cursor-pointer hover:opacity-90 origin-center"
                            style={{
                                transform: activeIndex === i ? "scale(1.1)" : "scale(1)",
                                opacity: activeIndex === i ? 1 : 0.3,
                                filter: activeIndex === i ? "drop-shadow(0px 0px 20px rgba(0, 56, 223, 0.4))" : "none",
                                stroke: "#000",
                                strokeWidth: 0.02
                            }}
                        />
                    ))}
                    {/* Center Hole for Donut effect if desired, or solid pie */}
                </svg>
            </div>

            {/* --- Text Details Side (Right) --- */}
            <div ref={textContainerRef} className="w-full md:w-1/2 flex flex-col justify-center h-full px-8 md:px-20 relative z-10">
                {data.map((item, i) => (
                    <div
                        key={i}
                        className={`transition-all duration-500 absolute md:static top-1/2 left-8 right-8 md:top-auto md:left-auto md:right-auto -translate-y-1/2 md:translate-y-0 ${activeIndex === i ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 md:hidden'}`}
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }} />
                            <h3 className="text-[32px] md:text-[40px] font-bold text-white leading-tight">
                                {item.label}
                            </h3>
                        </div>
                        <div className="text-[60px] md:text-[80px] font-bold text-white opacity-20 mb-4 font-mono">
                            {item.percent}%
                        </div>
                        <p className="text-[18px] md:text-[20px] text-gray-300 max-w-md leading-relaxed">
                            {item.desc}
                        </p>
                        <div className="h-1 w-20 bg-gray-800 mt-8 rounded-full overflow-hidden">
                            <div className="h-full bg-white transition-all duration-300" style={{ width: activeIndex === i ? "100%" : "0%" }} />
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default DistributionPie;
