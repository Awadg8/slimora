import React from 'react';

const Disclaimer = () => {
    const infoList = [
        "The SlimOra Gastric Balloon is part of a behaviour modification programme that lasts for a minimum of 6 months, to which you must be fully committed. This device is designed to promote weight loss, but only by committing to changing your eating habits and increasing your physical activity will you be able to achieve and maintain a healthy weight in the long term.",
        "It is important to note that the SlimOra Gastric Balloon may cause adverse events, some of which may require removal by endoscopy. Rare cases of spontaneous hyperinflation, small intestine obstruction, stomach dilation, oesophagitis, pancreatitis, or stomach perforation have been reported, requiring surgical intervention. Please consult the full list of potential complications available above.",
        "The SlimOra Gastric Balloon is not suitable for all patients. Pregnant individuals or those with a history of oesophageal or stomach surgery, among others, are not eligible for the procedure. The complete list of contraindications can be found in the device's instructions for use provided to doctors. Your doctor will review your medical history and conduct a physical examination to confirm your eligibility for the SlimOra Programme.",
        "It is crucial that each doctor and patient carefully assess the risks and benefits of the treatment before using the SlimOra device. To learn more about the SlimOra Balloon, its effectiveness, and its tolerability, discuss it with your doctor.",
        "You must be available for follow-up with your doctor throughout the treatment period, especially if you experience the following symptoms, including but not limited to: persistent nausea, vomiting, dehydration, and/or abdominal pain. If you consult other healthcare professionals, inform them that an intragastric balloon is present."
    ];

    return (
        <section className='bg-[#2C5D6B] py-10 md:py-16'>
            <div className='max-width px-6 md:px-0'>
                <h2 className='text-white text-xl md:text-[35px] font-bold leading-tight mb-12 md:mb-16 max-w-[1000px]'>
                    Important information to consider before the placement of an SlimOra Gastric Balloon
                </h2>

                <ul className='space-y-2 mb-6'>
                    {infoList.map((item, index) => (
                        <li key={index} className='flex gap-4'>
                            <span className='text-[#B5B5B5] mt-2 block w-1.5 h-1.5 rounded-full bg-[#B5B5B5] shrink-0'></span>
                            <p className='text-[#B5B5B5] text-sm md:text-[16px] leading-relaxed'>
                                {item}
                            </p>
                        </li>
                    ))}
                </ul>

                <p className='text-[#B5B5B5] italic text-center text-lg md:text-[22px] leading-relaxed max-w-[1100px] mx-auto'>
                    We encourage you to stay close to modern emergency care facilities during the time the balloon is in place, in case serious complications arise.
                </p>
            </div>
        </section>
    );
};

export default Disclaimer;