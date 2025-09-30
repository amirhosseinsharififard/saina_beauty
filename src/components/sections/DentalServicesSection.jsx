import { dentalServices } from "../../constants/data";
import { ClinicIcon } from "../ui/Icons";

const DentalServicesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-white via-pink-50 to-white px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="text-sm text-pink-500 inline-flex items-center gap-2 mb-2">
            <ClinicIcon /> In partnership with Saina Beauty
          </div>
          <h2 className="text-4xl font-bold text-pink-600">
            Dental Treatments
          </h2>
          <p className="text-gray-600 mt-2">Trusted nearby dental clinic.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {dentalServices.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-3xl p-6 text-center hover:scale-105 transition"
            >
              <h3 className="text-lg font-semibold text-pink-600">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DentalServicesSection;
