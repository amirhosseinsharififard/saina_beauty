const NameInputStep = ({ formData, handleChange, nextStep }) => {
  return (
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
            ? "bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white transform hover:scale-105"
            : "bg-gray-500 text-gray-300 cursor-not-allowed"
        }`}
      >
        Continue ✨
      </button>
    </div>
  );
};

export default NameInputStep;
