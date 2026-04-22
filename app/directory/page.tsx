import Image from 'next/image';
import Link from 'next/link';
import { TopAppBar } from '@/components/TopAppBar';
import { MapPin } from 'lucide-react';

export default function Directory() {
  const places = [
    {
      id: 1,
      name: 'Casino Principal',
      type: 'Casino',
      price: '$$',
      location: 'Campus Rancagua',
      status: 'Abierto ahora • Actualizado hace 5m',
      isOpen: true,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGcJZqLA9-0LcVIof_B7aWqmeBaE1x8J4w4Zng0TtLNcG-QvLSADgyRmbwxk0fEzNfm7cXQ0vQng_lh1F6YidLR-y-tVVoM0z7OyIO8WdmDXRWp-3WTzlXRNpxO3T_bk0vgQcbOrG_3OZ5eufpnGknUWXSScaNjOxaV-7l7hYCzUrTtAM3OCVAuK7vClsI3wUuVtnwLoJ5nnKk5fhXbj3CwIXwwrKRUZjuuTfPUZHYXeb-irPnAg6pqcKmvakOJ0FlQIlA3zMFXl0'
    },
    {
      id: 2,
      name: 'Café del Patio',
      type: 'Cafetería',
      price: '$',
      location: 'Campus Rancagua',
      status: 'Abierto ahora • Actualizado hace 15m',
      isOpen: true,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCH-fvqfdIg2ZPjxVacrDksNXnoh8nBaj8Azez6y3Djso-JFGPUkfz9EYI_66ABHxcS5IR9e7ZFyqxZcEVqbq2T4866602t2d5vfs9KHoQstQQW2UGI3zySLmNlE1RjD1lrPNzxRI79OTkX0swqMXn7xQeTnvrGT563_vEwhyxTZlNEdivHb5uHF0dRXULxs-27PMb3kVqufEB4aofN203Cd0imk_Nmda2N7u7HPWektFBXvB2QxvVfKiF8VZOaxFfc2UdESnH1U-M'
    },
    {
      id: 3,
      name: 'Tío Pepe',
      type: 'Carritos',
      price: '$',
      location: 'Exterior Campus Rancagua',
      status: 'Cerrado • Actualizado hace 1h',
      isOpen: false,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWWf177U3ZZU5Yk_7irKm1n8gDKYVch9kI1LPQwCOINHqnl1WD_FWCE6z8Y3tczKR4UxtmoZd5rFYTGDjcFGKcb0spaTzz1QPc7xdqjssdYOVZoeLjjW82trsIRZiwLTSFwBelOQr46t3ZgugruQ05ZlaGqQufVrkMBxyiSBQtXumMK5duXVhxxitBuftUoxnhoWQpRXK8CmcSpu0FFWljH8oWWDsWCG0grovwcPFQtwWTJmgupVWJczP8VAXwSpLbF0MTSzz1CD0'
    },
    {
      id: 4,
      name: 'Casino Rengo',
      type: 'Casino',
      price: '$$',
      location: 'Campus Rengo',
      status: 'Abierto ahora • Actualizado hace 10m',
      isOpen: true,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPpfyajYebQ1WHKj3z4qE_0PSoK-pEIsowdAGWO_6XfWIcMPou-ejddO3PUNdvtVI4jPTnrbjh5K6-uiO9lAJ2uGDX24ij525A0PlBf51I2PsIGZJOah1Lhqw_MfDfvmg4XK7VQJaulWzorqAIcimf3k6E14-Bnw1NOtPhSMDbnuhR2xh6qmFyByKDfp9K69vnEm8gt_KlrW1W1SBiyGbckgEWG9OsTOp-gxXZ26FuLMlNbRDtT7TxHsBuyBoq3IPa7wSBSejZKC8'
    }
  ];

  return (
    <main className="min-h-screen pt-24 pb-12 px-6 md:max-w-5xl mx-auto flex flex-col gap-8 text-on-surface">
      <TopAppBar title="UOH Horizon" showProfile={true} action="menu" />

      <div className="flex flex-col gap-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary-container tracking-tight">Directorio de Locales</h2>
        <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
          Descubre opciones de alimentación en los distintos campus. Desde colaciones rápidas hasta almuerzos completos.
        </p>
      </div>

      <div className="flex gap-3 overflow-x-auto no-scrollbar py-2 -mx-6 px-6 md:mx-0 md:px-0">
        <button className="whitespace-nowrap px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 bg-primary text-white shadow-md active:scale-95">
          Todos
        </button>
        <button className="whitespace-nowrap px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-200 bg-surface-container-highest text-on-surface-variant hover:bg-surface-container-high active:scale-95">
          Casino
        </button>
        <button className="whitespace-nowrap px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-200 bg-surface-container-highest text-on-surface-variant hover:bg-surface-container-high active:scale-95">
          Cafetería
        </button>
        <button className="whitespace-nowrap px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-200 bg-surface-container-highest text-on-surface-variant hover:bg-surface-container-high active:scale-95">
          Carritos
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {places.map((place) => (
          <Link key={place.id} href={`/place/${place.id}/menu`} className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(25,28,32,0.08)] flex flex-col group cursor-pointer hover:-translate-y-1 transition-transform duration-300">
            <div className="h-48 relative bg-surface-container-high overflow-hidden">
              <Image src={place.image} alt={place.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-primary">
                {place.type}
              </div>
            </div>
            <div className="p-6 flex flex-col gap-3 flex-grow">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-on-surface">{place.name}</h3>
                <span className="text-on-surface-variant font-medium bg-surface-container px-2 py-1 rounded-md text-sm">{place.price}</span>
              </div>
              <div className="flex items-center gap-1.5 text-on-surface-variant text-sm">
                <MapPin size={18} />
                <span>{place.location}</span>
              </div>
              <div className="mt-auto pt-4 flex items-center gap-2 text-xs font-medium text-on-surface-variant">
                <span className={`w-2 h-2 rounded-full ${place.isOpen ? 'bg-green-500' : 'bg-outline'}`}></span>
                {place.status}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
