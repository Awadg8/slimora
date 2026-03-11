import Image from 'next/image'
import CtaButton from '@/component/ctaButton'

const gastricBalloon = () => {
    return (
        <div className='max-width md:flex items-center justify-between gap-8  pt-50 pb-50 relative '>
            <div
                className='absolute -left-50 '
                style={{
                    background: 'linear-gradient(180deg, #8EA94D 0%, #2C5D6B 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))',
                    height: '377px',
                    width: '398px',
                    filter: "blur(165px)"
                }}
            >
            </div>

            {/* Left Section - Text */}
            <div className='flex-1 md:w-[25%] pb-7.5 md:pb-0'>
                <p className='text-[14px] md:text-[20px] text-center text-[#B5B5B5]'>
                    <span className='font-bold'>The SlimOra Gastric Balloon </span> is a regulated health product that bears the CE marking in accordance with this regulation.
                </p>
            </div>

            {/* Center Section - Image with Button */}
            <div className='flex-1 relative md:w-[500%] pb-7.5 md:pb-0'>
                <div className='relative rounded-3xl overflow-hidden'>
                    <Image
                        src='/images/get_started/learn_more.jpg'
                        alt='SlimOra Gastric Balloon'
                        width={695}
                        height={386}
                        className=''
                    />
                    {/* Learn More Button */}
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <CtaButton text='Learn More' type='link' href='#' className='w-62.5 text-[20px] font-medium' />
                    </div>
                </div>
            </div>

            {/* Right Section - Text */}
            <div className='flex-1 md:w-[25%]'>
                <p className='text-[14px] md:text-[20px] text-center text-[#B5B5B5]'>
                    To learn more about the <span className='font-bold'>SlimOra Gastric Balloon,</span> assess the risks and benefits of this solution, read the important safety information, and discuss it with your doctor.
                </p>
            </div>
        </div >
    )
}

export default gastricBalloon
