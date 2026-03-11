import Image from 'next/image';
import CtaButton from '@/component/ctaButton';


export default function GastricBalloon() {
    return (
        <div className='max-width flex flex-col md:flex-row items-center justify-between gap-8 pt-30 pb-30 md:pt-50 md:pb-50 relative overflow-hidden '>
            <div
                className='hidden md:block absolute -left-50  z-0 '
                style={{
                    background: 'linear-gradient(180deg, #8EA94D 0%, #2C5D6B 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))',
                    height: '377px',
                    width: '398px',
                    filter: "blur(165px)"
                }}
            >
            </div>
            <div
                className=' hidden md:block absolute -right-50  z-0 '
                style={{
                    background: 'linear-gradient(180deg, #8EA94D 0%, #2C5D6B 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))',
                    height: '377px',
                    width: '398px',
                    filter: "blur(165px)"
                }}
            >
            </div>
            <div className='max-width flex flex-col md:flex-row items-center justify-between gap-8'>

                {/* Left Section - Text  */}
                <div className=' md:w-[25%] z-1'>
                    <p className='text-[12px] md:text-[18px] text-center text-[#B5B5B5] '>
                        <span className='font-bold '>The SlimOra Gastric Balloon </span> is a regulated health product that bears the CE marking in accordance with this regulation.
                    </p>
                </div>

                {/* Center Section - Image with Button */}
                <div className='relative md:w-[50%] space-y-8 sm:space-y-0'>
                    <div className='relative rounded-[22px] md:rounded-[44px] overflow-hidden'>
                        <Image
                            src='/images/get_started/learn_more.jpg'
                            alt='SlimOra Gastric Balloon'
                            width={695}
                            height={386}
                            className=''
                        />
                        {/* Learn More Button */}
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <CtaButton text='Learn More' type='link' href='#' className='w-[145px] sm:w-62.5 tex-[12px] sm:text-[18px] text-[#b5b5b5] font-medium' />
                        </div>
                    </div>

                    {/* Right Section - Text */}
                    <div className='md:w-[25%] z-1'>
                        <p className='text-[12px] md:text-[18px] text-center text-[#B5B5B5]'>
                            To learn more about the <span className='font-bold'>SlimOra Gastric Balloon,</span> assess the risks and benefits of this solution, read the important safety information, and discuss it with your doctor.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}