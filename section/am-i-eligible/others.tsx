import React from 'react';

export default function Others() {
  return (
    <div className="">
      <div className="max-width pt-15 pb-24 md:pt-18 md:pb-18 lg:pt-24 lg:pb-24 space-y-[78px]">
        <div className="flex flex-col md:flex-row justify-between space-y-5 md:space-y-0">
          <p className="text-[14px] leading-[18px] sm:text-[24px] sm:leading-[28px] lg:text-[28px] lg:leading-[32px] md:w-[38%] text-justify md:text-left">
            Use our <span className="font-bold text-[20px] sm:text-[24px] sm:leading-[28px] lg:text-[30px] lg:leading-[32px]">BMI Calculator</span> to see if you could be eligible for the SlimOra Gastric Balloon:.
          </p>
          <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[22px] text-justify md:w-[52%] text-white">
            The Allurion Gastric Balloon is a medical device. Before placing it, your doctor will carefully review your medical history to confirm your eligibility and ensure there are no contraindications. The weight loss programme with the Allurion Gastric Balloon can be offered to individuals who meet the criteria below. This list is not exhaustive; the full list of contraindications is available in the device’s instructions for use, which is provided to doctors4.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-4 place-items-center">
          <div className="size-[180px] lg:size-[221px] border flex justify-center items-center border-[#8EA94D] rounded-full px-[22px] py-[80px] text-center">
            <p className="text-[12px] md:text-[16px] leading-[20px]">Aged 18 and above</p>
          </div>
          <div className="size-[180px] lg:size-[221px] border flex justify-center items-center border-[#8EA94D] rounded-full px-[22px] py-[80px] text-center">
            <p className="text-[12px] md:text-[16px] leading-[20px]">BMI 27 and above</p>
          </div>
          <div className="size-[180px] lg:size-[221px] border flex justify-center items-center border-[#8EA94D] rounded-full px-[22px] py-[80px] text-center">
            <p className="text-[12px] md:text-[16px] leading-[20px]">Not currently pregnant or breastfeeding</p>
          </div>
          <div className="size-[180px] lg:size-[221px] border flex justify-center items-center border-[#8EA94D] rounded-full px-[22px] py-[80px] text-center">
            <p className="text-[12px] md:text-[16px] leading-[20px]">Have not had stomach or esophageal surgery</p>
          </div>
        </div>
      </div>
    </div>
  )
}
