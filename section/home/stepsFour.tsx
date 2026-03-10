import StepCard from "@/component/stepCard";
import CtaButton from "@/component/ctaButton";
import Image from "next/image";

export default function StepsFour() {
  return (
    <div className="bg-[#0A1D20]">
      <div className="max-width">
        <div className="md:pt-[136px] pt-[80px] md:pb-[78px] pb-[46px]">
          <h4 className="text-[25px] md:text-[40px] leading-[30px] md:leading-[45px] font-bold text-[#FFFFFF] max-w-[750px]">
            <span>4 steps to kickstart your personalized weight-loss journey with </span>
            <Image
              src="/images/logo.svg"
              alt="SlimOra Logo"
              width={120}
              height={31}
              className="inline-block w-[100px] sm:w-[120px] lg:w-[157px] h-auto align-middle"
              priority
            />
            <span> Gastric Balloon Systems</span>
          </h4>
        </div>
        <StepCard />
        <div className="flex justify-center md:mb-[90px] mb-[34px] mt-[42px]">
          <CtaButton
            text="Find a Clinic"
            className="text-[16px] lg:text-[20px] font-medium md:w-[588px] w-full"
            type="link"
            href="#"
          />
        </div>
      </div>
    </div>
  )
}
