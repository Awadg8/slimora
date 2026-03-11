import Image from "next/image";

const Journey = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Top Section - Light Background */}
      <div className="relative z-2 hidden md:block">
        <div className="relative z-0 overflow-hidden">
          <Image
            src="/images/the_technology/journey.png"
            alt="SlimOra Journey"
            width={700}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="absolute inset-0 z-10 flex items-center justify-center max-width">
          <div className="space-y-2 max-w-[700px] ml-auto">
            <h2 className="text-3xl md:text-[36px] font-bold font-urbanist text-[#8EA94D]">
              You&apos;re never alone in the SlimOra journey
            </h2>
            <p className="text-[#383838] text-base md:text-lg text-justify">
              Your care team has real-time access to your health data. That
              empowers them to adapt the programme to your individual progress,
              offering more tailored support and ensuring they&apos;re on hand
              when you need them the most.
            </p>
          </div>
        </div>
      </div>

      <div
        className="hidden md:block"
        style={{
          position: "absolute",
          top: "35%",
          right: "-30%",
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(180deg, #8EA94D 0%, #2C5D6B 100%)",
          filter: "blur(165.5px)",
          width: "800px",
          height: "370px",
          zIndex: 1,
        }}
      />

      <div className="block md:hidden">
        <div className="relative w-full h-[240px]">
          <Image
            src="/images/the_technology/journey_mobile.png"
            alt="SlimOra Journey"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-width pt-10 space-y-3">
          <h2 className="text-[19px] leading-6 text-left font-urbanist font-semibold text-[#8ea94d]">
            You're never alone in the SlimOra journey
          </h2>
          <p className="text-xs text-white text-justify">
            Your care team has real-time access to your health data. That
            empowers them to adapt the programme to your individual progress,
            offering more tailored support and ensuring they’re on hand when you
            need them the most.
          </p>
        </div>
      </div>

      {/* Bottom Section - Dark Background */}
      <div className="pt-16 md:pt-28 relative z-2">
        <div className="max-width">
          {/* Left Column */}
          <div className="flex flex-col lg:flex-row justify-between items-start mb-16 md:mb-25 gap-3 md:gap-8">
            <div className="lg:w-[45%]">
              <h2 className="text-[19px] md:text-[36px] leading-6 md:leading-[50px] text-left font-urbanist font-semibold text-[#8ea94d]">
                A library of content for you, right at your fingertips.
              </h2>
            </div>
            <div className="lg:w-[50%] md:pt-4">
              <p className="text-xs md:text-[18px] text-white text-justify">
                Get timely and relevant content through the SlimOra App such as
                pre/post-placement guidance, actionable tips, symptom management
                and more.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col-reverse lg:flex-row justify-between md:items-center mb-20 md:mb-28 gap-3 md:gap-8">
            <div className="lg:w-[50%]">
              <p className="text-xs md:text-[18px] text-white text-justify">
                Our proprietary software, developed by Allurion and powered by
                artificial intelligence, helps your care team understand your
                progress and challenges.
              </p>
              <p className="text-xs md:text-[18px] text-white text-justify pt-3">
                For you, this means more tailored support that can maximize the
                success of your weight-loss journey.
              </p>
            </div>
            <div className="lg:w-[45%]">
              <h2 className="text-[19px] md:text-[36px] leading-6 md:leading-[50px] text-left font-urbanist font-semibold text-[#8ea94d]">
                Harnessing the power of AI
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
