import React from 'react'
import Image from 'next/image'
import Interaction from "@/component/microInteraction"
import Interaction2 from "@/component/microInteraction2"

export default function OtherProfessionals() {
    return (
        <div className='bg-[#0A1D20]'>
            <div className='max-width md:py-[260px] py-[100px]'>
                <div className='space-y-[14px] md:space-y-[17px] pb-[36px] md:pb-[39px]'>
                    <Interaction>
                        <h2 className='text-[#FFFFFF] text-[24px] md:text-[50px] font-bold'>Hear from other professionals</h2>
                    </Interaction>
                    <Interaction2>
                        <p className='text-[#B5B5B5] text-justify text-[12px] md:text-[22px] leading-[18px] md:leading-[28px]'>Trusted by world-class clinics</p>
                    </Interaction2>
                </div>
                <div className='relative w-auto h-[238px] md:h-[456px]'>
                    <Image alt='dummy' src="/images/become-partner/dummy.png" fill className='object-cover' />
                </div>
            </div>
        </div>
    )
}
