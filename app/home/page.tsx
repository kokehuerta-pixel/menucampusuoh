import Image from 'next/image';
import Link from 'next/link';
import { TopAppBar } from '@/components/TopAppBar';
import { MapPin, Clock, Plus, Filter, Navigation } from 'lucide-react';

export default function Home() {
  const openLocations = [
    {
      name: 'Casino Central',
      subtitle: 'Menú completo y ensaladas',
      distance: 'A 50m',
      closing: 'Cierra 16:00',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGcJZqLA9-0LcVIof_B7aWqmeBaE1x8J4w4Zng0TtLNcG-QvLSADgyRmbwxk0fEzNfm7cXQ0vQng_lh1F6YidLR-y-tVVoM0z7OyIO8WdmDXRWp-3WTzlXRNpxO3T_bk0vgQcbOrG_3OZ5eufpnGknUWXSScaNjOxaV-7l7hYCzUrTtAM3OCVAuK7vClsI3wUuVtnwLoJ5nnKk5fhXbj3CwIXwwrKRUZjuuTfPUZHYXeb-irPnAg6pqcKmvakOJ0FlQIlA3zMFXl0',
      isOpen: true
    },
    {
      name: 'Cafetería Biblioteca',
      subtitle: 'Café de especialidad y snacks',
      distance: 'A 120m',
      closing: 'Cierra 20:00',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5F40TrTwAx4IAUwrVoHmlUxiIN11Uk5WF9mDs6NOMHlGv18dlkzz7sRZKBZiWAI5L57vbwfqi8iov00dg4_KGr-72Ind13vRcmzzVAFE-lqMFbwGAgwTXCa6E-rawk5t7Sl0TA95yLQxfN5lHssIPi0NvvnuMPBXtHkw0STw4NMzrcAr7kNb1Mzi4sGLGjKF_Tuj7g0nh_XvqLwHwM6leZhNrzGeg_II1z4NiOKUfkgNOITZdP1MnwMxI-Ww_gV1DUJvW936zB5s',
      isOpen: true
    },
    {
      name: 'Kiosko Edificio B',
      subtitle: 'Snacks rápidos y bebidas',
      distance: 'A 200m',
      closing: 'Cierra 18:30',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDz2LO-BQojetzOZaQTvSCrfy2IEtNrd4iuivjD8LvsjJKIcK8kDX3WpWs0Us5nByVbtEX3pcikYSCwHJ2IGVTAc72UQS3cidHSDXFzW3jLDrvqy7YJ-i7YDf_MtBWatKq1w5wIA_aCB96ZROcU5WiOXnb1gq1jSQQe6l3K9qS9yPAsPCiHssJalvnW4UX1q3OrpMdPmwgohv1WLU5yzE2eUqeqs44tBecgtYZ1L8t53-gaVnzeZaqrYBuquKZwi5E7gu_n9dhr4jo',
      isOpen: true
    }
  ];

  const deals = [
    {
      name: 'Almuerzo Junaeb Menú 1',
      place: 'Casino Central',
      time: 'Hace 5 min',
      tags: ['Junaeb', 'Efectivo'],
      price: '$1.900',
      highlight: true,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7v2RpVD7A-EUb3gLhpeTD_OnOIB_UEEPb6qx-RNEOIGZxzDuBH3SmW6FPEIbVEBocuTL9fY1HW7-Yr0QeDh_giqY1EMfKR29fDhBxyA1lVmkjFJdKYj5WCXEWMkQ_T0g01WxWrDcBnNmOnAA40Poi6Yk7MIesWPNuHr35yGNxSFsuAL3sAbyTERl_UykQMxWoyVlsMeSXNWEbF0G5ExVAvGfjFk2KLbWQZCGj5lDgZcSD8B7K-QIIkygfvEkcmFBnwSwBcafMQtU',
    },
    {
      name: 'Promo 2x Completos',
      place: 'Kiosko Edificio B',
      time: 'Hace 15 min',
      tags: ['Promo'],
      price: '$2.500',
      oldPrice: '$3.000',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9TQoUOGysVJZJ3ERgCzt6wMzUC--RpMgr0EQ6nIc_8jkn_MwtYX1x1DNSAQWYKDwmoQeP6h_pjvQt_jiy9-DZAS5_yeE6mgf82l6uczAbr9o-cNCehN8rGPIGvs5ZqmkDA96wqzfqKcDvMb921sP09rz8JMX55riBaVfOm5HOvS-aeyUtzwNdftkdwKNzGE5PFA5ZC27Hhd1VuER77pWGQ1g_XklWgXPojlt6g4UHyp5bhicDdUD4Qc3sRB375fp1lmbk_hwn2BE',
    }
  ];

  return (
    <main className="min-h-screen pt-24 px-6 md:max-w-5xl md:mx-auto space-y-12">
      <TopAppBar title="Radar UOH" showProfile={true} points={1250} />

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-headline text-2xl font-bold tracking-tight leading-snug text-on-surface">Locales Abiertos Ahora</h2>
          <a href="#" className="text-primary font-semibold text-sm hover:opacity-80">Ver mapa</a>
        </div>
        
        <div className="flex overflow-x-auto no-scrollbar gap-6 pb-4 -mx-6 px-6 snap-x">
          {openLocations.map((loc, i) => (
            <Link key={i} href="/place/1/menu" className="snap-start shrink-0 w-72 bg-surface-container-lowest rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(25,28,32,0.08)] group flex flex-col">
              <div className="h-40 relative overflow-hidden">
                <Image src={loc.image} alt={loc.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <span className="font-label text-xs font-semibold tracking-wider uppercase text-on-surface">ABIERTO</span>
                </div>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-on-surface mb-1">{loc.name}</h3>
                  <p className="text-on-surface-variant text-sm mb-3">{loc.subtitle}</p>
                </div>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-surface-container-high/50">
                  <div className="flex items-center text-on-surface-variant text-sm gap-1">
                    <MapPin size={16} />
                    <span>{loc.distance}</span>
                  </div>
                  <div className="flex items-center text-primary text-sm font-semibold gap-1">
                    <Clock size={16} />
                    <span>{loc.closing}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-headline text-2xl font-bold tracking-tight leading-snug text-on-surface">Ofertas del día</h2>
          <button className="text-on-surface-variant p-2 rounded-full bg-surface-container-low hover:bg-surface-container transition-colors">
            <Filter size={20} />
          </button>
        </div>

        <div className="space-y-4">
          {deals.map((deal, i) => (
            <Link key={i} href={`/product/${i}`} className="bg-surface-container-lowest rounded-2xl p-5 shadow-[0_12px_32px_rgba(25,28,32,0.04)] flex items-start gap-5 relative overflow-hidden group">
              <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 relative">
                <Image src={deal.image} alt={deal.name} fill className="object-cover" />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-bold text-on-surface">{deal.name}</h3>
                  {deal.highlight && (
                    <span className="bg-tertiary-container/10 text-tertiary-container text-[10px] font-bold px-2 py-1 rounded-full uppercase">DESTACADO</span>
                  )}
                </div>
                <div className="flex items-center text-on-surface-variant text-sm gap-1 mb-2">
                  <Navigation size={14} />
                  <span>{deal.place}</span>
                  <span className="mx-1">•</span>
                  <span className="text-xs">{deal.time}</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex gap-2">
                    {deal.tags.map(tag => (
                      <span key={tag} className="bg-surface-container px-2 py-1 rounded-md text-xs font-medium text-on-surface-variant">{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    {deal.oldPrice && <span className="text-sm line-through text-on-surface-variant/60">{deal.oldPrice}</span>}
                    <span className="text-lg font-bold text-primary">{deal.price}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="fixed bottom-28 right-6 z-40">
        <Link href="/report">
          <button className="bg-gradient-to-br from-primary to-primary-container text-white shadow-[0_24px_48px_rgba(25,28,32,0.12)] hover:shadow-xl rounded-full pl-4 pr-6 py-4 flex items-center gap-3 transform transition-transform hover:scale-105 active:scale-95 group">
            <div className="bg-white/20 p-2 rounded-full group-hover:bg-white/30 transition-colors">
              <Plus size={20} />
            </div>
            <span className="font-bold text-sm tracking-wide">Reportar Oferta</span>
          </button>
        </Link>
      </div>
    </main>
  );
}
