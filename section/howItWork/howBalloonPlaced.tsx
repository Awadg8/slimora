"use client";
import Interaction from "@/component/microInteraction";
import Interaction2 from "@/component/microInteraction2";
import { motion } from "framer-motion";
import Image from "next/image";

const placementSteps = [
  {
    step: "01",
    description:
      "You swallow a capsule containing the deflated balloon, attached to a thin tube (catheter).",
  },
  {
    step: "02",
    description:
      "A first X-ray is done to ensure the capsule is placed correctly in your stomach.",
  },
  {
    step: "03",
    description:
      "The doctor uses the catheter to fill the balloon with 550ml of liquid.",
  },
  {
    step: "04",
    description:
      "A second X-ray is done to ensure the balloon is filled correctly.",
  },
  {
    step: "05",
    description:
      "The catheter is gently removed and the placement is complete. Once your doctor ensures you are comfortable, you may head home. X-ray is done to ensure the balloon is filled correctly.",
  },
];

export default function HowBalloonPlaced() {
  return (
    <div className="bg-[#0A1D20]">
      <div className="max-width pb-[100px] md:pb-[142px]">
        <div className="text-center space-y-[19px] md:space-y-[26px]">
          <Interaction>
            <h2 className="text-[#FFFFFF] text-[24px] md:text-[50px] font-semibold">
              How is the SlimOra Gastric Balloon placed?
            </h2>
          </Interaction>
          <div>
            {/* Mobile only */}
            <p className="text-[#B5B5B5] text-[12px] leading-[18px] md:hidden">
              The SlimOra Gastric Balloon is placed by a certified doctor during
              an outpatient consultation:
              <span className="font-bold">
                {" "}
                no surgery, anaesthesia, or endoscopy required.
              </span>
              <span className="font-bold"> 99.9% </span>
              of patients can swallow the capsule independently, or with support
              from the doctor.
            </p>

            {/* Desktop / md */}
            <Interaction2>
              <p className="hidden md:block text-[#B5B5B5] md:text-[18px] leading-[28px]">
                The SlimOra Gastric Balloon is placed by a certified doctor
                during an outpatient consultation:
                <span className="font-bold">
                  {" "}
                  no surgery, anaesthesia, or endoscopy required.
                </span>
              </p>
              <p className="hidden md:block text-[#B5B5B5] md:text-[20px] leading-[28px]">
                <span className="font-bold">99.9% </span>
                of patients can swallow the capsule independently, or with
                support from the doctor.
              </p>
            </Interaction2>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 pt-[47px] md:pt-[139px] gap-[62px] md:gap-10">
          <div className="relative h-[473px] md:h-[971px] w-full">
            <Image
              alt="Gastric"
              src="/images/how_it_works/slimora_gastric_placed.png"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col justify-center">
            {placementSteps.map((item, index) => (
              <div key={index}>
                <div className="lg:pl-10 pb-[28px] md:pb-[35px] gap-2 md:gap-[18px]">
                  <h2 className="text-[#FFFFFF] text-[26px] md:text-[50px] font-semibold">
                    {item.step}
                  </h2>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      ease: "easeInOut",
                      duration: 0.5,
                      delay: index * 0.2,
                    }}
                  >
                    <p className="text-[12px] md:text-[20px] leading-[18px] md:leading-7 text-[#B5B5B5] text-justify">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
                <hr className="w-full text-[#525252] pb-[24px] md:pb-[20px]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
