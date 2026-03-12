import Image from "next/image";
import CtaButton from "@/component/ctaButton";
import Interaction2 from "@/component/microInteraction2";
import Interaction from "@/component/microInteraction";
import { div } from "framer-motion/client";
import Interaction3 from "@/component/microInteraction3";

const Connected = () => {
  return (
    <section className="pb-35 md:pb-[200px]">
      <div className="max-width">
        <h2 className="text-xl md:text-[45px] font-bold font-urbanist text-center mb-5 md:mb-20">
          Stay CONNECTED & SUPPORTED
        </h2>

        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
          <div className="w-full md:w-1/2">
            <Interaction>
              <h3 className="text-xl md:text-[50px] font-bold font-urbanist">
                Am I Eligible?
              </h3>
            </Interaction>
            <Interaction2>
              <p className="text-base md:text-lg text-[#B5B5B5] pt-3 md:pt-5 text-justify">
                If you have a BMI of 27 or above, you may be eligible. Quickly
                calculate your BMI to see if the Allurion Balloon could be right
                for you.
              </p>
            </Interaction2>
            <div className="pt-8 md:pt-10">
              <Interaction3>
                <CtaButton
                  text="Check Eligibility"
                  type="link"
                  href="/eligibility-check"
                  className="text-xs md:text-xl font-medium w-full md:w-[300px]"
                />
              </Interaction3>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="relative rounded-[18px] md:rounded-[35px] h-[240px] md:h-[430px] overflow-hidden">
              <Image
                src="/images/the_technology/supported.jpg"
                alt="Success Journey"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connected;
