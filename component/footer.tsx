"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Interaction from "./microInteraction";
import Interaction2 from "./microInteraction2";

const navLinks1 = [
  {
    title: "Get Started",
    href: "/get-started",
  },
  {
    title: "Am I Eligible ?",
    href: "/am-i-eligible",
  },
  {
    title: "Find a Clinic",
    href: "/find-a-clinic",
  },
  {
    title: "Blog",
    href: "/blog",
  },
   {
    title: "Learn More",
    href: "/learn-more",
  },
];

const navLinks2 = [
  {
    title: "How It Works",
    href: "/how-it-works",
  },
  {
    title: "The Programme",
    href: "/the-programme",
  },
  {
    title: "The Technology",
    href: "/the-technology",
  },
  {
    title: "Eligibility Check",
    href: "/eligibility-check",
  },
  {
    title: "Become Partner",
    href: "/become-partner",
  },
];

const Footer = () => {
  return (
    <div>
      <div className="bg-[radial-gradient(circle,#142D31,#0A1D20)]">
        <div className="max-width md:py-[37px] py-[49px]">
          <div className="flex justify-between">
            <Link
              href="/"
              className="relative md:h-[46px] md:w-[165px] h-[33px] w-[119px]"
            >
              <Image
                alt="Logo"
                src="/images/logo.svg"
                fill
                className="object-cover"
              />
            </Link>

            <div className="relative md:h-[61px] md:w-[125px] w-[80px] h-[38px]">
              <Image
                alt="Logo"
                src="/images/meril_logo.png"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:pt-[52px] pt-[23px] md:pb-[39px] pb-[48px]">
            <hr className="w-full border-[#8EA94D]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-10 md:gap-12 gap-[44px]">
            {/* Get In Touch */}
            <div className="md:col-span-4">
              <h1 className="text-[#8EA94D] md:text-[20px] text-[12px] font-semibold md:mb-6 mb-2">
                Get In Touch
              </h1>
              <div className="flex gap-[19px]">
                <input
                  type="email"
                  placeholder="Enter Your E-mail ID"
                  className="w-full bg-[#1A3438] p-2 md:p-[10px] text-[#FFFFFF] placeholder:text-gray-400 md:text-[12px] text-[7.48px] focus:outline-none focus:ring-1 focus:ring-[#8EA94D]"
                />
                <button className="bg-[#8EA94D] md:text-[12px] text-[8px] p-2 md:p-2.5 hover:bg-[#8fa03d] transition whitespace-nowrap">
                  Submit
                </button>
              </div>
            </div>

            {/* Quick Links and Contact Us Container */}
            <div className="md:col-span-6">
              <div className="flex flex-col md:flex-row justify-center md:gap-20 gap-[42px]">
                {/* Quick Links */}
                <div>
                  <h3 className="text-[#8EA94D] md:text-[20px] text-[12px] font-semibold md:mb-[35px] mb-[17px]">
                    Quick Links
                  </h3>
                  <div className="flex md:justify-center gap-12">
                    <div className="space-y-[15px]">
                      {navLinks1.map((link, index) => (
                        <motion.div
                          initial={{ opacity: 0, y: 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            ease: "easeInOut",
                            duration: 0.5,
                            delay: index * 0.15,
                          }}
                          key={index}
                        >
                          <Link
                            href={link.href}
                            className="block text-[#FFFFFF] hover:text-[#A4B84C] transition md:text-[15px] text-[12px]"
                          >
                            {link.title}
                          </Link>
                        </motion.div>
                      ))}
                    </div>

                    <div className="space-y-[15px]">
                      {navLinks2.map((link, index) => (
                        <motion.div
                          initial={{ opacity: 0, y: 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            ease: "easeInOut",
                            duration: 0.5,
                            delay: index * 0.25,
                          }}
                          key={index}
                        >
                          <Link
                            href={link.href}
                            className="block text-[#FFFFFF] hover:text-[#A4B84C] transition md:text-[15px] text-[12px]"
                          >
                            {link.title}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contact Us */}
                <div>
                  <h3 className="text-[#8EA94D] md:text-[20px] text-[12px] font-semibold md:mb-[30px] mb-[13px]">
                    Contact Us
                  </h3>
                  <div className="md:space-y-[15px] space-y-[9px] md:text-[15px] text-[12px] text-[#FFFFFF]">
                    <Interaction>
                      <p>
                        E-mail:{" "}
                        <a
                          href="mailto:info@allurion.com"
                          className="hover:text-[#A4B84C] transition"
                        >
                          info@allurion.com
                        </a>
                      </p>
                    </Interaction>
                    <Interaction2>
                      <p>
                        Phone:{" "}
                        <a
                          href="tel:+91 2603 509 400"
                          className="hover:text-[#A4B84C] transition"
                        >
                          +91 2603 509 400
                        </a>
                      </p>
                    </Interaction2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:pt-[65px] pt-[32px]">
            <hr className="w-full border-[#8EA94D]" />
          </div>
          <div className="flex justify-between items-center pt-4">
            <Image
              src="/images/digital_experience33.png"
              alt=""
              width={200}
              height={35}
              className="w-[84px] sm:w-[200px] h-[15px] sm:h-[35px]"
            />
            <p className="text-[#8EA94D] text-[16px] text-center md:pt-[10px] pt-[16px]">
              © SlimOra 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
