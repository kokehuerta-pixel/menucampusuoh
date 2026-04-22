import Image from 'next/image';
import Link from 'next/link';
import { TopAppBar } from '@/components/TopAppBar';
import { Star, Heart } from 'lucide-react';

export default function Profile() {
  const favorites = [
    {
      id: 1,
      name: 'Cafetería Central',
      location: 'Campus Rancagua',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLGcHC7zAZd7ql4E6ssltPgiihwPfjVS6uZhAcJKSsRalEihyT7Ci4yDETAfvMn6iI0G_oea8G351CSrUIs4i7RWBZ8uAwXqYd2RiZYHSoCOj3xSrlNmHsTDa_rHxTF2vT-ELf793DSUP7SnOIE2KDG7HQqNfH5ZYEdxtkpxhZei_C_93I9gcYqCl8ZFnR95_NAlTWdbs-X_WqzC5OQWCgxRMA1HUsHV41h7akYYx_S73JeTxpQPItFlLIWwRAjLCy8ky8O_AwkK4'
    },
    {
      id: 2,
      name: 'Kiosco Saludable',
      location: 'Patio Sur',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9YSzf_hggKDDU4oEEZS5-cuFKXPGRvaOGsKijueHUNG9e-hSlCnTgewksp52U0X1m6OPdKCXWHH435ItkFCS0RIyp6rZJzZF0Vo68j7YJq2uWgbQu1P-_Hpc_VSvmEENIAJJDZnXX2K1ikmL-W1j5R9tyBGmoVhKA77BID024sUiK-lcxWlDI8iA0-3j52Q0k9f0Ee0GexFiWKkZdht3U11iA-odriAOCG3UDfB669WoV9pMqzIH_WUyfYRabUBMS0VW81_WUSq4'
    }
  ];

  const photos = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCe8QACnQhdG1-mKn6DjUC-7mllZamc4oF-ufyCA8143vL5s941GgdkzedPTGEiZ-nicmaSN5MTy-5XPII6vTMg6FXHyRkxsT6mdxYolHe5qD2LGTI6NiEeKkpMJR_ElNBwLbRwO8kVcJjSd-jOGilzHqAY7niiciTzF0yPHYayyq9IDvG59Na4L2pGEIMOhTmqfVCkIwi0PpPDBXFgU5dW2yETweVETQdRG6nWMa1JHXagdG6VwjdW7Txwo9YnGXu_V-7x796tjHY',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAFZDre7OWs1dqAHEE13_vprUJBgf5L03rM5efHlVNJjavMwWWr4KLj4e4P1OWKBWhakGtj4NnT5VEFlS7I4ExqFuoWylO4gPa_gnbBFQubIANQY6qAGF-3s8RG4LQsaYGVbzlPVxDZe-f5WI6waV1rsRqMFm4KZn6tI6vVp8m6Nyl4sDka0hvAgGv1AUI3k6HQSRyD4Ec8EdVBHPKE-ollqnSetyyOK97MiRj3LQgXrO7wxLGns18IUp5RKE2Gc2J-tpOXkIJXrX0',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuA8ANn-yUohM5ESl_OocBSTNipSoRHL7FtxFDv_PWZfkzi7FvWI2yoLPLtUiHbPGvnvdhmq_cL8GD8a235UXHkPzL8dxVOYXCSqcstsZTXA5VishRj3CDtND_tOT2AIRLnAUJKsL7YGXhcg6hOF0A-4QG44LLFNw023ToVtW2Cx_BaDWobD-g9IvSR7WaUv4eGkdOEVmTL0BB3l9RC9cIWgNDT1__O8-Rjwoolt1B8kUbYl4053euAozWLuFLC6YR1mSLfTOAmGINo',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAYDa_Jdfafmicv6AVA1S_XUKeyO_XTXxbfWrLKXId_i0tjH6LCnpZtEU0PAscJtt6gDcLWQ3VOQ50KymtHXSe6b2-dzBKlT9WQgPVMPmFFNHABTxXDHNHqHc9JxiCmRfvEmeZSSB6puMdD2Pxmiyi2fplWaU95YqsJwIHRc43mXxeeiWlTgmfn72tBj-02GMnjNHk5UCa9IvQVGIT2KVeRT3SOr1bv_pJvpJWWRR3bX0uM4LWk7zlYpqR2BniCekjoI2dQkeZLGVg'
  ];

  return (
    <main className="pt-28 px-6 pb-12 max-w-3xl mx-auto space-y-12">
      <TopAppBar title="Perfil" showProfile={true} action="settings" />

      <section className="flex flex-col items-center text-center space-y-6">
        <div className="relative">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-[0_12px_32px_rgba(25,28,32,0.08)] ring-4 ring-surface-container-lowest">
            <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg_EiRZQGi_EVuGgoMWSCkcM2TD3P40XMpNpamhNDVc3XcWdNiNInvIuzxZF7eBlAlbugd8SxJkoZHnF5YwVmzAl3s26pa38YZU7W-_0yCdk9xMIMbcorD6YC3udhyDzlp4PL15E4uhItr6N012NGnLGyFiR_A9Tnt_5pItsT3IMg_O8ON4wZJ-9knLtpmv2GsABzCRfKZ_wSy9T2Osqu5HmNXiIWXliTFG_WPNQQ4I-a1zw9Gl3AV83JcUFwvAQvdy2_crIDx6z4" alt="Catalina Rojas" fill className="object-cover" />
          </div>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <div className="bg-surface-container-lowest shadow-[0_12px_32px_rgba(25,28,32,0.08)] rounded-full px-4 py-1.5 flex items-center gap-1.5">
              <Star size={14} className="text-tertiary fill-tertiary" />
              <span className="text-[10px] font-bold text-on-surface tracking-wide uppercase">Local Guide UOH - Nivel 4</span>
            </div>
          </div>
        </div>

        <div className="space-y-2 mt-4">
          <h1 className="text-3xl font-extrabold tracking-tight text-on-surface">Catalina Rojas</h1>
          <p className="text-on-surface-variant font-medium">Arquitectura • 3er Año</p>
        </div>

        <Link href="/profile/history">
          <div className="bg-gradient-to-br from-primary to-primary-container text-white rounded-full px-6 py-3 flex items-center gap-3 shadow-[0_12px_32px_rgba(25,28,32,0.08)]">
            <span className="font-bold text-lg tracking-tight">1,250 Puntos</span>
          </div>
        </Link>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold tracking-tight text-on-surface">Mis lugares favoritos</h2>
          <button className="text-sm font-bold text-primary tracking-wide uppercase hover:text-primary-container transition-colors">Ver todos</button>
        </div>
        
        <div className="flex overflow-x-auto pb-6 -mx-6 px-6 gap-4 snap-x snap-mandatory no-scrollbar">
          {favorites.map(fav => (
            <div key={fav.id} className="snap-start shrink-0 w-48 rounded-xl bg-surface-container-low overflow-hidden group">
              <div className="h-32 w-full overflow-hidden relative">
                <Image src={fav.image} alt={fav.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 space-y-1">
                <h3 className="font-bold text-on-surface leading-tight text-sm">{fav.name}</h3>
                <p className="text-xs text-on-surface-variant">{fav.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-bold tracking-tight text-on-surface">Tus fotos subidas</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="col-span-1 row-span-2 rounded-xl overflow-hidden relative group bg-surface-container-low min-h-[250px]">
            <Image src={photos[0]} alt="Burger" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white font-medium text-sm flex items-center gap-1">
                <Heart size={14} className="fill-white" /> 24
              </span>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden relative group bg-surface-container-low aspect-square">
            <Image src={photos[1]} alt="Salad" fill className="object-cover" />
          </div>
          <div className="rounded-xl overflow-hidden relative group bg-surface-container-low aspect-square">
            <Image src={photos[2]} alt="Steak" fill className="object-cover" />
          </div>
          <div className="col-span-2 rounded-xl overflow-hidden relative group bg-surface-container-low aspect-[2/1] md:aspect-auto md:h-full min-h-[120px]">
            <Image src={photos[3]} alt="Coffee" fill className="object-cover" />
          </div>
        </div>
      </section>
    </main>
  );
}
