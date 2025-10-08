import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="bg-pink-50 p-8 rounded-3xl shadow-xl w-full">
          <h2 className="text-4xl font-bold text-pink-600 mb-6">Meet Saina</h2>
          <p className="text-gray-700 text-lg mb-6">
            With over 10 years of experience in the beauty industry, Saina is a
            certified expert in facial aesthetics and skincare. Her mission is
            to empower every woman to feel confident in her own skin.
          </p>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-pink-600 mb-3">
              Why Saina?
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Certified in advanced beauty treatments</li>
              <li>Combines medical skills with artistic vision</li>
              <li>Dedicated to hygiene and client satisfaction</li>
            </ul>
          </div>
        </div>
        <Image
          src="/images/about.jpg"
          alt="Saina"
          width={340}
          height={440}
          className="object-cover rounded-[100px] shadow-2xl hover:scale-105 transition duration-500"
        />
      </div>
    </section>
  );
};

export default AboutSection;
