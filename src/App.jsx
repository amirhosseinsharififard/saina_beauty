import { useState, useEffect } from 'react';

const heroImages = ['./images/hero1.jpg', './images/hero2.jpg', './images/hero3.jpg'];

// Simple SVG icons as components
const SyringeIcon = () => (
  <svg className="w-8 h-8 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.8 4.4l-1.2-1.2c-.8-.8-2-.8-2.8 0L15 5l4 4 1.8-1.8c.8-.8.8-2 0-2.8zM4 18l2-7 7 7-7 2-2-2zm9-12l4 4-8 8-4-4 8-8z"/>
  </svg>
);

const GemIcon = () => (
  <svg className="w-8 h-8 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6 2l3 6h6l3-6H6zm-.5 8L2 22h7l-3.5-12zm13 0L15 22h7l-3.5-12zM9.5 10h5l-2.5 12-2.5-12z"/>
  </svg>
);

const HeartIcon = () => (
  <svg className="w-8 h-8 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

const SmileIcon = () => (
  <svg className="w-8 h-8 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

const WhatsappIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.064 3.687"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const TiktokIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

const ClinicIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3V8zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/>
  </svg>
);

const ChatIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v3c0 .6.4 1 1 1 .2 0 .5-.1.7-.3L14.4 18H20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12H7v-2h6v2zm3-4H7V8h9v2z"/>
  </svg>
);

const beautyServices = [
  { title: 'Botox', description: 'Smooth wrinkles and fine lines.', icon: <SyringeIcon /> },
  { title: 'Fillers', description: 'Lip, Chin, Cheek, Jawline, Smile & Nose Fillers.', icon: <GemIcon /> },
  { title: 'Skincare', description: 'Facials, hydration, and rejuvenation.', icon: <HeartIcon /> },
  { title: 'Skinbooster', description: 'Boost skin moisture and glow.', icon: <HeartIcon /> },
  { title: 'Microblading', description: 'Semi-permanent eyebrow enhancement.', icon: <SmileIcon /> },
  { title: 'Eyeliner & Lip Blush', description: 'Natural tint for lips and eyes.', icon: <SmileIcon /> }
];

const dentalServices = [
  { title: 'Hollywood Smile', description: 'Perfect smile makeover for lasting impressions.' },
  { title: 'Implant', description: 'Durable and natural-looking tooth replacements.' },
  { title: 'Root Canal & Filling', description: 'Comprehensive tooth restoration treatments.' },
  { title: 'Teeth Whitening', description: 'Whiten your smile safely and effectively.' },
  { title: 'Laminate Veneers', description: 'Thin veneers for a brighter, perfect smile.' },
  { title: 'Zirkonium Crowns', description: 'Strong, biocompatible crowns with natural look.' }
];

const countries = [
  { code: '+90', flag: '????', name: 'Turkey' },
  { code: '+49', flag: '????', name: 'Germany' },
  { code: '+43', flag: '????', name: 'Austria' },
  { code: '+41', flag: '????', name: 'Switzerland' },
  { code: '+31', flag: '????', name: 'Netherlands' },
  { code: '+32', flag: '????', name: 'Belgium' },
  { code: '+33', flag: '????', name: 'France' },
  { code: '+44', flag: '????', name: 'UK' },
  { code: '+1', flag: '????', name: 'USA' },
  { code: '+971', flag: '????', name: 'UAE' },
  { code: '+966', flag: '????', name: 'Saudi Arabia' }
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '', service: '', date: '', time: '', contact: '', comment: '', countryCode: '+90'
  });
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [showChat, setShowChat] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!formData.name || !formData.service || !formData.date || !formData.time || !formData.contact) {
      alert('Bitte f�llen Sie alle Pflichtfelder aus.');
      return;
    }

    fetch('https://n8n.sainabeauty.com/webhook-test/booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        fullContact: `${formData.countryCode}${formData.contact}`
      })
    }).then(res =>
      res.ok ? alert('Thanks! We received your booking ?') :
        alert('Oops! Something went wrong.')
    );
  };

  const nextStep = () => {
    if (bookingStep === 1 && formData.name.trim()) {
      setBookingStep(2);
    } else if (bookingStep === 2 && formData.service) {
      setBookingStep(3);
    } else if (bookingStep === 3 && formData.date && formData.time) {
      setBookingStep(4);
    } else if (bookingStep === 4 && formData.contact.trim()) {
      setBookingStep(5);
    }
  };

  const prevStep = () => {
    if (bookingStep > 1) {
      setBookingStep(bookingStep - 1);
    }
  };

  const handleChatSubmit = async () => {
    if (!chatMessage.trim()) return;
    const userMsg = chatMessage.trim();
    setChatMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setChatMessage('');
    setIsLoading(true);

    try {
      const res = await fetch('https://n8n.sainabeauty.com/webhook/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg })
      });
      const data = await res.json();
      const reply = data.message || 'Sorry, no response.';
      setChatMessages(prev => [...prev, { role: 'assistant', text: reply }]);
    } catch {
      setChatMessages(prev => [...prev, { role: 'assistant', text: 'Could not send your message.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        <img src={heroImages[currentSlide]} alt="Hero" className="absolute inset-0 w-full h-full object-cover transition duration-1000" />
        <div className="absolute top-4 left-4 z-20"><img src="./images/logo.png" alt="Logo" className="h-16" /></div>
        <div className="relative z-10 h-full bg-black/30 flex flex-col items-center justify-center gap-6 text-white text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-bold">Welcome to Saina Beauty</h1>
          <p className="text-lg sm:text-xl">Elegance. Confidence. You.</p>
          <a href="#booking" className="bg-pink-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-pink-700 transition inline-flex items-center gap-2 text-lg">
            <WhatsappIcon /> Book Now
          </a>
        </div>
      </section>

      {/* About Me */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="bg-pink-50 p-8 rounded-3xl shadow-xl w-full">
            <h2 className="text-4xl font-bold text-pink-600 mb-6">Meet Saina</h2>
            <p className="text-gray-700 text-lg mb-6">
              With over 10 years of experience in the beauty industry, Saina is a certified expert in facial aesthetics and skincare. Her mission is to empower every woman to feel confident in her own skin.
            </p>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-pink-600 mb-3">Why Saina?</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Certified in advanced beauty treatments</li>
                <li>Combines medical skills with artistic vision</li>
                <li>Dedicated to hygiene and client satisfaction</li>
              </ul>
            </div>
          </div>
          <img src="/images/about.jpg" alt="Saina" className="w-[340px] h-[440px] object-cover rounded-[100px] shadow-2xl hover:scale-105 transition duration-500" />
        </div>
      </section>

      {/* Beauty Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-pink-600 mb-12">Our Signature Treatments</h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {beautyServices.map((s, i) => (
              <div key={i} className="bg-white shadow-lg rounded-2xl p-6 text-center hover:scale-105 transition">
                <div className="mb-4 flex justify-center">{s.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dental Services */}
      <section className="py-20 bg-gradient-to-r from-white via-pink-50 to-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-sm text-pink-500 inline-flex items-center gap-2 mb-2">
              <ClinicIcon /> In partnership with Saina Beauty
            </div>
            <h2 className="text-4xl font-bold text-pink-600">Dental Treatments</h2>
            <p className="text-gray-600 mt-2">Trusted nearby dental clinic.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {dentalServices.map((s, i) => (
              <div key={i} className="bg-white shadow-lg rounded-3xl p-6 text-center hover:scale-105 transition">
                <h3 className="text-lg font-semibold text-pink-600">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="py-20 px-4 bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900 min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-rose-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-200 to-white bg-clip-text text-transparent mb-4">
              ? Book Your Transformation
            </h2>
            <p className="text-pink-100 text-xl">Step {bookingStep} of 5</p>
          </div>

          <div className="mb-12">
            <div className="flex justify-between mb-4">
              {[1,2,3,4,5].map(step => (
                <div key={step} className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                  bookingStep >= step ? 'bg-pink-500 text-white' : 'bg-white/20 text-pink-200'
                }`}>
                  {step}
                </div>
              ))}
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-pink-500 to-rose-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(bookingStep / 5) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-12 border border-white/30 max-w-2xl mx-auto">

            {bookingStep === 1 && (
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-8">What's your name?</h3>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/30 rounded-2xl px-8 py-6 text-white placeholder-pink-200 focus:border-pink-400 focus:bg-white/15 outline-none transition-all duration-300 text-xl text-center"
                />
                <button
                  onClick={nextStep}
                  disabled={!formData.name.trim()}
                  className={`mt-8 px-12 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                    formData.name.trim()
                      ? 'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white transform hover:scale-105'
                      : 'bg-gray-500 text-gray-300 cursor-not-allowed'
                  }`}
                >
                  Continue ?
                </button>
              </div>
            )}

            {bookingStep === 2 && (
              <div>
                <h3 className="text-3xl font-bold text-white mb-8 text-center">Choose your service</h3>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-pink-200 mb-4 flex items-center gap-2">
                    <SyringeIcon /> Beauty Services
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {beautyServices.map((service, i) => (
                      <button
                        key={i}
                        onClick={() => setFormData({...formData, service: service.title})}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                          formData.service === service.title
                            ? 'border-pink-400 bg-pink-400/20 text-white'
                            : 'border-white/30 hover:border-pink-400/50 text-pink-100 hover:text-white'
                        }`}
                      >
                        <div className="font-semibold">{service.title}</div>
                        <div className="text-xs opacity-80 mt-1">{service.description}</div>
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
                        onClick={() => setFormData({...formData, service: service.title})}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                          formData.service === service.title
                            ? 'border-purple-400 bg-purple-400/20 text-white'
                            : 'border-white/30 hover:border-purple-400/50 text-pink-100 hover:text-white'
                        }`}
                      >
                        <div className="font-semibold">{service.title}</div>
                        <div className="text-xs opacity-80 mt-1">{service.description}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 justify-center">
                  <button onClick={prevStep} className="px-8 py-3 bg-white/20 text-white rounded-2xl hover:bg-white/30 transition">
                    ? Back
                  </button>
                  <button
                    onClick={nextStep}
                    disabled={!formData.service}
                    className={`px-12 py-3 rounded-2xl font-bold transition-all duration-300 ${
                      formData.service
                        ? 'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white transform hover:scale-105'
                        : 'bg-gray-500 text-gray-300 cursor-not-allowed'
                    }`}
                  >
                    Continue ?
                  </button>
                </div>
              </div>
            )}

            {bookingStep === 3 && (
              <div>
                <h3 className="text-3xl font-bold text-white mb-8 text-center">When would you like to come?</h3>

                <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl p-4 border border-pink-400/30 mb-8">
                  <div className="text-pink-200 text-sm">Selected Treatment:</div>
                  <div className="text-white font-semibold text-lg">{formData.service}</div>
                </div>

                <div className="space-y-8">
                  <div>
                    <label className="block text-pink-200 text-lg mb-4">Choose Date</label>
                    <input
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-4 text-white focus:border-pink-400 focus:bg-white/15 outline-none transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-pink-200 text-lg mb-4">Choose Time</label>
                    <div className="grid grid-cols-3 gap-3">
                      {['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'].map(time => (
                        <button
                          key={time}
                          onClick={() => setFormData({...formData, time})}
                          className={`py-3 px-4 rounded-xl border-2 transition-all duration-300 ${
                            formData.time === time
                              ? 'border-pink-400 bg-pink-400/30 text-white'
                              : 'border-white/30 text-pink-200 hover:border-pink-400/50 hover:text-white'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 justify-center mt-8">
                  <button onClick={prevStep} className="px-8 py-3 bg-white/20 text-white rounded-2xl hover:bg-white/30 transition">
                    ? Back
                  </button>
                  <button
                    onClick={nextStep}
                    disabled={!formData.date || !formData.time}
                    className={`px-12 py-3 rounded-2xl font-bold transition-all duration-300 ${
                      formData.date && formData.time
                        ? 'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white transform hover:scale-105'
                        : 'bg-gray-500 text-gray-300 cursor-not-allowed'
                    }`}
                  >
                    Continue ?
                  </button>
                </div>
              </div>
            )}

            {bookingStep === 4 && (
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-8">Your contact number?</h3>

                <div className="mb-8">
                  <div className="flex justify-center relative">
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                        className="bg-pink-500/30 border border-pink-400/50 rounded-l-2xl px-6 py-6 text-white font-semibold hover:bg-pink-500/40 transition-all duration-300 flex items-center gap-2 min-w-[140px]"
                      >
                        <span className="text-xl">{countries.find(c => c.code === formData.countryCode)?.flag || '????'}</span>
                        <span>{formData.countryCode}</span>
                        <svg className={`w-4 h-4 transition-transform ${showCountryDropdown ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>

                      {showCountryDropdown && (
                        <div className="absolute top-full left-0 mt-1 bg-white/95 backdrop-blur-lg border border-white/30 rounded-2xl shadow-2xl z-50 w-64 max-h-60 overflow-y-auto">
                          {countries.map((country) => (
                            <button
                              key={country.code}
                              type="button"
                              onClick={() => {
                                setFormData({...formData, countryCode: country.code});
                                setShowCountryDropdown(false);
                              }}
                              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-pink-500/20 transition-colors text-gray-800 first:rounded-t-2xl last:rounded-b-2xl"
                            >
                              <span className="text-lg">{country.flag}</span>
                              <span className="font-medium">{country.code}</span>
                              <span className="text-sm text-gray-600">{country.name}</span>
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
                  <button onClick={prevStep} className="px-8 py-3 bg-white/20 text-white rounded-2xl hover:bg-white/30 transition">
                    ? Back
                  </button>
                  <button
                    onClick={nextStep}
                    disabled={!formData.contact.trim()}
                    className={`px-12 py-3 rounded-2xl font-bold transition-all duration-300 ${
                      formData.contact.trim()
                        ? 'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white transform hover:scale-105'
                        : 'bg-gray-500 text-gray-300 cursor-not-allowed'
                    }`}
                  >
                    Continue ?
                  </button>
                </div>
              </div>
            )}

            {bookingStep === 5 && (
              <div>
                <h3 className="text-3xl font-bold text-white mb-8 text-center">Any special requests?</h3>

                <div className="bg-white/10 rounded-2xl p-6 mb-8 border border-white/20">
                  <h4 className="text-lg font-semibold text-white mb-4">Booking Summary:</h4>
                  <div className="space-y-2 text-pink-200">
                    <div><span className="font-medium">Name:</span> {formData.name}</div>
                    <div><span className="font-medium">Service:</span> {formData.service}</div>
                    <div><span className="font-medium">Date:</span> {formData.date}</div>
                    <div><span className="font-medium">Time:</span> {formData.time}</div>
                    <div><span className="font-medium">Contact:</span> {formData.countryCode} {formData.contact}</div>
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
                  <button onClick={prevStep} className="px-8 py-3 bg-white/20 text-white rounded-2xl hover:bg-white/30 transition">
                    ? Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="px-16 py-4 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                  >
                    ? Book My Appointment ?
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-600 text-white py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div><h3 className="font-bold mb-2">Saina Beauty</h3><p>Your beauty, our passion.</p></div>
          <div>
            <h3 className="font-bold mb-2">Opening Hours</h3>
            <p>Mon�Fri: 10:00�18:00<br />Sat: 11:00�17:00<br />Sun: Closed</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Follow Us</h3>
            <div className="flex gap-4 text-2xl">
              <a href="https://instagram.com/sainabeauty.salon" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
              <a href="https://facebook.com/sainabeauty.salon" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
              <a href="https://www.tiktok.com/@sainabeauty.clinik" target="_blank" rel="noopener noreferrer"><TiktokIcon /></a>
              <a href="https://wa.me/905526965752" target="_blank" rel="noopener noreferrer"><WhatsappIcon /></a>
            </div>
          </div>
        </div>
        <div className="text-center mt-6 text-xs">� {new Date().getFullYear()} Saina Beauty. All rights reserved.</div>
      </footer>

      {/* Chat */}
      <div className="fixed bottom-6 right-6 z-50">
        {showChat && (
          <div className="bg-white shadow-xl rounded-xl border p-4 w-80 mb-2">
            <div className="overflow-y-auto max-h-60 mb-2">
              {chatMessages.map((msg, i) => (
                <div key={i} className={`text-sm mb-1 ${msg.role === 'user' ? 'text-right' : 'text-left text-pink-600'}`}>
                  {msg.text}
                </div>
              ))}
              {isLoading && <div className="text-xs text-gray-400">Typing...</div>}
            </div>
            <textarea
              rows={2}
              placeholder="Ask us anything..."
              className="w-full border rounded px-3 py-2 mb-2"
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
            />
            <button
              onClick={handleChatSubmit}
              className="bg-pink-600 text-white w-full py-2 rounded hover:bg-pink-700"
            >
              Send
            </button>
          </div>
        )}
        <button
          onClick={() => setShowChat(!showChat)}
          className="bg-pink-600 text-white px-4 py-3 rounded-full shadow hover:bg-pink-700 text-sm flex items-center gap-2"
        >
          <ChatIcon /> Ask us anything
        </button>
      </div>
    </div>
  );
}

export default App;
