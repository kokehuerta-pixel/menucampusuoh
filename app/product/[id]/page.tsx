import Image from 'next/image';
import { TopAppBar } from '@/components/TopAppBar';
import { Plus, Utensils, Edit3 } from 'lucide-react';
import Link from 'next/link';

export default function ProductDetail() {
  return (
    <main className="min-h-screen pb-32 bg-surface text-on-surface">
      <TopAppBar title="Sándwich Mechada" showBack />

      <section className="relative w-full h-[397px] md:h-[530px] md:rounded-b-3xl overflow-hidden shadow-sm pt-16">
        <Image 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvLxtNEC6DKmu6S-jn0XxtdGlnDzGMltFvGfRs-bUiMkx0CMUxQEm9R43eQUUO9HdAAp8dHZHYA_yVWKBRT9l-vReaJj9QW7_OYW4jxFJD08-caVX8Epp2WiOJ9oy90H8wDuR016Y64w28KR9kYNF9Qpv9LIL4lMov3awPQlpkR0zBq-GBWi50cRkzcjt9B2RXeAvh18LaZsW492EBXcPtaQKW0rummvfOUb32Z1A8VhqWlbq9M_6xsb585JkD2C0n73Sa-vY_-vM" 
          alt="Sándwich Mechada" 
          fill 
          className="object-cover object-center" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 via-transparent to-transparent"></div>
      </section>

      <div className="px-6 py-8 -mt-6 relative z-10 bg-surface md:bg-transparent rounded-t-3xl md:rounded-none max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="flex-1">
            <h2 className="font-display font-black text-3xl tracking-tight text-on-surface mb-2">Sándwich Mechada</h2>
            <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-4 max-w-2xl">
              Clásico sándwich universitario de carne mechada cocinada a fuego lento, con palta fresca y tomate en pan amasado artesanal.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <span className="font-display font-extrabold text-4xl text-primary">$3.500</span>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-tertiary-container/10 border border-tertiary-container/20 rounded-full">
                <span className="font-label text-xs font-bold uppercase tracking-wider text-tertiary">El más barato del Campus</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap md:flex-col gap-2 md:w-48 pt-2">
            <span className="px-4 py-2 bg-surface-container-highest text-on-surface text-xs font-bold uppercase tracking-wider rounded-full text-center">Proteico</span>
            <span className="px-4 py-2 bg-surface-container-highest text-on-surface text-xs font-bold uppercase tracking-wider rounded-full text-center">Casero</span>
            <span className="px-4 py-2 bg-surface-container-highest text-on-surface text-xs font-bold uppercase tracking-wider rounded-full text-center">Contiene Gluten</span>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="font-display font-bold text-xl text-on-surface mb-6 flex items-center gap-2">
            Fotos de la comunidad
          </h3>
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 snap-x">
            <div className="snap-start flex-none w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-sm border border-outline-variant/15 relative">
              <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ3nKz47stIQPcuNutXUdgxQdjqDBTMfS0xddEljZ2tJzZnO_Yne0mGhvhhp9RwpWSJLH1QffRRItutxRuS0ft7RV6oGYt0xk-yWHJphJq6z7-bvVwUjEDYq_0w6mTkp7HduLtgkEvYj2sObNINzPuHj9IgZzINe70rUKDIrbcUquMaJcol5UpAZQ0z-J45xNPNJEClrFQrs3CDw36TQ5QMZoiJUTViFAxYdo-XLVSfNISb_tKHSyKeBL_zmr_TXpcElqqXsVRTA8" alt="Comunidad foto 1" fill className="object-cover" />
            </div>
            <div className="snap-start flex-none w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-sm border border-outline-variant/15 relative">
              <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRVTSYHWdhMXOed_9DiRLEjeDEoaSqg7rP9vUcLeNf8M5taPEvwskn0R4UIXeY_vc-VA6NW5vAUvyhxJI-R4XpFzxShSQFb9JEydPMBFz9xfbr5S3KTXYueCXiPZiAo1YbIhmmaHKSVa69Cu9XrnwdEI8QBDiV7E4mfQgTzQTR0c-dXcMmDXH0ucRhmcouDuHE2LDqcjLxarvwdDMx2yoWJgmYNENhOgnUNjOZdXGQZ5JLNYAwWXfrJWOBjrjDcK4mG2WbX6C3e_o" alt="Comunidad foto 2" fill className="object-cover" />
            </div>
            <div className="snap-start flex-none w-48 h-48 md:w-64 md:h-64 rounded-2xl bg-surface-container flex items-center justify-center flex-col text-on-surface-variant hover:bg-surface-container-high transition-colors cursor-pointer border border-dashed border-outline-variant">
              <Plus size={40} className="mb-2" />
              <span className="font-label text-sm font-semibold">Añadir foto</span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <button className="flex-1 w-full flex items-center justify-center gap-2 bg-gradient-to-br from-primary to-primary-container text-white rounded-full py-4 px-8 font-label font-bold tracking-wide active:scale-95 transition-transform duration-200">
            <Utensils size={20} />
            Ver en Menú
          </button>
          <Link href="/report" className="sm:w-auto w-full">
            <button className="w-full flex items-center justify-center gap-2 bg-surface-container-highest text-on-surface rounded-full py-4 px-8 font-label font-bold tracking-wide active:scale-95 transition-transform duration-200">
              <Edit3 size={20} />
              Corregir precio
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
