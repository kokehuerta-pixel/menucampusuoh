import { Award, Star } from 'lucide-react';
import Link from 'next/link';

export default function SuccessPage() {
  return (
    <main className="flex-grow flex flex-col items-center justify-center p-6 z-10 w-full mx-auto relative h-screen bg-surface">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary-container/10 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-tertiary-container/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="bg-white/80 backdrop-blur-2xl rounded-3xl p-10 w-full max-w-md text-center shadow-[0_24px_64px_rgba(0,0,0,0.04)] border border-outline-variant/10 relative overflow-hidden z-10">
        <div className="mb-8 relative inline-flex items-center justify-center">
          <div className="absolute inset-0 bg-tertiary-container/20 rounded-full blur-xl scale-150"></div>
          <div className="w-24 h-24 bg-gradient-to-br from-tertiary-fixed-dim to-tertiary-container rounded-full flex items-center justify-center shadow-lg relative z-10 border-4 border-surface-container-lowest">
            <Award size={48} className="text-white" />
          </div>
        </div>

        <h1 className="text-3xl font-extrabold text-on-surface mb-3 tracking-tight">
          ¡Gracias por colaborar!
        </h1>
        <p className="text-on-surface-variant text-base leading-relaxed mb-10">
          Has ganado <span className="font-bold text-primary">50 puntos</span> por tu reporte. Tu aporte ayuda a mejorar la experiencia de todos.
        </p>

        <div className="bg-surface-container-low rounded-xl p-4 mb-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-container/10 rounded-full flex items-center justify-center">
              <Star size={20} className="text-primary-container" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-on-surface">Puntos Totales</p>
              <p className="text-xs text-on-surface-variant">Nivel Curador</p>
            </div>
          </div>
          <div className="text-xl font-bold text-primary">
            1,250
          </div>
        </div>

        <Link href="/home" className="block w-full">
          <button className="w-full bg-gradient-to-br from-primary to-primary-container text-white rounded-full py-4 px-6 font-semibold shadow-md active:scale-95 transition-transform">
            Volver al Inicio
          </button>
        </Link>
      </div>
    </main>
  );
}
