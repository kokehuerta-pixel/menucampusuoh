'use client';

import Image from 'next/image';
import { SearchIcon, Check, Heart, MapPin, Navigation } from 'lucide-react';
import Link from 'next/link';

export default function Search() {
  const results = [
    {
      id: 1,
      name: 'Sándwich Mechada',
      description: 'Pan amasado fresco, abundante carne mechada con salsa de la casa, palta hass y tomate.',
      price: '$3.500',
      place: 'Casino Central',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdprBOphRQLzXaEAQsFwgHmkE7kfMVQfaxmbXS0RRar7IMWTLCrR4GkMiJoAtTp3HEIp7xwKQVL-wBA7Kb-3BAwHRbJQdV65VaKa76PYyoIiDgGYN6tJT2u2yYVuAMiV_NK0QmeVZg_8-4pNg9zn8S1zQ6YFucFZp4HKK9JFMkkX6qAuYM9GSWFZFhmOXMzpYVyKM6nnoIh1V06BlxK561p9xA2EBOuuSD-YckSg1BeSJOePAhiy4lxRUE_Xm3MW7XGTCfcPm5ZCY',
    },
    {
      id: 2,
      name: 'Ensalada Premium',
      description: 'Quinoa tricolor, mix de hojas verdes, palta, tomates cherry y aderezo de mostaza y miel vegana.',
      price: '$2.800',
      place: 'El Carrito',
      isVegan: true,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBISF7HgwRrhE3nSe3c8Kr7OYOydssZxLIn0P6owvNBaW3b9u0-Hj0INCq-GT_6lJhEea8qB8KLvfhb8iBsltWJFouH2qZDAic757jqJuXyXtsD8grGRyDLHbj-vrcVOUwu5u16TLMtpKsObyW0pnYKWPYZqJsAL_TUsq8mtZe0JUH0tk7krsEuBWEdeQl_Ncd-kJBVdXAhRZHsy-VOQzMksqDNRrny_9AMcGbmburn6KAImYn1umNHld2rpWWQAX9rRRL2EEgf42o',
    },
  ];

  return (
    <main className="bg-surface text-on-surface antialiased min-h-screen pb-32">
      <header className="sticky top-0 z-40 px-6 py-6 bg-surface/80 backdrop-blur-2xl">
        <h1 className="font-headline text-2xl font-bold tracking-tight text-primary mb-6">Buscar</h1>
        
        <div className="relative w-full shadow-[0_12px_32px_rgba(0,0,0,0.08)] rounded-[1.5rem]">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" size={20} />
          <input 
            type="text" 
            className="w-full bg-surface-container-lowest rounded-[1.5rem] py-4 pl-12 pr-4 text-on-surface border-none focus:ring-0 focus:outline-none placeholder:text-outline shadow-sm" 
            placeholder="Buscar comida o locales..." 
          />
        </div>

        <div className="flex overflow-x-auto gap-3 mt-6 pb-2 no-scrollbar">
          <button className="shrink-0 bg-primary text-white font-label text-[13px] uppercase tracking-wide px-5 py-2.5 rounded-full shadow-inner flex items-center gap-2 transition-transform active:scale-95">
            <Check size={18} />
            Todos
          </button>
          <button className="shrink-0 bg-surface-container-highest text-on-surface-variant font-label text-[13px] uppercase tracking-wide px-5 py-2.5 rounded-full flex items-center gap-2 transition-transform active:scale-95">
            Vegano
          </button>
          <button className="shrink-0 bg-surface-container-highest text-on-surface-variant font-label text-[13px] uppercase tracking-wide px-5 py-2.5 rounded-full flex items-center gap-2 transition-transform active:scale-95">
            Bajo $3000
          </button>
        </div>
      </header>

      <section className="px-6 space-y-6 mt-2 max-w-3xl mx-auto">
        <h2 className="font-headline text-lg font-semibold text-primary-container tracking-tight">Resultados</h2>

        {results.map((item) => (
          <Link key={item.id} href={`/product/${item.id}`}>
            <article className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.04)] transition-transform active:scale-[0.98] mb-6">
              <div className="h-48 w-full relative">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
                {item.isVegan && (
                  <div className="absolute top-4 left-4 bg-primary-container text-white px-3 py-1 rounded-full font-label text-xs uppercase tracking-widest shadow-md">
                    Vegano
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1 rounded-full">
                  <span className="font-label text-sm font-bold text-primary">{item.price}</span>
                </div>
              </div>
              
              <div className="p-5 flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-title text-xl font-bold text-on-surface">{item.name}</h3>
                  <button className="text-outline-variant hover:text-primary transition-colors">
                    <Heart size={20} />
                  </button>
                </div>
                <p className="text-on-surface-variant leading-relaxed text-sm">{item.description}</p>
                <div className="flex items-center gap-2 text-secondary font-label text-sm mt-2">
                  <MapPin size={18} />
                  {item.place}
                </div>
              </div>
            </article>
          </Link>
        ))}

        <Link href="/product/3">
          <article className="bg-surface-container-low rounded-2xl p-5 shadow-sm transition-transform active:scale-[0.98]">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-title text-lg font-bold text-on-surface">Empanada de Pino</h3>
                <p className="text-on-surface-variant mt-1 text-sm">Horneada en el día, receta tradicional.</p>
              </div>
              <span className="font-label text-base font-bold text-primary">$1.500</span>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-secondary font-label text-sm">
                <Navigation size={18} />
                Cafetería Biblioteca
              </div>
              <span className="bg-surface-container-highest text-on-surface-variant px-2 py-0.5 rounded-md text-xs font-medium">Bajo $3000</span>
            </div>
          </article>
        </Link>
      </section>
    </main>
  );
}
