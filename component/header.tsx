"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Item = 'get-started' | 'how-it-works' | null;

const Header = () => {
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileItemOpen, setIsMobileItemOpen] = useState<Item>(null);

  return (
    <div className="w-full flex flex-col items-center sticky top-0 z-50">
      {/* Top Logo Bar */}
      <div className="w-full bg-[#0A1D20B8] py-3 lg:px-16 border-b border-white/5">
        <div className="max-width flex justify-between items-center">
          {/* SlimOra Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo.svg"
              alt="SlimOra Logo"
              width={157}
              height={31}
              className="w-[120px] lg:w-[157px] h-auto"
              priority
            />
          </Link>

          {/* Hamburger Menu (Mobile Only) */}
          <button
            className="lg:hidden flex flex-col space-y-1.5 md:p-2 z-120"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="block w-6 h-0.5 bg-white transition-all"></span>
            <span className="block w-6 h-0.5 bg-white transition-all"></span>
            <span className="block w-6 h-0.5 bg-white transition-all"></span>
          </button>

          {/* Meril Logo (Desktop Only) */}
          <div className="hidden lg:block shrink-0">
            <Image
              src="/images/meril_logo.png"
              alt="Meril Logo"
              width={111}
              height={66}
              priority
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-[59px] bottom-0 right-0 h-full w-[85%] max-w-[400px] bg-[#0000001F] z-999 transition-transform duration-500 lg:hidden flex flex-col backdrop-blur-xl
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full  overflow-hidden">
          {/* Drawer Header with Logo */}
          <Link href="/" className="px-8 pt-8 pb-12">
            <Image
              src="/images/logo.svg"
              alt="SlimOra Logo"
              width={160}
              height={32}
              className="w-[140px] h-auto"
            />
          </Link>

          {/* Menu Items */}
          <div className="flex flex-col flex-grow h-[70%] overflow-scroll">
            <div className="px-8 flex flex-col text-white font-Urbanist oveflow-y-scroll">
              {/* Get Started Dropdown */}
              <div className="border-b border-white/10">
                <button
                  className="w-full py-6 text-xl text-left flex justify-between items-center"
                  onClick={() => isMobileItemOpen === 'get-started' ? setIsMobileItemOpen(null) : setIsMobileItemOpen('get-started')}
                >
                  Get Started
                  <svg
                    className={`transition-transform duration-300 ${isMobileItemOpen === "get-started" ? "rotate-180" : ""}`}
                    xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 9 5" fill="none"
                  >
                    <path d="M4.7758 4.61389C4.39167 4.97215 3.79583 4.97215 3.4117 4.61389L0.32093 1.73131C-0.342952 1.11214 0.0951777 0 1.00298 0H7.18452C8.09232 0 8.53045 1.11214 7.86657 1.73131L4.7758 4.61389Z" fill="#D9D9D9" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isMobileItemOpen === "get-started" ? "max-h-[200px] mb-4" : "max-h-0"}`}>
                  <Link href="/get-started" className="block py-3 pl-4 text-[18px] text-white/80 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
                    Get Started
                  </Link>
                  <Link href="/am-i-eligible" className="block py-3 pl-4 text-[18px] text-white/80 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
                    Am I Eligible?
                  </Link>
                </div>
              </div>

              {/* How it Works Dropdown */}
              <div className="border-b border-white/10">
                <button
                  className="w-full py-6 text-xl text-left flex justify-between items-center"
                  onClick={() => isMobileItemOpen === 'how-it-works' ? setIsMobileItemOpen(null) : setIsMobileItemOpen('how-it-works')}

                >
                  How it Works?
                  <svg
                    className={`transition-transform duration-300 ${isMobileItemOpen === "how-it-works" ? "rotate-180" : ""}`}
                    xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 9 5" fill="none"
                  >
                    <path d="M4.7758 4.61389C4.39167 4.97215 3.79583 4.97215 3.4117 4.61389L0.32093 1.73131C-0.342952 1.11214 0.0951777 0 1.00298 0H7.18452C8.09232 0 8.53045 1.11214 7.86657 1.73131L4.7758 4.61389Z" fill="#D9D9D9" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isMobileItemOpen === "how-it-works" ? "max-h-[300px] mb-4" : "max-h-0"}`}>
                  <Link href="/how-it-works" className="block py-3 pl-4 text-[18px] text-white/80 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
                    How it Works
                  </Link>
                  <Link href="/the-programme" className="block py-3 pl-4 text-[18px] text-white/80 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
                    The Programme
                  </Link>
                  <Link href="/the-technology" className="block py-3 pl-4 text-[18px] text-white/80 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
                    The Technology
                  </Link>
                </div>
              </div>

              <Link href="/blog" className="py-6 text-xl text-left border-b border-white/10" onClick={() => setIsMobileMenuOpen(false)}>
                Blogs
              </Link>

              <Link href="/eligibility-check" className="py-6 text-xl text-left border-b border-white/10" onClick={() => setIsMobileMenuOpen(false)}>
                Eligibility Check
              </Link>

              <Link href="/find-a-clinic" className="py-6 text-xl text-left border-b border-white/10" onClick={() => setIsMobileMenuOpen(false)}>
                Find Clinic
              </Link>
            </div>
          </div>

          {/* Footer Items */}
          <div className="px-8 py-12 flex flex-col items-center space-y-8 mb-6">
            <div className="flex space-x-6 items-center">
              {/* LinkedIn Icon */}
              <a href="#" className="text-white hover:text-[#a3d43b] transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              {/* YouTube Icon */}
              <a href="#" className="text-white hover:text-[#a3d43b] transition-colors">
                <svg width="30" height="24" viewBox="0 0 28 20" fill="currentColor">
                  <path d="M27.973 3.923c-.33-1.233-1.299-2.202-2.53-2.533C23.21 1 14 1 14 1s-9.21 0-11.443.39c-1.231.331-2.2 1.3-2.531 2.533C0 6.155 0 10.835 0 10.835s0 4.68.39 6.912c.33 1.232 1.3 2.201 2.531 2.532 2.233.391 11.443.391 11.443.391s9.21 0 11.44.391c1.232-.331 2.2-1.3 2.532-2.532.39-2.232.39-6.912.39-6.912s0-4.68-.39-6.912zM11.232 14.18V7.491l5.887 3.345-5.887 3.345z" />
                </svg>
              </a>
            </div>
            <p className="text-white/60 font-Urbanist text-sm">
              Copyright © 2025 Meril
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Pill Section (Desktop Only) */}
      <div className="hidden absolute top-[78.4px] left-[50%] translate-x-[-50%] lg:flex max-w-[1280px] justify-center z-100 ">
        <div className=" max-w-[952px] inline-flex items-center backdrop-blur-md px-10 py-6 rounded-bl-[60px] rounded-br-[60px] border border-white/10">
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
                  className=" flex items-center text-[#FFF] text-[20px] lg:text-[15px] font-Urbanist pointer-events-none hover:text-[#a3d43b] transition-all whitespace-nowrap"
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
              <div
                className={`absolute pt-7 -left-5 w-[172px] z-50 transition-all duration-500 ease-in-out grid
                  ${isGetStartedOpen ? "grid-rows-[1fr] opacity-100 visible translate-y-0" : "grid-rows-[0fr] opacity-0 invisible -translate-y-2"}`}
              >
                <div className="overflow-hidden bg-[#143338] border border-white/10 shadow-2xl theme-font">
                  <div className="flex flex-col">
                    <Link href="/get-started" className="px-6 py-4 cursor-pointer text-left text-white font-Urbanist text-[18px] hover:bg-white/10 transition-colors border-b border-white/5">
                      Get Started
                    </Link>
                    <Link href="/am-i-eligible" className="px-6 py-4 cursor-pointer text-left text-white font-Urbanist text-[18px] hover:bg-white/10 transition-colors">
                      Am I Eligible?
                    </Link>
                  </div>
                </div>
              </div>
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
                  className="flex items-center text-[#FFF] text-[20px] lg:text-[15px] font-Urbanist pointer-events-none hover:text-[#a3d43b] transition-all whitespace-nowrap"
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
              <div
                className={`absolute pt-7 -left-5 w-[172px] z-50 transition-all duration-500 ease-in-out grid
                  ${isHowItWorksOpen ? "grid-rows-[1fr] opacity-100 visible translate-y-0" : "grid-rows-[0fr] opacity-0 invisible -translate-y-2"}`}
              >
                <div className="overflow-hidden bg-[#143338] border border-white/10 shadow-2xl theme-font">
                  <div className="flex flex-col">
                    <Link href="/how-it-works" className="px-6 py-4 cursor-pointer text-left text-white font-Urbanist text-[16px] hover:bg-white/10 transition-colors border-b border-white/5">
                      How it Works
                    </Link>
                    <Link href="/the-programme" className="px-6 py-4 cursor-pointer text-left text-white font-Urbanist text-[16px] hover:bg-white/10 transition-colors border-b border-white/5">
                      The Programme
                    </Link>
                    <Link href="/the-technology" className="px-6 py-4 cursor-pointer text-left text-white font-Urbanist text-[16px] hover:bg-white/10 transition-colors">
                      The Technology
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog */}
            <Link href="/blog" className="text-[#FFF] text-[20px] lg:text-[15px] font-Urbanist cursor-pointer hover:text-[#a3d43b] transition-all">
              Blog
            </Link>
            <svg xmlns="http://www.w3.org/2000/svg" width="1" height="18" viewBox="0 0 1 18" fill="none">
              <path d="M0.5 0V17.5" stroke="white" />
            </svg>

            {/* Eligibility Check */}
            <Link href="/eligibility-check" className="text-[#FFF] text-[20px] lg:text-[15px] font-Urbanist cursor-pointer hover:text-[#a3d43b] transition-all whitespace-nowrap">
              Eligibility Check
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;


