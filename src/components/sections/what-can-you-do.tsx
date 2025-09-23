"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useInView, useReducedMotion, useScroll, useMotionValueEvent, useAnimation } from "framer-motion";
import React from "react";

const useHasUserScrolled = () => {
  const { scrollY } = useScroll();
  const [hasScrolled, setHasScrolled] = React.useState(false);
  useMotionValueEvent(scrollY, "change", (v) => {
    if (!hasScrolled && v > 0) setHasScrolled(true);
  });
  return hasScrolled;
};

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = React.useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(min-width: 1024px)").matches;
  });
  React.useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    } else {
      mq.addListener(handler);
      return () => mq.removeListener(handler);
    }
  }, []);
  return isDesktop;
};

// Framer Motion powered fade/slide-in on scroll using variants; container controls handle inView
const FadeIn: React.FC<{
  children: React.ReactNode;
  className?: string;
  duration?: number; // in ms
  direction?: "up" | "down" | "left" | "right";
}> = ({ children, className, duration = 650, direction = "up" }) => {
  const prefersReduced = useReducedMotion();

  const hiddenOffset = 24;
  const getHiddenPos = () => {
    switch (direction) {
      case "down":
        return { y: -hiddenOffset };
      case "left":
        return { x: hiddenOffset };
      case "right":
        return { x: -hiddenOffset };
      case "up":
      default:
        return { y: hiddenOffset };
    }
  };

  const variants = React.useMemo(
    () => ({
      hidden: prefersReduced ? { opacity: 1 } : { opacity: 0, ...getHiddenPos() },
      show: prefersReduced ? { opacity: 1 } : { opacity: 1, x: 0, y: 0 },
    }),
    [direction, prefersReduced]
  );

  const transition = React.useMemo(
    () => ({ duration: Math.max(0, duration) / 1000 }),
    [duration]
  );

  return (
    <motion.div className={className} variants={variants} transition={transition}>
      {children}
    </motion.div>
  );
};

const useCases = [
  {
    badgeText: "Ürün Yönetimi",
    badgeBgClass: "bg-[#F7DEA7]",
    cardBgClass: "bg-[#FEFCF7]",
    title: "İlk adımda ürün yükleyip satabilirsin",
    description:
      "Mağazana ürünlerini birkaç tıklamayla ekle, ilanını yayımla ve satışa başla.",
    imageUrl: "/images/panel-urunler.png",
    imageWidth: 1200,
    imageHeight: 800,
    imageAlt: "Ürün yükleme ve satış işlemleri",
    linkUrl: "https://opencontainer.co/tr/planner",
  },
  {
    badgeText: "Navlun",
    badgeBgClass: "bg-[#CBEDE6]",
    cardBgClass: "bg-[#E6FAF6]",
    title: "Navlun işlemleri yapabilirsin",
    description:
      "Teklif al, rezervasyon oluştur, evrakları yönet — hepsi tek ekrandan.",
    imageUrl: "/images/panel-offer.png",
    imageWidth: 1200,
    imageHeight: 800,
    imageAlt: "Navlun işlemleri ve liman görüntüsü",
    linkUrl: "https://opencontainer.co/tr",
  },
  {
    badgeText: "Fiyat karşılaştırma",
    badgeBgClass: "bg-[#C9F5F2]",
    cardBgClass: "bg-[#F0FDFC]",
    title: "Fiyat karşılaştırması yapabilirsin",
    description:
      "Farklı hat ve acentelerden anlık navlun tekliflerini karşılaştır, en uygun maliyeti yakala.",
    imageUrl: "/images/compare.png",
    imageWidth: 1200,
    imageHeight: 1000,
    imageAlt: "Fiyat ve logo karşılaştırma görseli",
    linkUrl: "https://opencontainer.co/tr",
  },
  {
    badgeText: "Tek platform",
    badgeBgClass: "bg-[#D1F4E0]",
    cardBgClass: "bg-[#F2FEF8]",
    title: "Tüm konteyner işlerini tek yerden dijitalde kontrol edebilirsin",
    description:
      "Rezervasyon, takip, faturalama ve raporlama süreçlerini tek platformdan uçtan uca yönet.",
    imageUrl: "/images/panel.png",
    imageWidth: 1200,
    imageHeight: 1200,
    imageAlt: "Konteyner operasyonlarının dijital yönetimi",
    linkUrl: "https://opencontainer.co/tr",
  },
];

const WhatCanYouDo = () => {
  // Container-level animation controls to retrigger on each viewport enter
  const controls = useAnimation();
  const gridRef = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(gridRef, { amount: 0.2, once: false });
  const isDesktop = useIsDesktop();
  const hasScrolled = useHasUserScrolled();
  const firstRunRef = React.useRef(true);

  React.useEffect(() => {
    if (inView) {
      if (firstRunRef.current && !hasScrolled) {
        controls.set("show");
      } else {
        controls.start("show");
      }
    } else {
      controls.set("hidden");
    }
    if (firstRunRef.current) firstRunRef.current = false;
  }, [inView, hasScrolled, controls]);

  const containerVariants = React.useMemo(
    () => ({
      hidden: {},
      show: {
        transition: {
          staggerChildren: isDesktop ? 0.156 : 0.072,
        },
      },
    }),
    [isDesktop]
  );

  return (
    <section className="bg-white py-24">
      <div className="container">
        <h2 className="text-center text-brand-dark-navy text-5xl font-bold leading-tight">
          <span className="bg-[#CBEDE6] px-2 py-1">Open Container ile</span>
          <br />
          neler yapabilirsin?
        </h2>
        <div className="mt-16 lg:mt-24">
          <motion.div
            ref={gridRef}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {useCases.map((useCase, idx) => (
              <FadeIn
                key={useCase.title}
                duration={650}
                direction={idx % 2 === 0 ? "left" : "right"}
              >
                <div
                  className={`${useCase.cardBgClass} rounded-2xl p-8 flex flex-col text-center h-full`}
                >
                  <p>
                    <a
                      href={useCase.linkUrl}
                      className={`inline-block ${useCase.badgeBgClass} text-brand-dark-navy font-semibold tracking-wide rounded-md px-3 py-1 text-sm`}
                    >
                      {useCase.badgeText}
                    </a>
                  </p>
                  <h3 className="text-[32px] font-bold text-brand-dark-navy leading-tight mt-4">
                    {useCase.title}
                  </h3>
                  <p className="text-brand-medium-gray text-lg mt-4">
                    {useCase.description}
                  </p>

                  <div className="mt-auto pt-8">
                    <Image
                      src={useCase.imageUrl}
                      alt={useCase.imageAlt}
                      width={useCase.imageWidth}
                      height={useCase.imageHeight}
                      className="w-full h-auto rounded-md text-center"
                    />
                    <a
                      href={useCase.linkUrl}
                      title="Detayları gör"
                      className="inline-flex items-center justify-center bg-[#259c84] text-white text-base font-medium py-4 px-8 mt-8 rounded-lg shadow-[0_2px_4px_rgba(37,156,132,0.2)] transition-transform hover:scale-[1.02]"
                    >
                      Detayları gör
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatCanYouDo;