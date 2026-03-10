import Image from 'next/image'

const stepsData = [
    {
        id: 1,
        image: "/images/home/step1.jpg",
        title: "Find a clinic",
        description: "Use our global clinic finder to discover trusted SlimOra partners near you. Each clinic offers SlimOra Gastric Balloon Systems with expert support from trained professionals."
    },
    {
        id: 2,
        image: "/images/home/step2.jpg",
        title: "Book a consultation",
        description: "Once you've found your clinic, book your initial consultation to explore all of your weight-loss options and ask any questions."
    },
    {
        id: 3,
        image: "/images/home/step3.jpg",
        title: "Meet the clinic team",
        description: "Your doctor will carry out a full consultation, review your medical history and walk you through the benefits and risks of the different weight-loss solutions."
    },
    {
        id: 4,
        image: "/images/home/step4.jpg",
        title: "Get your treatment",
        description: "If the SlimOra Balloon is right for you, it will be placed during a simple outpatient visit. The balloon stays in your stomach for around four months, helping you feel full and eat less."
    }
]

export default function StepCard() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[42px]'>
            {stepsData.map((step) => (
                <div key={step.id}>
                    <div className='relative h-[264px] w-full'>
                        <Image src={step.image} alt={step.title} fill className='object-cover rounded-[20px]' />
                    </div>
                    <div className="">
                        <h2 className="pt-[34px] pb-[12px] text-[20px] leading-[24px] whitespace-nowrap font-bold">
                            {step.id}. {step.title}
                        </h2>
                        <p className="text-[16px] leading-[24px] text-justify text-[#B5B5B5]">
                            {step.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}
