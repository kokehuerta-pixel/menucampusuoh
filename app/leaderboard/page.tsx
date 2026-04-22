import { TopAppBar } from '@/components/TopAppBar';
import Image from 'next/image';

export default function Leaderboard() {
  const topUsers = [
    {
      id: 4,
      name: 'Catalina Rojas',
      points: '1,250 pts',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmOA6DkbDIfRklv77Iapn3ssXg2naJ_ahKwFo3rf1c92kjZrL7DoWEnbp55ZqPzhvoBhyk6R20tCbbnMK0ePXFDE089yUrb1Id5HPUKjxv9pIJLL0haonLNo-O0Ox8zjXhi6B5arOKDukzCTPM1XaLEtpwELa0s2khipVFyP3vMcUeyzU-QhVm5hcu86mCBGk1ICVitnDjiRJoHIGK3o3pC9J3d0G1D108R6QOW8L1PXyv83Vwja4WP0aNLQnhF6PSWGlbBq3YbIw'
    },
    {
      id: 5,
      name: 'Ignacio Pino',
      points: '1,120 pts',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZc1SUs2jwb7X7iRQqT2pjgbxF12ml1XAeOdgWXoX2dV7R86nFSBzsJpsV8-b8upT4Y-5qVIImPJqgEJYRG3f2pZbCoCLiKdkfUpq3Gce6kEpMCNKFGkhZLELrXTEuKzlsMhijGFPeGOdr4U-peXBc5rNQK0cy2SlY8tBOLaBYQN6X551NjY2FHyYP-XAM7E46JqkTxNtZZjqJQZHHugKWf1f6eqirScFvyonFq5UbRkHqPo7td5rWNeYv12jf6-vkDqoarATXdl8'
    },
    {
      id: 6,
      name: 'Valentina A.',
      points: '980 pts',
      initials: 'VA'
    },
    {
      id: 7,
      name: 'Tomás F.',
      points: '850 pts',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCK-c2Loz8ZP6M-OAGgM0GPQ9iaQnQ-FR3UBfNioavSzn__pUhk0obVimewhTEinT0ZH7x7eHUjR6yzuQPzHDGmOBOb3ksS44fQHubU_Fpe6F0vDK6j1cNK9hQBXtENGLlpRmWlmM0uld687DLNjCyMPew3DQz4lKzXJhXUwCdmP2Q5BOEl7gyhzklzGmsV1rtIMaaMsUQHnybGDaRLg_7_7IL038Ki9pYkjEZGCbOjPCYOZpsu6Jm7oRK5OLBs70sKeH4fOKSxfg8'
    }
  ];

  return (
    <main className="min-h-screen pb-32 pt-24 bg-surface text-on-surface">
      <TopAppBar title="Leaderboard" showBack />
      
      <div className="px-6 max-w-3xl mx-auto space-y-12">
        <section className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold tracking-tight text-primary">Los más influyentes del Campus</h2>
          <p className="text-on-surface-variant text-base max-w-md mx-auto">Descubre quiénes están liderando la comunidad académica.</p>
        </section>

        <section className="relative pt-8 pb-4 flex justify-center items-end gap-4 md:gap-8">
          {/* 2nd Place */}
          <div className="flex flex-col items-center mb-4 relative z-10 w-24">
            <div className="relative w-20 h-20 rounded-full bg-surface-container-low p-1 shadow-sm">
              <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQP8TZYMEKoKFVyWHrp3Z0E3HPukzL-gwktxFdGKthRSdZ3LIPJXq8pMT91OkJcl9oDRXnI9yr5bIUU_K9TOo0rdfwYFYiE1nkFtewyQF5li7ZAfTBOqCViNybxx-OmRtSpA0L_vtOsn-3zjarKzVanrDdizZdY_ZJaRCwSXtBfb6kIFV0dAtUG-S8pboFWTSu_UZeij-G4I5SLTDGC_AiJ2QwONEwl3ThsD7IHnsqcMw4sFd4ew0bKDRicUlfcjUEYkQeMS3fn4s" alt="Mateo" fill className="rounded-full object-cover" />
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-slate-200 text-slate-700 w-8 h-8 rounded-full flex items-center justify-center font-bold border-2 border-white shadow-sm z-20">2</div>
            </div>
            <div className="mt-5 text-center">
              <h3 className="font-semibold text-sm text-on-surface leading-tight">Mateo V.</h3>
              <p className="text-xs text-primary font-bold mt-0.5">2,150 pts</p>
            </div>
          </div>

          {/* 1st Place */}
          <div className="flex flex-col items-center relative z-20 w-32 -mt-8">
            <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-primary to-primary-container p-1.5 shadow-[0_12px_32px_rgba(0,105,167,0.2)]">
              <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH6fJyE3DWeu8-s0h3p1pIU5-HVR8V925rpaWJE3Xnlx4lQAv71DzYcnIZyYKPWEZMvzlWBo6NdL3GiTvtKp4dWaGw19TJdXwcxGZDoWX7Eb9Yi5rDze40pcouCSZR6Fb9Bahl3E2KuOQmexWT3x2Pvq2nfd1_6Kpz4FymM6q56Ow0amzkJvKnW6-5gPRGp-AJE8BK2DmwaGuHTIL7rUh7pqSRZyyrdeeccHG3bUzAg1VUZ58WcsI5Bb_3tgC011RojvkLSLBJc1E" alt="Sofia" fill className="rounded-full object-cover border-4 border-white" />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-lg border-4 border-white shadow-md z-20">1</div>
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl -z-10"></div>
            </div>
            <div className="mt-6 text-center">
              <h3 className="font-extrabold text-base text-primary leading-tight">Sofia L.</h3>
              <p className="text-sm text-amber-600 font-bold mt-1 bg-amber-50 px-3 py-1 rounded-full inline-block">3,420 pts</p>
            </div>
          </div>

          {/* 3rd Place */}
          <div className="flex flex-col items-center mb-4 relative z-10 w-24">
            <div className="relative w-20 h-20 rounded-full bg-surface-container-low p-1 shadow-sm">
              <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv_918GQaD7_vAKwMaj5894CWEl_rQ9_PeReFud_fjphle9Q6DoKSPzCKLdC1exSBLgUmsQZ406CLOErMZ3-YjmWufj0cFJzD7W50f3zMb4b8qhjBsIdLDL2x4vzwJ8EBee72IcCpw6lAssKT5EYxBM97oqj2nJvYXc1WfpHXtZlr5wAQGSOZzH4Pzo2TBQBx2B1ha0W0K9bnC9C4KQJdws4DIl_pXRozSBo2KCBKPhtSHkr6AZ5OAnoZZhhE9UAHOfAEpM0alzQ8" alt="Daniel" fill className="rounded-full object-cover" />
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-amber-700 text-amber-100 w-8 h-8 rounded-full flex items-center justify-center font-bold border-2 border-white shadow-sm z-20">3</div>
            </div>
            <div className="mt-5 text-center">
              <h3 className="font-semibold text-sm text-on-surface leading-tight">Daniel R.</h3>
              <p className="text-xs text-primary font-bold mt-0.5">1,890 pts</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-sm font-bold text-outline-variant uppercase tracking-widest pl-2 mb-6">Top 10 Colaboradores</h3>
          <div className="bg-surface-container-low rounded-2xl p-2 space-y-2 relative overflow-hidden">
            {topUsers.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-3 rounded-xl bg-surface hover:bg-surface-container-highest transition-colors group">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold text-outline w-6 text-center">{user.id}</span>
                  {user.image ? (
                    <div className="w-10 h-10 rounded-full relative overflow-hidden shadow-sm">
                      <Image src={user.image} alt={user.name} fill className="object-cover" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold shadow-sm">
                      {user.initials}
                    </div>
                  )}
                  <span className="font-semibold text-on-surface group-hover:text-primary transition-colors">{user.name}</span>
                </div>
                <span className="font-bold text-primary text-sm bg-primary/5 px-3 py-1 rounded-full">{user.points}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
