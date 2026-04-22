import { TopAppBar } from '@/components/TopAppBar';
import { Tag, Camera, Edit3, CheckCircle, Clock } from 'lucide-react';
import Image from 'next/image';

export default function HistoryPage() {
  return (
    <main className="bg-surface text-on-surface min-h-screen pb-32 pt-20">
      <TopAppBar title="Contribution History" showBack />
      
      <div className="px-6 py-8 max-w-3xl mx-auto space-y-8">
        <section className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold tracking-tight text-on-surface">Tus Aportes</h2>
          <p className="text-base text-on-surface-variant leading-relaxed">
            Revisa el estado de tus actualizaciones al menú del campus. Gracias por contribuir a la comunidad.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-6">
          <div className="flex items-center justify-between mt-2">
            <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Hoy</h3>
            <button className="text-xs text-primary font-semibold hover:opacity-80">Marcar todas como leídas</button>
          </div>

          <div className="bg-surface-container-low rounded-2xl p-6 relative overflow-hidden group">
            <div className="flex items-start justify-between gap-4 relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center shrink-0">
                  <Tag size={20} className="text-primary fill-primary" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold text-on-surface">Precio actualizado de Té</h3>
                  <p className="text-sm text-on-surface-variant">Cafetería Central • 12 Oct 2023</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 bg-surface-container-highest px-3 py-1.5 rounded-full">
                <CheckCircle size={14} className="text-[#0069a7] fill-[#0069a7] text-white" />
                <span className="text-[10px] font-bold text-[#0069a7] uppercase tracking-wider">Aprobado</span>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-low rounded-2xl p-6 relative overflow-hidden group">
            <div className="flex items-start justify-between gap-4 relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center shrink-0">
                  <Camera size={20} className="text-tertiary" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold text-on-surface">Nueva foto subida</h3>
                  <p className="text-sm text-on-surface-variant">Menú Especial: Lasaña Vegetariana • 15 Oct 2023</p>
                  <div className="mt-3 w-24 h-16 rounded-lg overflow-hidden relative">
                    <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuD165mPA0QIoN4UkwsxoXpEhGBXA_Z_eSbL9uqOBbgS0r61K_3QBSkdL2amBUWtPtvUHUn2oukRjMVYusKLrxp6WBIT9RlqTJvYAbbDvwiZVFj4gb_ce7nHALI48ulO2lGKbCNOYQ4N_Xfrhhx8r3KeYRXJLbF5uapHW2KAqEiXBvZGhcxUFvUFv1hJ5NTVDtz9TjlbtUnoI-Ax3hhpIbkf-fy1rhwdXJRtnqBGY1q5foIjzNFabFhMzcycLJa2gT8qNcR8uaH7Pbw" alt="Lasaña" fill className="object-cover" />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 bg-surface-container-highest px-3 py-1.5 rounded-full">
                <Clock size={14} className="text-tertiary" />
                <span className="text-[10px] font-bold text-tertiary uppercase tracking-wider">Pendiente</span>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-low rounded-2xl p-6 relative overflow-hidden group">
            <div className="flex items-start justify-between gap-4 relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center shrink-0">
                  <Edit3 size={20} className="text-primary fill-primary text-white" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold text-on-surface">Corrección de horario</h3>
                  <p className="text-sm text-on-surface-variant">Kiosco Ciencias • 05 Oct 2023</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 bg-surface-container-highest px-3 py-1.5 rounded-full">
                <CheckCircle size={14} className="text-[#0069a7] fill-[#0069a7] text-white" />
                <span className="text-[10px] font-bold text-[#0069a7] uppercase tracking-wider">Aprobado</span>
              </div>
            </div>
          </div>

        </section>
      </div>
    </main>
  );
}
