'use client';

import { TopAppBar } from '@/components/TopAppBar';
import { Camera, Send } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ReportPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/success');
  };

  return (
    <main className="bg-surface text-on-surface min-h-screen pb-32 pt-20">
      <TopAppBar title="Reportar Cambio" showBack />
      
      <div className="px-6 max-w-2xl mx-auto space-y-8 mt-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold font-headline text-on-surface mb-2">Ayuda a actualizar la información</h2>
          <p className="text-on-surface-variant text-sm leading-relaxed max-w-xs mx-auto">Tus reportes ayudan a mantener a toda la comunidad informada.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/15">
            <label className="block text-[10px] font-bold text-on-surface mb-4 uppercase tracking-wider">¿Está abierto?</label>
            <div className="flex space-x-4">
              <label className="flex-1 cursor-pointer relative">
                <input type="radio" name="status" value="yes" defaultChecked className="peer sr-only" />
                <div className="py-3 px-4 text-center rounded-full bg-surface-container-highest text-on-surface-variant font-medium transition-all peer-checked:bg-primary-container peer-checked:text-white peer-checked:shadow-inner text-sm">
                  Sí, abierto
                </div>
              </label>
              <label className="flex-1 cursor-pointer relative">
                <input type="radio" name="status" value="no" className="peer sr-only" />
                <div className="py-3 px-4 text-center rounded-full bg-surface-container-highest text-on-surface-variant font-medium transition-all peer-checked:bg-error peer-checked:text-white text-sm">
                  No, cerrado
                </div>
              </label>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/15">
            <label className="block text-[10px] font-bold text-on-surface mb-2 uppercase tracking-wider">Actualizar precio de [Sándwich Mechada]</label>
            <p className="text-xs text-on-surface-variant mb-4">Ingresa el nuevo precio si ha cambiado.</p>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-on-surface-variant font-medium">$</span>
              <input 
                type="number" 
                placeholder="2500" 
                className="w-full bg-surface-container-high border-none rounded-full py-4 pl-8 pr-4 text-on-surface font-medium focus:ring-2 focus:ring-primary-container focus:bg-surface-container-lowest transition-colors"
              />
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/15">
            <label className="block text-[10px] font-bold text-on-surface mb-2 uppercase tracking-wider">Nueva oferta detectada</label>
            <p className="text-xs text-on-surface-variant mb-4">Describe cualquier promoción o menú especial del día.</p>
            <textarea 
              rows={3}
              placeholder="Ej: Menú universitario a $3000 incluye bebida..."
              className="w-full bg-surface-container-high border-none rounded-2xl p-4 text-on-surface text-sm resize-none focus:ring-2 focus:ring-primary-container focus:bg-surface-container-lowest transition-colors"
            ></textarea>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/15">
            <label className="block text-[10px] font-bold text-on-surface mb-4 uppercase tracking-wider">Subir Foto (Opcional)</label>
            <button type="button" className="w-full border-2 border-dashed border-outline-variant/50 rounded-2xl py-8 flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-low hover:border-primary-container transition-colors group">
              <div className="bg-surface-container-highest p-3 rounded-full mb-3 group-hover:bg-primary-container/10 transition-colors">
                <Camera size={24} className="group-hover:text-primary-container" />
              </div>
              <span className="font-medium text-sm">Toma una foto de la pizarra o menú</span>
            </button>
          </div>

          <div className="pt-6">
            <button type="submit" className="w-full rounded-full py-4 px-6 text-white font-bold text-lg bg-gradient-to-br from-primary to-primary-container shadow-[0_12px_32px_rgba(0,105,167,0.2)] active:scale-95 transition-transform duration-200 flex items-center justify-center space-x-2">
              <span>Enviar Reporte</span>
              <Send size={20} />
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
