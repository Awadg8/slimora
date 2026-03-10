import Image from 'next/image'

const checkIf = () => {
  return (
    <div className='flex w-full'>
      {/* Left Section - Dark Teal Background */}
      <div className='w-[70%] bg-[#2C5D6B] px-12 py-16 flex flex-col justify-center'>
        <h2 className='text-3xl font-bold text-white mb-4'>
          Check if you're eligible for the SlimOra® Program
        </h2>
        <p className='text-gray-300 text-xs mb-8 leading-relaxed'>
          Start your journey with a quick BMI check and a few simple questions. This helps us understand if the SlimOra Gastric Balloon is a good fit for your health goals. It only takes a minute and could be your first step towards safe, effective and lasting weight loss - <span className='font-semibold'>with support at every stage.</span>
        </p>

        {/* Weight and Height Inputs - Side by Side */}
        <div className='flex gap-4 items-end mb-6'>
          <div className='flex-1'>
            <label className='block text-white text-xs font-semibold mb-2'>Weight</label>
            <input 
              type='text' 
              placeholder='Enter weight' 
              className='w-full px-4 py-2 rounded-full bg-white text-gray-800 placeholder-gray-400 text-xs focus:outline-none'
            />
          </div>
          <div className='flex-1'>
            <label className='block text-white text-xs font-semibold mb-2'>Height</label>
            <input 
              type='text' 
              placeholder='Enter height' 
              className='w-full px-4 py-2 rounded-full bg-white text-gray-800 placeholder-gray-400 text-xs focus:outline-none'
            />
          </div>
          {/* Button aligned with inputs */}
          <button className='bg-[#C4D96F] hover:bg-[#B8CC5F] text-gray-800 font-bold py-2 px-6 rounded-full transition-colors duration-300 text-xs whitespace-nowrap'>
            Check Eligibility
          </button>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className='w-[30%]'>
        <Image 
          src='/images/get_started/check_if.jpg' 
          alt='SlimOra Balloon' 
          width={570} 
          height={420}
          className=' object-cover'
        />
      </div>
    </div>
  )
}

export default checkIf
