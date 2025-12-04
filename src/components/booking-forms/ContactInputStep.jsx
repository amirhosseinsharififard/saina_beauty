"use client";
import { useState } from "react";
import { countries } from "../../constants/appData";
import { useBookingFormState } from "../../hooks/useBookingFormState";

const ContactInputStep = ({
  nextStep,
  prevStep,
  formData,
  handleChange,
  handleEmailChange,
  handlePhoneNumberChange,
}) => {
  const {
    showCountryDropdown,
    setShowCountryDropdown,

    handleCountryCodeChange,
    errors, // Consume errors state from the hook
    validateField, // Consume validateField from the hook for onBlur
  } = useBookingFormState();

  const { email, phoneNumber, countryCode } = formData;
  console.log("Current formData in ContactInputStep:", formData); // Add this line

  return (
    <div className="text-center">
      <h3 className="text-3xl font-bold text-white mb-8">
        Your contact information?
      </h3>
      <div className="mb-8">
        <div className="flex justify-center relative px-7 flex-col text-left gap-2">
          <label className="text-white">Email Address</label>
          <input
            name="email"
            type="email"
            placeholder="Your.email@example.com"
            value={email}
            onChange={handleEmailChange}
            onBlur={(e) => validateField(e.target.name, e.target.value)} // Validate on blur
            className={`flex-1 bg-white/10 border ${
              errors.email ? "border-red-500" : "border-white/30" // Red border on error
            } rounded-2xl px-6 py-6 text-white placeholder-pink-200 focus:border-pink-400 focus:bg-white/15 outline-none transition-all duration-300 text-xl`}
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1 text-right px-1">
              {errors.email}
            </p>
          )}
        </div>
      </div>
      <div className="mb-8">
        <div className="flex justify-center relative flex-col ml-6 gap-2">
          <label className="text-white text-left">Phone Number</label>
          <div className="flex mx-auto w-full ">
            <div className="relative ">
              <button
                type="button"
                onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                className="bg-pink-500/30 border border-pink-400/50 rounded-l-2xl px-6 py-6 text-white font-semibold hover:bg-pink-500/40 transition-all duration-300 flex items-center gap-2 min-w-[140px]"
              >
                <span className="text-xl">
                  {countries.find((c) => c.code === countryCode)?.flag || "🇹🇷"}
                </span>
                <span>{countryCode}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    showCountryDropdown ? "rotate-180" : ""
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {showCountryDropdown && (
                <div className="absolute top-full left-0 mt-1 bg-white/95 backdrop-blur-lg border border-white/30 rounded-2xl shadow-2xl z-50 w-64 max-h-60 overflow-y-auto">
                  {countries.map((country) => (
                    <button
                      key={country.code}
                      type="button"
                      onClick={() => handleCountryCodeChange(country.code)}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-pink-500/20 transition-colors text-gray-800 first:rounded-t-2xl last:rounded-b-2xl"
                    >
                      <span className="text-lg">{country.flag}</span>
                      <span className="font-medium">{country.code}</span>
                      <span className="text-sm text-gray-600">
                        {country.name}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <input
              name="phoneNumber"
              type="tel"
              placeholder="5XX XXX XX XX"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              onBlur={(e) => validateField(e.target.name, e.target.value)} // Validate on blur
              maxLength={15}
              className={`flex-1 max-w-sm bg-white/10 border ${
                errors.phoneNumber ? "border-red-500" : "border-white/30" // Red border on error
              } border-l-0 rounded-r-2xl px-6 py-6 text-white placeholder-pink-200 focus:border-pink-400 focus:bg-white/15 outline-none transition-all duration-300 text-xl`}
            />
          </div>
          {errors.phoneNumber && (
            <p className="text-red-400 text-sm mt-1 text-right px-1">
              {errors.phoneNumber}
            </p>
          )}
        </div>
      </div>

      <div className="flex gap-4 justify-center">
        <button
          onClick={prevStep}
          className="px-8 py-3 bg-white/20 text-white rounded-2xl hover:bg-white/30 transition"
        >
          ← Back
        </button>
        <button
          onClick={nextStep}
          disabled={
            !!errors.email ||
            !!errors.phoneNumber ||
            !email.trim() ||
            !phoneNumber.trim()
          } // Disable if any errors or fields are empty
          className={`px-12 py-3 rounded-2xl font-bold transition-all duration-300 ${
            email.trim() &&
            phoneNumber.trim() &&
            !errors.email &&
            !errors.phoneNumber
              ? "bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white transform hover:scale-105"
              : "bg-gray-500 text-gray-300 cursor-not-allowed"
          }`}
        >
          Continue ✨
        </button>
      </div>
    </div>
  );
};

export default ContactInputStep;
