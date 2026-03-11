const eligibilityCriteria = [
    {
        title: "Age Requirement",
        description: "Aged 18 and above"
    },
    {
        title: "Weight Profile",
        description: "BMI 27 and above"
    },
    {
        title: "Family Status",
        description: "Not currently pregnant or breastfeeding"
    },
    {
        title: "Surgical History",
        description: "Have not had stomach or esophageal surgery"
    }
];

export default function BalloonRemovalAndEligibility() {
    return (
        <div>

            <div className="bg-[linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),linear-gradient(180deg,#8FAE4D_0%,#2C5D6B_100%)]">
                <div className='grid grid-cols-1 md:grid-cols-2 max-width p-[57px] gap-[20px]'>
                    <div className='flex flex-col justify-center'>
                        <h2 className='text-[22px] md:text-[30px] lg:text-[45px] text-[#FFFFFF] leading-[28px] md:leading-[40px] lg:leading-[54px] font-bold'>How is the SlimOra <br className='hidden md:block' />  Gastric Balloon removed?</h2>
                    </div>
                    <div className='space-y-[20px] md:space-y-[10px]'>
                        <p className='text-[#FFFFFF0] leading-[18px] md:leading-[24px] text-[12px] md:text-[14px] lg:text-[20px] text-justify'>The SlimOra Balloon is designed to pass naturally. Around four months after placement, a time-activated valve opens, allowing the balloon to deflate. The empty balloon is then passed naturally through the digestive system, with no need for a procedure or removal appointment.</p>
                        <p className='text-[#FFFFFF0] text-[12px] md:text-[14px] lg:text-[20px] leading-[16px] md:leading-[18px] lg:leading-[24px] text-justify'>As with any medical device, rare complications can occur. These may include balloon hyperinflation, bowel obstruction, stomach dilation, or other gastrointestinal issues, which could require medical or surgical intervention.</p>
                    </div>
                </div>

            </div>
            <div className='bg-[#0A1D20] pt-[100px] sm:pt-[143px]'>
                <div className='pb-[100px] sm:pb-[72px] max-width'>
                    <h2 className='text-[#FFFFFF] text-[24px] lg:text-[40px] md:text-[30px] font-bold text-center'>Eligibility Criteria for the SlimOra Gastric Balloon and Program :</h2>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-[12px] md:gap-5 pt-[36px] md:pt-[72px]'>
                        {eligibilityCriteria.map((item, index) => (
                            <div key={index} className="rounded-[12px] bg-[linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),linear-gradient(180deg,#8EA94D_0%,#2C5D6B_100%)] space-y-[15px] md:space-y-[32px] px-1 md:px-2 py-8 text-center">
                                <h3 className='text-[#B5B5B5] text-[10px] lg:text-[18px] md:text-[15px] leading-[18px]'>{item.title}</h3>
                                <p className='text-[#FFFFFF] text-[12px] lg:text-[24px] md:text-[18px]'>{item.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="pt-[35px] md:pt-[42px]">
                        <h2 className="text-[#B5B5B5] text-justify text-[12px] md:text-[20px] leading-[18px] md:leading-[28px]">This list is not exhaustive; the full list of contraindications is available in the device's instructions for use, which is provided to doctors. Your doctor will examine you and thoroughly review your medical history to confirm your eligibility.</h2>
                    </div>

                </div>
            </div>
        </div>
    )
}
