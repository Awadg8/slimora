import Image from "next/image";
import CtaButton from "@/component/ctaButton";
import Questions from '@/section/am-i-eligible/questions';

export default function GastricBalloon() {
  return (
    <div className="py-20 sm:py-30 lg:py-50 relative overflow-hidden">
      <div
        className="hidden lg:block"
        style={{
          position: "absolute",
          top: "60%",
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
        className="hidden lg:block"
        style={{
          position: "absolute",
          top: "60%",
          right: "-40%",
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(180deg, #8EA94D 0%, #2C5D6B 100%)",
          filter: "blur(165.5px)",
          width: "800px",
          height: "370px",
          zIndex: 0,
        }}
      ></div>
      <div className="pb-30 lg:pb-50">
        <Questions />
      </div>
      <div className="max-width flex flex-col lg:flex-row items-center justify-between gap-8 ">

        {/* Left Section - Text  */}
        <div className=" lg:w-[25%] z-1">
          <p className="text-[12px] sm:text-[18px] text-center text-[#B5B5B5] ">
            <span className="font-bold ">The SlimOra Gastric Balloon </span> is a regulated health product that bears the CE marking in accordance with this regulation.
          </p>
        </div>

        {/* Center Section - Image with Button */}
        <div className="relative lg:w-[50%]">
          <div className="relative rounded-[22px] md:rounded-[44px] overflow-hidden">
            <Image
              src="/images/get_started/learn_more.jpg"
              alt="SlimOra Gastric Balloon"
              width={695}
              height={386}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <CtaButton text="Learn More" type="link" href="/learn-more" className="w-62.5 text-[18px] font-medium" />
            </div>
          </div>
        </div>

        {/* Right Section - Text */}
        <div className="lg:w-[25%] z-1">
          <p className="text-[12px] sm:text-[18px] text-center text-[#B5B5B5]">
            To learn more about the <span className="font-bold">SlimOra Gastric Balloon,</span> assess the risks and benefits of this solution, read the important safety information, and discuss it with your doctor.
          </p>
        </div>
      </div>
    </div >
  )
}