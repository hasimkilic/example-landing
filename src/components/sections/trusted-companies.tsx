import Image from 'next/image';

const logos = [
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/415f97d2-2eba-470d-b750-579779d13c40-respona-com/assets/images/logo-mark-512-1-2.png?", alt: "CommandBar", width: 32, height: 32 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/415f97d2-2eba-470d-b750-579779d13c40-respona-com/assets/svgs/Lucid-6.svg?", alt: "Lucid", width: 122, height: 30 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/415f97d2-2eba-470d-b750-579779d13c40-respona-com/assets/svgs/convertkit-7.svg?", alt: "ConvertKit", width: 151, height: 30 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/415f97d2-2eba-470d-b750-579779d13c40-respona-com/assets/svgs/cloudbeds-8.svg?", alt: "Cloudbeds", width: 154, height: 28 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/415f97d2-2eba-470d-b750-579779d13c40-respona-com/assets/svgs/planet-9.svg?", alt: "Planet", width: 154, height: 35 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/415f97d2-2eba-470d-b750-579779d13c40-respona-com/assets/svgs/hubstaff-10.svg?", alt: "Hubstaff", width: 150, height: 32 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/415f97d2-2eba-470d-b750-579779d13c40-respona-com/assets/svgs/visme-1-11.svg?", alt: "Visme", width: 154, height: 31 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/415f97d2-2eba-470d-b750-579779d13c40-respona-com/assets/svgs/insense-1-12.svg?", alt: "Insense", width: 154, height: 36 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/415f97d2-2eba-470d-b750-579779d13c40-respona-com/assets/svgs/Uscreen-1-13.svg?", alt: "Uscreen", width: 141, height: 34 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/415f97d2-2eba-470d-b750-579779d13c40-respona-com/assets/svgs/Generation-Iron_Logo_H-1-14.svg?", alt: "Generation Iron", width: 176, height: 40 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/415f97d2-2eba-470d-b750-579779d13c40-respona-com/assets/svgs/Bold-15.svg?", alt: "Bold", width: 130, height: 30 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/415f97d2-2eba-470d-b750-579779d13c40-respona-com/assets/svgs/Valantic-16.svg?", alt: "Valantic", width: 138, height: 30 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/415f97d2-2eba-470d-b750-579779d13c40-respona-com/assets/svgs/invideo-new-17.svg?", alt: "InVideo", width: 162, height: 37 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/415f97d2-2eba-470d-b750-579779d13c40-respona-com/assets/svgs/Motive-18.svg?", alt: "Motive", width: 131, height: 30 }
];

const TrustedCompanies = () => {
  const extendedLogos = [...logos, ...logos];

  return (
    <section className="bg-[#CBEDE6] py-10 lg:py-20 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <p className="text-center text-base font-medium text-brand-medium-gray mb-8 lg:mb-[50px]">
          Anlaşmalı olduğumuz bazı şirketler ve sponsorlarımız
        </p>
      </div>
      <div
        className="relative w-full"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <div className="flex w-max animate-infinite-scroll">
          {extendedLogos.map((logo, index) => (
            <div
              key={index}
              className="mx-8 flex h-[40px] flex-shrink-0 items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="max-h-full w-auto object-contain grayscale transition duration-300 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;