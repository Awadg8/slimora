"use client";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select, {
  components,
  SingleValueProps,
  OptionProps,
} from "react-select";
import * as Flags from "country-flag-icons/react/3x2";
import { countries } from "country-flag-icons";

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PartnerModal({ isOpen, onClose }: PartnerModalProps) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<any>(null);

  // Get country names using Intl API
  const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
  const countryOptions = countries
    .map((code) => {
      let name = code;
      try {
        name = regionNames.of(code) || code;
      } catch (e) {
        // Fallback to code if the code is not supported by the locale
      }
      return {
        value: code,
        label: name,
        Flag: Flags[code as keyof typeof Flags],
      };
    })
    .sort((a, b) => (a.label || "").localeCompare(b.label || ""));

  const CustomOption = (props: OptionProps<any>) => {
    const { Flag } = props.data;
    return (
      <components.Option {...props}>
        <div className="flex items-center gap-2">
          {Flag && <Flag className="w-5 h-3" />}
          <span>{props.data.label}</span>
        </div>
      </components.Option>
    );
  };

  const CustomSingleValue = (props: SingleValueProps<any>) => {
    const { Flag } = props.data;
    return (
      <components.SingleValue {...props}>
        <div className="flex items-center gap-2 text-white">
          {Flag && <Flag className="w-5 h-3" />}
          <span>{props.data.label}</span>
        </div>
      </components.SingleValue>
    );
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-black/80 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 md:top-4 right-2 md:right-4 cursor-pointer text-white/70 hover:text-white transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="p-5 md:p-9">
          <h2 className="text-[#8EA94D] text-xl md:text-2xl font-bold text-center mb-5">
            Contact Form for Healthcare <br /> Professionals
          </h2>

          <form className="space-y-6 md:space-y-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-3">
              <div>
                <label className="block text-xs font-medium text-white mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  onInput={(e) => {
                    const target = e.target as HTMLInputElement;
                    target.value = target.value.replace(/[^a-zA-Z\s]/g, "");
                  }}
                  className="w-full bg-[#D9D9D954] border-none rounded-lg p-3 text-sm md:text-base text-white placeholder-white/40 focus:ring-2 focus:ring-[#8EA94D] outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-white mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  onInput={(e) => {
                    const target = e.target as HTMLInputElement;
                    target.value = target.value.replace(/[^a-zA-Z\s]/g, "");
                  }}
                  className="w-full bg-[#D9D9D954] border-none rounded-lg p-3 text-sm md:text-base text-white placeholder-white/40 focus:ring-2 focus:ring-[#8EA94D] outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-3">
              <div>
                <label className="block text-xs font-medium text-white mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  className="w-full bg-[#D9D9D954] border-none rounded-lg p-3 text-sm md:text-base text-white placeholder-white/40 focus:ring-2 focus:ring-[#8EA94D] outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-white mb-1">
                  Phone Number
                </label>
                <div className="phone-input-container">
                  <PhoneInput
                    country={"in"}
                    value={phoneNumber}
                    onChange={(phone) => setPhoneNumber(phone)}
                    containerClass="!w-full !rounded-lg"
                    inputClass="!w-full !bg-[#D9D9D954] !border-none !rounded-lg !p-3 text-sm md:text-base !text-white !placeholder-white/40 !focus:ring-2 !focus:ring-[#8EA94D] !outline-none !h-[48px] !pl-[60px]"
                    buttonClass="!bg-transparent !border-none !border-r !border-[#555555] !rounded-l-lg !w-[50px]"
                    dropdownClass="!bg-[#2A2A2A] !text-white"
                    buttonStyle={{
                      backgroundColor: "transparent",
                      border: "none",
                      paddingLeft: "10px",
                    }}
                    inputStyle={{
                      width: "100%",
                      backgroundColor: "rgba(217, 217, 217, 0.33)",
                      border: "none",
                      color: "white",
                      height: "48px",
                    }}
                  />
                  <style jsx global>{`
                    .phone-input-container .react-tel-input .selected-flag {
                      background: transparent !important;
                      width: 50px !important;
                      padding: 0 0 0 10px !important;
                    }
                    .phone-input-container
                      .react-tel-input
                      .selected-flag:hover,
                    .phone-input-container
                      .react-tel-input
                      .selected-flag:focus {
                      background: transparent !important;
                    }
                    .phone-input-container .react-tel-input .flag-dropdown {
                      background: transparent !important;
                      border: none !important;
                      border-right: 1px solid #555555 !important;
                    }
                    .phone-input-container .react-tel-input .country-list {
                      background-color: #2a2a2a !important;
                      color: white !important;
                      z-index: 200 !important;
                    }
                    .phone-input-container
                      .react-tel-input
                      .country-list
                      .country:hover {
                      background-color: #404040 !important;
                    }
                    .phone-input-container
                      .react-tel-input
                      .country-list
                      .country.highlight {
                      background-color: #404040 !important;
                    }
                  `}</style>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-3">
              <div>
                <label className="block text-xs font-medium text-white mb-1">
                  Country
                </label>
                <Select
                  options={countryOptions}
                  value={selectedCountry}
                  onChange={setSelectedCountry}
                  placeholder="Select Country"
                  components={{
                    Option: CustomOption,
                    SingleValue: CustomSingleValue,
                  }}
                  classNames={{
                    control: () =>
                      "!bg-[#D9D9D954] !border-none !rounded-lg !p-1 text-sm md:text-base",
                    menu: () => "!bg-[#2A2A2A] !text-white !z-[110]",
                    option: ({ isFocused, isSelected }) =>
                      `!bg-transparent hover:!bg-[#404040] ${
                        isSelected ? "!bg-[#8EA94D]" : ""
                      } ${isFocused ? "!bg-[#404040]" : ""}`,
                    singleValue: () => "!text-white",
                    input: () => "!text-white",
                    placeholder: () => "!text-white/40",
                  }}
                  styles={{
                    control: (base) => ({
                      ...base,
                      boxShadow: "none",
                    }),
                    menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                  }}
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-white mb-1">
                  Clinic/Organization
                </label>
                <input
                  type="text"
                  onInput={(e) => {
                    const target = e.target as HTMLInputElement;
                    target.value = target.value.replace(/[^a-zA-Z\s]/g, "");
                  }}
                  className="w-full bg-[#D9D9D954] border-none rounded-lg p-3 text-sm md:text-base text-white placeholder-white/40 focus:ring-2 focus:ring-[#8EA94D] outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-3">
              <div>
                <label className="block text-xs font-medium text-white mb-1">
                  City
                </label>
                <input
                  type="text"
                  onInput={(e) => {
                    const target = e.target as HTMLInputElement;
                    target.value = target.value.replace(/[^a-zA-Z\s]/g, "");
                  }}
                  className="w-full bg-[#D9D9D954] border-none rounded-lg p-3 text-sm md:text-base text-white placeholder-white/40 focus:ring-2 focus:ring-[#8EA94D] outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-white mb-1">
                  Postal / Zip Code
                </label>
                <input
                  type="text"
                  maxLength={6}
                  onInput={(e) => {
                    const target = e.target as HTMLInputElement;
                    target.value = target.value
                      .replace(/[^0-9]/g, "")
                      .slice(0, 6);
                  }}
                  className="w-full bg-[#D9D9D954] border-none rounded-lg p-3 text-sm md:text-base text-white placeholder-white/40 focus:ring-2 focus:ring-[#8EA94D] outline-none"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="medical-prof"
                className="w-5 h-5 accent-[#8EA94D] bg-[#D9D9D954] border-none rounded"
              />
              <label
                htmlFor="medical-prof"
                className="text-xs text-white cursor-pointer"
              >
                I am a Medical Professional
              </label>
            </div>

            <hr className="border-[#8EA94D]" />

            <div>
              <label className="block text-xs font-medium text-white/80 mb-2">
                What interests you about Allurion? (optional)
              </label>
              <textarea
                rows={4}
                className="w-full bg-[#D9D9D954] border-none rounded-lg p-3 text-sm md:text-base text-white placeholder-white/40 focus:ring-2 focus:ring-[#8EA94D] outline-none"
              ></textarea>
            </div>

            <div className="space-y-4">
              <p className="text-xs text-white/60">
                Please select below if you would like to receive information
                about Allurion's products and services. You can withdraw your
                consent at any time. For further details, see our{" "}
                <a href="#" className="underline hover:text-white">
                  Privacy Policy.
                </a>
              </p>

              <div className="flex flex-col gap-2">
                {["E-mail", "Phone", "Whatsapp"].map((option) => (
                  <div key={option} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id={option.toLowerCase()}
                      className="w-4 h-4 accent-[#8EA94D] bg-[#D9D9D954] border-none rounded"
                    />
                    <label
                      htmlFor={option.toLowerCase()}
                      className="text-xs text-white cursor-pointer"
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center pt-2 md:pt-4">
              <button
                type="submit"
                className="bg-[#8EA94D] cursor-pointer text-white px-12 py-3 text-sm md:text-base rounded-full font-bold hover:bg-[#7a9341] transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
