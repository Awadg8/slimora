import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Top Logo Bar */}
      <div className="w-full bg-black px-6 py-3 lg:px-16 border-b border-white/5">
        <div className="max-w-[1280px] mx-auto flex justify-between items-center">
          {/* SlimOra Logo */}
          <Image
            src="/images/logo2.png"
            alt="SlimOra Logo"
            width={157}
            height={31}
            priority
          />

          {/* Meril Logo */}
          <Image
            src="/images/meril_logo.png"
            alt="Meril Logo"
            width={111}
            height={66}
            priority
          />
        </div>
      </div>

      {/* Navigation Pill Section */}
      <div className="max-w-[1280px] flex justify-center -mb-[30px] z-50 ">
        <div className=" max-w-[952px] inline-flex items-center backdrop-blur-md px-10 pt-[18px] pb-[28px] rounded-bl-[60px] rounded-br-[60px] border border-gray-300">
          <nav className="flex items-center space-x-[80px] font-gilroy px-10">
            {/* Get Started Dropdown */}
            <div className="flex space-x-[6px] items-center">

              <button className=" flex items-center text-[#FFF] text-[20px] lg:text-[15px] font-Urbanist cursor-pointer hover:text-[#a3d43b] transition-all group">
                Get Started
              </button>
              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="5" viewBox="0 0 9 5" fill="none">
                <path d="M4.7758 4.61389C4.39167 4.97215 3.79583 4.97215 3.4117 4.61389L0.32093 1.73131C-0.342952 1.11214 0.0951777 0 1.00298 0H7.18452C8.09232 0 8.53045 1.11214 7.86657 1.73131L4.7758 4.61389Z" fill="#D9D9D9" />

              </svg>
            </div>
            <div className="flex space-x-[6px] items-center">
              {/* How it Works Dropdown */}
              <button className="flex items-center text-[#FFF] text-[20px] lg:text-[15px] font-Urbanist cursor-pointer hover:text-[#a3d43b] transition-all group">
                How it Works
              </button>
              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="5" viewBox="0 0 9 5" fill="none">
                <path d="M4.7758 4.61389C4.39167 4.97215 3.79583 4.97215 3.4117 4.61389L0.32093 1.73131C-0.342952 1.11214 0.0951777 0 1.00298 0H7.18452C8.09232 0 8.53045 1.11214 7.86657 1.73131L4.7758 4.61389Z" fill="#D9D9D9" />
              </svg>
            </div>

            {/* Blog */}
            <button className="text-[#FFF] text-[20px] lg:text-[15px] font-Urbanist cursor-pointer hover:text-[#a3d43b] transition-all">
              Blog
            </button>
            <svg xmlns="http://www.w3.org/2000/svg" width="1" height="18" viewBox="0 0 1 18" fill="none">
              <path d="M0.5 0V17.5" stroke="white" />
            </svg>

            {/* Eligibility Check */}
            <button className="text-[#FFF] text-[20px] lg:text-[15px] font-Urbanist cursor-pointer hover:text-[#a3d43b] transition-all">
              Eligibility Check
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
