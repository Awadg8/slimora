"use client";
import Interaction from "@/component/microInteraction";
import Interaction2 from "@/component/microInteraction2";
import { Inter } from "next/font/google";
import React, { useState, useMemo } from "react";

interface Clinic {
  id: number;
  name: string;
  address: string;
  city: string;
  country: string;
  phone: string;
  rating: number;
  distance: string;
  specialties: string[];
  image: string;
}

const dummyClinics: Clinic[] = [
  {
    id: 1,
    name: "SlimOra Wellness Center",
    address: "14, Turner Road, Bandra West",
    city: "Mumbai",
    country: "India",
    phone: "+91 22 2655 0101",
    rating: 4.9,
    distance: "2.3 km",
    specialties: ["Gastric Balloon", "Weight Management", "Nutrition"],
    image: "/images/findClinicBanner.png",
  },
  {
    id: 2,
    name: "MediFit Bariatric Clinic",
    address: "B-28, Hauz Khas Enclave",
    city: "New Delhi",
    country: "India",
    phone: "+91 11 2685 4320",
    rating: 4.8,
    distance: "5.1 km",
    specialties: ["Bariatric Surgery", "Gastric Balloon", "Diet Planning"],
    image: "/images/findClinicBanner.png",
  },
  {
    id: 3,
    name: "BodyBalance Medical",
    address: "42, Cunningham Road, Vasanth Nagar",
    city: "Bangalore",
    country: "India",
    phone: "+91 80 4125 7890",
    rating: 4.7,
    distance: "3.8 km",
    specialties: ["Weight Loss", "Gastric Balloon", "Wellness"],
    image: "/images/findClinicBanner.png",
  },
  {
    id: 4,
    name: "Vitality Health Hub",
    address: "156, Cathedral Road, Gopalapuram",
    city: "Chennai",
    country: "India",
    phone: "+91 44 2811 3456",
    rating: 4.6,
    distance: "7.2 km",
    specialties: ["Gastric Balloon", "Lifestyle Medicine"],
    image: "/images/findClinicBanner.png",
  },
  {
    id: 5,
    name: "Slim Solutions Hyderabad",
    address: "8-2-293, Road No. 12, Banjara Hills",
    city: "Hyderabad",
    country: "India",
    phone: "+91 40 2335 6789",
    rating: 4.9,
    distance: "1.5 km",
    specialties: ["Gastric Balloon", "Cosmetic Surgery", "Nutrition"],
    image: "/images/findClinicBanner.png",
  },
  {
    id: 6,
    name: "WellCare Clinic Pune",
    address: "Lane 7, Koregaon Park",
    city: "Pune",
    country: "India",
    phone: "+91 20 2615 2345",
    rating: 4.5,
    distance: "4.6 km",
    specialties: ["Weight Management", "Gastric Balloon"],
    image: "/images/findClinicBanner.png",
  },
  {
    id: 7,
    name: "NovaCare Weight Loss Center",
    address: "18/1, Park Street, Park Circus",
    city: "Kolkata",
    country: "India",
    phone: "+91 33 2229 8765",
    rating: 4.8,
    distance: "6.0 km",
    specialties: ["Gastric Balloon", "Traditional Medicine", "Nutrition"],
    image: "/images/findClinicBanner.png",
  },
  {
    id: 8,
    name: "HealthFirst Ahmedabad",
    address: "305, Shyamal Cross Road, Satellite",
    city: "Ahmedabad",
    country: "India",
    phone: "+91 79 2676 1234",
    rating: 4.4,
    distance: "9.3 km",
    specialties: ["Bariatric Procedures", "Gastric Balloon"],
    image: "/images/findClinicBanner.png",
  },
  {
    id: 9,
    name: "Royal SlimOra Clinic",
    address: "C-11, Prithviraj Road, C-Scheme",
    city: "Jaipur",
    country: "India",
    phone: "+91 141 2374 5678",
    rating: 4.7,
    distance: "3.1 km",
    specialties: ["Gastric Balloon", "Aesthetic Medicine", "Wellness"],
    image: "/images/findClinicBanner.png",
  },
  {
    id: 10,
    name: "Gujarat Wellness Medical Center",
    address: "Chala vapi, valsad",
    city: "Vapi",
    country: "India",
    phone: "+91 484 2316 9012",
    rating: 4.6,
    distance: "5.5 km",
    specialties: ["Gastric Balloon", "Weight Management", "Endoscopy"],
    image: "/images/findClinicBanner.png",
  },
];

const Banner = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const filteredClinics = useMemo(() => {
    if (!hasSearched) return [];
    if (!searchQuery.trim()) return dummyClinics;
    const query = searchQuery.toLowerCase();
    return dummyClinics.filter(
      (clinic) =>
        clinic.name.toLowerCase().includes(query) ||
        clinic.city.toLowerCase().includes(query) ||
        clinic.country.toLowerCase().includes(query) ||
        clinic.address.toLowerCase().includes(query),
    );
  }, [searchQuery, hasSearched]);

  const handleSearch = () => {
    setHasSearched(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const renderStars = (rating: number) => {
    const full = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    const stars = [];
    for (let i = 0; i < full; i++) {
      stars.push(
        <svg
          key={`full-${i}`}
          className="w-4 h-4 text-[#8EA94D]"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>,
      );
    }
    if (hasHalf) {
      stars.push(
        <svg
          key="half"
          className="w-4 h-4 text-[#8EA94D]"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <defs>
            <linearGradient id="halfGrad">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#4a5568" />
            </linearGradient>
          </defs>
          <path
            fill="url(#halfGrad)"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>,
      );
    }
    return stars;
  };

  return (
    <section>
      {/* Hero Banner */}
      <div className="relative w-full min-h-[550px] md:min-h-[600px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/findClinicBanner.png"
            alt="Doctor consulting with patient"
            className="w-full h-full object-cover"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1d20] via-[#0a1d20]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1d20]/40 to-transparent" />
        </div>

        {/* Content Card */}
        <div className="absolute top-[70%] md:top-[80%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 flex items-center justify-center w-full px-4">
          <div className="w-full max-w-[580px] backdrop-blur-md bg-[#0a1d20]/70 border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl">
            {/* Stats line */}
            <Interaction>
              <p className="text-center text-[#B5B5B5] text-[13px] md:text-[14px] tracking-wide mb-3">
                Available in{" "}
                <span className="text-white font-semibold">1038</span> clinic
                across <span className="text-white font-semibold">67</span>{" "}
                countries
              </p>
            </Interaction>

            {/* Heading */}
            <h1 className="text-center text-[#8EA94D] text-[22px] md:text-[28px] leading-[30px] md:leading-[38px] font-bold mb-4">
              Join thousands of patients starting their journey with the{" "}
              <span className="whitespace-nowrap">SlimOra program</span>
            </h1>

            {/* Subtext */}
            <Interaction2>
              <p className="text-center text-[#B5B5B5] text-[13px] md:text-[15px] leading-[20px] md:leading-[22px] mb-6">
                Find an Allurion clinic near you and book your consultation today.
              </p>
            </Interaction2>

            {/* Search Bar */}
            <div>
              <label className="text-white text-[13px] md:text-[14px] font-medium mb-2 block">
                Enter a location
              </label>
              <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      if (!e.target.value.trim()) setHasSearched(false);
                    }}
                    onKeyDown={handleKeyDown}
                    placeholder="City, country, or address..."
                    className="w-full bg-[#1a3a3f] border border-white/15 rounded-full px-5 py-3 pr-11 text-white text-[13px] md:text-[14px] placeholder:text-[#5a7a7f] outline-none focus:border-[#8EA94D]/60 focus:ring-1 focus:ring-[#8EA94D]/30 transition-all duration-300"
                  />
                  {/* Location icon */}
                  <button
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8EA94D] hover:text-[#a0bf5a] transition-colors cursor-pointer"
                    onClick={() => {
                      setSearchQuery("Mumbai");
                      setHasSearched(true);
                    }}
                    title="Use current location"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 2v3m0 14v3M2 12h3m14 0h3" />
                      <circle cx="12" cy="12" r="8" strokeDasharray="2 2" />
                    </svg>
                  </button>
                </div>
                <button
                  onClick={handleSearch}
                  className="cursor-pointer bg-[#8EA94D] hover:bg-[#7d9743] text-white text-[13px] md:text-[14px] font-semibold px-6 md:px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#8EA94D]/25 active:scale-[0.97] whitespace-nowrap"
                >
                  Search Clinics
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clinic Results */}
      {hasSearched && (
        <div className="max-width py-10 md:py-16">
          {/* Results Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
            <div>
              <h2 className="text-white text-[22px] md:text-[30px] font-bold leading-tight">
                {filteredClinics.length > 0
                  ? `${filteredClinics.length} Clinics Found`
                  : "No Clinics Found"}
              </h2>
              {searchQuery && (
                <p className="text-[#B5B5B5] text-[13px] md:text-[15px] mt-1">
                  Showing results for &quot;
                  <span className="text-[#8EA94D]">{searchQuery}</span>&quot;
                </p>
              )}
            </div>
            {filteredClinics.length > 0 && (
              <p className="text-[#B5B5B5] text-[13px] md:text-[14px]">
                Sorted by nearest distance
              </p>
            )}
          </div>

          {/* Clinic Cards Grid */}
          {filteredClinics.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredClinics.map((clinic, index) => (
                <div
                  key={clinic.id}
                  className="group bg-[#0f2e33] border border-white/8 rounded-xl overflow-hidden hover:border-[#8EA94D]/30 transition-all duration-400 hover:shadow-lg hover:shadow-[#8EA94D]/5"
                  style={{
                    animation: `fadeSlideUp 0.5s ease-out ${index * 0.07}s both`,
                  }}
                >
                  <div className="p-5 md:p-6">
                    {/* Clinic Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1 mr-4">
                        <h3 className="text-white text-[16px] md:text-[18px] font-bold group-hover:text-[#8EA94D] transition-colors duration-300">
                          {clinic.name}
                        </h3>
                        <p className="text-[#B5B5B5] text-[12px] md:text-[13px] mt-1 flex items-center gap-1.5">
                          <svg
                            className="w-3.5 h-3.5 text-[#8EA94D] flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {clinic.address}, {clinic.city}, {clinic.country}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="bg-[#8EA94D]/15 text-[#8EA94D] text-[11px] md:text-[12px] font-semibold px-3 py-1 rounded-full">
                          {clinic.distance}
                        </span>
                      </div>
                    </div>

                    {/* Rating & Phone */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1.5">
                        <div className="flex">{renderStars(clinic.rating)}</div>
                        <span className="text-white text-[12px] md:text-[13px] font-medium">
                          {clinic.rating}
                        </span>
                      </div>
                      <span className="text-[#5a7a7f]">·</span>
                      <p className="text-[#B5B5B5] text-[12px] md:text-[13px] flex items-center gap-1.5">
                        <svg
                          className="w-3.5 h-3.5 text-[#8EA94D]"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {clinic.phone}
                      </p>
                    </div>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {clinic.specialties.map((specialty, i) => (
                        <span
                          key={i}
                          className="bg-white/5 text-[#B5B5B5] text-[11px] md:text-[12px] px-3 py-1 rounded-full border border-white/5"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button className="cursor-pointer w-full bg-transparent border border-[#8EA94D] text-[#8EA94D] hover:bg-[#8EA94D] hover:text-white text-[12px] md:text-[13px] font-semibold py-2.5 rounded-full transition-all duration-300">
                      Book Consultation
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <svg
                className="w-16 h-16 mx-auto text-[#5a7a7f] mb-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <p className="text-[#B5B5B5] text-[15px] md:text-[17px] mb-2">
                No clinics found for &quot;{searchQuery}&quot;
              </p>
              <p className="text-[#5a7a7f] text-[13px] md:text-[14px]">
                Try searching with a different city or country name
              </p>
            </div>
          )}
        </div>
      )}

      {/* Keyframe animation styles */}
      <style jsx>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Banner;
