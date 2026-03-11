import React from "react";

const CuttingEdge = () => {
  return (
    <section className="text-white pt-20 md:pt-25 md:pb-40">
      <div className="max-width">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-20 md:mb-50 md:gap-8">
          <div className="w-full md:w-[48%]">
            <h2 className="text-[24px] md:text-[50px] leading-6 md:leading-[50px] text-center md:text-right font-urbanist font-semibold text-[#8ea94d]">
              Cutting-Edge Digital Tools
              <br />
              <span className="text-white text-[18px] md:text-[36px]">
                for Weight-Loss Success.
              </span>
            </h2>
          </div>
          <div className="lg:w-[45%] pt-4">
            <p className="text-xs md:text-[20px] text-white text-justify">
              The <span className="text-[#8ea94d]">SlimOra</span> Programme
              combines medical expertise,{" "}
              <span className="text-[#8ea94d]">personalised</span> nutrition
              coaching, and a powerful suite of{" "}
              <span className="text-[#8ea94d]">digital tools</span> to help
              losing weight.
            </p>
          </div>
        </div>
      </div>

      {/* Top Olive Bar */}
      <div className="bg-[#5C6B35] py-5 md:py-6 px-6 md:px-8 flex justify-center">
        <p className="text-xs md:text-lg text-white text-justify">
          The SlimOra Programme combines medical expertise, personalised
          nutrition coaching, and a powerful suite of digital tools to help
          losing weight.
        </p>
      </div>

      {/* Video Section */}
      <div className="flex justify-center bg-black/20">
        <div className="w-full h-[320px] md:h-[600px] max-w-[80%] md:max-w-[600px] aspect-video relative overflow-hidden">
          <video
            src="/videos/video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Bottom Olive Bar */}
      <div className="bg-[#5C6B35] py-5 md:py-6 px-6 md:px-8 flex justify-center">
        <p className="text-xs md:text-lg text-white text-justify">
          Elevate your weight-loss journey with the unique capabilities of our
          proprietary technology, driven by artificial intelligence.
        </p>
      </div>
    </section>
  );
};

export default CuttingEdge;
