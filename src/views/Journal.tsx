import { motion } from 'motion/react';
import { Quote, Share, Download } from 'lucide-react';

export default function Journal() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-5xl mx-auto px-8 py-20"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-zinc-100 pb-8">
        <div>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-400 mb-2 block">Today's Sentence</span>
          <h1 className="text-5xl font-extrabold tracking-tighter text-zinc-900">November 14.</h1>
        </div>
        <div className="flex items-center gap-4 text-zinc-500 text-sm">
          <div className="flex flex-col items-end">
            <span className="font-medium">Series 082</span>
            <span>Curated by Editorial Team</span>
          </div>
          <div className="w-12 h-12 rounded-full overflow-hidden bg-zinc-100">
            <img 
              className="w-full h-full object-cover" 
              src="/avatar.jpg"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <section className="relative group mb-32">
        <div className="absolute -inset-4 bg-zinc-50 rounded-[2rem] -z-10 transition-all duration-500 group-hover:bg-zinc-100/50 opacity-50"></div>
        <div className="flex flex-col gap-12 py-12 md:py-20 px-4">
          <div className="max-w-4xl relative">
            <Quote className="text-zinc-200 w-16 h-16 absolute -top-8 -left-4 -z-10" />
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 leading-[1.1] mb-10">
              The details are not the details. They make the design.
            </h2>
          </div>
          
          <div className="md:ml-auto max-w-2xl text-right">
            <p className="text-2xl md:text-4xl font-light text-zinc-500 leading-relaxed tracking-wider">
              细节不仅仅是细节，<br />
              它们成就了设计。
            </p>
            <div className="mt-8 flex items-center justify-end gap-4">
              <div className="h-[1px] w-12 bg-zinc-200"></div>
              <span className="text-sm font-bold tracking-widest uppercase text-zinc-500">Charles Eames</span>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-8 rounded-xl overflow-hidden aspect-[16/10] bg-zinc-100 shadow-sm">
          <img 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDETb3MvMX3nE_LBNl9OUqZMPRgpWi6saRXsz_J0YJ4U2TiVk_EaQKAhWhGXtzWOgrVXuVE4Urra5AX0YwnY18L39CtkNLpMsbIxxOqvUH8XsQpkrMisk85-qq1nJ80X_tZ1RCjPzGkY_qElUvmPrRNB2RsjYnbz1olK_KNTObttH2UqZ7arodGO6Zo1aUkHHQvkar2o9WzcJNQ-xscpAcePPl8bLgwFYQ0UY-XuiWUbqGK4y_fQyfTTtNglByJB052CWBZ0BqCoPE"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="md:col-span-4 flex flex-col gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-100 flex-1">
            <h3 className="text-xl font-bold mb-3 tracking-tight">Design Ethos</h3>
            <p className="text-zinc-500 leading-relaxed text-sm">
              Eames believed that the designer's role is that of a very good, thoughtful host anticipating the needs of his guests. This quote reminds us that excellence lies in the granular.
            </p>
          </div>
          <div className="bg-zinc-900 text-white p-8 rounded-xl shadow-lg flex flex-col justify-between">
            <p className="text-lg font-medium leading-snug">Share this insight with your creative circle.</p>
            <button className="mt-6 flex items-center gap-2 text-sm font-bold tracking-widest uppercase py-3 px-6 bg-white text-zinc-900 rounded-lg self-start active:scale-95 transition-transform">
              Generate Card
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Archives */}
        {['"Less is more."', '"Form follows function."', '"Simplicity is the ultimate sophistication."'].map((quote, i) => (
          <div key={i} className="md:col-span-4 bg-zinc-50 p-8 rounded-xl">
            <h4 className="text-xs font-bold tracking-widest uppercase text-zinc-400 mb-6">Archive 0{i+1}</h4>
            <p className="text-zinc-900 italic text-lg leading-relaxed">{quote}</p>
            <p className="text-xs text-zinc-500 mt-4">— {i === 0 ? 'Mies van der Rohe' : i === 1 ? 'Louis Sullivan' : 'Leonardo da Vinci'}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
