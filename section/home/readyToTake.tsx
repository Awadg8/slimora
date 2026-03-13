import Image from "next/image";
import CtaButton from "@/component/ctaButton";
import ReadyToTakeComponent from "@/component/readyToTake";
import Interaction from "@/component/microInteraction";
import Interaction2 from "@/component/microInteraction2";

const ReadyToTake = () => {
  return (
    <div className="flex flex-col bg-[#0A1D20]">
      {/* Section 1: Ready to take the 1st step? */}
      <div>
        <ReadyToTakeComponent />
      </div>

      {/* Section 2: Are you a healthcare professional? */}
      <section className="pt-0 pb-0 md:pt-7 md:pb-0 relative z-20">
        <div className="max-width flex flex-col md:flex-row justify-between items-center md:items-start gap-5 md:gap-[40px] xl:gap-[60px]">
          <div className="md:w-1/2 lg:w-2/5">
            <h2 className="text-[22px] md:text-[32px] lg:text-[40px] font-urbanist font-bold text-[#FFF] leading-tight md:leading-[49px] text-center md:text-left">
              Are you a healthcare professional?
            </h2>
          </div>
          <div className="md:w-1/2 lg:w-3/5 flex flex-col items-center md:items-start text-center md:text-left">
            <p className="text-[#B5B5B5] font-urbanist text-[16px] lg:text-[20px] text-justify mb-[12px] leading-[24px]">
              Already partnering with SlimOra? Access clinical protocols,
              patient dashboards and support tools to deliver best-in-class
              care.
            </p>
            <p className="text-[#B5B5B5] font-urbanist text-[16px] lg:text-[16px] xl:text-[20px] text-justify mb-9 md:mb-[41px] leading-[24px]">
              Interested in joining our network? Learn how the SlimOra Program
              can help you offer safe, effective and non-invasive weight loss to
              your patients. Become part of the new standard of obesity care
              today.
            </p>
            <div className="flex justify-center lg:justify-start gap-4 lg:gap-[100px] xl:gap-[171px]">
              <Interaction>
                <CtaButton
                  href="/become-partner"
                  className="hover:bg-button-bg/90 text-[12px] lg:text-[16px] px-4 lg:px-10 py-4 font-medium transition-all"
                  text="Become a Partner"
                  type="link"
                />
              </Interaction>
              <Interaction2>
                <CtaButton
                  href="#"
                  className="hover:bg-button-bg/90 text-[12px] lg:text-[16px] px-4 lg:px-10 py-4 font-medium transition-all"
                  text="Learn about SlimOra"
                  type="link"
                />
              </Interaction2>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Are you already a patient? */}
      <section className="relative min-h-[450px] pt-20 pb-10 md:py-0 flex items-center overflow-hidden z-10">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/home/ready_to_step2.png"
            alt="Already a patient"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-width flex flex-col md:flex-row justify-between pt-20 md:pt-[100px] items-center gap-5 md:gap-12 w-full">
          <div className="md:w-1/2 lg:w-2/5">
            <h2 className="text-[22px] md:text-[40px] font-bold text-white leading-tight md:leading-[1.1] text-center md:text-left">
              Are you already a patient?
            </h2>
          </div>
          <div className="md:w-1/2 lg:w-3/5 flex flex-col items-center text-center md:text-left">
            <p className="text-[#CDCDCD] text-xs md:text-[16px] lg:text-[20px] mb-5 md:mb-10 text-justify max-w-3xl">
              Download the SlimOra App to track your progress, connect your
              devices and access support—all in one place. Browse patient
              guides, troubleshoot issues or contact our team directly.
            </p>
            <Interaction>
              <CtaButton
                text="View Patient Dashboard"
                className="text-xs md:text-[16px] lg:text-[20px] font-medium w-[298px]"
                type="link"
                href="#"
              />
            </Interaction>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReadyToTake;
