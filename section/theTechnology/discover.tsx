import React from "react";
import Image from "next/image";

const Discover = () => {
  return (
    <section className=" text-white px-6 overflow-hidden">
      <div className="max-width relative">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-[50px] font-urbanist font-bold text-center mb-50">
          Discover the SlimOra Virtual Care Suite
        </h2>

        {/* Feature 1: Connected Scale */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20 mb-40">
          <div className="w-full md:w-1/2">
            <div className="relative rounded-[24px] overflow-hidden">
              <Image
                src="/images/the_technology/scale.png"
                alt="SlimOra Connected Scale"
                width={520}
                height={480}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-5">
            <h3 className="text-2xl md:text-[40px] font-urbanist font-bold">
              SlimOra Connected Scale
            </h3>
            <p className="text-[#B5B5B5] text-base md:text-lg text-justify lg:max-w-[95%]">
              The SlimOra Connected Scale offers a complete weight tracking
              experience, allowing you to monitor your weight, BMI and body
              composition with ease. Stay motivated as you witness tangible
              results and make informed decisions about your health. The scale
              syncs seamlessly with the SlimOra App.
            </p>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "-40%",
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(180deg, #8EA94D 0%, #2C5D6B 100%)",
            filter: "blur(165.5px)",
            width: "800px",
            height: "370px",
            zIndex: 0,
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "-40%",
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(180deg, #8EA94D 0%, #2C5D6B 100%)",
            filter: "blur(165.5px)",
            width: "800px",
            height: "370px",
            zIndex: 0,
          }}
        ></div>

        {/* Feature 2: Application */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 lg:gap-20 mb-10">
          <div className="w-full md:w-1/2">
            <div className="relative overflow-hidden">
              <Image
                src="/images/the_technology/application.png"
                alt="SlimOra Application"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-5">
            <h3 className="text-2xl md:text-[40px] font-urbanist font-bold">
              SlimOra Application
            </h3>
            <p className="text-[#B5B5B5] text-base md:text-lg text-justify lg:max-w-[95%]">
              With the SlimOra App, view all your trends at a glance, monitor
              your progress, and stay connected with your care team via instant
              messaging or 1:1 video telehealth. Reach out for day-to-day
              advice, ask for information on nutrition, enjoy personalized
              content. Works with Apple Health (iOS) and Health Connect
              (Android), so you can record your activity and sleep data using
              your favourite tracker.
            </p>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "-25%",
            left: "-40%",
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(180deg, #8EA94D 0%, #2C5D6B 100%);",
            filter: "blur(165.5px)",
            width: "800px",
            height: "370px",
            zIndex: 0,
          }}
        ></div>
      </div>
    </section>
  );
};

export default Discover;
