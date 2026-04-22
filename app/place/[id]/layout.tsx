'use client';

import { TopAppBar } from '@/components/TopAppBar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Verified, Leaf, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { use } from 'react';

export default function PlaceLayout({ children, params }: { children: React.ReactNode, params: Promise<{ id: string }> }) {
  const pathname = usePathname();
  const { id } = use(params);

  const tabs = [
    { label: 'Menú', href: `/place/${id}/menu` },
    { label: 'Fotos', href: `/place/${id}/gallery` },
    { label: 'Comunidad', href: `/place/${id}/community` },
  ];

  return (
    <main className="flex-grow flex flex-col min-h-screen text-on-surface bg-surface pt-16">
      <TopAppBar title="El Carrito del Campus" showBack action="share" />

      {/* Hero Section */}
      <section className="w-full h-72 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent z-10"></div>
        <Image 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO2O52HWvUGv6N-x5gAbHtBJtFmuT6IvBjOguRbF2g0aBd_4Ww6RGMWZzyAGYC22nyDs8LPECjo4IWGGik--kstPcBQXNqzl6Z4yqn0uAyW_4GXSMOjLr9udGT217TSTyaoPUKGbSqErSK2_Ly_gIbDLiVGjwId5O7u8IHuGXtqkDB4GNq1akf5On4qSQ9EbrWZPRzDCY7WM4Thtn6SLOF8M3I9vs0iMQ2RFtJgE3TH_qao3kFCbVQisLe0htbG94COgzwWJ2RGP0"
          alt="Modern food cart"
          fill
          className="object-cover rounded-b-xl shadow-lg"
        />
        <div className="absolute bottom-6 left-6 z-20 flex flex-col gap-2">
          <span className="bg-surface-container-highest/80 backdrop-blur-md text-on-surface px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase inline-block max-w-max">Patio Central</span>
          <h2 className="text-4xl font-extrabold tracking-tight text-on-surface font-display leading-none">El Carrito<br/>del Campus</h2>
        </div>
      </section>

      {/* Feature Tags */}
      <section className="px-6 py-6 flex gap-3 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-1.5 bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/15 whitespace-nowrap">
          <Verified size={16} className="text-primary fill-primary/20" />
          <span className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide">Acepta Junaeb</span>
        </div>
        <div className="flex items-center gap-1.5 bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/15 whitespace-nowrap">
          <Leaf size={16} className="text-primary fill-primary/20" />
          <span className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide">Vegetariano</span>
        </div>
        <div className="flex items-center gap-1.5 bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/15 whitespace-nowrap">
          <Zap size={16} className="text-primary fill-primary/20" />
          <span className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide">Rápido</span>
        </div>
      </section>

      {/* Tabs */}
      <section className="px-6 mb-6">
        <div className="flex gap-4 border-b border-surface-container-high pb-2">
          {tabs.map((tab) => {
            const isActive = pathname.includes(tab.href);
            return (
              <Link 
                key={tab.href}
                href={tab.href}
                className={cn(
                  "pb-2 px-2 text-sm font-bold uppercase tracking-widest transition-colors",
                  isActive ? "text-primary border-b-2 border-primary" : "text-outline hover:text-on-surface"
                )}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>
      </section>

      {/* Content wrapper */}
      <div className="flex-1 pb-12 xl:max-w-4xl xl:mx-auto w-full">
        {children}
      </div>
    </main>
  );
}
