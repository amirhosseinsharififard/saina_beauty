import HeroSection from "./components/page-sections/HeroSection";
import AboutSection from "./components/page-sections/AboutSection";
import BeautyServicesSection from "./components/page-sections/BeautyServicesSection";
import DentalServicesSection from "./components/page-sections/DentalServicesSection";
import BookingSection from "./components/page-sections/BookingSection";
import FooterSection from "./components/page-sections/FooterSection";
import LiveChatWidget from "./components/shared-components/LiveChatWidget";

function App() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <HeroSection />
      <AboutSection />
      <BeautyServicesSection />
      <DentalServicesSection />
      <BookingSection />
      <FooterSection />
      <LiveChatWidget />
    </div>
  );
}

export default App;
