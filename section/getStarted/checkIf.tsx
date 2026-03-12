'use client';
import { useState } from 'react';
import Image from 'next/image';

type FormDataType = {
    weight_kg: number,
    height_cms: number,
}

export default function CheckIf() {
    const [bmi, setBmi] = useState<number | null>(null);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [formData, setFormData] = useState<FormDataType>({
        weight_kg: 0,
        height_cms: 0,
    });

    const getBmiCategory = (bmiValue: number) => {
        if (bmiValue < 18.5) return { category: 'Underweight', color: 'text-blue-400' };
        if (bmiValue < 25) return { category: 'Normal weight', color: 'text-green-400' };
        if (bmiValue < 30) return { category: 'Overweight', color: 'text-yellow-400' };
        return { category: 'Obese', color: 'text-red-400' };
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        setFormData({
            ...formData,
            [name]: Number(value)
        });
    }

    const handleCheckEligiblity = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.weight_kg) newErrors.weight_kg = 'Weight field is required';
        if (!formData.height_cms) newErrors.height_cms = 'Height field is required';

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            const calculatedBmi = (formData.weight_kg / Math.pow(formData.height_cms / 100, 2));
            setBmi(calculatedBmi);
        }
    }

    const handleReset = () => {
        setBmi(null);
        setFormData({
            weight_kg: 0,
            height_cms: 0,
        });
        setErrors({});
    }

    return (
        <div className="relative w-full bg-[#2C5D6B]">

            {/* MOBILE + TABLET IMAGE — shown below lg breakpoint only */}
            <div className="relative w-full h-82 sm:h-92 lg:h-72 lg:hidden">
                <Image
                    src="/images/get_started/check_if.jpg"
                    alt="SlimOra Balloon"
                    fill
                    className="object-cover"
                />
            </div>

            {/* CONTENT */}
            <div className="flex-1">
                {/*
                    mobile/tablet: full-width with normal padding, no right offset
                    desktop (lg+): add right padding to make room for the absolute image
                */}
                <div className="max-w-[1280px] mx-auto py-8 px-6 sm:px-8 md:px-10 md:py-12 lg:pl-8 lg:pr-[460px] lg:py-12">

                    <div className="w-full flex flex-col items-start">

                        {/* TEXT */}
                        <div className="flex flex-col font-urbanist">
                            <p className="font-bold font-urbanist text-xl sm:text-2xl md:text-[30px] lg:text-[40px] text-white text-center lg:text-left">
                                Check if you're eligible for the SlimOra Program
                            </p>

                            <p className="font-light text-sm sm:text-base md:text-[17px] lg:text-[20px] mt-4 md:mt-5 text-[#b5b5b5] text-center lg:text-left">
                                Start your journey with a quick BMI check and a few simple questions.
                                This helps us understand if the SlimOra Gastric Balloon is a good fit
                                for your health goals. It only takes a minute and could be your first
                                step towards safe, effective and lasting weight loss -
                                <span className="font-bold text-white">
                                    {" "}with support at every stage.
                                </span>
                            </p>
                        </div>

                        {/* FORM */}
                        <div className="w-full mt-6 md:mt-8">
                            <div className="flex flex-col min-[1025px]:flex-row items-center min-[1025px]:items-end gap-4 sm:gap-5 md:gap-6">

                                {bmi === null && (
                                    /* INPUT FIELDS */
                                    <div className="flex min-[1025px]:items-end gap-4 text-white w-full min-[1025px]:w-auto">

                                        {/* WEIGHT */}
                                        <div className="flex flex-col items-center space-y-[5px] w-full">
                                            <label htmlFor="weight_kg" className="font-semibold text-[16px]">
                                                Weight
                                            </label>
                                            <input
                                                type="number"
                                                name="weight_kg"
                                                value={formData.weight_kg || ''}
                                                onChange={handleChange}
                                                className="w-full min-[1025px]:w-[160px] text-[14px] bg-white py-3 px-6 placeholder:text-[#BABABA] placeholder:text-center text-black/80 border-none outline-none rounded-[31px] text-center"
                                                placeholder="(Kilograms)"
                                            />
                                            {errors.weight_kg && (
                                                <p className="text-xs text-red-500">{errors.weight_kg}</p>
                                            )}
                                        </div>

                                        {/* HEIGHT */}
                                        <div className="flex flex-col items-center space-y-[5px] w-full">
                                            <label htmlFor="height_cms" className="font-semibold text-[16px]">
                                                Height
                                            </label>
                                            <input
                                                type="number"
                                                name="height_cms"
                                                value={formData.height_cms || ''}
                                                onChange={handleChange}
                                                className="w-full min-[1025px]:w-[160px] text-[14px] bg-white py-3 px-6 placeholder:text-[#BABABA] placeholder:text-center text-black/80 border-none outline-none rounded-[31px] text-center"
                                                placeholder="(Centimeters)"
                                            />
                                            {errors.height_cms && (
                                                <p className="text-xs text-red-500">{errors.height_cms}</p>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {
                                    bmi !== null && (
                                        /* BMI RESULT */
                                        <div className="flex flex-col items-center min-[1025px]:items-start gap-3 text-white w-full min-[1025px]:w-auto">

                                            {/* BMI score row */}
                                            <div className="flex items-center min-[1025px]:items-end gap-4 sm:gap-5">

                                                {/* Score pill */}
                                                <div className="flex flex-col items-center justify-center bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl px-5 py-3 min-w-[90px]">
                                                    <span className="font-urbanist font-extrabold text-4xl md:text-5xl text-white leading-none tracking-tight">
                                                        {bmi.toFixed(1)}
                                                    </span>
                                                    <span className="font-markpro text-[11px] uppercase tracking-widest text-white/60 mt-1">
                                                        BMI
                                                    </span>
                                                </div>

                                                {/* Category + eligibility stacked */}
                                                <div className="flex flex-col gap-2">
                                                    <p className={`font-markpro text-sm sm:text-base font-semibold ${getBmiCategory(bmi).color}`}>
                                                        {getBmiCategory(bmi).category}
                                                    </p>

                                                    {bmi >= 27 ? (
                                                        <div
                                                            className="relative inline-flex items-center gap-2 overflow-hidden rounded-full px-4 py-[7px]"
                                                            style={{
                                                                background: 'linear-gradient(135deg, rgba(142,169,77,0.30) 0%, rgba(142,169,77,0.12) 100%)',
                                                                border: '1px solid rgba(142,169,77,0.55)',
                                                                boxShadow: '0 0 14px rgba(142,169,77,0.20)',
                                                            }}
                                                        >
                                                            {/* shimmer sweep */}
                                                            <span
                                                                aria-hidden="true"
                                                                className="pointer-events-none absolute inset-0"
                                                                style={{
                                                                    background: 'linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.14) 50%, transparent 65%)',
                                                                    backgroundSize: '200% 100%',
                                                                    animation: 'shimmer 2.6s ease-in-out infinite',
                                                                }}
                                                            />
                                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                                                                <path d="M2 6.5L5.2 10L11 3" stroke="#8ea94d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <span className="font-markpro text-xs font-semibold text-white whitespace-nowrap">
                                                                Eligible for Slimora
                                                            </span>
                                                        </div>
                                                    ) : (
                                                        <div
                                                            className="inline-flex items-center gap-2 rounded-full px-4 py-[7px]"
                                                            style={{
                                                                background: 'rgba(255,255,255,0.07)',
                                                                border: '1px solid rgba(255,255,255,0.18)',
                                                            }}
                                                        >
                                                            <span className="font-markpro text-xs font-medium text-white/70 whitespace-nowrap">
                                                                BMI &lt; 27 — not eligible yet
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }

                                {/* BUTTON */}
                                <button
                                    type="button"
                                    onClick={bmi !== null ? handleReset : handleCheckEligiblity}
                                    className="flex-1 w-full min-[1025px]:w-auto cursor-pointer bg-button-bg text-white rounded-full px-8 py-3 transition-colors whitespace-nowrap"
                                >
                                    {bmi !== null ? 'Calculate Again' : 'Check Eligibility'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* DESKTOP IMAGE — only at lg+ so it NEVER overlaps tablet content */}
            <div className="hidden lg:block absolute right-0 top-0 h-full w-[440px]">
                <Image
                    src="/images/get_started/check_if.jpg"
                    alt="SlimOra Balloon"
                    fill
                    className="object-cover"
                />
            </div>

        </div>
    )
}