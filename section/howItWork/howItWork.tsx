import React from 'react'
import Image from 'next/image'

export default function HowItWork() {
    return (
        <div className='bg-[#0A1D20]'>
            <div className='max-width pt-[57px] md:pt-[78px] pb-[59px] md:pb-[184px]'>
                <div className="rounded-[20px] bg-[linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),linear-gradient(90deg,#43838E,#8EA94D)] md:px-12 px-4">
                    <div className='grid md:grid-cols-2 grid-cols-1 justify-center items-center md:gap-6 gap-0'>
                        <div className='order-2 md:order-1 py-[56px] md:py-[113px]'>
                            <p className='text-[#FFFFFF] font-bold md:text-[50px] text-[20px] leading-[100%]'>How does <br className='text-[28px]' />SlimOra Program work?</p>
                            <div className='flex gap-2.5 md:gap-[31px] pt-[23px] md:pt-[49px]'>
                                <button className='border border-[#8EA94D] text-[#8EA94D] py-2 rounded-[39px] text-[12px] md:text-[18px] w-full'>
                                    Check Eligibility
                                </button>
                                <button className='bg-[#8EA94D] text-[#FFFFFF] text-[12px] md:text-[18px] py-2 rounded-[39px] w-full'>
                                    Find Clinic
                                </button>
                            </div>
                        </div>
                        <div className='order-1 md:order-2 pt-[56px] md:pt-0'>
                            <div className='relative w-full'>
                                <Image
                                    src="/images/how_it_works/how_does.png"
                                    alt='How Does'
                                    width={561}
                                    height={261}
                                    className='w-full h-auto object-cover'
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
