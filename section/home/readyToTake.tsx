import Image from "next/image";
import Link from "next/link";

const ReadyToTake = () => {
    return (
        <div className="flex flex-col bg-[#0A1D20]">
            {/* Section 1: Ready to take the 1st step? */}
            <section className="relative overflow-hidden pt-32 pb-48  z-30">
                <div className="absolute inset-0">
                    <Image
                        src="/images/home/ready_to_step.png"
                        alt="Ready to take the 1st step"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative z-10 max-width flex flex-col items-center text-center">
                    <h2 className="text-3xl md:text-[52px] font-bold text-white mb-4 leading-tight">
                        Ready to take the 1st step?
                    </h2>
                    <p className="text-white/90 text-lg md:text-xl font-Urbanist mb-10 max-w-[700px]">
                        We recommend checking if you're eligible before contacting a clinic
                    </p>
                    <Link
                        href="#"
                        className="bg-button-bg hover:bg-button-bg/90 text-white px-10 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg"
                    >
                        Check Eligibility
                    </Link>
                </div>
            </section>

            {/* Section 2: Are you a healthcare professional? */}
            <section className="bg-[#0A1D20] pt-20 pb-20 md:pt-32 md:pb-32 relative z-20 ">
                <div className="max-width flex flex-col md:flex-row justify-between items-start gap-12">
                    <div className="md:w-1/2 lg:w-2/5">
                        <h2 className="text-3xl md:text-[45px] font-bold text-white leading-[1.1]">
                            Are you a healthcare professional?
                        </h2>
                    </div>
                    <div className="md:w-1/2 lg:w-3/5 flex flex-col items-start">
                        <p className="text-white/70 font-Urbanist text-lg mb-6 leading-relaxed">
                            Already partnering with SlimOra? Access clinical protocols, patient dashboards and support tools to deliver best-in-class care.
                        </p>
                        <p className="text-white/70 font-Urbanist text-lg mb-10 leading-relaxed">
                            Interested in joining our network? Learn how the SlimOra Program can help you offer safe, effective and non-invasive weight loss to your patients. Become part of the new standard of obesity care today.
                        </p>
                        <div className="flex flex-wrap gap-5">
                            <Link
                                href="#"
                                className="bg-button-bg hover:bg-button-bg/90 text-white px-8 py-3.5 rounded-full font-semibold transition-all transform hover:scale-105"
                            >
                                Become a Partner
                            </Link>
                            <Link
                                href="#"
                                className="bg-button-bg hover:bg-button-bg/90 text-white px-8 py-3.5 rounded-full font-semibold transition-all transform hover:scale-105"
                            >
                                Learn about SlimOra
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Are you already a patient? */}
            <section className="relative h-[450px] flex items-center overflow-hidden z-10">
                <div className="absolute inset-0">
                    <Image
                        src="/images/home/ready_to_step2.png"
                        alt="Already a patient"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative z-10 max-width flex flex-col md:flex-row justify-between items-center gap-12 w-full">
                    <div className="md:w-1/2 lg:w-2/5">
                        <h2 className="text-3xl md:text-[45px] font-bold text-white leading-[1.1]">
                            Are you already a patient?
                        </h2>
                    </div>
                    <div className="md:w-1/2 lg:w-3/5 flex flex-col items-start">
                        <p className="text-white/70 font-Urbanist text-lg mb-10 leading-relaxed max-w-2xl">
                            Download the SlimOra App to track your progress, connect your devices and access support—all in one place. Browse patient guides, troubleshoot issues or contact our team directly.
                        </p>
                        <Link
                            href="#"
                            className="bg-button-bg hover:bg-button-bg/90 text-white px-10 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg"
                        >
                            View Patient Dashboard
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ReadyToTake;
