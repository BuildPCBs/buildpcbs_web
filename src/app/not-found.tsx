import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100 p-4">
      <div className="relative text-center">
        <h1 className="text-9xl font-bold text-indigo-400 drop-shadow-[0_0_8px_rgba(129,140,248,0.5)]">
          404
        </h1>
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold text-gray-200 mix-blend-overlay">
          Connection Lost
        </p>
      </div>
      <div className="mt-8 text-center">
        <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-gray-400 max-w-md">
          The page you are looking for might have been moved, deleted, or maybe
          it never existed. Let's get you back on the grid.
        </p>
      </div>
      <Link
        href="/dashboard"
        className="mt-10 px-6 py-3 font-semibold text-white bg-indigo-600 rounded-md shadow-lg hover:bg-indigo-700 transition-colors duration-200 transform hover:scale-105"
      >
        Go to Dashboard
      </Link>
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        {/* Animated background circuit lines */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
    </div>
  );
}
