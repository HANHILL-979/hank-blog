import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Terminal, LayoutGrid as Grid, Camera, Languages, BrainCircuit, ArrowRight, Landmark as Domain } from 'lucide-react';

export default function Categories() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24 py-20"
    >
      {/* Hero Header */}
      <header className="mb-24 flex flex-col items-start">
        <span className="bg-zinc-100 text-zinc-500 px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded-sm mb-6 border border-zinc-200/50">
          Archive Explorer
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-zinc-900 tracking-tighter mb-8 leading-[0.95]">
          Thoughtful <br /><span className="text-zinc-300">Categorization.</span>
        </h1>
        <p className="text-zinc-500 text-lg md:text-xl max-w-xl leading-relaxed font-light">
          A structured journey through personal projects, daily musings, and the pursuit of lifelong learning.
        </p>
      </header>

      {/* Categories Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Large Card: Thoughts */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-8 group cursor-pointer"
        >
          <div className="relative h-[450px] overflow-hidden rounded-xl bg-white shadow-[0_20px_40px_rgba(0,0,0,0.03)] transition-all duration-500">
            <img 
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1XdGDB96dY3fHA7_WqKpCwyURcRDk0qx7KTjjRWuNL746Oz6u6-btxegUklh_4x9uKj5cB93NZ-V7xC9Agrn2A2IxlvpcuJNRwyHJsW4zQ2W7PVwUpIvUQ00pfBfyqMdPa8Aag70J0NDzT-aTfDuD6Pr3bX7qc_D7ZEsXJyZ-vRZAEdcP8jJAN2fFkjfAjoKwtoQ6Ffohj6OCCAkj82PAX-mjdjSbQVjPz0D3wvaWiPlXPgxcL6O-hRQhEJUYgt8SPBtk8eNOMbE"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-10 flex justify-between items-end w-full">
              <div>
                <h3 className="text-3xl font-bold tracking-tight text-zinc-900 mb-2">Thoughts</h3>
                <p className="text-zinc-400 text-sm font-medium tracking-wide uppercase">Existentialism, Philosophy, Daily Notes</p>
              </div>
              <div className="text-right">
                <span className="text-4xl font-black text-zinc-900/10 group-hover:text-zinc-900 transition-colors duration-300">42</span>
                <p className="text-[10px] text-zinc-400 font-bold tracking-widest uppercase">Essays</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Vertical Card: Foreign Language Learning */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-4 group cursor-pointer"
        >
          <div className="relative h-[450px] overflow-hidden rounded-xl bg-zinc-50 shadow-[0_20px_40px_rgba(0,0,0,0.03)] flex flex-col transition-all duration-500">
            <div className="h-1/2 overflow-hidden">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzZmhE-6R79V2crpEoSQk9BVSZr3tM_xwjFSeayNm-Z6zUHigImZ_4TGtePVnV_iLdvry44ppZGPFxdDhVpJB74IGbsFVCFIBP4LYWQ1R3tqQPFrLfiqHFfz4-U63jp_KznGJAd_VP8y7wb5QMn2Jh78k4meSku-LTG8k_mVB2XOdq4eqZcEGtCLBPI2C5Vf10Kb5Yg8awzKagDmtGu0l8EjIT43od7KzJxj0QxGCl978jrtRNmF8MFJ6AIWISW_nbufryQ2FBqiQ"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8 flex flex-col justify-between flex-grow bg-white">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-zinc-900 mb-2">Foreign Language</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">Systematic approaches to Japanese, French, and the art of polyglotism.</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <Languages className="text-zinc-900 w-5 h-5" />
                <span className="text-xl font-bold text-zinc-900">18 <span className="text-xs font-normal text-zinc-400">posts</span></span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Horizontal Card: Personal Projects */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-12 group cursor-pointer"
        >
          <div className="relative h-[300px] overflow-hidden rounded-xl bg-zinc-900 text-white shadow-[0_20px_40px_rgba(0,0,0,0.1)] flex flex-col md:flex-row transition-all duration-500">
            <div className="p-10 flex flex-col justify-between md:w-1/2">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Terminal className="text-zinc-500 w-4 h-4" />
                  <span className="text-[10px] tracking-widest uppercase font-bold text-zinc-500">Active Development</span>
                </div>
                <h3 className="text-4xl font-extrabold tracking-tighter">Personal Projects</h3>
                <p className="mt-4 text-zinc-400 font-light leading-relaxed max-w-sm">
                  From custom design systems to rust-based microservices. The digital laboratory.
                </p>
              </div>
              <span className="text-6xl font-black absolute bottom-4 right-10 md:static text-white/5">09</span>
            </div>
            <div className="hidden md:block md:w-1/2 relative">
              <img 
                className="w-full h-full object-cover mix-blend-luminosity opacity-40 group-hover:scale-110 transition-transform duration-1000" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZRGaE50RcYz3SU-lh452sRfYH1foYL9xJ25wnc8WHVlnY3uPLUr4bhTAd7g6dudXCt1IrCff1dBR8Fb1mgOSrjfIGkLazvW9gYAHSHrCeCZs4oO0XtUF65sB6ZON5WADs0NOoYQ4_86NkHUAeT0-bvc4gEIHDgyaraIgyyiDcx1PFDMJd3mtpOXSATbrGS0fNti4ckJ2nEoTMpDnPCbQOnYpPvg7A7UFavbV9t_0Kt6YukYMbzhwamPnOHRpJSKfO6oKwfC22La4"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>

        {/* Square Cards */}
        <CategorySquare 
          icon={<Domain className="w-8 h-8" />} 
          title="Architecture" 
          desc="Brutalism & Minimalism in the urban landscape." 
          count={23} 
          className="bg-zinc-100"
        />
        <CategorySquare 
          icon={<Grid className="w-8 h-8" />} 
          title="Design Systems" 
          desc="The intersection of logic and aesthetic beauty." 
          count={15} 
          className="bg-white shadow-[0_20px_40px_rgba(0,0,0,0.02)]"
        />
        
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-4 group cursor-pointer"
        >
          <div className="aspect-square overflow-hidden rounded-xl relative">
            <img 
              className="w-full h-full object-cover grayscale hover:scale-110 transition-transform duration-500" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_rCoZehhByjH-Ht6JfNUVhFYC_CNxqYBnBTH-ORzvVGf8gZ7rRLjcfHwtkytmQIqBhDMtIxrQ88E_Zl3Jmq6gznQKM50RsU0cxcPJiNm3GqIAsEFKdzlEnpmGGV8IAVHTbFMLIhC2OkzQWP5JV4e9g2L_ZYlblq2n5MLer9TIwjI1cO54jW2ji419edMNBd-ce452LRMY8uGWIzNEqp1qVTYQCleTAsTO6AltKTNyGnBDtgoAQDDxjzHyPGuDdDJ_OGqg61gTB_E"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-zinc-900/40 flex flex-col items-center justify-center text-white">
              <Camera className="w-8 h-8 mb-2" />
              <h3 className="text-lg font-bold">Visuals</h3>
              <span className="text-[10px] font-bold tracking-widest uppercase opacity-70">31 Shots</span>
            </div>
          </div>
        </motion.div>
      </div>

      <footer className="mt-24 text-center">
        <button className="group inline-flex items-center gap-4 text-zinc-400 hover:text-zinc-900 transition-colors duration-300">
          <span className="text-xs font-bold tracking-widest uppercase">View full archive index</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
        </button>
      </footer>
    </motion.div>
  );
}

function CategorySquare({ icon, title, desc, count, className = "" }: { icon: ReactNode, title: string, desc: string, count: number, className?: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`md:col-span-4 group cursor-pointer aspect-square rounded-xl p-8 flex flex-col justify-between transition-all duration-500 ${className}`}
    >
      <div className="text-zinc-300 group-hover:text-zinc-900 transition-colors">{icon}</div>
      <div>
        <h3 className="text-xl font-bold text-zinc-900">{title}</h3>
        <p className="text-xs text-zinc-500 mt-1">{desc}</p>
      </div>
      <div className="pt-4 border-t border-zinc-200 flex justify-between items-center">
        <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-400">Archive</span>
        <span className="font-bold text-zinc-900">{count}</span>
      </div>
    </motion.div>
  );
}
