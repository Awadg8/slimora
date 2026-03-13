import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function SlimOraProgramImpact() {
    return (
        <div className='bg-[#0A1D20]'>
            <div className='max-width py-[121px] md:py-[260px]'>
                <div className='flex flex-col md:flex-row items-center md:items-start gap-[42px] md:gap-[142px]'>
                    <div className='relative size-[80px] md:size-[217px]'>
                        <Image src="/images/become-partner/three.png" alt='Three' fill className='object-contain' />
                    </div>
                    <div className=''>
                        <h2 className='text-[#FFFFFF] text-[24px] md:text-[40px] font-bold text-justify'>The SlimOra Program is addressing the unmet needs of your patients.</h2>
                        <p className='text-[#B5B5B5] text-[12px] md:text-[22px] leading-[18px] md:leading-[28px] pt-[16px] md:pt-[13px]'>more patients would consider the SlimOra Balloon compared to the number who would consider bariatric surgery.</p>
                        <div className='pt-[42px] md:pt-[37px] text-center md:text-left px-4 md:px-0'>
                            <Link href="/eligibility-check" className='border border-[#8EA94D] text-[#FFFFFF] py-2 rounded-[39px] text-[14px] lg:text-[18px] md:text-[11px] text-center px-8 w-full md:w-auto inline-block'>
                                Learn about the Program
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
