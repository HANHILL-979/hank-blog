import { ReactNode } from 'react';
import { LayoutGrid, Sparkles, TrendingUp, Bookmark, ShieldCheck, Plus, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function SideNav() {
  const location = useLocation();

  return (
    <aside className="hidden lg:flex h-[calc(100vh-72px)] w-64 flex-col gap-4 p-6 border-r border-zinc-100 bg-[#f2f4f6] font-sans text-sm font-medium sticky top-[72px]">
      <div className="mb-6">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="relative group mb-4">
            <div className="absolute -inset-1 bg-gradient-to-tr from-zinc-200 to-zinc-100 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img 
              alt="Curator Logo" 
              className="relative w-20 h-20 rounded-2xl object-cover shadow-sm border border-white/50" 
              src="/avatar.jpg"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h2 className="text-xl font-black tracking-tight text-zinc-900">Editorial</h2>
            <p className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-bold">The Digital Curator</p>
          </div>
        </div>
      </div>
      
      <nav className="flex flex-col gap-1">
        <NavItem to="/" icon={<LayoutGrid className="w-4 h-4" />} label="Home" active={location.pathname === '/'} />
        <NavItem to="/essays" icon={<Bookmark className="w-4 h-4" />} label="Essays" active={location.pathname === '/essays'} />
        <NavItem to="/journal" icon={<Sparkles className="w-4 h-4" />} label="Journal" active={location.pathname === '/journal'} />
        <NavItem to="/trending" icon={<TrendingUp className="w-4 h-4" />} label="Archive" active={location.pathname === '/trending'} />
        <NavItem to="/collections" icon={<Bookmark className="w-4 h-4" />} label="Collections" active={location.pathname === '/collections'} />
        <NavItem to="/subscribers" icon={<ShieldCheck className="w-4 h-4" />} label="Profile" active={location.pathname === '/subscribers' || location.pathname === '/profile'} />
      </nav>

      <div className="mt-8">
        <button className="w-full bg-zinc-900 text-white rounded-xl py-3 font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all">
          <Plus className="w-4 h-4" />
          New Entry
        </button>
      </div>

      <div className="mt-auto pt-4 border-t border-zinc-200/50">
        <NavItem to="/settings" icon={<Settings className="w-4 h-4" />} label="Settings" active={location.pathname === '/settings'} />
      </div>
    </aside>
  );
}

function NavItem({ to, icon, label, active = false }: { to: string, icon: ReactNode, label: string, active?: boolean }) {
  return (
    <Link 
      className={`rounded-lg py-2 px-4 flex items-center gap-3 duration-150 ease-in-out ${
        active 
          ? 'bg-white text-zinc-900 shadow-sm' 
          : 'text-zinc-500 hover:bg-zinc-200/50'
      }`} 
      to={to}
    >
      {icon}
      {label}
    </Link>
  );
}
