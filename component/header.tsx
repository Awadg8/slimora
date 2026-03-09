"use client";
import React, { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState(false);

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
      <div className="max-w-[1280px] flex justify-center -mb-[30px] z-100 ">
        <div className=" max-w-[952px] inline-flex items-center backdrop-blur-md px-10 pt-[18px] pb-[28px] rounded-bl-[60px] rounded-br-[60px] border border-gray-300">
          <nav className="flex items-center space-x-[80px] font-gilroy px-10">
            {/* Get Started Dropdown */}
            <div
              className="relative group"
              onMouseLeave={() => setIsGetStartedOpen(false)}
            >
              <div
                className="flex space-x-[6px] items-center cursor-pointer"
                onClick={() => setIsGetStartedOpen(!isGetStartedOpen)}
              >
                <button
                  className=" flex items-center text-[#FFF] text-[20px] lg:text-[15px] font-Urbanist pointer-events-none hover:text-[#a3d43b] transition-all"
                >
                  Get Started
                </button>
                <svg
                  className={`transition-transform duration-300 ${isGetStartedOpen ? "rotate-180" : ""}`}
                  xmlns="http://www.w3.org/2000/svg" width="9" height="5" viewBox="0 0 9 5" fill="none"
                >
                  <path d="M4.7758 4.61389C4.39167 4.97215 3.79583 4.97215 3.4117 4.61389L0.32093 1.73131C-0.342952 1.11214 0.0951777 0 1.00298 0H7.18452C8.09232 0 8.53045 1.11214 7.86657 1.73131L4.7758 4.61389Z" fill="#D9D9D9" />
                </svg>
              </div>

              {/* Get Started Dropdown Menu */}
              {isGetStartedOpen && (
                <div className="absolute top-9 -left-5 pt-4 w-[172px] z-50">
                  <div className="bg-[#0F2F2F] border border-white/10 overflow-hidden shadow-2xl">
                    <div className="flex flex-col">
                      <button className="px-6 py-4 text-left text-white font-Urbanist text-[16px] hover:bg-white/10 transition-colors border-b border-white/5">
                        Get Started
                      </button>
                      <button className="px-6 py-4 text-left text-white font-Urbanist text-[16px] hover:bg-white/10 transition-colors">
                        Am I Eligible?
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* How it Works Dropdown */}
            <div
              className="relative group"
              onMouseLeave={() => setIsHowItWorksOpen(false)}
            >
              <div
                className="flex space-x-[6px] items-center cursor-pointer"
                onClick={() => setIsHowItWorksOpen(!isHowItWorksOpen)}
              >
                <button
                  className="flex items-center text-[#FFF] text-[20px] lg:text-[15px] font-Urbanist pointer-events-none hover:text-[#a3d43b] transition-all"
                >
                  How it Works
                </button>
                <svg
                  className={`transition-transform duration-300 ${isHowItWorksOpen ? "rotate-180" : ""}`}
                  xmlns="http://www.w3.org/2000/svg" width="9" height="5" viewBox="0 0 9 5" fill="none"
                >
                  <path d="M4.7758 4.61389C4.39167 4.97215 3.79583 4.97215 3.4117 4.61389L0.32093 1.73131C-0.342952 1.11214 0.0951777 0 1.00298 0H7.18452C8.09232 0 8.53045 1.11214 7.86657 1.73131L4.7758 4.61389Z" fill="#D9D9D9" />
                </svg>
              </div>

              {/* How it Works Dropdown Menu */}
              {isHowItWorksOpen && (
                <div className="absolute top-9 -left-5 pt-4 w-[172px] z-50">
                  <div className="bg-[#0F2F2F] border border-white/10 overflow-hidden shadow-2xl">
                    <div className="flex flex-col">
                      <button className="px-6 py-4 text-left text-white font-Urbanist text-[16px] hover:bg-white/10 transition-colors border-b border-white/5">
                        How it Works
                      </button>
                      <button className="px-6 py-4 text-left text-white font-Urbanist text-[16px] hover:bg-white/10 transition-colors border-b border-white/5">
                        The Programme
                      </button>
                      <button className="px-6 py-4 text-left text-white font-Urbanist text-[16px] hover:bg-white/10 transition-colors">
                        The Technology
                      </button>
                    </div>
                  </div>
                </div>
              )}
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

