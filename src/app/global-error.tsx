"use client";

import { useEffect } from "react";
import { AlertCircle } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // This is a good place to log the error to a service like Sentry or LogRocket
    console.error(error);
  }, [error]);

  return (
    <html>
      <body className="bg-slate-950 text-slate-300 font-sans">
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
          <div className="text-center max-w-2xl">
            <div className="inline-block p-4 bg-red-900/30 rounded-full border border-red-800 mb-6">
              <AlertCircle className="w-16 h-16 text-red-500" />
            </div>
            <h2 className="text-4xl font-bold text-red-400 mb-4">
              System Overload Detected
            </h2>
            <p className="text-lg text-slate-400">
              A critical error occurred in one of our circuits. Our automated
              systems have been notified. Please try resetting the connection.
            </p>
          </div>
          <button
            onClick={() => reset()}
            className="mt-10 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full text-base inline-flex items-center transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-blue-600/30"
          >
            Reset Connection
          </button>
        </div>
      </body>
    </html>
  );
}
