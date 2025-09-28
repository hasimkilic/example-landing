"use client";
import { useEffect, useRef, useState } from "react";
import { BarChart3, Globe2, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
  description: string;
  duration?: number;
  format?: (n: number) => string;
}

const easeOutExpo = (x: number) => (x === 1 ? 1 : 1 - Math.pow(2, -10 * x));

function useCountUp(target: number, inView: boolean, duration = 1800) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    let frame: number;
    function tick(ts: number) {
      if (start === null) start = ts;
      const progress = Math.min(1, (ts - start) / duration);
      const eased = easeOutExpo(progress);
      setVal(Math.round(eased * target));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, inView, duration]);
  return val;
}

const StatItem = ({ icon, value, suffix = "+", label, description, duration, format }: StatItemProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const count = useCountUp(value, inView, duration);
  const formatted = format ? format(count) : count.toLocaleString("tr-TR");
  return (
    <div ref={ref} className="flex flex-col gap-4 max-w-xs mx-auto">
      <div className="flex items-center gap-3 text-4xl font-semibold text-brand-dark-navy">
        <span className="text-brand-medium-gray">{icon}</span>
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="tabular-nums tracking-tight"
        >
          {formatted} {suffix}
        </motion.span>
      </div>
      <p className="text-xl font-bold text-brand-dark-navy leading-snug ">{label}</p>
      <p className="text-base text-brand-medium-gray">{description}</p>
    </div>
  );
};

export function StatsSection() {
  const items: StatItemProps[] = [
    {
      icon: <BarChart3 className="size-9" />,
      value: 500,
      label: "500'den fazla konteyner ilanı",
      description: "Platformumuzda her gün artan geniş konteyner ilanı yelpazesi",
    },
    {
      icon: <Globe2 className="size-9" />,
      value: 100,
      label: "100 şirket bize güveniyor",
      description: "Farklı sektörlerden yüzlerce şirket güvenle işlem yapıyor",
    },
    {
      icon: <Star className="size-9" />,
      value: 10,
      label: "10 sponsor",
      description: "Büyümemize destek veren güçlü sponsor ağımız",
    },
  ];
  return (
    <section className="w-full py-20 md:py-28 bg-[#CBEDE6]">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid gap-16 md:gap-12 md:grid-cols-3 place-items-start">
          {items.map((item, i) => (
            <StatItem key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
