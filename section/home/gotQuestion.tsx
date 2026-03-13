"use client";
import Interaction from "@/component/microInteraction";
import Interaction2 from "@/component/microInteraction2";
import { useState } from "react";

export default function GotQuestion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      question: "What is a gastric balloon?",
      answer:
        "The gastric balloon is a medical device designed to assist with weight loss. It is a soft balloon filled with liquid or air that is placed in the stomach. All gastric balloons have the same mechanism of action to occupy space, promoting a feeling of fullness and reducing food intake. They typically remain in the stomach for several months before being removed by endoscopy or, in the case of the SlimOra Gastric Balloon Systems naturally eliminated.",
    },
    {
      question: "Will I put the weight back on?",
      answer:
        "The SlimOra Gastric Balloon Systems is placed in the stomach during an outpatient consultation. The patient swallows a capsule containing the deflated balloon, which is attached to a thin tube (catheter). Once the presence of the capsule in the patient’s stomach is confirmed (by X-ray), the balloon is filled with liquid using the catheter. A second X-ray is performed to ensure that the balloon is properly filled. The procedure is then complete, and the catheter is gently removed. In the majority of cases, approximately months later, the SlimOra Gastric Balloon Systems empties on its own and is naturally eliminated.",
    },
    {
      question: "How is the SlimOra Gastric Balloon Systems placed?",
      answer:
        "The SlimOra Gastric Balloon Systems is placed in the stomach during an outpatient consultation. The patient swallows a capsule containing the deflated balloon, which is attached to a thin tube (catheter). Once the presence of the capsule in the patient’s stomach is confirmed (by X-ray), the balloon is filled with liquid using the catheter. A second X-ray is performed to ensure that the balloon is properly filled. The procedure is then complete, and the catheter is gently removed. In the majority of cases, approximately months later, the SlimOra Gastric Balloon Systems empties on its own and is naturally eliminated.",
    },
  ];

  return (
    <div className="bg-[#0A1D20]">
      <div className="max-width">
        <div className="space-y-[19px] md:space-y-[17px]">
          <Interaction>
            <h2 className="text-[24px] md:text-[40px] leading-[100%] md:leading-[57px] font-bold text-center md:text-left">
              Got questions? We've got <br className="block md:hidden" />
              answers.
            </h2>
          </Interaction>
          <Interaction2>
            <p className="text-[12px] md:text-[18px] leading-[18px] md:leading-[24px] text-center md:text-left">
              From how SlimOra Gastric Balloon Systems works to clinical access,
              get the facts on the <br className="hidden md:block" /> world's
              first procedure less gastric balloon and digital care ecosystem.
            </p>
          </Interaction2>
        </div>

        <div className="pt-[23px] md:pt-[69px] md:space-y-[14px] space-y-1">
          {accordionData.map((item, index) => (
            <div
              key={index}
              className="bg-[radial-gradient(circle,_#2C5D6B,_#0A1D20)] p-2 md:p-5"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center py-3 text-[#B5B5B5] cursor-pointer"
              >
                <span className="text-[#FFFFFF] text-[10px] md:text-[24px] font-semibold text-left">
                  {item.question}
                </span>
                <span
                  className={`text-white transition-transform duration-1000 ease-in-out inline-block ${openIndex === index ? "-rotate-90" : ""}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="md:w-[30px] md:h-[55] w-3 h-6"
                  >
                    <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-800 ease-in-out ${openIndex === index ? "max-h-50 md:max-h-96" : "max-h-0"
                  }`}
              >
                <div className="text-[10px] md:text-[18px] text-[#B5B5B5] leading-[14px] md:leading-[30px] text-justify pb-5">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
