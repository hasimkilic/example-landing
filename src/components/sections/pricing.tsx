"use client";
import React from "react";
import { Check, UserRound, Store, Star } from "lucide-react";
import Link from "next/link";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "framer-motion";

export const PricingSection = () => {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { amount: 0.25, margin: "0px 0px -20% 0px" });
  const [hasPlayed, setHasPlayed] = React.useState(false);
  React.useEffect(() => {
    if (isInView && !hasPlayed) setHasPlayed(true);
  }, [isInView, hasPlayed]);
  const animateState = prefersReducedMotion ? "show" : hasPlayed ? "show" : "hidden";
  const initialState = prefersReducedMotion ? "show" : "hidden";

  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
  } as const;

  const leftVariant = {
    hidden: { x: -56, y: 12 },
    show: {
      x: 0,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  } as const;

  const centerVariant = {
    hidden: { y: 56, scale: 0.98 },
    show: {
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  } as const;

  const rightVariant = {
    hidden: { x: 56, y: 12 },
    show: {
      x: 0,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  } as const;

  return (
    <section className="relative py-20 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle, #d1d5db 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />
      
      <div className="container relative z-10">
        <div className="mx-auto max-w-8xl">
          <LazyMotion features={domAnimation}>
            <m.div
              className="grid grid-cols-1 gap-12 md:grid-cols-3"
              variants={containerVariants}
              initial={initialState}
              animate={animateState}
              ref={containerRef}
            >
              {/* Card 1 - Bronz (soldan gelir) */}
              <m.div 
                className="rounded-[28px] border border-neutral-200 bg-white p-8 shadow-sm transform motion-safe:transition motion-safe:duration-300 motion-safe:ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg"
                variants={leftVariant}
                style={{ willChange: "transform" }}
              >
              <div className="text-center">
                <div className="text-5xl font-bold text-neutral-900">$121.97</div>
                <div className="mt-4 text-2xl font-semibold text-neutral-900">Bronz Plan</div>
                <div className="mt-1 text-sm text-neutral-500">(Alıcı Paketi)</div>
                <p className="mt-6 text-base text-neutral-600">
                  Bireysel kullanıcılar ve küçük çaplı işletmeler için ideal başlangıç paketi.
                </p>
                <div className="mt-6 flex items-center justify-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#e8f6f2] px-3 py-1 text-xs font-semibold text-[#259c84]">
                    <UserRound className="h-4 w-4" /> ALICI
                  </span>
                </div>
                <Link target="_blank" href="https://opencontainer.co/tr/planner?plan=bronz" className="cursor-pointer mt-6 inline-flex w-full items-center justify-center rounded-full bg-neutral-900 px-6 py-4 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-black">
                  SATIN AL
                </Link>
              </div>
              <ul className="mt-8 space-y-4">
                {[
                  "Temel konteyner bilgilerini görme",
                  "Satıcı hakkında bilgilerine erişim",
                  "Konteyner ilanı oluşturma",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-neutral-700">
                    <span className="mt-1 rounded-full bg-[#e8f6f2] p-1 text-[#259c84]">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
              </m.div>

              {/* Card 2 - Gümüş (featured) (aşağıdan gelir) */}
              <m.div 
                className="relative rounded-[28px] bg-[#259c84] p-8 shadow-lg transform origin-center motion-safe:transition motion-safe:duration-300 motion-safe:ease-out md:scale-[1.05] hover:-translate-y-1 hover:scale-[1.07] hover:shadow-2xl md:-mx-[10px] md:z-20 overflow-visible"
                variants={centerVariant}
                style={{ willChange: "transform" }}
              >
              {/* Önerilen Rozet */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                <div className="relative inline-flex items-center gap-2 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-yellow-900 shadow-md ring-2 ring-yellow-300">
                  <Star className="h-4 w-4" />
                  <span>Önerilen</span>
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-0 w-0 border-x-6 border-x-transparent border-t-6 border-t-yellow-400"
                  />
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-white">$396.47</div>
                <div className="mt-4 text-2xl font-semibold text-white">Gümüş Plan</div>
                <div className="mt-1 text-sm text-white/80">(Satıcı Paketi)</div>
                <p className="mt-6 text-base text-white/90">
                  KOBİ'ler ve düzenli kiralama yapan kullanıcılar için geliştirilmiş çözüm.
                </p>
                <div className="mt-6 flex items-center justify-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white">
                    <UserRound className="h-4 w-4" /> ALICI
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white">
                    <Store className="h-4 w-4" /> SATICI
                  </span>
                </div>
                <Link target="_blank" href="https://opencontainer.co/tr/planner?plan=gumus" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-semibold tracking-wide text-[#259c84] transition-colors hover:bg-white/95">
                  SATIN AL
                </Link>
              </div>
              <ul className="mt-8 space-y-4">
                {[
                  "Bronz paketindeki tüm özellikler",
                  "Aylık 15 konteyner ilanı oluşturma",
                  "Faturalandırma entegrasyonu",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white">
                    <span className="mt-1 rounded-full bg-white/20 p-1 text-white">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
              {/* Rounded bottom like the reference */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 rounded-b-[28px]" />
            </m.div>

              {/* Card 3 - Altın (sağdan gelir) */}
              <m.div 
                className="rounded-[28px] border border-neutral-200 bg-white p-8 shadow-sm transform motion-safe:transition motion-safe:duration-300 motion-safe:ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg"
                variants={rightVariant}
                style={{ willChange: "transform" }}
              >
              <div className="text-center">
                <div className="text-5xl font-bold text-neutral-900">$548.97</div>
                <div className="mt-4 text-2xl font-semibold text-neutral-900">Altın Plan</div>
                <div className="mt-1 text-sm text-neutral-500">(Satıcı Paketi)</div>
                <p className="mt-6 text-base text-neutral-600">
                  Büyük ölçekli işletmeler, bayiler ve profesyonel satıcılar için kapsamlı çözüm.
                </p>
                <div className="mt-6 flex items-center justify-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#e8f6f2] px-3 py-1 text-xs font-semibold text-[#259c84]">
                    <UserRound className="h-4 w-4" /> ALICI
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#e8f6f2] px-3 py-1 text-xs font-semibold text-[#259c84]">
                    <Store className="h-4 w-4" /> SATICI
                  </span>
                </div>
                <Link target="_blank" href="https://opencontainer.co/tr/planner?plan=altin" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-neutral-900 px-6 py-4 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-black">
                  SATIN AL
                </Link>
              </div>
              <ul className="mt-8 space-y-4">
                {[
                  "Gümüş paketindeki tüm özellikler",
                  "Sınırsız konteyner ilanı",
                  "Özel destek ve danışmanlık hizmetleri",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-neutral-700">
                    <span className="mt-1 rounded-full bg-[#e8f6f2] p-1 text-[#259c84]">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </m.div>
          </m.div>
          </LazyMotion>
        </div>
      </div>
    </section>
  );
};