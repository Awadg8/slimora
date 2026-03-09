import Image from "next/image";

export const Footer = () => {
  return (
    <div className="bg-[radial-gradient(circle,#142D31,#0A1D20)]">
      <div className="max-width md:py-[37px] py-[49px]">
        <div className="flex justify-between">
          <div className="relative md:h-[46px] md:w-[165px] h-[33px] w-[119px]">
            <Image
              alt="Logo"
              src="/images/logo.svg"
              fill
              className="object-cover"
            />
          </div>
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
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-12 gap-[44px]">
          {/* Get In Touch */}
          <div>
            <h1 className="text-[#8EA94D] md:text-[20px] text-[12px] font-semibold md:mb-6 mb-2">
              Get In Touch
            </h1>
            <div className="flex gap-[19px]">
              <input
                type="email"
                placeholder="Enter Your E-mail ID"
                className="w-full bg-[#1A3438] p-[10px] text-[#FFFFFF] placeholder:text-gray-400 md:text-[12px] text-[7.48px] focus:outline-none focus:ring-1 focus:ring-[#8EA94D]"
              />
              <button className="bg-[#8EA94D] md:text-[12px] text-[7.48px] p-2.5  hover:bg-[#8fa03d] transition whitespace-nowrap">
                Submit
              </button>
            </div>
          </div>
          {/* Quick Links and Contact Us Container */}
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-12 gap-[42px]">
            {/* Quick Links */}
            <div>
              <h3 className="text-[#8EA94D] md:text-[20px] text-[12px] font-semibold md:mb-[35px] mb-[17px]">
                Quick Links
              </h3>
              <div className="flex gap-[52px]">
                <div className="space-y-[15px]">
                  <a
                    href="#"
                    className="block text-[#FFFFFF] hover:text-[#A4B84C] transition md:text-[15px] text-[12px]"
                  >
                    Get Started
                  </a>
                  <a
                    href="#"
                    className="block text-[#FFFFFF] hover:text-[#A4B84C] transition md:text-[15px] text-[12px]"
                  >
                    Am I Eligible ?
                  </a>
                  <a
                    href="#"
                    className="block text-[#FFFFFF] hover:text-[#A4B84C] transition md:text-[15px] text-[12px]"
                  >
                    Find a Clinic
                  </a>
                  <a
                    href="#"
                    className="block text-[#FFFFFF] hover:text-[#A4B84C] transition md:text-[15px] text-[12px]"
                  >
                    Blog
                  </a>
                </div>
                <div className="space-y-[15px]">
                  <a
                    href="#"
                    className="block text-[#FFFFFF] hover:text-[#A4B84C] transition  md:text-[15px] text-[12px]"
                  >
                    How It Works
                  </a>
                  <a
                    href="#"
                    className="block text-[#FFFFFF] hover:text-[#A4B84C] transition  md:text-[15px] text-[12px]"
                  >
                    The Programme
                  </a>
                  <a
                    href="#"
                    className="block text-[#FFFFFF] hover:text-[#A4B84C] transition  md:text-[15px] text-[12px]"
                  >
                    The Technology
                  </a>
                  <a
                    href="#"
                    className="block text-[#FFFFFF] hover:text-[#A4B84C] transition  md:text-[15px] text-[12px]"
                  >
                    Eligibility Check
                  </a>
                </div>
              </div>
            </div>
            {/* Contact Us */}
            <div>
              <h3 className="text-[#8EA94D] md:text-[20px] text-[12px] font-semibold md:mb-[30px] mb-[13px]">
                Contact Us
              </h3>
              <div className="md:space-y-[15px] space-y-[9px] md:text-[15px] text-[12px] text-[#FFFFFF]">
                <p>
                  E-mail:{" "}
                  <a
                    href="mailto:info@allurion.com"
                    className="hover:text-[#A4B84C] transition"
                  >
                    info@allurion.com
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a
                    href="tel:0264-xxxxx-xxx"
                    className="hover:text-[#A4B84C] transition"
                  >
                    0264-xxxxx-xxx
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:pt-[65px] pt-[32px]">
          <hr className="w-full border-[#8EA94D]" />
        </div>
        <p className="text-[#8EA94D] text-[16px] text-center md:pt-[10px] pt-[16px]">
          © SlimOra 2026
        </p>
      </div>
    </div>
  );
};
