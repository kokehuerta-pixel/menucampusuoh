'use client';

import { TopAppBar } from '@/components/TopAppBar';
import { User, Lock, Bell, HelpCircle, LogOut } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Settings() {
  return (
    <main className="bg-surface text-on-surface min-h-screen pb-32">
      <TopAppBar title="Configuración" showBack />
      
      <div className="max-w-2xl mx-auto px-6 py-8 md:py-12 flex flex-col gap-8 pt-24">
        
        <section className="bg-surface-container-lowest rounded-2xl p-6 flex items-center gap-6 shadow-[0_12px_32px_rgba(25,28,32,0.04)]">
          <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 bg-surface-container relative">
            <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg_EiRZQGi_EVuGgoMWSCkcM2TD3P40XMpNpamhNDVc3XcWdNiNInvIuzxZF7eBlAlbugd8SxJkoZHnF5YwVmzAl3s26pa38YZU7W-_0yCdk9xMIMbcorD6YC3udhyDzlp4PL15E4uhItr6N012NGnLGyFiR_A9Tnt_5pItsT3IMg_O8ON4wZJ-9knLtpmv2GsABzCRfKZ_wSy9T2Osqu5HmNXiIWXliTFG_WPNQQ4I-a1zw9Gl3AV83JcUFwvAQvdy2_crIDx6z4" alt="Catalina Rojas" fill className="object-cover" />
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-on-surface">Catalina Rojas</h2>
            <p className="font-body text-on-surface-variant mt-1 text-sm">catalina.rojas@uoh.cl</p>
            <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-highest">
              <span className="font-label text-[10px] uppercase tracking-wider text-on-surface font-bold">Estudiante</span>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(25,28,32,0.04)] flex flex-col gap-2 p-2">
          <button className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface-container-low transition-colors active:scale-[0.98] group w-full text-left">
            <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary group-hover:bg-primary-fixed transition-colors">
              <User size={20} />
            </div>
            <div className="flex-1">
              <h3 className="font-title text-base font-semibold text-on-surface">Edit Profile</h3>
            </div>
          </button>
          
          <button className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface-container-low transition-colors active:scale-[0.98] group w-full text-left">
            <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary group-hover:bg-primary-fixed transition-colors">
              <Lock size={20} />
            </div>
            <div className="flex-1">
              <h3 className="font-title text-base font-semibold text-on-surface">Privacy</h3>
            </div>
          </button>
          
          <button className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface-container-low transition-colors active:scale-[0.98] group w-full text-left">
            <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary group-hover:bg-primary-fixed transition-colors">
              <Bell size={20} />
            </div>
            <div className="flex-1">
              <h3 className="font-title text-base font-semibold text-on-surface">Notifications</h3>
            </div>
          </button>
          
          <button className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface-container-low transition-colors active:scale-[0.98] group w-full text-left">
            <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary group-hover:bg-primary-fixed transition-colors">
              <HelpCircle size={20} />
            </div>
            <div className="flex-1">
              <h3 className="font-title text-base font-semibold text-on-surface">Help & Support</h3>
            </div>
          </button>
        </section>

        <section className="mt-4">
          <Link href="/" className="block w-full">
            <button className="w-full flex items-center justify-center gap-3 p-4 rounded-2xl bg-surface-container-lowest hover:bg-error-container transition-colors active:scale-[0.98] group shadow-[0_12px_32px_rgba(25,28,32,0.04)]">
              <LogOut size={20} className="text-error" />
              <span className="font-title text-base font-semibold text-error">Cerrar Sesión</span>
            </button>
          </Link>
        </section>

      </div>
    </main>
  );
}
