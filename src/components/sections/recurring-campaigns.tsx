import { Contact } from 'lucide-react';
import React from 'react';
import ContactCta from './contact-cta';

const RecurringCampaigns = () => {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="container mx-auto px-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-[48px] font-bold text-brand-dark-navy leading-[1.2]">
            <span className="bg-[#CBEDE6] px-4 py-1 rounded-lg">Bize Ulaşın</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-brand-medium-gray">
            Ekibimizle iletişime geçmek için aşağıdaki formu kullanınız.
          </p>
        </div>

        <div className="mt-12 lg:mt-16">
          <ContactCta />
        </div>
      </div>
    </section>
  );
};

export default RecurringCampaigns;