"use client";
import Image from "next/image";
import CtaButton from "@/component/ctaButton";
import Interaction from "./microInteraction";
import Interaction2 from "./microInteraction2";
import Interaction3 from "./microInteraction3";

const ReadyToTake = () => {
  return (
    <section className="relative overflow-hidden pt-60 pb-60 z-30">
      <div className="absolute inset-0">
        <Image
          src="/images/home/ready_to_step.png"
          alt="Ready to take the 1st step"
          fill
          className="hidden md:block object-cover"
        />
        <Image
          src="/images/home/ready_to_step03.png"
          alt="Ready to take the 1st step"
          fill
          className="block md:hidden object-cover"
        />
      </div>
      <div className="relative z-10 max-width flex flex-col items-center text-center">
        <Interaction>
          <h2 className="text-[22px] sm:text-3xl md:text-[50px] font-bold font-urbanist text-white mb-[7px] leading-tight">
            Ready to take the 1st step?
          </h2>
        </Interaction>
        <Interaction2>
          <p className="text-[#cfcfcf] text-[12px] sm:text-lg font-light md:text-[20px] mb-[28px] max-w-[700px]">
            We recommend checking if you're eligible before contacting a clinic
          </p>
        </Interaction2>
        <Interaction3>
          <CtaButton
            href="/eligibility-check"
            className="hover:bg-button-bg/90 px-10 py-4 font-semibold transition-all shadow-lg text-[12px] sm:text-[20px]"
            text="Check Eligibility"
            type="link"
          />
        </Interaction3>
      </div>
    </section>
  );
};

export default ReadyToTake;
