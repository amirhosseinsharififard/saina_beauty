import { countries } from "../../constants/appData";

const ContactInputStep = ({
  formData,
  handleChange,
  setFormData,
  showCountryDropdown,
  setShowCountryDropdown,
  nextStep,
  prevStep,
}) => {
  return (
    <div className="text-center">
      <h3 className="text-3xl font-bold text-white mb-8">
        Your contact number?
      </h3>

      <div className="mb-8">
        <div className="flex justify-center relative">
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowCountryDropdown(!showCountryDropdown)}
              className="bg-pink-500/30 border border-pink-400/50 rounded-l-2xl px-6 py-6 text-white font-semibold hover:bg-pink-500/40 transition-all duration-300 flex items-center gap-2 min-w-[140px]"
            >
              <span className="text-xl">
                {countries.find((c) => c.code === formData.countryCode)?.flag ||
                  "🇹🇷"}
              </span>
              <span>{formData.countryCode}</span>
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
                    onClick={() => {
                      setFormData({ ...formData, countryCode: country.code });
                      setShowCountryDropdown(false);
                    }}
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
            name="contact"
            type="tel"
            placeholder="5XX XXX XX XX"
            value={formData.contact}
            onChange={handleChange}
            className="flex-1 max-w-sm bg-white/10 border border-white/30 border-l-0 rounded-r-2xl px-6 py-6 text-white placeholder-pink-200 focus:border-pink-400 focus:bg-white/15 outline-none transition-all duration-300 text-xl"
          />
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
          disabled={!formData.contact.trim()}
          className={`px-12 py-3 rounded-2xl font-bold transition-all duration-300 ${
            formData.contact.trim()
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
