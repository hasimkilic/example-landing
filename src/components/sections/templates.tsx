import React from 'react';
import Image from 'next/image';
import { PricingSection } from './pricing';
import ShinyText from '../ui/ShinyText';
import BlurText from '../ui/blur-text';
interface TemplateCardProps {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
}

const TemplatesSection = () => {
  return (
    <section id='pricing' className="bg-brand-light-gray py-[80px]">
      <div className="max-w-[1200px] mx-auto px-10">
        <h2 className="text-[48px] font-bold text-center text-brand-dark-navy leading-[1.2]">
          <BlurText
            text="Fiyatlandırma Planları"
            className="inline-block"
            delay={0.5}
            duration={0.6}
            stagger={0.04}
            translateY={12}
            blur={8}
          />
        </h2>
        <p className="text-xl leading-8 text-center text-brand-medium-gray mt-4">
          Size uygun olan planı seçerek işlemlerinize
          <br />
          başlayabilirsiniz.
        </p>

        <PricingSection />

        <div className="text-center mt-[10px] cursor-pointer">
          <a
            href="https://opencontainer.co/tr/planner"
            target='_blank'
            className="inline-flex items-center justify-center btn-sweep bg-[#259c84] text-white font-medium text-base rounded-[8px] px-6 py-3.5 gap-2.5 transition-all shadow-[0_4px_14px_0_rgba(37,156,132,0.25)] hover:shadow-[0_6px_20px_0_rgba(37,156,132,0.3)] transform hover:scale-[1.02] cursor-pointer">
            <ShinyText
              text="Daha Fazla Bilgi Alın"
              disabled={false}
              speed={3}
              className='custom-class text-white font-medium text-base cursor-pointer'
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TemplatesSection;