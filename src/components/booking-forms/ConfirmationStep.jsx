"use client";
const ConfirmationStep = ({
  formData,
  handleChange,
  handleSubmit,
  prevStep,
}) => {
  return (
    <div>
      <h3 className="text-3xl font-bold text-white mb-8 text-center">
        Any special requests?
      </h3>

      <div className="bg-white/10 rounded-2xl p-6 mb-8 border border-white/20">
        <h4 className="text-lg font-semibold text-white mb-4">
          Booking Summary:
        </h4>
        <div className="space-y-2 text-pink-200">
          <div>
            <span className="font-medium">Name:</span> {formData.name}
          </div>
          <div>
            <span className="font-medium">Service:</span> {formData.service}
          </div>
          <div>
            <span className="font-medium">Date:</span> {formData.date}
          </div>
          <div>
            <span className="font-medium">Time:</span> {formData.time}
          </div>
          <div>
            <span className="font-medium">Contact:</span> {formData.countryCode}{" "}
            {formData.contact}
          </div>
        </div>
      </div>

      <textarea
        name="comment"
        placeholder="Tell us about any special requests, preferences, or additional information..."
        value={formData.comment}
        onChange={handleChange}
        rows={4}
        className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-4 text-white placeholder-pink-200 focus:border-pink-400 focus:bg-white/15 outline-none transition-all duration-300 resize-none mb-8"
      />

      <div className="flex gap-4 justify-center">
        <button
          onClick={prevStep}
          className="px-8 py-3 bg-white/20 text-white rounded-2xl hover:bg-white/30 transition"
        >
          ← Back
        </button>
        <button
          onClick={handleSubmit}
          className="px-16 py-4 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
        >
          ✨ Book My Appointment ✨
        </button>
      </div>
    </div>
  );
};

export default ConfirmationStep;
