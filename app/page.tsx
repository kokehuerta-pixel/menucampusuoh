import Link from 'next/link';
import { MapPin } from 'lucide-react';

export default function WelcomePage() {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden bg-surface">
      {/* Decorative Abstract Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-container/10 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-10 -left-20 w-72 h-72 bg-secondary-container/20 rounded-full blur-[60px]"></div>
      </div>

      <div className="bg-white/70 backdrop-blur-2xl border border-outline-variant/15 shadow-[0_12px_32px_rgba(25,28,32,0.04)] rounded-2xl w-full max-w-md p-8 flex flex-col items-center text-center space-y-10 relative">
        {/* Floating Decorative Element behind Icon */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary/5 rounded-full blur-xl pointer-events-none"></div>
        
        {/* Stylized Icon */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-container to-primary rounded-full opacity-10 scale-110"></div>
          <div className="absolute inset-0 bg-surface-container-lowest rounded-full shadow-[0_8px_24px_rgba(0,105,167,0.12)] border border-outline-variant/10"></div>
          <div className="relative z-10 flex flex-col items-center justify-center text-primary">
            <MapPin size={40} className="mb-[-10px] z-20 fill-primary text-white" />
          </div>
        </div>

        {/* Brand Typography */}
        <div className="space-y-4">
          <h1 className="font-display font-extrabold text-3xl tracking-tight text-on-surface">
            Menú Campus UOH
          </h1>
          <p className="font-body text-lg text-on-surface-variant leading-relaxed max-w-[280px] mx-auto">
            Toda la comida de la UOH en tu bolsillo
          </p>
        </div>

        {/* Action Area */}
        <div className="w-full pt-4">
          <Link href="/onboarding" className="block w-full">
            <button className="w-full relative group overflow-hidden rounded-full p-[1px] transition-transform duration-300 hover:scale-[0.98] active:scale-95">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container opacity-100"></div>
              <div className="relative bg-gradient-to-br from-primary to-primary-container rounded-full px-6 py-4 flex items-center justify-center gap-3 w-full text-white">
                <span className="font-label font-bold tracking-wide">Acceder con @uoh.cl</span>
              </div>
            </button>
          </Link>
        </div>

        {/* Secondary Context */}
        <div className="mt-4">
          <p className="font-label text-xs text-on-surface-variant/60 tracking-wider uppercase">
            Exclusivo para comunidad universitaria
          </p>
        </div>
      </div>
    </main>
  );
}
