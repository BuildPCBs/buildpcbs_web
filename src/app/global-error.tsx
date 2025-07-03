"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-gray-100 p-4">
          <div className="text-center">
            <svg
              className="w-20 h-20 mx-auto text-red-500 animate-pulse"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              ></path>
            </svg>
            <h2 className="mt-6 text-4xl font-bold text-red-400">
              A Fuse Has Blown!
            </h2>
            <p className="mt-4 text-gray-300 max-w-lg">
              Something went wrong on our end. We've been notified and are
              working to fix the circuit.
            </p>
            {process.env.NODE_ENV === "development" && (
              <details className="mt-4 p-3 bg-gray-900/50 rounded-md text-left text-sm text-red-300">
                <summary className="cursor-pointer font-medium">
                  Error Details
                </summary>
                <p className="mt-2 whitespace-pre-wrap">
                  {error?.message}
                  {error?.digest && `\nDigest: ${error.digest}`}
                </p>
              </details>
            )}
          </div>
          <button
            onClick={() => reset()}
            className="mt-10 px-6 py-3 font-semibold text-white bg-blue-600 rounded-md shadow-lg hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
