import React from 'react';

const Quote = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="flex flex-col items-center">
        <p className="font-light text-[28px] md:text-[44px] leading-[150%] tracking-[-0.01em] text-center">
          <span className="text-[#4F4F4F] dark:text-gray-300">We recognise that each</span>
          <span className="text-[#D9D9D9] dark:text-gray-500"> client’s situation is unique and we therefore focus on providing bespoke solutions tailored to our client’s individual needs and objectives.</span>
        </p>

        <div className="flex items-center gap-4 mt-8">
          <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700"></div>
          <div className="text-right">
            <p className="font-normal text-xl text-[#D9D9D9] dark:text-gray-400">Samsudeen Afolabi</p>
            <p className="font-normal text-[13px] text-[#848484] dark:text-gray-500">Cofounder</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
