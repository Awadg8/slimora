import Image from 'next/image'

const checkIf = () => {
    return (
        <div className='flex flex-col md:flex-row w-full pt-37.5'>
            {/* Image Section - Top on mobile */}
            <div className='w-full md:w-[25%] relative h-80 md:h-auto md:hidden'>
                <Image
                    src='/images/get_started/check_if.jpg'
                    alt='SlimOra Balloon'
                    fill
                    className='object-cover'
                />
            </div>

            {/* Text Section */}
            <div className='w-full md:w-[75%] bg-[#2C5D6B] flex flex-col items-center md:items-start'>
                <div className='max-w-[85%] md:ml-auto md:pr-10 px-4'>
                    <h2 className='text-[24px] text-center md:text-left font-urbanist md:text-[32px] font-bold text-white pt-12.5'>
                        Check if you're eligible for the SlimOra™ Program
                    </h2>
                    <p className='text-[12px] text-center md:text-left leading-4.5 md:text-sm text-[#B5B5B5] pt-5'>
                        Start your journey with a quick BMI check and a few simple questions. This helps us understand if the SlimOra Gastric Balloon is a good fit for your health goals. It only takes a minute and could be your first step towards safe, effective and lasting weight loss - <span className='text-white font-bold'>with support at every stage.</span>
                    </p>

                    {/* Input & Button Container */}
                    <div className='flex flex-col md:flex-row gap-4 items-center md:items-end pt-6 pb-12.5'>
                        
                        {/* Inputs Row */}
                        <div className='flex flex-row gap-4 w-full md:w-auto'>
                            <div className='flex-1'>
                                <label className='block text-[#FFFFFF] text-lg md:text-xl mb-1'>Weight</label>
                                <input
                                    type='text'
                                    placeholder='(Kilograms)'
                                    className='w-full py-2 px-3 text-center rounded-full bg-white text-[#BABABA] text-xs focus:outline-none'
                                />
                            </div>
                            <div className='flex-1'>
                                <label className='block text-[#FFFFFF] text-lg md:text-xl mb-1'>Height</label>
                                <input
                                    type='text'
                                    placeholder='(Centimeters)'
                                    className=' py-2 px-3 text-center rounded-full bg-white text-[#BABABA] text-xs focus:outline-none'
                                />
                            </div>
                        </div>

                        {/* Button - Now sits below on mobile, beside on desktop */}
                            <button className='w-full md:w-120.5 bg-[#C4D96F] text-[#FFFFFF] text-lg md:text-xl py-1 rounded-full '>
                                Check Eligibility
                            </button>
                    </div>
                </div>
            </div>

            {/* Image Section - Desktop Right */}
            <div className='w-full md:w-[25%] relative hidden md:block'>
                <Image
                    src='/images/get_started/check_if.jpg'
                    alt='SlimOra Balloon'
                    fill
                    className='object-cover'
                />
            </div>
        </div>
    )
}

export default checkIf