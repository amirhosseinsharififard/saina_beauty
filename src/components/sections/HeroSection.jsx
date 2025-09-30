import { useState, useEffect } from "react";
import { heroImages } from "../../constants/data";
import { WhatsappIcon } from "../ui/Icons";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] overflow-hidden">
      <img
        src={heroImages[currentSlide]}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover transition duration-1000"
      />
      <div className="absolute top-4 left-4 z-20">
        <img src="./images/logo.png" alt="Logo" className="h-16" />
      </div>
      <div className="relative z-10 h-full bg-black/30 flex flex-col items-center justify-center gap-6 text-white text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold">
          Welcome to Saina Beauty
        </h1>
        <p className="text-lg sm:text-xl">Elegance. Confidence. You.</p>
        <a
          href="#booking"
          className="bg-pink-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-pink-700 transition inline-flex items-center gap-2 text-lg"
        >
          <WhatsappIcon /> Book Now
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
