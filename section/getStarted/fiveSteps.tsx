import Image from 'next/image'

const fiveSteps = () => {
  const steps = [
    {
      number: 1,
      title: 'Step 1',
      description: 'Schedule a call with one of our expert weight-loss specialists. You will be able to ask all your questions about the SlimOra Gastric Balloon Systems and book an appointment in one of our partner clinic.',
      image: '/images/get_started/step1.jpg'
    },
    {
      number: 2,
      title: 'Step 2',
      description: 'Discuss your health history, weight-loss goals, and motivations with your doctor, who will evaluate your condition, review your medical records, and answer your questions to determine the best option for you.',
      image: '/images/get_started/step2.jpg'
    },
    {
      number: 3,
      title: 'Step 3',
      description: 'If you are eligible for SlimOra Gastric Balloon Systems and the programme is deemed the best option for you after evaluating the benefits and risks, you can then schedule the balloon placement date together.',
      image: '/images/get_started/step3.jpg'
    },
    {
      number: 4,
      title: 'Step 4',
      description: 'Your doctor will place your SlimOra Gastric Balloon Systems during an outpatient consultation.',
      image: '/images/get_started/step4.jpg'
    },
    {
      number: 5,
      title: 'Step 5',
      description: 'You will return home with your new connected scale linked to your SlimOra Gastric Balloon app to track your journey.',
      image: '/images/get_started/step5.jpg'
    }
  ]

  return (
    <div className='max-width pt-40 md:pt-25 pb-50'>
      <div className='flex items-center md:gap-2 pl-12.5 mb-8'>
        <h3 className='font-bold text-xl lg:text-[50px] text-white'>
          5 steps to start your
        </h3>
        <Image src="/images/logo.svg" alt="" className='w-36 h-9 md:w-70.5 md:h-18' height={73} width={282} />
      </div>
      <div className='grid grid-row md:grid-cols-5 gap-4  pt-24.5'>
        {steps.map((step) => (
          <div key={step.number} className={`text-white  bg-[#2C5D6B]/50 text-center col-span-1 p-3 hover:shadow-[0px_0px_41px_0px_#000000B2] flex justify-between items-center flex-col gap-5 ${step.number === 4 ? 'pb-10' : ''}`}>
            {step.number === 1 || step.number === 3 || step.number === 5 ? (
              <>
                <div>
                  <h3 className='text-xl'>{step.title}</h3>
                  <p className='text-[#B5B5B5] text-[15px] pt-3'>
                    {step.description}
                  </p>
                </div>
                <Image src={step.image} alt={step.title} height={192.37} width={289.01} className='' />
              </>
            ) : (
              <>
                <Image src={step.image} alt={step.title} height={192.37} width={289.01} className='' />
                <div>
                  <h3 className='text-xl'>{step.title}</h3>
                  <p className='text-[#B5B5B5] text-[15px] pt-3'>
                    {step.description}
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default fiveSteps
