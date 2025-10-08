"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { heroImages } from "../../constants/appData";
import { WhatsappIcon } from "../shared-components/IconComponents";

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
      <Image
        src={heroImages[currentSlide]}
        alt="Hero"
        fill
        className="object-cover transition duration-1000"
        priority
      />
      <div className="absolute top-4 left-4 z-20">
        <Image src="/images/logo.png" alt="Logo" width={64} height={64} />
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
