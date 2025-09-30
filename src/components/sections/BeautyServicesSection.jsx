import { beautyServices } from "../../constants/data";
import { iconMap } from "../ui/Icons";

const BeautyServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-pink-600 mb-12">
          Our Signature Treatments
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {beautyServices.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={index}
                className="bg-white shadow-lg rounded-2xl p-6 text-center hover:scale-105 transition"
              >
                <div className="mb-4 flex justify-center">
                  <IconComponent />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BeautyServicesSection;
