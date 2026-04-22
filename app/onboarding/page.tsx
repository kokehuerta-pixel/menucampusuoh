'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Map, Tag, Users, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const steps = [
  {
    title: 'Encuentra carritos y locales',
    description: 'Descubre todas las opciones gastronómicas disponibles hoy en el campus de la UOH.',
    icon: Map,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYfS4il5LiFiom6CmQpSWrGxR3cKFS_PKByJNkYaq3aV6KxI9B_Xta5RFRUMyBF9RZG1Aw3JPIEqaEePWdLOhj4qkmn03lmdYrPHHMlSbJKT71aIibUf0ljqgWcWnGdVQJugSq1aJRGEDj8DjrroCUinFlHsb6kauiCAhCYH6J2wzdlxndaKy-xeVb5OfLk0U2IA3mmgm_GQRhxlbjsmO83AAdJA66AmdG9A9ggY7mOQd5R-Xwqgxn1orFDqqcOwczK8FABTdOg8Y',
  },
  {
    title: 'Revisa precios reales',
    description: 'La comunidad mantiene la información al día. No más sorpresas al llegar al casino.',
    icon: Tag,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5lOOVUTMevoc5gJNjWtdol0bMXyVbFG7Xj1y4fuUldbDhM9aibDPxJ9fhq6PU9yjhOhiyhTVbtiPhTiySciBHA3hldXCU8AEGRstgbpstMc8tVmU-jsrtrb0BCw6eECRs97FiUjxFybzGqvAIfmpRtYsTVJtnAiYCkXiIjTWs--7tR97n3agXDKydPWGLbqPvGcORrZDtoLGDYHN6ouo-mzxv5Fddf_tYYXIyU9tgx5XAmo_Gq7lrrQeDIITUmMjjYddoxN2MQMo',
  },
  {
    title: 'Reporta cambios',
    description: 'Sé un curador. Avisa si un local cerró o cambió sus precios para ayudar a tus compañeros.',
    icon: Users,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDrINvdx6CQ7543Ecyk8lK7T9w5AU2EuQzQFSgjy9cqh21E734H4N7cf9suu_OaYv3yUFb43XC5v7Qf05fgoP0fY7K6h-lU9o95Q4qSCcrh4Pi7JgO_dEtrwoJM9tJkhKMho0zIMiqA_sNpixGZkCc2CkGSgUP1zcue3zqRV-2M5TkTpvUDKk04c5rpmq6BNClSqmdFqVW22Msslr4gTEJYE6hYMuoNuQdNAP7UQtI89ythoPTUEeLhu8TYthBowPMnpsNowzQaRI',
  }
];

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      router.push('/home');
    }
  };

  const handleSkip = () => {
    router.push('/home');
  };

  return (
    <main className="flex-1 w-full flex flex-col relative h-screen bg-surface">
      <header className="w-full px-6 py-6 flex items-center justify-center z-50">
        <h1 className="text-primary-container font-bold tracking-tighter text-2xl">Menú Campus UOH</h1>
      </header>

      <div className="flex-1 w-full flex overflow-hidden">
        <section className="min-w-full w-full h-full flex flex-col px-6 pb-32 pt-4 items-center justify-center relative transition-transform duration-500 ease-in-out">
          
          <div className="w-full max-w-sm aspect-square bg-surface-container-low rounded-xl mb-12 flex items-center justify-center relative overflow-hidden shadow-[0_12px_32px_rgba(25,28,32,0.08)]">
            <Image
              src={steps[currentStep].image}
              alt="Soft illustration"
              fill
              className="object-cover opacity-90"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
            {(() => {
              const Icon = steps[currentStep].icon;
              return <Icon size={64} className="text-primary relative z-10 fill-primary/20" />;
            })()}
          </div>

          <div className="text-center max-w-md w-full px-4">
            <h2 className="text-3xl font-bold tracking-tight text-on-surface mb-4">
              {steps[currentStep].title}
            </h2>
            <p className="text-lg text-on-surface-variant font-medium">
              {steps[currentStep].description}
            </p>
          </div>
        </section>
      </div>

      <footer className="fixed bottom-0 left-0 w-full px-6 py-8 pb-10 flex flex-col items-center justify-end z-50 bg-surface/80 backdrop-blur-2xl">
        <div className="flex items-center justify-center gap-3 mb-8">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentStep ? 'w-8 bg-primary' : 'w-2 bg-surface-variant'
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="w-full max-w-md bg-gradient-to-br from-primary to-primary-container text-white font-bold text-lg py-5 rounded-full shadow-[0_12px_32px_rgba(25,28,32,0.08)] active:scale-[0.97] transition-transform flex items-center justify-center gap-2"
        >
          Siguiente
          <ArrowRight size={24} />
        </button>

        <button
          onClick={handleSkip}
          className="mt-4 text-on-surface-variant text-sm font-semibold tracking-wide uppercase hover:text-primary transition-colors py-2 px-4 rounded-full hover:bg-surface-container-low"
        >
          Omitir
        </button>
      </footer>
    </main>
  );
}
