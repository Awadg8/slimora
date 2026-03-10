import Image from 'next/image'

const checkIf = () => {
  return (
    <div className='flex flex-col md:flex-row w-full'>
      {/* Image Section - Top on mobile only */}
      <div className='w-full md:w-[25%] relative h-64 md:h-auto order-first md:order-last md:hidden'>
        <Image
          src='/images/get_started/check_if.jpg'
          alt='SlimOra Balloon'
          fill
          className='object-cover'
        />
      </div>

      {/* Text Section */}
      <div className='w-full md:w-[75%] bg-[#2C5D6B] flex md:flex-row justify-center'>
        <div className='max-w-[85%] md:ml-auto pr-4'>
          <h2 className='text-[20px] text-center md:text-none font-Urbanist md:text-[32px] font-bold text-white pt-12.5'>
            Check if you're eligible for the SlimOra™ Program
          </h2>
          <p className='text-[12px] text-center md:text-none leading-4.5 md:text-sm text-[#B5B5B5] pt-5'>
            Start your journey with a quick BMI check and a few simple questions. This helps us understand if the SlimOra Gastric Balloon is a good fit for your health goals. It only takes a minute and could be your first step towards safe, effective and lasting weight loss - <span className='text-white font-bold'>with support at every stage.</span>
          </p>

          {/* Weight and Height Inputs - Side by Side */}
          <div className='flex flex-row gap-4 items-end pt-3 pb-12.5'>
            <div className='flex-1 flex gap-4'>
              <div className='flex-1'>
                <label className='block text-[#FFFFFF] text-xl'>Weight</label>
                <input
                  type='text'
                  placeholder='(Kilograms)'
                  className='w-full py-2 px-3 text-center rounded-full bg-white text-[#BABABA] text-xs focus:outline-none'
                />
              </div>
              <div className='flex-1'>
                <label className='block text-[#FFFFFF] text-xl'>Height</label>
                <input
                  type='text'
                  placeholder='(Centimeters)'
                  className='w-full py-2 px-3 text-center rounded-full bg-white text-[#BABABA] text-sm focus:outline-none'
                />
              </div>
            </div>
            {/* Button aligned with inputs on desktop, below on mobile */}
            <div className='flex flex-col md:flex-row w-full md:w-auto'>
              <button className='w-full md:w-120.5 bg-[#C4D96F] text-[#FFFFFF] text-xl py-1 rounded-full whitespace-nowrap'>
                Check Eligibility
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section - Right on desktop only */}
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
