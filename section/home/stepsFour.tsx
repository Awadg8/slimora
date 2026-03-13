"use client"
import StepCard from "@/component/stepCard";
import CtaButton from "@/component/ctaButton";
import Interaction from "@/component/microInteraction";
import Interaction3 from "@/component/microInteraction3";
import { usePathname } from "next/navigation";

export default function StepsFour() {
  const pathname = usePathname();
  return (
    <div className="max-width">
      <div className="md:pb-[78px] pb-[46px]">
        <Interaction>
          <h4 className="text-[25px] md:text-[40px] leading-[30px] md:leading-[45px] font-bold text-[#FFFFFF] max-w-[750px]">
            4 steps to kickstart your personalized weight-loss journey with
            SlimOra<span className="font-thin">™</span> Gastric Balloon Systems
          </h4>
        </Interaction>
      </div>
      <StepCard />
      {
        pathname !== "/find-a-clinic" &&
        <div className="flex justify-center mt-[42px]">
          <Interaction3>
            <CtaButton
              text="Find a Clinic"
              className="text-[16px] lg:text-[20px] font-medium w-[300px] sm:w-[588px]"
              type="link"
              href="/find-a-clinic"
            />
          </Interaction3>
        </div>
      }
    </div>
  );
}
