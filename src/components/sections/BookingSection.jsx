import { useBookingForm } from "../../hooks/useBookingForm";
import BookingStep1 from "../forms/BookingStep1";
import BookingStep2 from "../forms/BookingStep2";
import BookingStep3 from "../forms/BookingStep3";
import BookingStep4 from "../forms/BookingStep4";
import BookingStep5 from "../forms/BookingStep5";

const BookingSection = () => {
  const {
    formData,
    setFormData,
    bookingStep,
    showCountryDropdown,
    setShowCountryDropdown,
    handleChange,
    handleSubmit,
    nextStep,
    prevStep,
  } = useBookingForm();

  const renderStep = () => {
    switch (bookingStep) {
      case 1:
        return (
          <BookingStep1
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <BookingStep2
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 3:
        return (
          <BookingStep3
            formData={formData}
            handleChange={handleChange}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 4:
        return (
          <BookingStep4
            formData={formData}
            handleChange={handleChange}
            setFormData={setFormData}
            showCountryDropdown={showCountryDropdown}
            setShowCountryDropdown={setShowCountryDropdown}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 5:
        return (
          <BookingStep5
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            prevStep={prevStep}
          />
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="booking"
      className="py-20 px-4 bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900 min-h-screen relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-rose-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-200 to-white bg-clip-text text-transparent mb-4">
            ✨ Book Your Transformation
          </h2>
          <p className="text-pink-100 text-xl">Step {bookingStep} of 5</p>
        </div>

        <div className="mb-12">
          <div className="flex justify-between mb-4">
            {[1, 2, 3, 4, 5].map((step) => (
              <div
                key={step}
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                  bookingStep >= step
                    ? "bg-pink-500 text-white"
                    : "bg-white/20 text-pink-200"
                }`}
              >
                {step}
              </div>
            ))}
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-pink-500 to-rose-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(bookingStep / 5) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-12 border border-white/30 max-w-2xl mx-auto">
          {renderStep()}
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
