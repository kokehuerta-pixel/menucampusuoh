import { TopAppBar } from '@/components/TopAppBar';
import { Tag, Users, ListFilter } from 'lucide-react';
import Image from 'next/image';

export default function Notifications() {
  return (
    <main className="bg-surface text-on-surface min-h-screen pb-32 pt-24">
      <TopAppBar title="Notificaciones" showBack action="settings" />
      
      <div className="px-6 md:px-12 max-w-4xl mx-auto w-full flex flex-col gap-8">
        <section className="flex flex-col gap-2">
          <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface tracking-tight">Comunidad UOH</h2>
          <p className="text-on-surface-variant text-base leading-relaxed max-w-xl">
            Mantente al tanto de las últimas novedades, ofertas exclusivas y el estado en tiempo real de los casinos del campus.
          </p>
        </section>

        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-between mt-2">
            <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Hoy</h3>
            <span className="text-xs text-primary font-semibold cursor-pointer hover:opacity-80 transition-opacity">Marcar todas como leídas</span>
          </div>

          {/* Promo */}
          <article className="bg-surface-container-lowest rounded-2xl p-5 flex items-start gap-5 relative group hover:bg-surface-container-low transition-colors duration-300 shadow-[0_12px_32px_rgba(25,28,32,0.04)]">
            <div className="absolute top-5 left-2 w-2 h-2 rounded-full bg-primary-container"></div>
            <div className="w-12 h-12 shrink-0 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container">
              <Tag size={24} className="fill-primary/20" />
            </div>
            <div className="flex flex-col gap-1 flex-grow">
              <div className="flex justify-between items-baseline w-full">
                <span className="text-xs font-bold uppercase tracking-widest text-primary-container">Oferta Exclusiva</span>
                <span className="text-xs text-on-surface-variant font-medium">Hace 5 min</span>
              </div>
              <h4 className="text-base font-semibold text-on-surface">¡Alerta de Promo! El carrito central tiene 2x1</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed mt-1">Aprovecha 2x1 en cafés y empanadas hasta agotar stock. Mostrando tu credencial UOH.</p>
            </div>
          </article>

          {/* Community Alert */}
          <article className="bg-surface-container-lowest rounded-2xl p-5 flex items-start gap-5 relative group hover:bg-surface-container-low transition-colors duration-300 shadow-[0_12px_32px_rgba(25,28,32,0.04)]">
            <div className="w-12 h-12 shrink-0 rounded-full overflow-hidden bg-surface-container-high border-2 border-surface relative">
              <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxXjZXTbAnzq96P2-xDe8nja3KgFwTjc_ody9fbQCJvWZit-ZQxVNzxRgrac5VDsLoNIa_9mTkWBYgqkpQ8vSXRjB8nPzJCOj6gOxDNm4qpxxFvJdVkm66DNQre5sKGay-n6qPLpWqrgOGd1BHPvNJrmyWXxldshC4CuK99frTa0shbe4NscJZl6GM6HUsq5pGyrmtSNedkFi-6Zh2Fjmi7Zl46RS_eUw5wPgJuJhofgzqUA1d1sfML2iR5k3KLA8-K12cglStMyE" alt="Avatar" fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-1 flex-grow">
              <div className="flex justify-between items-baseline w-full">
                <span className="text-xs font-bold uppercase tracking-widest text-tertiary">Reporte de Estudiante</span>
                <span className="text-xs text-on-surface-variant font-medium">Hace 12 min</span>
              </div>
              <h4 className="text-base font-semibold text-on-surface">Un alumno reportó que el casino está lleno</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed mt-1">Alta afluencia en el Casino Principal. Se recomienda utilizar los food trucks o el casino del bloque B.</p>
            </div>
          </article>

          {/* System Info */}
          <article className="bg-surface-container-low rounded-2xl p-5 flex items-start gap-5 relative group opacity-75 hover:opacity-100 transition-opacity duration-300">
            <div className="w-12 h-12 shrink-0 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant">
              <ListFilter size={24} />
            </div>
            <div className="flex flex-col gap-1 flex-grow">
              <div className="flex justify-between items-baseline w-full">
                <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Menú Actualizado</span>
                <span className="text-xs text-outline font-medium">Hace 2 horas</span>
              </div>
              <h4 className="text-base font-medium text-on-surface">El menú de la semana ha sido publicado</h4>
              <p className="text-sm text-outline leading-relaxed mt-1">Revisa las opciones veganas y sin gluten disponibles para esta semana en todos los puntos de venta.</p>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
