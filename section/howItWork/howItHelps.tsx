import Image from 'next/image';

const helpCards = [
    {
        title: "Feel fuller, sooner",
        description: "The SlimOra Balloon sits in your stomach and takes up space, helping you feel full with smaller portions from day one."
    },
    {
        title: "A programme that goes beyond the balloon",
        description: "SlimOra combines the balloon with medical care, support, and smart tools to build skills for lifelong weight management, not just short-term loss."
    },
    {
        title: "Backed by science",
        description: "Like other intragastric balloons, it works by slowing digestion and promoting satiety so you're less likely to overeat or snack between meals."
    }
];

export default function HowItHelps() {
    return (
        <div className='bg-[#0A1D20]'>
            <div className='max-width pb-[100px] md:pb-[200px]'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-[33px] lg:gap-[125px] md:gap-[80px]'>
                    <div className='relative h-[247px] lg:h-[344px] md:h-[330px] w-full  overflow-hidden'>
                        <Image
                            src="/images/how_it_works/weight_loss2.png"
                            alt='Weight'
                            fill
                            className='w-full h-auto object-cover block lg:hidden'
                        />
                        <Image
                            src="/images/how_it_works/weight_loss.png"
                            alt='Weight'
                            fill
                            className='w-full h-auto object-cover hidden lg:block'
                        />
                        {/* Gradient overlay only on lg */}
                        <div className="hidden lg:block absolute inset-0 
  bg-[linear-gradient(270deg,#0A1D20_0%,rgba(10,29,32,0)_100%)]"></div>

                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='text-[#FFFFFF] text-[22px] md:text-[35px] font-bold text-center md:text-left'>How does SlimOra Program Balloon help with weight loss?</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 pt-8 sm:pt-[69px] gap-[21px]'>
                    {helpCards.map((card, index) => (
                        <div key={index} className="rounded-[20px] bg-[linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),linear-gradient(180deg,#143338_0%,#2D4C3D_23.56%,#8EA94D_100%)] py-[30px] md:py-[40px] px-[10px] justify-center flex flex-col">
                            <div className='gap-[20px] md:gap-[28px] flex flex-col'>
                                <h1 className='text-[#FFFFFF] text-center text-[18px] sm:text-[24px] font-semibold'>{card.title}</h1>
                                <p className='text-[12px] md:text-[18px] text-[#B5B5B5] leading-[18.271px] md:leading-[24px] text-center'>{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
