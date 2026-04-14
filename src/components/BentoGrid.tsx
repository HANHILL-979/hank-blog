import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight, Mountain } from 'lucide-react';

export default function BentoGrid() {
  return (
    <section className="mb-20">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h3 className="text-3xl font-bold tracking-tight text-zinc-900">Latest Observations</h3>
          <p className="text-zinc-500 mt-2">Curated thoughts on the built environment.</p>
        </div>
        <a className="text-sm font-semibold text-zinc-900 flex items-center gap-1 group" href="#">
          View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {/* Large Bento Item */}
        <motion.article 
          whileHover={{ y: -5 }}
          className="md:col-span-4 lg:col-span-3 bg-white p-8 rounded-3xl group shadow-[0_20px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] transition-all flex flex-col justify-between min-h-[440px] cursor-pointer"
        >
          <div>
            <div className="w-full h-64 overflow-hidden rounded-2xl mb-8">
              <img 
                className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGuWvXZiUMSUYEkhgE44qP3NumeVOW9Fztvf6ZwxldvmDjts9av661qiFzvaWKpzWrcpnqCY1kRyKFQF2F3XgBw4-SBlPmx6wsu3uhDKIBWpIXeDhENjPMt1dLn2Z0oxzQG2PNxMXR55zXnOrgo8rEn7YnWO9SAwK6bEXrIFJA1rNaNjhC61c2AD-HKdrSK4Ri3_8xezQFpJMNQ2JPHRZbI5GUY78Z7fvpREIMi8k_oykRx4e-vwFtzjepF5iMazy3chAK0jxxIt4"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase mb-3 block">Materiality</span>
            <h4 className="text-2xl font-bold text-zinc-900 leading-snug group-hover:text-zinc-600 transition-colors">
              The Weight of Light: Sculpting Space with Void
            </h4>
          </div>
          <div className="flex items-center justify-between mt-6">
            <span className="text-xs text-zinc-400 font-medium">May 24, 2024</span>
            <ArrowUpRight className="text-zinc-300 group-hover:text-zinc-900 group-hover:translate-x-1 transition-all w-5 h-5" />
          </div>
        </motion.article>

        {/* Medium Bento Item */}
        <motion.article 
          whileHover={{ y: -5 }}
          className="md:col-span-2 lg:col-span-3 bg-zinc-100 p-8 rounded-3xl group transition-all flex flex-col justify-between min-h-[440px] cursor-pointer"
        >
          <div className="h-full flex flex-col">
            <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase mb-4 block">Theory</span>
            <h4 className="text-4xl lg:text-5xl font-bold text-zinc-900 leading-[1.1] mb-8 tracking-tighter">
              Concrete <br />Poetry
            </h4>
            <p className="text-zinc-500 leading-relaxed line-clamp-4">
              Re-examining the emotional resonance of exposed concrete in the modern landscape. How static mass evokes fluidity.
            </p>
          </div>
          <div className="mt-8 flex items-center justify-between pt-6 border-t border-zinc-200/50">
            <span className="text-xs text-zinc-400 font-medium">June 02, 2024</span>
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-zinc-100 bg-zinc-200 overflow-hidden">
                <img 
                  alt="Author" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGZJgciO5wnJOT4ODdH2KDag3ziAj4DnNEuJuL4ELDP4MbkPjnJWVgTj4kekR4D6GnHjyegVuAnUw1PPoZkk6ZpJCEL0T9Q_BH_Snl4ABKrDJeTVCYP2Ep2ApJwWSV9HYU3_M4wl71TvIsUX5YOGsq5B-5UoNVQxYwUHP1ZCYfv33Dnesjoj0PyMgitGRadVixCTVth3h6zx-2icsCNP68yAbxPaFAJJJKZswZ5mj8LF1dM_mLsY3GpHdCbHYnxK_dOFsSZHL4PA"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </motion.article>

        {/* Small Bento Items */}
        <motion.article 
          whileHover={{ y: -5 }}
          className="md:col-span-2 lg:col-span-2 bg-white p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.02)] group hover:bg-zinc-900 hover:text-white transition-all duration-500 cursor-pointer"
        >
          <Mountain className="w-10 h-10 mb-6 text-zinc-300 group-hover:text-white/40" />
          <h4 className="text-xl font-bold leading-tight mb-4">Topography of the Mind</h4>
          <p className="text-sm text-zinc-500 group-hover:text-zinc-400 leading-relaxed">
            Designing mental spaces for focus and restoration.
          </p>
        </motion.article>

        <motion.article 
          whileHover={{ y: -5 }}
          className="md:col-span-2 lg:col-span-2 bg-white p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.02)] border border-zinc-100 group transition-all cursor-pointer"
        >
          <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-900 uppercase mb-4 block">Archive</span>
          <h4 className="text-xl font-bold leading-tight mb-4">Vanishing Lines: The Mid-Century Ghost</h4>
          <p className="text-sm text-zinc-500 leading-relaxed">
            A visual journey through abandoned modernist icons across Europe.
          </p>
        </motion.article>

        <motion.article 
          whileHover={{ scale: 1.02 }}
          className="md:col-span-4 lg:col-span-2 bg-zinc-900 text-white p-8 rounded-3xl flex flex-col justify-center items-center text-center group cursor-pointer overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black opacity-50 group-hover:scale-110 transition-transform"></div>
          <div className="relative z-10">
            <h4 className="text-2xl font-bold mb-4">Join the Curator Circle</h4>
            <p className="text-sm text-zinc-400 mb-6 px-4">Weekly deep dives into the soul of design.</p>
            <button className="px-6 py-2 bg-white text-zinc-900 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

