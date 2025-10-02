import { timeSlots } from "../../constants/appData";

const DateTimeSelectionStep = ({
  formData,
  handleChange,
  setFormData,
  nextStep,
  prevStep,
}) => {
  return (
    <div>
      <h3 className="text-3xl font-bold text-white mb-8 text-center">
        When would you like to come?
      </h3>

      <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl p-4 border border-pink-400/30 mb-8">
        <div className="text-pink-200 text-sm">Selected Treatment:</div>
        <div className="text-white font-semibold text-lg">
          {formData.service}
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <label className="block text-pink-200 text-lg mb-4">
            Choose Date
          </label>
          <input
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-4 text-white focus:border-pink-400 focus:bg-white/15 outline-none transition-all duration-300"
          />
        </div>

        <div>
          <label className="block text-pink-200 text-lg mb-4">
            Choose Time
          </label>
          <div className="grid grid-cols-3 gap-3">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setFormData({ ...formData, time })}
                className={`py-3 px-4 rounded-xl border-2 transition-all duration-300 ${
                  formData.time === time
                    ? "border-pink-400 bg-pink-400/30 text-white"
                    : "border-white/30 text-pink-200 hover:border-pink-400/50 hover:text-white"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-4 justify-center mt-8">
        <button
          onClick={prevStep}
          className="px-8 py-3 bg-white/20 text-white rounded-2xl hover:bg-white/30 transition"
        >
          ← Back
        </button>
        <button
          onClick={nextStep}
          disabled={!formData.date || !formData.time}
          className={`px-12 py-3 rounded-2xl font-bold transition-all duration-300 ${
            formData.date && formData.time
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

export default DateTimeSelectionStep;
