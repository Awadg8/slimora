import Image from 'next/image'

const gastricBalloon = () => {
  return (
    <div className='max-width md:flex items-center justify-between gap-8 linear-to-b from-[#8EA94D] to-[#2C5D6B] pt-40'>
      {/* Left Section - Text */}
      <div className='flex-1  md:w-[30%] pb-7.5 md:pb-0'>
        <p className='text-[14px] md:text-[20px] text-center text-[#B5B5B5]'>
          <span className='font-bold'>The SlimOra Gastric Balloon </span> is a regulated health product that bears the CE marking in accordance with this regulation.
        </p>
      </div>

      {/* Center Section - Image with Button */}
      <div className='flex-1 relative md:w-[40%] pb-7.5 md:pb-0'>
        <div className='relative  rounded-3xl overflow-hidden'>
          <Image
            src='/images/get_started/learn_more.jpg'
            alt='SlimOra Gastric Balloon'
            width={695}
            height={386}
            className=''
          />
          {/* Learn More Button */}
          <div className='absolute inset-0 flex items-center justify-center'>
            <button className='bg-[#C4D96F]  font-bold py-2 px-2 rounded-full'>
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Right Section - Text */}
      <div className='flex-1  md:w-[30%]'>
        <p className='text-[14px] md:text-[20px] text-center text-[#B5B5B5]'>
          To learn more about the <span className='font-bold'>SlimOra Gastric Balloon,</span> assess the risks and benefits of this solution, read the important safety information, and discuss it with your doctor.
        </p>
      </div>
    </div>
  )
}

export default gastricBalloon
