"use client";
import React from "react";
import Image from "next/image";
import CtaButton from "@/component/ctaButton";

const ReadyToTake = () => {
    return (
        <section className="relative overflow-hidden pt-60 pb-60 z-30">
            <div className="absolute inset-0">
                <Image
                    src="/images/home/ready_to_step.png"
                    alt="Ready to take the 1st step"
                    fill
                    className="hidden md:block object-cover"
                />
                <Image
                    src="/images/home/ready_to_step03.png"
                    alt="Ready to take the 1st step"
                    fill
                    className="block md:hidden object-cover"
                />
            </div>
            <div className="relative z-10 max-width flex flex-col items-center text-center">
                <h2 className="text-3xl md:text-[50px] font-bold text-white mb-[7px] leading-tight">
                    Ready to take the 1st step?
                </h2>
                <p className="text-white/90 text-lg md:text-[20px] font-Urbanist mb-[28px] max-w-[700px]">
                    We recommend checking if you're eligible before contacting a clinic
                </p>
                <CtaButton
                    href="#"
                    className="hover:bg-button-bg/90 px-10 py-4 font-semibold transition-all  shadow-lg"
                    text="Check Eligibility"
                    type="link"
                />
            </div>
        </section>
    );
};

export default ReadyToTake;
