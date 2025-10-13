import React from 'react';
import Image from 'next/image';

const Partners = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-2xl font-normal text-center text-[#777777] dark:text-gray-400">
          Partners
        </h2>
        <div className="flex items-center justify-center gap-12 md:gap-16">
          <Image 
            src="/figure.png"
            alt="Figure logo"
            width={120}
            height={37}
            className="dark:invert"
          />
          <Image 
            src="/Zte.png"
            alt="ZTE logo"
            width={71}
            height={37}
            className="dark:invert"
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;
