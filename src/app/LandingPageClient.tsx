"use client";

const LandingPage = () => {
  const handleLaunchIDE = () => {
    window.open("https://ide.buildpcbs.com", "_blank");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <button
        onClick={handleLaunchIDE}
        className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 cursor-pointer"
      >
        Launch IDE
      </button>
    </div>
  );
};

export default LandingPage;
