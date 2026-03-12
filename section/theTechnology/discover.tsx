import Image from "next/image";

const Discover = () => {
  return (
    <section className="overflow-hidden">
      <div className="max-width relative pt-18 md:pt-0">
        {/* Main Heading */}
        <h2 className="text-2xl md:text-[50px] font-urbanist font-bold text-center mb-20 md:mb-50">
          Discover the SlimOra Virtual Care Suite
        </h2>

        <div
          className="block md:hidden"
          style={{
            position: "absolute",
            top: "2%",
            right: "-20%",
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(180deg, #8EA94D 0%, #2C5D6B 100%)",
            filter: "blur(165.5px)",
            width: "260px",
            height: "220px",
            zIndex: 0,
          }}
        />

        <div
          className="block md:hidden"
          style={{
            position: "absolute",
            top: "35%",
            left: "0",
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(180deg, #8EA94D 0%, #2C5D6B 100%)",
            filter: "blur(165.5px)",
            width: "260px",
            height: "220px",
            zIndex: 0,
          }}
        />

        <div
          className="block md:hidden"
          style={{
            position: "absolute",
            bottom: "-10%",
            right: "-10%",
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(180deg, #8EA94D 0%, #2C5D6B 100%)",
            filter: "blur(165.5px)",
            width: "260px",
            height: "220px",
            zIndex: 0,
          }}
        />

        {/* Feature 1: Connected Scale */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-20 mb-15 md:mb-40">
          <div className="w-full md:w-1/2">
            <div className="relative rounded-[20px] md:rounded-[24px] overflow-hidden h-[260px] md:h-[480px]">
              <Image
                src="/images/the_technology/scale.png"
                alt="SlimOra Connected Scale"
                width={520}
                height={480}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-3 md:space-y-5">
            <h3 className="text-xl md:text-[40px] font-urbanist text-center md:text-left font-bold">
              SlimOra Connected Scale
            </h3>
            <p className="text-[#B5B5B5] text-base md:text-lg leading-5 md:leading-7 text-justify lg:max-w-[95%]">
              The SlimOra Connected Scale offers a complete weight tracking
              experience, allowing you to monitor your weight, BMI and body
              composition with ease. Stay motivated as you witness tangible
              results and make informed decisions about your health. The scale
              syncs seamlessly with the SlimOra App.
            </p>
          </div>
        </div>

        <div
          className="hidden md:block"
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
          className="hidden md:block"
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
        <div className="flex flex-col md:flex-row-reverse items-center justify-between md:gap-20 mb-20 md:mb-10">
          <div className="w-full md:w-1/2">
            <div className="relative overflow-hidden mx-auto h-[320px] md:h-[600px] w-[270px] md:w-[600px]">
              <Image
                src="/images/the_technology/application.png"
                alt="SlimOra Application"
                fill
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-3 md:space-y-5">
            <h3 className="text-xl md:text-[40px] text-center md:text-left font-urbanist font-bold">
              SlimOra Application
            </h3>
            <p className="text-[#B5B5B5] text-base md:text-lg leading-5 md:leading-7  text-justify lg:max-w-[95%]">
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
          className="hidden md:block"
          style={{
            position: "absolute",
            bottom: "-25%",
            left: "-40%",
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(180deg, #8EA94D 0%, #2C5D6B 100%)",
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
