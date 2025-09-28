import React from 'react';
import { Facebook, Instagram, Phone, Mail, Youtube, ArrowUpRight, Globe, DollarSign, X as XIcon } from 'lucide-react';
import ShinyText from '../ui/ShinyText';
import GradientText from '../ui/GradientText';

const ContactItem = ({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) => (
  <div className="flex items-center gap-3 text-sm text-neutral-600">
    <Icon className="h-5 w-5 text-neutral-800" />
    <span>{children}</span>
  </div>
);

const LinkCol = ({ title, items }: { title: string; items: { label: string; href: string }[] }) => (
  <div>
    <h4 className="text-lg font-semibold text-neutral-900 mb-4">{title}</h4>
    <ul className="space-y-3">
      {items.map((it) => (
        <li key={it.label}>
          <a href={it.href} className="text-neutral-600 hover:text-neutral-900 text-sm transition-colors">
            {it.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="text-2xl font-semibold tracking-tight text-accent-foreground">
                <GradientText animationSpeed={3} className="text-2xl font-semibold tracking-tight" colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]} showBorder={false}>
                  OPENCONTAINER
                </GradientText>
              </div>
            </div>

            <p className="mt-6 text-neutral-700 text-sm leading-6 max-w-md">
              Adalet Mah. Manas Blv. Folkart Towers No: 39 D: 3408<br />
              Bayraklı/İZMİR, 35530
            </p>

            <a href="#contact" className="inline-flex items-center gap-1 mt-4 text-neutral-900 font-medium">
              İletişim <ArrowUpRight className="h-4 w-4" />
            </a>

            <div className="mt-4 space-y-3">
              <ContactItem icon={Mail}>info@opencontainer.co</ContactItem>
              <ContactItem icon={Phone}>+90 (850) 346 07 25</ContactItem>
            </div>

            <div className="mt-6 flex items-center gap-4">
              {[
                { Icon: Facebook, label: 'Facebook', href: 'https://facebook.com/opencontainer' },
                { Icon: XIcon, label: 'X', href: 'https://twitter.com/opencontainer' },
                { Icon: Instagram, label: 'Instagram', href: 'https://instagram.com/opencontainer' },
                { Icon: Youtube, label: 'YouTube', href: 'https://youtube.com/opencontainer' },
              ].map(({ Icon, label, href }) => (
                <a key={label} href={href} aria-label={label} className="h-10 w-10 rounded-full border flex items-center justify-center text-neutral-800 hover:bg-neutral-100 transition-colors">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Info columns */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-10">
            <LinkCol
              title="Bilgi"
              items={[
                { label: 'Hakkımızda', href: '#' },
                { label: 'Blog', href: '#' },
                { label: 'Favorilerim', href: '#' },
                { label: 'İletişim', href: '#' },
                { label: 'Ofisimiz', href: '#' },
                { label: 'Hesabım', href: '#' },
              ]}
            />
            <LinkCol
              title="Müşteri Hizmetleri"
              items={[
                { label: 'KVKK Aydınlatma Metni', href: 'https://opencontainer.co/tr/personel-data' },
                { label: 'Açık Rıza Metni', href: 'https://opencontainer.co/tr/service-aggrement' },
                { label: 'Kullanıcı Sözleşmesi', href: 'https://opencontainer.co/tr/user-aggrement' },
                { label: 'Mesafeli Satış Sözleşmesi', href: 'https://opencontainer.co/tr/distance-sales' },
                { label: 'Gizlilik ve Çerez Politikası', href: 'https://opencontainer.co/tr/privacy-policy' },
                { label: 'SSS', href: 'https://opencontainer.co/tr/FAQs' },
              ]}
            />
          </div>

          {/* Newsletter + badge */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-neutral-900 mb-4">Haber Bülteni</h4>
              <p className="text-sm text-neutral-600">
                Haber Bülteni'ne kayıt olarak, ilk gelişmelerden haberdar olun.
              </p>

              <form className="mt-4">
                <div className="flex flex-col sm:flex-row items-stretch gap-2 h-24">
                  <input
                    type="email"
                    placeholder="E-posta Adresiniz"
                    className="flex-1 rounded-full border px-5 h-24 sm:h-12 text-base sm:text-sm outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                  <button
                    type="submit"
                    className="h-12 sm:h-12 rounded-full bg-neutral-900 text-white px-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 hover:bg-neutral-800 transition-colors"
                  >
                    <span className="text-base sm:text-sm font-medium">Gönder</span>
                    <ArrowUpRight className="h-5 w-5 sm:h-4 sm:w-4" />
                  </button>
                </div>

                <label className="mt-4 flex items-start gap-2 text-[13px] text-neutral-600">
                  <input type="checkbox" className="mt-1 h-4 w-4 border" />
                  <span>
                    Abone olarak, aşağıdaki şartları kabul edersiniz: <a target='_blank' href="https://opencontainer.co/tr/service-aggrement" className="underline font-medium">Açık Rıza Metni</a> ve <a target='_blank' href="https://opencontainer.co/tr/privacy-policy" className="underline font-medium">Gizlilik ve Çerez Politikası</a>.
                  </span>
                </label>
              </form>
            </div>

            {/* Safety badge placeholder */}
            {/* <div className="rounded-xl border bg-neutral-50 p-4 text-center">
              <div className="text-sm font-semibold text-neutral-900">ETBIS Güvenli Alışveriş</div>
              <div className="mt-3 h-28 w-full rounded-md bg-white border flex items-center justify-center text-xs text-neutral-500">
                QR Kodu Alanı
              </div>
              <p className="mt-2 text-xs text-neutral-600">QR kodu okutarak güvenli alışveriş yapın</p>
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t">
        <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600">©2025 Orizora. Tüm Hakları Saklıdır.</p>

          <div className="flex items-center gap-4">
            {/* <div className="flex items-center gap-2 text-sm text-neutral-700">
              <DollarSign className="h-4 w-4" />
              <select className="bg-transparent outline-none">
                <option>USD</option>
                <option>EUR</option>
                <option>TRY</option>
              </select>
            </div> */}
            <div className="flex items-center gap-2 text-sm text-neutral-700">
              <Globe className="h-4 w-4" />
              <select className="bg-transparent outline-none">
                <option>Türkçe</option>
                <option>English</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;