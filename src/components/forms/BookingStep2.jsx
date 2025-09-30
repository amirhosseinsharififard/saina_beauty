import { beautyServices, dentalServices } from "../../constants/data";
import { SyringeIcon, ClinicIcon } from "../ui/Icons";

const BookingStep2 = ({ formData, setFormData, nextStep, prevStep }) => {
  return (
    <div>
      <h3 className="text-3xl font-bold text-white mb-8 text-center">
        Choose your service
      </h3>

      <div className="mb-8">
        <h4 className="text-xl font-semibold text-pink-200 mb-4 flex items-center gap-2">
          <SyringeIcon /> Beauty Services
        </h4>
        <div className="grid grid-cols-2 gap-4">
          {beautyServices.map((service, i) => (
            <button
              key={i}
              onClick={() =>
                setFormData({ ...formData, service: service.title })
              }
              className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                formData.service === service.title
                  ? "border-pink-400 bg-pink-400/20 text-white"
                  : "border-white/30 hover:border-pink-400/50 text-pink-100 hover:text-white"
              }`}
            >
              <div className="font-semibold">{service.title}</div>
              <div className="text-xs opacity-80 mt-1">
                {service.description}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h4 className="text-xl font-semibold text-purple-200 mb-4 flex items-center gap-2">
          <ClinicIcon /> Dental Services
        </h4>
        <div className="grid grid-cols-2 gap-4">
          {dentalServices.map((service, i) => (
            <button
              key={i}
              onClick={() =>
                setFormData({ ...formData, service: service.title })
              }
              className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                formData.service === service.title
                  ? "border-purple-400 bg-purple-400/20 text-white"
                  : "border-white/30 hover:border-purple-400/50 text-pink-100 hover:text-white"
              }`}
            >
              <div className="font-semibold">{service.title}</div>
              <div className="text-xs opacity-80 mt-1">
                {service.description}
              </div>
            </button>
          ))}
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
          disabled={!formData.service}
          className={`px-12 py-3 rounded-2xl font-bold transition-all duration-300 ${
            formData.service
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

export default BookingStep2;
