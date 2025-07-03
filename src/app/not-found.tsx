"use client";
import Link from "next/link";
import {
  CircuitBoard,
  ArrowLeft,
  Zap,
  WifiOff,
  Cpu,
  Binary,
  Server,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    return () => setIsAnimating(false);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-gray-100 p-4 font-sans overflow-hidden relative">
      {/* Circuit Board Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-[length:40px_40px]"></div>

        {/* Animated Circuit Paths */}
        <div
          className={`absolute top-1/4 left-1/4 w-1/3 h-1 border-t-2 border-dashed border-teal-400/50 ${
            isAnimating ? "animate-circuit-path-1" : ""
          }`}
        ></div>
        <div
          className={`absolute top-1/3 right-1/4 w-1/4 h-1 border-t-2 border-dashed border-blue-400/50 ${
            isAnimating ? "animate-circuit-path-2" : ""
          }`}
        ></div>
        <div
          className={`absolute bottom-1/3 left-1/3 w-1/5 h-1 border-t-2 border-dashed border-amber-400/50 ${
            isAnimating ? "animate-circuit-path-3" : ""
          }`}
        ></div>

        {/* Glowing Nodes */}
        <div className="absolute top-[30%] left-[40%] w-4 h-4 rounded-full bg-teal-400/20 shadow-[0_0_15px_5px_rgba(20,184,166,0.3)] animate-pulse"></div>
        <div className="absolute top-[45%] left-[60%] w-3 h-3 rounded-full bg-blue-400/20 shadow-[0_0_12px_4px_rgba(59,130,246,0.3)] animate-pulse delay-300"></div>
        <div className="absolute bottom-[35%] left-[25%] w-3 h-3 rounded-full bg-amber-400/20 shadow-[0_0_12px_4px_rgba(245,158,11,0.3)] animate-pulse delay-700"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-2xl">
        {/* Animated Circuit Board */}
        <div className="relative mx-auto w-64 h-64 mb-10">
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={`relative ${isAnimating ? "animate-pulse-slow" : ""}`}
            >
              <CircuitBoard
                className="text-slate-700"
                size={200}
                strokeWidth={1}
              />

              {/* Glowing 404 */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-8xl font-bold text-teal-400 drop-shadow-[0_0_15px_rgba(20,184,166,0.7)]">
                  404
                </div>
              </div>

              {/* Faulty Components */}
              <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_3px_rgba(239,68,68,0.7)] animate-ping"></div>
              <div className="absolute bottom-1/3 right-1/4 w-4 h-4 rounded-lg bg-amber-500/80 rotate-45"></div>
              <div className="absolute top-1/3 right-1/3 w-2 h-6 bg-slate-400"></div>
            </div>
          </div>

          {/* Floating Chips */}
          <div
            className={`absolute top-0 left-0 w-8 h-8 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center ${
              isAnimating ? "animate-float-1" : ""
            }`}
          >
            <Cpu className="text-blue-400" size={16} />
          </div>
          <div
            className={`absolute bottom-0 right-0 w-8 h-8 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center ${
              isAnimating ? "animate-float-2" : ""
            }`}
          >
            <Binary className="text-teal-400" size={16} />
          </div>
          <div
            className={`absolute top-0 right-10 w-8 h-8 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center ${
              isAnimating ? "animate-float-3" : ""
            }`}
          >
            <Server className="text-amber-400" size={16} />
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-3xl font-semibold mb-4 text-white flex items-center justify-center gap-2">
            <WifiOff className="text-red-400" size={28} />
            Connection Lost in the Ether
          </h2>
          <p className="text-lg text-slate-400 mb-6">
            The circuit path you're trying to reach seems to be on a different
            frequency. Let's get you back to a known connection point.
          </p>

          <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 max-w-md mx-auto mb-8">
            <h3 className="text-slate-300 font-medium mb-2 flex items-center gap-2">
              <Zap className="text-amber-400" size={18} />
              Troubleshooting Tips
            </h3>
            <ul className="text-left text-slate-400 text-sm space-y-1 pl-6">
              <li className="list-disc">Check your connection stability</li>
              <li className="list-disc">Verify the circuit path integrity</li>
              <li className="list-disc">Ensure proper signal routing</li>
              <li className="list-disc">Reboot your design environment</li>
            </ul>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="bg-gradient-to-r from-teal-600 to-teal-800 hover:from-teal-500 hover:to-teal-700 text-white font-bold py-3 px-8 rounded-full text-base inline-flex items-center transform hover:scale-105 transition-all duration-300 shadow-xl shadow-teal-600/20"
            >
              <ArrowLeft className="mr-2" size={18} />
              Return to Home Base
            </Link>

            <Link
              href="/docs"
              className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-8 rounded-full text-base inline-flex items-center transform hover:scale-105 transition-all duration-300 border border-slate-700"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes circuit-path-1 {
          0% {
            width: 0;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            width: 33%;
          }
        }

        @keyframes circuit-path-2 {
          0% {
            width: 0;
            opacity: 0;
          }
          20% {
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          100% {
            width: 25%;
          }
        }

        @keyframes circuit-path-3 {
          0% {
            width: 0;
            opacity: 0;
          }
          40% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            width: 20%;
          }
        }

        @keyframes float-1 {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-10px, -15px);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        @keyframes float-2 {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(15px, 10px);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        @keyframes float-3 {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(5px, -20px);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        @keyframes pulse-slow {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0.8;
          }
        }

        .animate-circuit-path-1 {
          animation: circuit-path-1 3s ease-in-out forwards;
        }

        .animate-circuit-path-2 {
          animation: circuit-path-2 3s ease-in-out forwards;
          animation-delay: 0.5s;
        }

        .animate-circuit-path-3 {
          animation: circuit-path-3 3s ease-in-out forwards;
          animation-delay: 1s;
        }

        .animate-float-1 {
          animation: float-1 4s ease-in-out infinite;
        }

        .animate-float-2 {
          animation: float-2 5s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        .animate-float-3 {
          animation: float-3 6s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
