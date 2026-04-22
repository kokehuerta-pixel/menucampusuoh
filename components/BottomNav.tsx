'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Compass, Search, Receipt, User, Utensils, Map, Users, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';

export function BottomNav() {
  const pathname = usePathname();

  const links = [
    { href: '/home', label: 'Inicio', icon: Compass },
    { href: '/directory', label: 'Menú', icon: Utensils },
    { href: '/search', label: 'Buscar', icon: Search },
    { href: '/profile', label: 'Perfil', icon: User },
  ];

  if (pathname === '/' || pathname === '/onboarding' || pathname === '/success') {
    return null; // Do not show on welcome/onboarding
  }

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-white/90 backdrop-blur-lg rounded-t-[2rem] z-50 shadow-[0_-8px_24px_rgba(0,0,0,0.05)]">
      {links.map((link) => {
        const Icon = link.icon;
        let isActive = pathname === link.href;
        
        // Handle nested routes activation
        if (link.href === '/directory' && pathname.startsWith('/place')) isActive = true;
        if (link.href === '/profile' && pathname.startsWith('/profile') || pathname.startsWith('/leaderboard')) {
            if (link.href === '/profile') isActive = true; 
        }

        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "flex flex-col items-center justify-center p-2 transition-all duration-200 active:scale-95 group",
              isActive ? "text-primary bg-primary/10 rounded-full px-5" : "text-outline hover:text-primary"
            )}
          >
            <Icon 
              size={24} 
              className={cn(
                "mb-1", 
                isActive ? "fill-primary/20" : "group-hover:animate-bounce"
              )} 
            />
            <span className="text-[10px] font-bold uppercase tracking-widest leading-none">
              {link.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
