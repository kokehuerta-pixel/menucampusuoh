import Image from 'next/image';
import Link from 'next/link';

export default async function PlaceMenu({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const menuItems = [
    {
      id: 1,
      name: 'Completo Italiano',
      description: 'Pan artesanal, palta hass, tomate fresco y mayonesa casera.',
      price: '$2.500',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvFK9pQ5tNMWA9w1rJlq7u338LOPViQhoApVvITUSlZ1ifxYFOOHY0jcaiiCqi8-RV4n2LfVDlweTIJf_EiR0BJnKvgu8hoF3OPJ61JEXTskWH5199gbVyGgNSPU-SWwNqPJaIdESluacNq7xAKwvgjbyPh0ZFIMK0-9b6EAmQqHxrMHEiacgxCzUevf1bt0Y2d5hZndcQCUXEyaYtsE3bQHhMbHhojEIGPImb9_6Xvdv5sRLKuSgfO4UeS_zSUraDbfw8Zh_twhg'
    },
    {
      id: 2,
      name: 'Empanada de Queso',
      description: 'Masa crujiente rellena con abundante queso fundido.',
      price: '$1.800',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOnIFZlVjEEGWYHaJjWffhbLwYduoy4z7MLsPq70Iz10n-2wbgnXAxFoE2jK8I3YNQQWvUdiSL52IRvlTimqS8F5mqEb1pj7GG9XGTavVNuS_nH5R2mbUSQELLWWWwnzpiEdLBRn-0TiTEtW4apqSHM-TWAcmHSo3Cvlnq8kWS5wymT4dgHTD38bL2GdBmZNDi42bjLizFnV7qY0WRY5xlnvDmyCiADeUymgfVuwMsXAYCI6I2hD7G_XMSYDOqZf_u0K7_nlAGhfI'
    }
  ];

  return (
    <section className="px-6 flex flex-col gap-6">
      {menuItems.map((item) => (
        <Link key={item.id} href={`/product/${item.id}`} className="bg-surface-container-lowest rounded-xl p-5 shadow-[0_12px_32px_rgba(25,28,32,0.04)] flex gap-4 items-center">
          <div className="w-20 h-20 rounded-xl overflow-hidden bg-surface-container-low flex-shrink-0 relative">
            <Image src={item.image} alt={item.name} fill className="object-cover" />
          </div>
          <div className="flex flex-col gap-1 flex-grow">
            <h3 className="font-title text-lg font-bold text-on-surface">{item.name}</h3>
            <p className="text-on-surface-variant text-sm line-clamp-2 leading-relaxed">{item.description}</p>
            <span className="text-primary font-bold mt-1">{item.price}</span>
          </div>
        </Link>
      ))}
      
      <div className="mt-8 mb-8">
        <Link href="/report">
          <button className="w-full bg-gradient-to-br from-primary to-primary-container text-white rounded-full py-4 font-bold text-sm tracking-wide shadow-lg shadow-primary/20 hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2">
            ¿Reportar cambio de precio?
          </button>
        </Link>
      </div>
    </section>
  );
}
