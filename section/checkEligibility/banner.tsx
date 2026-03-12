"use client";
import { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import Interaction from "@/component/microInteraction";
import Interaction2 from "@/component/microInteraction2";

// ─── Types ────────────────────────────────────────────────────────────────────

type FormDataType = {
  weight_kg: number;
  height_cms: number;
};

// ─── Constants ────────────────────────────────────────────────────────────────

const INITIAL_FORM: FormDataType = { weight_kg: 0, height_cms: 0 };

const BMI_CATEGORIES = [
  { max: 18.5, category: 'Underweight', color: 'text-blue-400' },
  { max: 25, category: 'Normal weight', color: 'text-green-400' },
  { max: 30, category: 'Overweight', color: 'text-yellow-400' },
] as const;

// ─── Sub-components ───────────────────────────────────────────────────────────

function BmiInputField({
  id,
  label,
  placeholder,
  value,
  error,
  onChange,
}: {
  id: keyof FormDataType;
  label: string;
  placeholder: string;
  value: number;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex flex-col items-center space-y-[5px]">
      <label htmlFor={id} className="font-semibold text-[16px]">
        {label}
      </label>
      <input
        id={id}
        type="number"
        name={id}
        value={value || ''}
        onChange={onChange}
        className="text-[14px] bg-white py-3 px-6 font-markpro placeholder:text-[#BABABA] placeholder:text-center text-black/80 border-none outline-none rounded-[31px] text-center w-full sm:w-auto"
        placeholder={placeholder}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

function EligibilityBadge({ eligible }: { eligible: boolean }) {
  if (eligible) {
    return (
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
    );
  }

  return (
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
  );
}

function BmiResult({ bmi, category, color }: { bmi: number; category: string; color: string }) {
  return (
    <div className="flex flex-col items-center min-[1025px]:items-start gap-3 text-white w-full min-[1025px]:w-auto">
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
          <p className={`font-markpro text-sm sm:text-base font-semibold ${color}`}>
            {category}
          </p>
          <EligibilityBadge eligible={bmi >= 27} />
        </div>
      </div>
    </div>
  );
}

function BmiFormOrResult({
  bmi,
  formData,
  errors,
  onChange,
}: {
  bmi: number | null;
  formData: FormDataType;
  errors: Record<string, string>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  if (bmi !== null) {
    const { category, color } = getBmiCategory(bmi);
    return <BmiResult bmi={bmi} category={category} color={color} />;
  }

  return (
    <div className="flex flex-row gap-4 sm:gap-5 md:gap-6 text-white">
      <BmiInputField
        id="weight_kg"
        label="Weight"
        placeholder="(Kilograms)"
        value={formData.weight_kg}
        error={errors.weight_kg}
        onChange={onChange}
      />
      <BmiInputField
        id="height_cms"
        label="Height"
        placeholder="(Centimeters)"
        value={formData.height_cms}
        error={errors.height_cms}
        onChange={onChange}
      />
    </div>
  );
}

// ─── Pure helper (moved outside component — no closure needed) ────────────────

function getBmiCategory(bmiValue: number) {
  return (
    BMI_CATEGORIES.find(({ max }) => bmiValue < max) ?? {
      category: 'Obese',
      color: 'text-red-400',
    }
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Banner() {
  const [bmi, setBmi] = useState<number | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState<FormDataType>(INITIAL_FORM);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: Number(value) }));
  }, []);

  const handleCheckEligibility = useCallback(() => {
    const newErrors: Record<string, string> = {};
    if (!formData.weight_kg) newErrors.weight_kg = 'Weight field is required';
    if (!formData.height_cms) newErrors.height_cms = 'Height field is required';
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setBmi(formData.weight_kg / (formData.height_cms / 100) ** 2);
    }
  }, [formData]);

  const handleReset = useCallback(() => {
    setBmi(null);
    setFormData(INITIAL_FORM);
    setErrors({});
  }, []);

  const actionButton = useMemo(() => (
    <button
      type="button"
      onClick={bmi !== null ? handleReset : handleCheckEligibility}
      className="cursor-pointer bg-button-bg text-white rounded-full p-3 transition-colors w-full"
    >
      {bmi !== null ? 'Calculate Again' : 'Check Eligibility'}
    </button>
  ), [bmi, handleReset, handleCheckEligibility]);

  const sharedFormProps = { bmi, formData, errors, onChange: handleChange };

  return (
    <div className="relative">
      {/* ── Background images ── */}
      <div className="relative w-full h-screen sm:h-[110vh] lg:h-[140vh] hidden sm:block">
        <Image src="/images/check_eligible/banner.png" fill style={{ objectFit: 'cover' }} alt="Check Eligibility Banner" />
      </div>
      <div className="relative w-full h-[300px] block sm:hidden">
        <Image src="/images/home/mobile_banner.png" fill style={{ objectFit: 'cover' }} alt="Check Eligibility Banner" />
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-[#0A1D20] via-[#0a1d2065] to-transparent" />
      </div>

      {/* ── Desktop overlay ── */}
      <div className="absolute hidden sm:flex top-[15%] sm:top-[30%] left-1/2 -translate-x-1/2 flex-col items-center justify-center space-y-8 max-w-[1024px] w-full mx-auto px-6">
        <BannerCopy />
        <div className="w-full flex justify-between gap-4 sm:gap-5 md:gap-6 items-center sm:items-end">
          <BmiFormOrResult {...sharedFormProps} />
          {actionButton}
        </div>
      </div>

      {/* ── Mobile overlay ── */}
      <div className="relative flex sm:hidden flex-col items-center justify-center space-y-8 max-w-[810px] w-full mx-auto px-6 pb-25">
        <BannerCopy />
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-5 md:gap-6">
          <BmiFormOrResult {...sharedFormProps} />
          {actionButton}
        </div>
      </div>
    </div>
  );
}

// ─── Static copy block ────────────────────────────────────────────────────────

function BannerCopy() {
  return (
    <div className="flex flex-col justify-center items-center font-urbanist">
      <Interaction>
        <p className="font-bold text-2xl md:text-[40px] text-center text-white">
          Check if you're eligible for the SlimOra Program
        </p>
      </Interaction>
      <Interaction2>
        <p className="font-light text-sm md:text-[20px] text-center mt-6 text-[#b5b5b5]">
          Start your journey with a quick BMI check and a few simple questions. This helps us understand if the SlimOra Gastric Balloon is a good fit for your health goals. It only takes a minute and could be your first step towards safe, effective and lasting weight loss —{' '}
          <span className="font-bold text-white">with support at every stage.</span>
        </p>
      </Interaction2>
    </div>
  );
}
