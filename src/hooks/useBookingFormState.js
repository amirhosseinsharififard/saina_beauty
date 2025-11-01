import { useState } from "react";
import { API_ENDPOINTS } from "../constants/appData";

export const useBookingFormState = () => {
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    date: "",
    time: "",
    contact: "",
    comment: "",
    countryCode: "+90",
  });
  const [bookingStep, setBookingStep] = useState(1);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (
      !formData.name ||
      !formData.service ||
      !formData.date ||
      !formData.time ||
      !formData.contact
    ) {
      alert("Bitte füllen Sie alle Pflichtfelder aus.");
      return;
    }
    fetch(
      "https://n8n.sainabeauty.com/webhook-test/364d3517-d70b-4565-b66f-ac8df1fa8a63",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          fullContact: `${formData.countryCode}${formData.contact}`,
        }),
      }
    );

    fetch(API_ENDPOINTS.BOOKING, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        fullContact: `${formData.countryCode}${formData.contact}`,
      }),
    }).then((res) =>
      res.ok
        ? alert("Thanks! We received your booking 🎉")
        : alert("Oops! Something went wrong.")
    );
  };

  const nextStep = () => {
    if (bookingStep === 1 && formData.name.trim()) {
      setBookingStep(2);
    } else if (bookingStep === 2 && formData.service) {
      setBookingStep(3);
    } else if (bookingStep === 3 && formData.date && formData.time) {
      setBookingStep(4);
    } else if (bookingStep === 4 && formData.contact.trim()) {
      setBookingStep(5);
    }
  };

  const prevStep = () => {
    if (bookingStep > 1) {
      setBookingStep(bookingStep - 1);
    }
  };

  return {
    formData,
    setFormData,
    bookingStep,
    setBookingStep,
    showCountryDropdown,
    setShowCountryDropdown,
    handleChange,
    handleSubmit,
    nextStep,
    prevStep,
  };
};
