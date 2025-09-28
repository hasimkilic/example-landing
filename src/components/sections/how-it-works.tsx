"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { BlurText } from "../ui/blur-text";
import { Button } from "../ui/button";

const Step1Icon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="60" height="60" rx="12" className="fill-[#CBEDE6]" />
    <path d="M37.3333 42.6667H22.6667C21.929 42.6667 21.3333 42.071 21.3333 41.3333V25.3333C21.3333 24.5956 21.929 24 22.6667 24H37.3333C38.071 24 38.6667 24.5956 38.6667 25.3333V41.3333C38.6667 42.071 38.071 42.6667 37.3333 42.6667Z" stroke="#259c84" strokeWidth="2" strokeLinejoin="round" />
    <path d="M21.3333 30.6667H38.6667" stroke="#259c84" strokeWidth="2" strokeLinejoin="round" />
    <path d="M30 42.6667V30.6667" stroke="#259c84" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

const Step2Icon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="60" height="60" rx="12" className="fill-[#CBEDE6]" />
    <g>
      <path d="M33.5293 33.5294L39 39" stroke="#259c84" strokeWidth="2" strokeLinecap="round" />
      <path d="M31.2941 36.5882C34.9036 36.5882 37.8235 33.6683 37.8235 30.0588C37.8235 26.4493 34.9036 23.5294 31.2941 23.5294C27.6846 23.5294 24.7646 26.4493 24.7646 30.0588C24.7646 33.6683 27.6846 36.5882 31.2941 36.5882Z" stroke="#259c84" strokeWidth="2" />
    </g>
  </svg>
);

const Step3Icon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="60" height="60" rx="12" className="fill-[#CBEDE6]" />
    <g>
      <path d="M38 25H22C21.4477 25 21 25.4477 21 26V37C21 37.5523 21.4477 38 22 38H38C38.5523 38 39 37.5523 39 37V26C39 25.4477 38.5523 25 38 25Z" stroke="#259c84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M39 26L30 32L21 26" stroke="#259c84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

const Step4Icon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="60" height="60" rx="12" className="fill-[#CBEDE6]" />
    <path d="M30 25L28.5303 26.4697C28.2374 26.7626 28.2374 27.2374 28.5303 27.5303L30 29" stroke="#259c84" strokeWidth="2" strokeLinecap="round" />
    <path d="M33 22L31.5303 23.4697C31.2374 23.7626 31.2374 24.2374 31.5303 24.5303L33 26" stroke="#259c84" strokeWidth="2" strokeLinecap="round" />
    <path d="M27 22L25.5303 23.4697C25.2374 23.7626 25.2374 24.2374 25.5303 24.5303L27 26" stroke="#259c84" strokeWidth="2" strokeLinecap="round" />
    <path d="M30 35L28.5303 36.4697C28.2374 36.7626 28.2374 37.2374 28.5303 37.5303L30 39" stroke="#259c84" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const stepsData = [
  {
    title: <>MVP Hazır: <br />Basit, Hızlı, Güvenilir</>,
    description:
      "Kilit modüller canlı: teklif karşılaştırma, sözleşme, ödeme ve takip. Bugün kullanan şirketler maliyet ve zaman kazancını ölçmeye başladı.",
    image: "/images/web-page.png",
    ctas: [
      { label: "Hemen Deneyin", href: "https://opencontainer.co/tr", variant: "default" },
      { label: "Süreci İncele", href: "https://panel.opencontainer.co/tr", variant: "outline" },
    ],
    icon: Step1Icon,
  },
  {
    title: <>Tek ekranda 5 dakikada <br />konteyner kiralama</>,
    description:
      "İzmir - Mersin 40HC tek yön ya da standart (belirlenen depoya iade) kiralama mı lazım? Rota ve tarihleri gir; birden fazla tedarikçiden teklif gelsin. Fiyat, süre ve koşulları yan yana gör, en iyi seçeneği dakikalar içinde seç.",
    image: "/images/panel.png",
    ctas: [
      { label: "Hemen Kirala", href: "https://opencontainer.co/tr/shop-product", variant: "default" },
      { label: "Planları Gör", href: "https://opencontainer.co/tr/shop-product", variant: "outline" },
    ],
    icon: Step2Icon,
  },
  {
    title: <>Teklifleri inceleyin<br />veya talep oluşturun</>,
    description:
      "Mevcut navlun tekliflerini rota ve koşullara göre karşılaştırın ya da talebinizi girin; doğrulanmış firmalar size dakikalar içinde teklif sunsun. Sevkiyatı uçtan uca panelden takip edin.",
    image: "/images/129003.jpg",
    ctas: [
      { label: "Navlun Talebi Oluştur", href: "https://opencontainer.co/tr/shop-product", variant: "default" },
      { label: "Rotaları / Teklifleri İncele", href: "https://opencontainer.co/tr/shop-product", variant: "outline" },
    ],
    icon: Step3Icon,
  },
  {
    title: <>Gelişmeye<br />Devam Ediyoruz</>,
    description:
      "Sürekli yeni özellikler, entegrasyonlar ve pazar yerleri ekliyoruz — yolculuğa katılın.",
    image: "/images/panel-offer.png",
    ctas: [
      { label: "Bize Katılın — Ücretsiz Başla", href: "https://opencontainer.co/tr/register", variant: "default" },
      { label: "Yol Haritamız", href: "https://opencontainer.co/tr/about-us", variant: "outline" },
    ],
    icon: Step4Icon,
  },
] as const;

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = stepRefs.current.indexOf(entry.target as HTMLLIElement);
            if (index > -1) {
              setActiveStep(index);
            }
          }
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    const currentRefs = stepRefs.current.filter(ref => ref !== null);
    currentRefs.forEach(ref => observer.observe(ref!));

    return () => {
      currentRefs.forEach(ref => observer.unobserve(ref!));
    };
  }, []);

  return (
    <section className="py-20 lg:py-24">
      <div className="container max-w-[1200px] mx-auto px-10">
        <div className="text-center mb-12 lg:mb-24">
          <h2 className="text-[48px] font-bold text-brand-dark-navy leading-tight">
            <BlurText
              text="Fikirden Gerçeğe: OpenContainer’ın Dönüşümü"
              className="inline-block"
              delay={0.5}
              duration={0.6}
              stagger={0.04}
              translateY={12}
              blur={8}
            />
          </h2>
          <p className="text-md text-brand-medium-gray mt-4 max-w-xxl px-3 mx-auto">
            Telefon ve e-posta trafiğini ortadan kaldıran basit bir pazar yeri olarak başladık. Şimdi kiralama, navlun, depo ve ödeme modülleriyle lojistiği uçtan uca dijital yönetilebilir hale getiriyoruz.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-24 relative">
          <div className="lg:w-1/2 ">
            <div className="lg:sticky lg:top-[calc(50vh-300px)] h-[320px] sm:h-[480px] lg:h-[600px] w-full rounded-2xl overflow-hidden mb-12 lg:mb-0 relative">
              {stepsData.map((step, index) => (
                step.hasOwnProperty("video") && (step as any).video ? (
                  <video
                    key={`v-${index}`}
                    className={cn(
                      "absolute inset-0 rounded-lg w-full h-full object-cover transition-opacity duration-300",
                      activeStep === index ? "opacity-100 z-10" : "opacity-0"
                    )}
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={(step as any).poster || undefined}
                  >
                    <source src={(step as any).video.webm} type="video/webm" />
                    <source src={(step as any).video.mp4} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    key={`i-${index}`}
                    alt={typeof step.title === "string" ? (step.title as string) : "Görsel"}
                    src={(step as any).image || "/vercel.svg"}
                    className={cn(
                      "absolute inset-0 w-full h-96 rounded-lg object-contain transition-opacity duration-300",
                      activeStep === index ? "opacity-100 z-10" : "opacity-0"
                    )}
                  />
                )
              ))}
            </div>
          </div>

          <ul className="lg:w-1/2 flex flex-col space-y-24 lg:space-y-48">
            {stepsData.map((step, index) => (
              <li
                key={index}
                // @ts-ignore
                ref={el => (stepRefs.current[index] = el)}
                className="flex gap-x-6 items-start"
              >
                <div className="flex-shrink-0 mt-1">
                  <step.icon className={cn('transition-opacity duration-300', activeStep >= index ? 'opacity-100' : 'opacity-40')} />
                </div>
                <div className={cn('transition-opacity duration-300', activeStep >= index ? 'opacity-100' : 'opacity-40')}>
                  <h3 className="text-[32px] font-bold text-brand-dark-navy leading-tight">
                    {typeof step.title === "string" ? (
                      activeStep === index ? (
                        <BlurText text={step.title} delay={0.1} duration={0.5} stagger={0.03} translateY={8} blur={6} />
                      ) : (
                        <span>{step.title}</span>
                      )
                    ) : activeStep === index ? (
                      <span className="inline-block">
                        {index === 0 && (
                          <>
                            <BlurText text="MVP Hazır:" delay={0.1} duration={0.5} stagger={0.03} translateY={8} blur={6} />
                            <br />
                            <BlurText text="Basit, Hızlı, Güvenilir" delay={0.25} duration={0.5} stagger={0.03} translateY={8} blur={6} />
                          </>
                        )}
                        {index === 1 && (
                          <>
                            <BlurText text="Tek ekranda 5 dakikada" delay={0.1} duration={0.5} stagger={0.03} translateY={8} blur={6} />
                            <br />
                            <BlurText text="konteyner kiralama" delay={0.25} duration={0.5} stagger={0.03} translateY={8} blur={6} />
                          </>
                        )}
                        {index === 2 && (
                          <>
                            <BlurText text="Teklifleri inceleyin" delay={0.1} duration={0.5} stagger={0.03} translateY={8} blur={6} />
                            <br />
                            <BlurText text="veya talep oluşturun" delay={0.25} duration={0.5} stagger={0.03} translateY={8} blur={6} />
                          </>
                        )}
                        {index === 3 && (
                          <>
                            <BlurText text="Gelişmeye" delay={0.1} duration={0.5} stagger={0.03} translateY={8} blur={6} />
                            <br />
                            <BlurText text="Devam Ediyoruz" delay={0.25} duration={0.5} stagger={0.03} translateY={8} blur={6} />
                          </>
                        )}
                      </span>
                    ) : (
                      <span className="inline-block">{step.title}</span>
                    )}
                  </h3>
                  <p className="mt-3 text-lg text-brand-medium-gray">
                    {step.description}
                  </p>
                  {"ctas" in step && Array.isArray((step as any).ctas) && (
                    <div className="mt-5 flex flex-wrap gap-3">
                      {(step as any).ctas.map((cta: any, i: number) => (
                        <Button
                          key={i}
                          asChild
                          // className="cursor-pointer"
                          variant={
                            cta.variant === "default"
                              ? ("brand" as any)
                              : cta.variant === "outline"
                              ? ("brandOutline" as any)
                              : (cta.variant as any)
                          }
                          size="lg"
                        >
                          <a href={cta.href} target="_blank" rel="noopener noreferrer">{cta.label}</a>
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;