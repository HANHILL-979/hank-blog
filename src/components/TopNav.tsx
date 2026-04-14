import { Search, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TopNav() {
  return (
    <header className="sticky top-0 w-full z-50 bg-white/60 backdrop-blur-xl border-b border-zinc-200/20 shadow-[0_20px_40px_rgba(45,51,56,0.04)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto font-sans antialiased tracking-tight">
        <div className="flex items-center gap-12">
          <Link to="/" className="text-xl font-bold tracking-tighter text-zinc-900">Curator</Link>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link className="text-zinc-500 hover:text-zinc-900 transition-colors" to="/essays">Essays</Link>
            <Link className="text-zinc-500 hover:text-zinc-900 transition-colors" to="/trending">Archive</Link>
            <Link className="text-zinc-500 hover:text-zinc-900 transition-colors" to="/collections">Collections</Link>
            <Link className="text-zinc-500 hover:text-zinc-900 transition-colors" to="/profile">About</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 w-4 h-4" />
            <input 
              className="bg-zinc-100 border-none rounded-full py-1.5 pl-10 pr-4 text-sm w-48 focus:ring-1 focus:ring-zinc-400 focus:bg-white transition-all outline-none" 
              placeholder="Search..." 
              type="text"
            />
          </div>
          <Link to="/profile" className="text-zinc-800 p-2 hover:bg-zinc-100/50 rounded-full active:scale-[0.98] transition-transform">
            <User className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
