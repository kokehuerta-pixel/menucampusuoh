'use client';

import { ArrowLeft, Share, Menu, Settings } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface TopAppBarProps {
  title: string;
  showBack?: boolean;
  showProfile?: boolean;
  action?: 'none' | 'share' | 'settings' | 'menu';
  points?: number;
}

export function TopAppBar({ title, showBack = false, showProfile = false, action = 'none', points }: TopAppBarProps) {
  const router = useRouter();

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-2xl px-6 py-4 flex items-center justify-between shadow-[0_12px_32px_rgba(0,0,0,0.04)]">
      <div className="flex items-center gap-4">
        {showBack && (
          <button 
            onClick={() => router.back()}
            className="text-primary hover:bg-surface-container-low transition-colors rounded-full p-2 active:scale-95 duration-200 flex items-center justify-center -ml-2"
          >
            <ArrowLeft size={24} />
          </button>
        )}
        {showProfile && (
          <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-high border-2 border-transparent hover:border-outline-variant transition-all cursor-pointer">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBZzrdxcP_5WBdfaRfVMQWdQkhNlxQRue_l-aqPlBfZj1JwRIwCnPfPiPR6B7jtc0SNxZ1HA1YVfhzV6ay1ZN6_d-gt8ikv9pcxz4Bg5iYTI2_2ZZLdr9ob6THCkrPYqVHUaJiwkVFyltF45AsG16SnkoaqQQPekBdY874k7B0UiYgRTHUESX6SEf6DpIpyafFruwlML-QEr4O77CmlPVg-MEUhpw7qL065_Na3Oz_a07gUo3WvSeDbHc4TRhhJiTkpWtk25nnn1w" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <h1 className="font-display text-primary font-bold tracking-tight text-xl">{title}</h1>
      </div>

      <div className="flex items-center gap-2">
        {points !== undefined && (
          <button className="bg-surface-container-low px-4 py-2 rounded-full text-primary font-bold text-sm shadow-sm hover:opacity-80 transition-opacity active:scale-95">
            {points.toLocaleString()} pts
          </button>
        )}
        
        {action === 'share' && (
          <button className="text-primary hover:bg-surface-container-low transition-colors rounded-full p-2 active:scale-95 duration-200">
            <Share size={20} />
          </button>
        )}
        {action === 'settings' && (
          <button className="text-primary hover:bg-surface-container-low transition-colors rounded-full p-2 active:scale-95 duration-200">
            <Settings size={20} />
          </button>
        )}
        {action === 'menu' && (
          <button className="text-primary hover:bg-surface-container-low transition-colors rounded-full p-2 active:scale-95 duration-200">
            <Menu size={24} />
          </button>
        )}
      </div>
    </header>
  );
}
