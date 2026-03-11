import React from 'react';
import CtaButton from '@/component/ctaButton';
export default function Others() {
  return (
    <div>
      <div className="max-width pb-24">
        <div className="flex flex-col md:flex-row justify-between space-y-5 md:space-y-0">
          <p className="text-[24px] leading-[28px] lg:text-[28px] lg:leading-[32px] font-bold md:w-[38%] text-justify md:text-left ">
            Obesity isn’t a failure of willpower. It’s a chronic condition influenced by biology, environment, and behavior.
          </p>
          <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[22px] text-justify md:w-[52%] text-[#B5B5B5]">
            That’s why we built the SlimOra Gastric Balloon Systems: the world's first and only swallowable gastric balloon combined with expert nutrition support and comprehensive digital tools. It's clinically proven, easy to get started with, and designed to deliver safe and lasting metabolically healthy weight loss.
            We're setting the new standard of obesity care - inspiring, enabling, and empowering patients to transform their lives, for good.
          </p>
        </div>
      </div>
      <div className="max-width pb-24 flex flex-col items-center space-y-8">
        <div className="flex flex-col md:items-end space-y-5 md:space-y-3 w-full">
          <p className="text-[28px] lg:text-[40px] lg:leading-[48px] font-bold text-left md:text-right">
            <span className="text-[#8EA94D]">Obesity is complex.</span> Your solution shouldn’t be.
          </p>
          <p className="text-[14px] leading-[20px] lg:text-[20px] lg:leading-[24px] text-[#B5B5B5] text-center md:text-right font-bold">
            Find your path to effective weight management
        <CtaButton
          text="Find a Clinic"
          className="text-[16px] lg:text-[20px] font-medium w-[142px] md:w-[220px] mt-[24px]  mx-auto md:mx-0"
          type="link"
          href="/find-a-clinic"
        />
          </p>
        </div>
      </div>
    </div>
  )
}
