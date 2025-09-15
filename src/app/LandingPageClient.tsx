"use client";

const LandingPage = () => {
  const handleLaunchIDE = () => {
    window.location.href = 'https://ide.builpcbs.com';
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <button 
        onClick={handleLaunchIDE}
        className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
      >
        Launch IDE
      </button>
    </div>
  );
};

export default LandingPage;
