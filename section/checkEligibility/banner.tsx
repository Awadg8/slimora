"use client";
import { useState } from "react";
import Image from "next/image";
import Interaction from "@/component/microInteraction";
import Interaction2 from "@/component/microInteraction2";

type FormDataType = {
  weight_kg: number;
  height_cms: number;
};

export default function Banner() {
  const [bmi, setBmi] = useState<number | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState<FormDataType>({
    weight_kg: 0,
    height_cms: 0,
  });

  const getBmiCategory = (bmiValue: number) => {
    if (bmiValue < 18.5)
      return { category: "Underweight", color: "text-blue-400" };
    if (bmiValue < 25)
      return { category: "Normal weight", color: "text-green-400" };
    if (bmiValue < 30)
      return { category: "Overweight", color: "text-yellow-400" };
    return { category: "Obese", color: "text-red-400" };
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: Number(value),
    });
  };

  const handleCheckEligiblity = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.weight_kg) newErrors.weight_kg = "Weight field is required";
    if (!formData.height_cms) newErrors.height_cms = "Height field is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const calculatedBmi =
        formData.weight_kg / Math.pow(formData.height_cms / 100, 2);
      setBmi(calculatedBmi);
    }
  };

  const handleReset = () => {
    setBmi(null);
    setFormData({
      weight_kg: 0,
      height_cms: 0,
    });
    setErrors({});
  };

  return (
    <div className="relative">
      <div className="relative w-full h-screen sm:h-[110vh] lg:h-[140vh] hidden sm:block">
        <Image
          src={"/images/check_eligible/banner.png"}
          fill
          objectFit="cover"
          alt="Check Eligiblity Banner"
        />
      </div>
      <div className="relative w-full h-[300px] block sm:hidden">
        <Image
          src={"/images/home/mobile_banner.png"}
          fill
          objectFit="cover"
          alt="Check Eligiblity Banner"
        />
        {/* Gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-[#0A1D20] via-[#0a1d2065] to-transparent" />
      </div>
      <div className="absolute hidden sm:flex top-[15%] sm:top-[30%] left-[50%] translate-x-[-50%] flex-col items-center justify-center space-y-8 max-w-[1024px] w-full mx-auto px-6">
        <div className="flex flex-col justify-center items-center font-urbanist">
          <Interaction>
            <p className="font-bold text-2xl md:text-[40px] text-center text-white">
              Check if you're eligible for the SlimOra Program
            </p>
          </Interaction>
          <Interaction2>
            <p className="font-light text-sm md:text-[20px] text-center mt-6 text-[#b5b5b5]">
              Start your journey with a quick BMI check and a few simple
              questions. This helps us understand if the SlimOra Gastric Balloon
              is a good fit for your health goals.It only takes a minute and
              could be your first step towards safe, effective and lasting
              weight loss -
              <span className="font-bold text-white">
                {" "}
                with support at every stage.
              </span>
            </p>
          </Interaction2>
        </div>
        <div className="w-full flex justify-between gap-12 items-end">
          <div className="flex justify-between items-center gap-8">
            {bmi === null ? (
              <div className="flex flex-row gap-4 text-white">
                <div className="flex flex-col items-center space-y-[5px]">
                  <label
                    htmlFor="weight_kg"
                    className="font-semibold text-[16px]"
                  >
                    Weight
                  </label>
                  <input
                    type="number"
                    name="weight_kg"
                    value={formData.weight_kg || ""}
                    onChange={handleChange}
                    className="text-[14px] bg-white py-3 px-6 text-markpro placeholder:text-[#BABABA] placeholder:text-center text-black/80 border-none outline-none rounded-[31px] text-center w-full sm:w-auto"
                    placeholder="(Kilograms)"
                  />
                  {errors.weight_kg && (
                    <p className="text-xs text-red-500">{errors.weight_kg}</p>
                  )}
                </div>
                <div className="flex flex-col items-center space-y-[5px]">
                  <label
                    htmlFor="height_cms"
                    className="font-semibold text-[16px]"
                  >
                    Height
                  </label>
                  <input
                    type="number"
                    name="height_cms"
                    value={formData.height_cms || ""}
                    onChange={handleChange}
                    className="text-[14px] bg-white py-3 px-6 text-markpro placeholder:text-[#BABABA] placeholder:text-center text-black/80 border-none outline-none rounded-[31px] text-center w-full sm:w-auto"
                    placeholder="(Centimeters)"
                  />
                  {errors.height_cms && (
                    <p className="text-xs text-red-500">{errors.height_cms}</p>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-4 md:gap-12 text-white w-full md:w-auto">
                <div className="text-center md:text-left">
                  <span className="font-urbanist font-extrabold text-5xl md:text-6xl text-white block">
                    {bmi.toFixed(1)}
                  </span>
                  <p
                    className={`font-markpro text-lg md:text-xl mt-1 font-semibold ${getBmiCategory(bmi).color}`}
                  >
                    {getBmiCategory(bmi).category}
                  </p>
                </div>

                {bmi >= 27 && (
                  <div className="bg-white/20 backdrop-blur-sm rounded-[20px] py-3 px-6 md:px-8 border border-white/30">
                    <p className="text-white font-markpro text-sm md:text-base font-medium text-center">
                      ✓ Eligible for Slimora
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={bmi !== null ? handleReset : handleCheckEligiblity}
            className="cursor-pointer bg-button-bg text-white rounded-full p-3 transition-colors w-full"
          >
            {bmi !== null ? "Calculate Again" : "Check Eligibility"}
          </button>
        </div>
      </div>
      <div className="relative flex sm:hidden flex-col items-center justify-center space-y-8 max-w-[810px] w-full mx-auto px-6 pb-25">
        <div className="flex flex-col justify-center items-center">
          <p className="text-2xl md:text-[40px] text-center font-urbanist text-white">
            Check if you're eligible for the SlimOra Program
          </p>
          <p className="font-light text-sm md:text-[20px] text-center mt-6 text-[#b5b5b5]">
            Start your journey with a quick BMI check and a few simple
            questions. This helps us understand if the SlimOra Gastric Balloon
            is a good fit for your health goals.It only takes a minute and could
            be your first step towards safe, effective and lasting weight loss -
            <span className="font-bold text-white">
              with support at every stage.
            </span>
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between gap-12 items-end">
          <div className="flex flex-row justify-between items-center gap-10">
            {bmi === null ? (
              <div className="flex flex-row gap-4 text-white">
                <div className="flex flex-col items-center space-y-[5px]">
                  <label
                    htmlFor="weight_kg"
                    className="font-semibold text-[16px]"
                  >
                    Weight
                  </label>
                  <input
                    type="number"
                    name="weight_kg"
                    value={formData.weight_kg || ""}
                    onChange={handleChange}
                    className="text-[14px] bg-white py-3 px-6 text-markpro placeholder:text-[#BABABA] placeholder:text-center text-black/80 border-none outline-none rounded-[31px] text-center w-full sm:w-auto"
                    placeholder="(Kilograms)"
                  />
                  {errors.weight_kg && (
                    <p className="text-xs text-red-500">{errors.weight_kg}</p>
                  )}
                </div>
                <div className="flex flex-col items-center space-y-[5px]">
                  <label
                    htmlFor="height_cms"
                    className="font-semibold text-[16px]"
                  >
                    Height
                  </label>
                  <input
                    type="number"
                    name="height_cms"
                    value={formData.height_cms || ""}
                    onChange={handleChange}
                    className="text-[14px] bg-white py-3 px-6 text-markpro placeholder:text-[#BABABA] placeholder:text-center text-black/80 border-none outline-none rounded-[31px] text-center w-full sm:w-auto"
                    placeholder="(Centimeters)"
                  />
                  {errors.height_cms && (
                    <p className="text-xs text-red-500">{errors.height_cms}</p>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-4 md:gap-12 text-white w-full md:w-auto">
                <div className="text-center md:text-left">
                  <span className="font-urbanist font-extrabold text-5xl md:text-6xl text-white block">
                    {bmi.toFixed(1)}
                  </span>
                  <p
                    className={`font-markpro text-lg md:text-xl mt-1 font-semibold ${getBmiCategory(bmi).color}`}
                  >
                    {getBmiCategory(bmi).category}
                  </p>
                </div>

                {bmi >= 27 && (
                  <div className="bg-white/20 backdrop-blur-sm rounded-[20px] py-3 px-6 md:px-8 border border-white/30">
                    <p className="text-white font-markpro text-sm md:text-base font-medium text-center">
                      ✓ Eligible for Slimora
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={bmi !== null ? handleReset : handleCheckEligiblity}
            className="bg-button-bg text-white cursor-pointer rounded-full p-3 transition-colors w-full"
          >
            {bmi !== null ? "Calculate Again" : "Check Eligibility"}
          </button>
        </div>
      </div>
    </div>
  );
}
