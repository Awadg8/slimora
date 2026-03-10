import StepCard from "@/component/stepCard"
import CtaButton from "@/component/ctaButton"
export default function StepsFour() {
  return (
    <div className='bg-[#0A1D20]'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='md:pt-[136px] pt-[80px] md:pb-[78px] pb-[46px]'>
          <p className='md:text-[40px] text-[20px] md:leading-[45px] font-bold text-[#FFFFFF] max-w-[750px]'>4 steps to kickstart your personalized weight-loss journey with <span className='relative pr-4'>SlimOra <sup className='text-xs absolute top-4'>TM</sup></span> Gastric Balloon Systems</p>
        </div>
        <StepCard />
        <div className="flex justify-center pt-[65px] md:pt-12 mb-[34px] md:mb-[90px]">
          <CtaButton
            text="Find a Clinic"
            className="md:text-[20px] text-[12.2px] font-medium md:w-[588px] w-full"
            type="link"
            href="#"
          />
        </div>
      </div>
    </div>
  )
}
