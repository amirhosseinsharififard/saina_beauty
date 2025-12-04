// src/components/booking-forms/SuccessStep.jsx
"use client";
import React from "react";

const SuccessStep = ({ formData, resetForm, goToHome }) => {
  const salonEmail = "info@sainabeauty.com";
  const salonPhoneNumber = "+90 5XX XXX XX XX";

  return (
    <div className="text-center p-6 sm:p-8 md:p-10 lg:p-12">
      <h3 className="text-4xl font-bold text-green-400 mb-6 animate-fade-in-up">
        🎉 Booking Confirmed! 🎉
      </h3>
      <p className="text-lg text-white mb-8 animate-fade-in-up delay-100">
        Your appointment has been successfully booked.
        <br />
        We've sent a confirmation to your email.
      </p>

      {/* بخش خلاصه اطلاعات کاربر */}
      <div className="bg-white/10 rounded-2xl p-6 mb-8 border border-white/20 animate-fade-in-up delay-200">
        <h4 className="text-xl font-semibold text-white mb-4">Your Details:</h4>
        <div className="space-y-3 text-pink-200 text-left px-4">
          <div>
            <span className="font-medium">Name:</span>{" "}
            <span className="font-semibold text-white">{formData.name}</span>
          </div>
          <div>
            <span className="font-medium">Email:</span>{" "}
            <span className="font-semibold text-white">{formData.email}</span>
          </div>
          <div>
            <span className="font-medium">Phone Number:</span>{" "}
            <span className="font-semibold text-white">
              {formData.countryCode} {formData.phoneNumber}
            </span>
          </div>
        </div>
      </div>

      {/* پیام تماس */}
      <p className="text-pink-100 text-md mb-8 animate-fade-in-up delay-300">
        Our team will contact you within 24 hours to finalize the details.
      </p>

      {/* اطلاعات تماس سالن */}
      <div className="bg-pink-500/20 rounded-2xl p-6 mb-10 border border-pink-400/50 animate-fade-in-up delay-400">
        <h4 className="text-xl font-semibold text-white mb-4">Contact Us:</h4>
        <p className="text-pink-100 mb-2">
          <span className="font-medium">Email:</span>{" "}
          <a
            href={`mailto:${salonEmail}`}
            className="text-white hover:underline"
          >
            {salonEmail}
          </a>
        </p>
        <p className="text-pink-100">
          <span className="font-medium">Phone:</span>{" "}
          <a
            href={`tel:${salonPhoneNumber.replace(/\s/g, "")}`}
            className="text-white hover:underline"
          >
            {salonPhoneNumber}
          </a>
        </p>
      </div>

      {/* دکمه‌ها */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-500">
        <button
          onClick={goToHome}
          className="px-10 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
        >
          ← Back to Home
        </button>
        <button
          onClick={resetForm}
          className="px-10 py-4 bg-white/20 text-white rounded-2xl hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
        >
          Book New Appointment
        </button>
      </div>
    </div>
  );
};

export default SuccessStep;
