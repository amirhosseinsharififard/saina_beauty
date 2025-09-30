import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import BeautyServicesSection from "./components/sections/BeautyServicesSection";
import DentalServicesSection from "./components/sections/DentalServicesSection";
import BookingSection from "./components/sections/BookingSection";
import Footer from "./components/sections/Footer";
import ChatWidget from "./components/ui/ChatWidget";

function App() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <HeroSection />
      <AboutSection />
      <BeautyServicesSection />
      <DentalServicesSection />
      <BookingSection />
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;
