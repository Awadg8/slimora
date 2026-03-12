import React from 'react'
import Image from 'next/image'
export default function HowSlimOraWorks() {
    const steps = [
        {
            image: "/images/become-partner/image4.png",
            title: "Swallowable capsule placement",
            desc: "The SlimOra Balloon comes in a capsule that is swallowed with water during a short, 20-minute outpatient visit. It is attached to a thin catheter, which remains outside the mouth during the swallow. 99.9% of patients can swallow it."
        },
        {
            image: "/images/become-partner/image5.png",
            title: "Balloon inflation",
            desc: "Once confirmed in the stomach via X-ray, the balloon is filled through the catheter with 550ml of liquid. A second X-ray is then performed to ensure it is correctly positioned in the stomach, and the catheter is gently removed. The patient can return to normal activities shortly after."
        },
        {
            image: "/images/become-partner/image6.png",
            title: "Designed for comfort and safety",
            desc: "Made from soft polyurethane, the SlimOra Balloon is crafted to adapt to the natural shape of the patient's stomach, helping them feel full and eat less. It remains in place for approximately four months before passing naturally."
        }
    ];
    return (
        <div className="bg-[linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),linear-gradient(180deg,#8FAE4D_0%,#2C5D6B_100%)]">

            <div className='max-width'>
                <div className='pt-[70px] pb-[140px]'>
                    <div className='pb-[119px] md:pb-[144px]'>
                        <h2 className='text-[#FFFFFF] text-[24px] lg:text-[50px] lg:leading-[54px] font-bold text-center'>How does the SlimOra Balloon work?</h2>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-[76px] md:gap-[100px]'>
                        {steps.map((item, index) => (
                            <div className='flex flex-col items-center'>
                                <div className='relative w-[80px] h-[80px]'>
                                    <Image alt={item.title}
                                        src={item.image} fill className='object-cover' />
                                </div>
                                <h2 className='text-[#FFFFFF] text-[24px] md:text-[22px] font-bold pb-[11px] pt-[28px] md:pt-[30px] md:pb-[14px] lg:py-[22px]'>{item.title}</h2>
                                <p className='text-[12px] md:text-[16px] leading-[18px] md:leading-[24px] text-justify'>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
