"use client";

import { BlurText } from "../ui/blur-text";
import Image from "next/image";
import { m, LazyMotion, domAnimation } from "framer-motion";
import React from "react";
import { useI18n } from "@/lib/i18n/I18nProvider";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  image: string;
};

// Non-translatable structural data; quotes fetched via i18n keys
const testimonials: Array<Omit<Testimonial, 'quote'> & { key: number }> = [
  { key: 0, name: "Galip B.", role: "Alıcı & Satıcı", image: "/images/about-us.jpg" },
  { key: 1, name: "Paxcon I.", role: "Alıcı & Satıcı", image: "/images/real-person.avif" },
  { key: 2, name: "Ahmet A.", role: "Alıcı & Satıcı", image: "/images/real-person-2.avif" },
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
  const { t } = useI18n();

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-10">
        <div className="text-center mb-16">
          <h2 className="text-[44px] md:text-[56px] leading-[1.05] font-bold tracking-tight text-brand-dark-navy">
            <span className="inline-block">
              <BlurText
                text={t('testimonial.section.heading')}
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
            {t('testimonial.section.description')}
          </p>
        </div>

        <LazyMotion features={domAnimation}>
          <m.ul
            className="grid gap-12 md:gap-16 md:grid-cols-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {testimonials.map((item, i) => (
              <m.li
                key={item.name}
                className="flex flex-col"
                custom={i}
                variants={itemVariants}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border border-[#CBEDE6]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-[#1E2B47]">{item.name}</p>
                    <p className="text-sm text-brand-medium-gray">{t(`testimonial.section.roles.${item.key}`)}</p>
                  </div>
                </div>
                <p className="text-brand-dark-navy text-lg leading-8">
                  "{t(`testimonial.list.${item.key}.quote`)}"
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
