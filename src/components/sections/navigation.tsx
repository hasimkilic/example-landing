"use client";
import Link from 'next/link';
import { Menu, Globe } from 'lucide-react';
import Image from 'next/image';
import GradientText from '../ui/GradientText';
import ShinyText from '../ui/ShinyText';

const navItems = [
  { label: 'Fiyatlandırma', href: '#pricing', rel: "noopener noreferrer" },
  { label: 'Ürün', href: 'https://opencontainer.co/tr', target: "_blank", rel: "noopener noreferrer" },
  { label: 'Blog', href: 'https://opencontainer.co/tr/blog-grid', target: "_blank", rel: "noopener noreferrer" },
  { label: 'S.S.S', href: 'https://opencontainer.co/tr/FAQs', target: "_blank", rel: "noopener noreferrer" },
];

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container flex h-24 items-center justify-between">
        <Link href="/" aria-label="Home">
          <div className="flex items-center">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/open-container-1758220833879.png"
              alt="Site logo"
              width={48}
              height={48}
              className="h-36 w-36 object-contain"
              priority
            />
            <span className="sr-only">Home</span>
          </div>
        </Link>
        <nav className="hidden lg:block">
          <ul className="flex items-center space-x-12">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  target={item.target}
                  rel={item.rel}
                  className=""
                >
                  <GradientText className="text-xl font-semibold" colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]} showBorder={false} animationSpeed={3}>
                    {item.label}
                  </GradientText>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden items-center space-x-6 lg:flex">
          {/* Language Switcher */}
          <div className="flex items-center gap-2 text-sm text-neutral-700">
            <Globe className="h-4 w-4" />
            <select
              aria-label="Dil Seçimi"
              className="bg-transparent outline-none cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-neutral-300 rounded-md"
              defaultValue="tr"
              onChange={(e) => {
                console.log('Language change selected:', e.target.value);
              }}
            >
              <option value="tr">Türkçe</option>
              <option value="en">English</option>
            </select>
          </div>
          <a
            href="https://opencontainer.co/tr/planner"
            target='_blank'
            rel="noopener noreferrer"
            className="btn-sweep bg-[#259c84] rounded-[8px] px-6 py-3.5 flex items-center gap-2.5 transition-all shadow-[0_4px_14px_0_rgba(37,156,132,0.25)] hover:shadow-[0_6px_20px_0_rgba(37,156,132,0.3)] transform hover:scale-[1.02] cursor-pointer">
            <ShinyText
              text="Hemen Başlayalım"
              disabled={false}
              speed={2}
              className='custom-class text-white font-medium text-base'
            />
          </a>
        </div>
        <button className="lg:hidden" aria-label="Toggle menu">
          <Menu className="h-6 w-6 text-brand-dark-navy" />
        </button>
      </div>
    </header>
  );
}