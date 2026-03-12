import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function SlimOraBenefits() {
    const steps = [
        {
            image: "/images/become-partner/image7.png",
            title: "A simple and safe procedure",
            desc: "The SlimOra Balloon is a liquid-filled gastric balloon placed without endoscopy or anesthesia during a 20-minute outpatient visit.",
            subDes: "It empties itself after approximately 16 weeks and is eliminated naturally.",
            subDes2: "More than 180,000 balloons have been placed globally with an adverse event rate of <2% and a serious adverse event rate of <0.2%.",
        },
        {
            image: "/images/become-partner/image8.png",
            title: "Safe and effective results",
            desc: "Multiple studies have demonstrated an average body weight loss of 10-15%. Furthermore, 96% of weight loss is maintained after one year.",
            subDes: "You can find literature below for more information."
        },
        {
            image: "/images/become-partner/image9.png",
            title: "Multidisciplinary support",
            desc: "The SlimOra Balloon is used in conjunction with a supervised nutrition and behavior modification program for at least 6 months.",
            subDes: "SlimOra also provides the SlimOra Virtual Care Suite, a patient management platform to help you monitor your patients' progress and offer personalized support."
        }
    ];
    return (
        <div className="bg-[linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),linear-gradient(180deg,#8FAE4D_0%,#2C5D6B_100%)]">

            <div className='max-width'>
                <div className='pt-[70px] pb-[140px]'>
                    <div className='pb-[119px] md:pb-[144px] flex flex-col md:flex-row justify-between gap-[32px] md:gap-0'>
                        <h2 className='text-[#FFFFFF] text-[24px] md:text-[45px] lg:leading-[54px] font-bold'>How does the SlimOra Balloon work?</h2>
                        <Link href="/eligibility-check" className='border border-[#8EA94D] bg-[#0A1D20] text-[#FFFFFF] py-2 rounded-[39px] text-[14px] lg:text-[18px] md:text-[11px] text-center px-8 w-full md:w-auto inline-block'>
                            See SlimOra Clinical Evidence
                        </Link>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-[76px] md:gap-[100px]'>
                        {steps.map((item, index) => (
                            <div className='flex flex-col items-center md:items-start'>
                                <div className='relative w-[80px] h-[80px]'>
                                    <Image alt={item.title}
                                        src={item.image} fill className='object-cover' />
                                </div>
                                <h2 className='text-[#FFFFFF] text-[24px] md:text-[22px] font-bold pb-[11px] pt-[28px] md:pt-[30px] md:pb-[14px] lg:py-[22px]'>{item.title}</h2>
                                <p className='text-[12px] md:text-[16px] leading-[18px] md:leading-[24px] text-justify'>{item.desc}</p>
                                <p className='text-[12px] md:text-[16px] leading-[18px] md:leading-[24px] text-justify pt-[10px] md:pt-[8px]'>{item.subDes}</p>
                                <p className='text-[12px] md:text-[16px] leading-[18px] md:leading-[24px] text-justify pt-[10px] md:pt-[8px]'>{item.subDes2}</p>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
