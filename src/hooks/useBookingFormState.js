// src/hooks/useBookingFormState.js
"use client";
import { useState } from "react";
import { API_ENDPOINTS } from "../constants/appData";

export const useBookingFormState = () => {
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    date: "",
    time: "",
    email: "", // Separated email field
    phoneNumber: "", // Separated phone number field
    comment: "",
    countryCode: "TR", // Changed default to "TR" as per ContactInputStep example
  });

  const initialFormData = {
    // اضافه شده برای ریست کردن آسان فرم
    name: "",
    service: "",
    date: "",
    time: "",
    email: "",
    phoneNumber: "",
    comment: "",
    countryCode: "TR",
  };
  const [bookingStep, setBookingStep] = useState(1);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [errors, setErrors] = useState({}); // New state for validation errors

  // Validation function for individual fields
  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "name":
        if (!value.trim()) error = "Name is required.";
        break;
      case "service":
        if (!value) error = "Service selection is required.";
        break;
      case "date":
        if (!value) error = "Date selection is required.";
        // More advanced date validation (e.g., future date) can be added here
        break;
      case "time":
        if (!value) error = "Time selection is required.";
        // More advanced time validation can be added here
        break;
      case "email":
        if (!value.trim()) {
          error = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = "Invalid email format.";
        }
        break;
      case "phoneNumber":
        const cleanedPhoneNumber = value.replace(/\D/g, "");
        if (!cleanedPhoneNumber) {
          error = "Phone number is required.";
        } else if (
          cleanedPhoneNumber.length < 7 ||
          cleanedPhoneNumber.length > 15
        ) {
          error = "Phone number must be between 7 and 15 digits.";
        }
        break;
      // Add validation for other fields as needed
      default:
        break;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    return error === ""; // Return true if valid, false if error
  };

  // Validation for the entire form
  const validateForm = () => {
    let isValid = true;

    // Validate all fields for the current step (and potentially previous steps)
    // For simplicity, let's validate all required fields for submission here
    // In a multi-step form, you might only validate fields relevant to the current step.

    if (!validateField("name", formData.name)) isValid = false;
    if (!validateField("service", formData.service)) isValid = false;
    if (!validateField("date", formData.date)) isValid = false;
    if (!validateField("time", formData.time)) isValid = false;
    if (!validateField("email", formData.email)) isValid = false;
    if (!validateField("phoneNumber", formData.phoneNumber)) isValid = false;

    // Update the errors state with accumulated newErrors (if any)
    // This is handled by validateField, so we don't need a separate setErrors here if validateField already updates it
    // However, if you want to run all validations and then update errors in one go, you'd collect errors here.
    // For now, validateField updates immediately.
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    // console.log(`[useBookingFormState] handleChange: ${name} = ${value}, new formData:`, { ...formData, [name]: value }); // خط console.log قبلی برای دیباگ
    validateField(name, value);
  };

  const handleEmailChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value); // Validate on change
  };

  const handlePhoneNumberChange = (e) => {
    const { name, value } = e.target;
    const input = value.replace(/\D/g, "");
    if (input.length <= 15) {
      setFormData({ ...formData, [name]: input });
      validateField(name, input); // Validate on change
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "Phone number cannot exceed 15 digits.",
      }));
    }
  };

  const handleCountryCodeChange = (code) => {
    setFormData({ ...formData, countryCode: code });
    setShowCountryDropdown(false);
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      // Validate before submission
      alert("Please fill in all required fields correctly.");
      return;
    }

    fetch("https://n8n.sainabeauty.com/webhook-test/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        fullContact: `${formData.countryCode}${formData.phoneNumber}`,
      }),
    });

    // fetch(API_ENDPOINTS.BOOKING, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     ...formData,
    //     fullContact: `${formData.countryCode}${formData.contact}`,\
    //   }),
    // }).then((res) =>
    //   res.ok
    //     ? alert("Thanks! We received your booking 🎉")
    //     : alert("Oops! Something went wrong.")
    // );
  };

  const nextStep = () => {
    let currentStepIsValid = true;
    if (bookingStep === 1) {
      currentStepIsValid = validateField("name", formData.name);
    } else if (bookingStep === 2) {
      currentStepIsValid = validateField("service", formData.service);
    } else if (bookingStep === 3) {
      currentStepIsValid =
        validateField("date", formData.date) &&
        validateField("time", formData.time);
    } else if (bookingStep === 4) {
      currentStepIsValid =
        validateField("email", formData.email) &&
        validateField("phoneNumber", formData.phoneNumber);
    }

    if (currentStepIsValid) {
      if (bookingStep === 1 && formData.name.trim()) {
        setBookingStep(2);
      } else if (bookingStep === 2 && formData.service) {
        setBookingStep(3);
      } else if (bookingStep === 3 && formData.date && formData.time) {
        setBookingStep(4);
      } else if (
        bookingStep === 4 &&
        formData.email.trim() &&
        formData.phoneNumber.trim()
      ) {
        setBookingStep(5); // کاربر را مستقیماً به SuccessStep (مرحله 5 جدید) می‌فرستد.
      }
    } else {
      alert("Please enter the information for this step correctly.");
    }
  };

  const prevStep = () => {
    if (bookingStep > 1) {
      setBookingStep(bookingStep - 1);
    }
  };

  // تابع resetForm برای برگرداندن فرم به حالت اولیه و رفتن به مرحله اول
  const resetForm = () => {
    setFormData(initialFormData); // بازگرداندن formData به حالت اولیه
    setBookingStep(1); // رفتن به مرحله اول
    setErrors({}); // پاک کردن خطاها
    setShowCountryDropdown(false); // بستن منوی کشویی کشور
  };

  // تابع goToHome برای اسکرول کردن به بالای صفحه (یا ناوبری به صفحه اصلی در Next.js)
  const goToHome = () => {
    // اسکرول کردن صفحه به بالا
    window.scrollTo({ top: 0, behavior: "smooth" });
    // اگر در یک محیط Next.js هستید و می‌خواهید به صفحه اصلی خاصی بروید، می‌توانید از useRouter استفاده کنید:
    // import { useRouter } from 'next/navigation'; // باید در بالای فایل import شود
    // const router = useRouter();
    // router.push('/'); // مثال: رفتن به صفحه اصلی
  };

  return {
    formData,
    setFormData,
    bookingStep,
    setBookingStep,
    showCountryDropdown,
    setShowCountryDropdown,
    handleChange, // Expose the generic handleChange
    handleEmailChange,
    handlePhoneNumberChange,
    handleCountryCodeChange,
    handleSubmit,
    nextStep,
    prevStep,
    errors, // Expose errors state
    validateField, // Expose validateField for onBlur events in components
    resetForm, // Expose resetForm
    goToHome, // Expose goToHome
  };
};
