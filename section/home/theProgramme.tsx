"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const TheProgramme = () => {
    const plans = [
        {
            months: "6-Months",
            name: "SlimOra Programme",
            bgBottom: "bg-[#8EA94D]",
            balloons: "1 Balloon",
            balloonIcon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="40" viewBox="0 0 48 40" fill="none">
                    <path d="M24 0C37.2548 0 48 8.75543 48 19.5557C47.9999 30.3559 37.2548 39.1113 24 39.1113C10.7452 39.1113 7.21142e-05 30.3559 0 19.5557C0 19.2401 0.00920228 18.9262 0.0273438 18.6143C0.00903073 18.435 -3.35217e-08 18.2551 0 18.0752H0.0683594C0.996957 7.96651 11.3564 0 24 0ZM45.0625 23.4697C43.9679 24.4099 42.5917 25.2748 40.9707 26.0352C38.7421 27.0805 36.2448 28.3229 33.333 28.8887C30.4213 29.4544 27.1516 29.7773 24 29.7773C20.8484 29.7773 18.0231 29.4544 15.1113 28.8887C12.1995 28.3229 9.2579 27.0805 7.0293 26.0352C5.40801 25.2747 4.0312 24.4101 2.93652 23.4697C5.12066 31.306 13.7218 37.1553 24 37.1553C34.2781 37.1553 42.8783 31.3058 45.0625 23.4697ZM24 1.95508C12.1947 1.95508 2.60255 9.67233 2.4043 19.2529C4.87425 20.9517 9.44274 23.6513 10.7773 24.2773C12.5138 25.0918 14.575 25.7379 16.8438 26.1787C19.1125 26.6195 21.5443 26.8467 24 26.8467C26.4557 26.8467 28.8875 26.6195 31.1562 26.1787C33.425 25.7379 35.4862 25.0918 37.2227 24.2773C38.4606 23.6967 42.8426 21.3309 45.5977 19.6357C45.5978 19.6091 45.5996 19.5824 45.5996 19.5557C45.5996 9.83545 35.9293 1.95508 24 1.95508Z" fill="#8EA94D" />
                </svg>
            ),
            support: "6 months in-clinic and digital medical support",
            coaching: "6 months of nutrition coaching",
        },
        {
            months: "12-Months",
            name: "SlimOra Programme",
            bgBottom: "bg-[#43838E]",
            balloons: "1 Balloon",
            balloonIcon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="40" viewBox="0 0 48 40" fill="none">
                    <path d="M24 0C37.2548 0 48 8.75543 48 19.5557C47.9999 30.3559 37.2548 39.1113 24 39.1113C10.7452 39.1113 7.21142e-05 30.3559 0 19.5557C0 19.2401 0.00920228 18.9262 0.0273438 18.6143C0.00903073 18.435 -3.35217e-08 18.2551 0 18.0752H0.0683594C0.996957 7.96651 11.3564 0 24 0ZM45.0625 23.4697C43.9679 24.4099 42.5917 25.2748 40.9707 26.0352C38.7421 27.0805 36.2448 28.3229 33.333 28.8887C30.4213 29.4544 27.1516 29.7773 24 29.7773C20.8484 29.7773 18.0231 29.4544 15.1113 28.8887C12.1995 28.3229 9.2579 27.0805 7.0293 26.0352C5.40801 25.2747 4.0312 24.4101 2.93652 23.4697C5.12066 31.306 13.7218 37.1553 24 37.1553C34.2781 37.1553 42.8783 31.3058 45.0625 23.4697ZM24 1.95508C12.1947 1.95508 2.60255 9.67233 2.4043 19.2529C4.87425 20.9517 9.44274 23.6513 10.7773 24.2773C12.5138 25.0918 14.575 25.7379 16.8438 26.1787C19.1125 26.6195 21.5443 26.8467 24 26.8467C26.4557 26.8467 28.8875 26.6195 31.1562 26.1787C33.425 25.7379 35.4862 25.0918 37.2227 24.2773C38.4606 23.6967 42.8426 21.3309 45.5977 19.6357C45.5978 19.6091 45.5996 19.5824 45.5996 19.5557C45.5996 9.83545 35.9293 1.95508 24 1.95508Z" fill="#43838E" />
                </svg>
            ),
            support: "12 months in-clinic and digital medical support",
            coaching: "12 months of nutrition coaching",
        },
        {
            months: "18-Months",
            name: "SlimOra Programme",
            bgBottom: "bg-[#8EA94D]",
            balloons: "2 Balloons",
            balloonIcon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="58" height="30" viewBox="0 0 58 30" fill="none">
                    <path d="M15.5 0C24.0604 0 31 5.65473 31 12.6299C31 19.605 24.0604 25.2598 15.5 25.2598C6.93962 25.2598 4.68094e-05 19.605 0 12.6299C0 12.4279 0.00607054 12.227 0.0175781 12.0273C0.00545274 11.9101 -2.19211e-08 11.7924 0 11.6748H0.0439453C0.643033 5.14577 7.33389 0 15.5 0ZM29.1035 15.1562C28.3963 15.764 27.5077 16.324 26.46 16.8154C25.0207 17.4905 23.4079 18.2928 21.5273 18.6582C19.6469 19.0235 17.5353 19.2324 15.5 19.2324C13.4645 19.2324 11.6393 19.0236 9.75879 18.6582C7.8784 18.2928 5.97922 17.4905 4.54004 16.8154C3.49199 16.3238 2.60282 15.7642 1.89551 15.1562C3.30536 20.218 8.86127 23.9961 15.5 23.9961C22.1386 23.9961 27.6935 20.2178 29.1035 15.1562ZM15.5 1.2627C7.87567 1.2627 1.68064 6.24701 1.55273 12.4346C3.1477 13.5316 6.09772 15.2762 6.95996 15.6807C8.08131 16.2066 9.41284 16.6235 10.8779 16.9082C12.3432 17.1929 13.914 17.3398 15.5 17.3398C17.086 17.3398 18.6568 17.1929 20.1221 16.9082C21.5872 16.6235 22.9187 16.2066 24.04 15.6807C24.8399 15.3054 27.6701 13.7764 29.4492 12.6816C29.4493 12.6644 29.4502 12.6471 29.4502 12.6299C29.4502 6.35225 23.2044 1.2627 15.5 1.2627Z" fill="#8EA94D" />
                    <path d="M44 7.07422C51.7319 7.07422 57.9998 12.1814 58 18.4814C58 24.7816 51.732 29.8887 44 29.8887C36.268 29.8887 30 24.7816 30 18.4814C30 18.2998 30.0053 18.1191 30.0156 17.9395C30.0045 17.8329 30 17.726 30 17.6191H30.04C30.5812 11.722 36.6242 7.07422 44 7.07422ZM56.2861 20.7637C55.6474 21.3124 54.8455 21.8189 53.8994 22.2627C52.5994 22.8725 51.1429 23.5968 49.4443 23.9268C47.7458 24.2568 45.8385 24.4453 44 24.4453C42.1615 24.4453 40.513 24.2568 38.8145 23.9268C37.116 23.5967 35.4005 22.8724 34.1006 22.2627C33.1542 21.8188 32.3517 21.3126 31.7129 20.7637C32.9864 25.3354 38.0038 28.748 44 28.748C49.9961 28.748 55.0125 25.3353 56.2861 20.7637ZM44 8.21484C37.1134 8.21484 31.5177 12.7168 31.4023 18.3057C32.8431 19.2966 35.5085 20.8721 36.2871 21.2373C37.2999 21.7123 38.502 22.0896 39.8252 22.3467C41.1487 22.6038 42.5675 22.7363 44 22.7363C45.4325 22.7363 46.8513 22.6038 48.1748 22.3467C49.498 22.0896 50.7001 21.7123 51.7129 21.2373C52.4352 20.8985 54.9916 19.5153 56.5986 18.5264C56.5987 18.5115 56.5996 18.4963 56.5996 18.4814C56.5994 12.8115 50.9587 8.21484 44 8.21484Z" fill="#8EA94D" />
                </svg>
            ),
            support: "18 months in-clinic and digital medical support",
            coaching: "18 months of nutrition coaching",
        },
    ];

    const stethoscopeIcon = (color: string) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
            <path d="M17.25 27.2832V32.5828C17.25 35.1244 18.2597 37.562 20.0569 39.3592C21.8541 41.1565 24.2917 42.1661 26.8333 42.1661H28.5238C30.2436 42.1658 31.9163 41.604 33.2876 40.5661C34.659 39.5283 35.654 38.0711 36.1215 36.4161" stroke="#8EA94D" stroke-width="3" />
            <path d="M10.4043 5.75H10.2279C9.62803 5.75 9.32711 5.75 9.07603 5.773C7.73134 5.89194 6.47136 6.48022 5.5168 7.43477C4.56225 8.38933 3.97398 9.6493 3.85503 10.994C3.83203 11.247 3.83203 11.546 3.83203 12.144V13.869C3.83203 17.4273 5.24557 20.8399 7.76168 23.356C10.2778 25.8721 13.6904 27.2857 17.2487 27.2857C18.9388 27.2857 20.6123 26.9527 22.1737 26.3059C23.7351 25.6591 25.1538 24.711 26.3488 23.5159C27.5438 22.3207 28.4916 20.9019 29.1382 19.3404C29.7848 17.7789 30.1174 16.1053 30.1172 14.4152V12.1459C30.1172 11.546 30.1172 11.2451 30.0961 10.994C29.9772 9.6493 29.3889 8.38933 28.4343 7.43477C27.4798 6.48022 26.2198 5.89194 24.8751 5.773C24.6221 5.75 24.3212 5.75 23.7213 5.75H23.5469" stroke="#8EA94D" stroke-width="3" stroke-linecap="round" />
            <path d="M36.4141 36.418C39.5897 36.418 42.1641 33.8436 42.1641 30.668C42.1641 27.4923 39.5897 24.918 36.4141 24.918C33.2384 24.918 30.6641 27.4923 30.6641 30.668C30.6641 33.8436 33.2384 36.418 36.4141 36.418Z" stroke="#8EA94D" stroke-width="3" />
            <path d="M23 3.83398V7.66732M11.5 3.83398V7.66732" stroke="#8EA94D" stroke-width="3" stroke-linecap="round" />
        </svg>
    );

    const carrotIcon = (color: string) => (
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.5 8.5C25.5 8.5 24 4 21 4C18 4 17 7 17 7S16 4 13 4C10 4 8.5 8.5 8.5 8.5L17 30L25.5 8.5Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M17 4V7M13 5L14 7M21 5L20 7" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M12 14H22" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );

    const devicesIcon = (color: string) => (
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="10" width="14" height="18" rx="2" stroke={color} strokeWidth="1.5" />
            <rect x="5" y="16" width="8" height="12" rx="1" stroke={color} strokeWidth="1.5" />
            <line x1="18" y1="24" x2="26" y2="24" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="9" cy="25" r="1" fill={color} />
        </svg>
    );

    return (
        <section className="bg-[#051111] pt-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-start mb-[117px] gap-8">
                    <h2 className="text-4xl md:text-[40px] font-urbanist font-semibold max-w-2xl">
                        <span className="text-[#8EA94D]">Customize your </span>
                        <span className="text-[#8EA94D]">SlimOra </span>
                        <span className="text-[#8EA94D]">Gastric Balloon Systems</span>
                    </h2>
                    <p className="text-[#B5B5B5] text-[20px] max-w-xl leading-[24px] text-justify">
                        At SlimOra, we know that every weight loss journey is different. That's why we offer a range of programme options tailored to your individual goals, preferences and needs so you can find the right path to lasting, healthy weight loss.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3  md:grid-cols-1 gap-[50px]">
                    {plans.map((plan, index) => (
                        <div key={index} className="bg-white rounded-none overflow-hidden flex flex-col h-full shadow-2xl border border-gray-100">
                            <div className="p-10 pb-[50px] grow">
                                <span className="text-[20px] text-[#383838] mb-[38px] block  leading-[34px] text-justify">What's included</span>

                                <div className="space-y-[33px]">
                                    <div className="flex items-center gap-[20px]">
                                        <div className="w-12 flex justify-center shrink-0">
                                            {plan.balloonIcon}
                                        </div>
                                        <span className="text-[#383838] font-bold text-[20px] leading-[22px] ">{plan.balloons}</span>
                                    </div>

                                    <div className="flex items-start gap-[20px]">
                                        <div className="w-12 flex justify-center shrink-0 pt-1">
                                            {stethoscopeIcon(index === 1 ? "#3D6369" : "#819A4D")}
                                        </div>
                                        <span className="text-[#383838] font-bold text-[16px] leading-[22px]">{plan.support}</span>
                                    </div>

                                    <div className="flex items-start gap-[20px]">
                                        <div className="w-12 flex justify-center shrink-0 pt-1">
                                            {carrotIcon(index === 1 ? "#3D6369" : "#819A4D")}
                                        </div>
                                        <span className="text-[#383838] font-bold text-[16px] leading-[22px]">{plan.coaching}</span>
                                    </div>

                                    <div className="flex items-center gap-[20px]">
                                        <div className="w-12 flex justify-center shrink-0">
                                            {devicesIcon(index === 1 ? "#3D6369" : "#819A4D")}
                                        </div>
                                        <span className="text-[#383838] font-bold text-[16px] leading-[22px]">Digital tools to use and keep</span>
                                    </div>
                                </div>
                            </div>

                            <div className={`${plan.bgBottom} py-[36px] px-[40px] text-white min-h-[170px] flex flex-col justify-center`}>
                                <h3 className="text-[49px] mb-0 leading-[34px] font-bold">{plan.months}</h3>
                                <p className="text-[30px] text-justify leading-[34px] font-bold">{plan.name}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center max-w-4xl mx-auto pt-[96px] pb-[120px]">
                    <h3 className="text-[48px] md:text-[50px] font-bold text-white mb-[14px] leading-tight font-Urbanist">Not sure which program is for you?</h3>
                    <p className="text-[#B5B5B5] text-[20px] mb-12 leading-[24px]">
                        Find a clinic near you and speak with one of our advisors. They'll help you choose the Allurion Program that best fits your goals and needs.
                    </p>
                    <div className="flex justify-center">
                        <Link
                            href="#"
                            className="bg-button-bg hover:bg-button-bg/90 text-white px-30 py-[10px] rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg"
                        >
                            Find Clinic
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TheProgramme;
