"use client";

import { BlurText } from "../ui/blur-text";
import Image from "next/image";
import { m, LazyMotion, domAnimation } from "framer-motion";
import React from "react";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Ayşe TERZİ",
    role: "CEO",
    quote:
      "OpenContainer sayesinde konteyner kiralama ve navlun süreçlerimizi tek ekrandan yönetiyoruz; maliyetlerimiz düştü, karar süremiz kısaldı.",
    image: "/images/about-us.jpg",
  },
  {
    name: "Ahmet YILMAZ",
    role: "CTO",
    quote:
      "OpenContainer'ın güçlü güvenlik önlemleri ve sorunsuz entegrasyonları beni etkiledi. Kullanıcı dostu bir uygulamanın bu kadar gelişmiş teknolojiyle dengelendiğini görmek nadir.",
    image: "/images/real-person.avif",
  },
  {
    name: "Ali İhsan Yıldıran",
    role: "Müşteri Hizmetleri",
    quote:
      "Kullanıcı dostu arayüz, teklif karşılaştırma ve takip fonksiyonları müşterilerimize anlık bilgi vermemizi sağlıyor; memnuniyet belirgin şekilde arttı.",
    image: "/images/real-person-2.avif",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] as any },
  }),
} as const;

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-10">
        <div className="text-center mb-16">
          <h2 className="text-[44px] md:text-[56px] leading-[1.05] font-bold tracking-tight text-brand-dark-navy">
            <span className="inline-block">
              <BlurText
                text="Müşterilerimizin Yorumları"
                delay={0.1}
                duration={0.5}
                stagger={0.04}
                translateY={10}
                blur={6}
                className="block"
                triggerOnView
                once={false}
              />
            </span>
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-brand-medium-gray">
            Müşterilerimizin OpenContainer hakkındaki deneyimlerini okuyun.
          </p>
        </div>

        <LazyMotion features={domAnimation}>
          <m.ul
            className="grid gap-12 md:gap-16 md:grid-cols-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {testimonials.map((t, i) => (
              <m.li
                key={t.name}
                className="flex flex-col"
                custom={i}
                variants={itemVariants}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border border-[#CBEDE6]">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-[#1E2B47]">{t.name}</p>
                    <p className="text-sm text-brand-medium-gray">{t.role}</p>
                  </div>
                </div>
                <p className="text-brand-dark-navy text-lg leading-8">
                  "{t.quote}"
                </p>
              </m.li>
            ))}
          </m.ul>
        </LazyMotion>
      </div>
    </section>
  );
};

export default TestimonialsSection;
