import { motion } from 'motion/react';
import { ArrowRight, Search } from 'lucide-react';

export default function Collections() {
  const tags = [
    { name: 'minimalism', count: 12 },
    { name: 'future', count: 8 },
    { name: 'typography', count: 24 },
    { name: 'architecture', count: 31 },
    { name: 'ethics', count: 5 },
    { name: 'web3', count: 14 },
    { name: 'product-design', count: 19 },
    { name: 'philosophy', count: 7 },
    { name: 'editorial', count: 11 },
    { name: 'urbanism', count: 9 },
    { name: 'photography', count: 22 },
    { name: 'technology', count: 38 },
    { name: 'creative-coding', count: 4 },
    { name: 'journaling', count: 15 },
    { name: 'sustainability', count: 10 },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-5xl mx-auto px-8 py-20"
    >
      <header className="mb-20">
        <span className="text-zinc-400 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Taxonomy</span>
        <h1 className="text-6xl font-bold tracking-tighter text-zinc-900 mb-6">Explore by Topic</h1>
        <p className="text-xl text-zinc-500 font-light leading-relaxed max-w-2xl">
          A curated index of themes and subjects, from architectural nuances to the evolution of generative art.
        </p>
      </header>

      {/* Featured Grid */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20">
        <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-zinc-50 aspect-[16/9] flex flex-col justify-end p-8 transition-all hover:bg-zinc-100">
          <img 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity grayscale" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlXL3RJ2kbyZEOp57DM4qmsgo9sC1dF_lAOBb2ddu6LbD3TTWW3tvnaxF43u7Pswo4VdfTcc7hAWq3ybCCEghhtjLUMp8DDil8OYr9EjRdxw39ySWGR0olFB1eGtJGlgDv_DUHYIAEyBSGHqXG-NNw3wbrWErJcQHWjv9_ksTJpXRznRtwFNQJhDznVdEWRITyFzzeZgIuuO_EZ3HaxVM-327i_6G5T4M7WQFMoNZovl-d9i0FHuWuMl7Euf5JdVDlXHYRQhTE2Zo"
            referrerPolicy="no-referrer"
          />
          <div className="relative z-10">
            <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase bg-zinc-200 px-2 py-1 rounded-sm mb-4 inline-block">Popular</span>
            <h3 className="text-3xl font-bold text-zinc-900 mb-2">#ArtificialIntelligence</h3>
            <p className="text-zinc-500 text-sm max-w-sm mb-6">Tracing the intersection of human creativity and machine learning through recent essays.</p>
            <button className="bg-zinc-900 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all hover:opacity-90 active:scale-95">Explore Collection</button>
          </div>
        </div>
        
        <div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-zinc-100 aspect-square md:aspect-auto flex flex-col justify-end p-8 transition-all hover:bg-zinc-200">
          <img 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover opacity-5 group-hover:opacity-10 transition-opacity grayscale" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAhRM8jGnMNuDjDElFPS7HS0rIiQEu25CnpIZQ0cVRChMM9DGtuaizahZ52AYt01SGDe-mgGiihjhsvR-rUlYkvTSaHSctfeYrjgXBxnIQuQ8RH6sDY-YmLV1CBJPYeKaEbDaOGGdgvROwBssRRjWN-b9zBwFC5L91vgcW9RTyalAQ4qqon9Rhd-wbtq_bstotlqyYS2aDoaVWfFEZeF2y6es_TmJke0plYOw6issqzATDvbuYsGy6tR_4Sqp1zESFbpIzOtDzzoU"
            referrerPolicy="no-referrer"
          />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-zinc-900 mb-2">#Design</h3>
            <p className="text-zinc-500 text-xs mb-4">42 Articles</p>
            <ArrowRight className="text-zinc-900 w-6 h-6" />
          </div>
        </div>
      </section>

      {/* Tag Cloud */}
      <section className="bg-zinc-50 rounded-[2rem] p-12">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-semibold tracking-tight">Index</h2>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-xs font-medium text-zinc-500 cursor-pointer border border-transparent hover:border-zinc-200 transition-all">
              <span>A-Z</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-x-4 gap-y-6">
          {tags.map((tag) => (
            <a 
              key={tag.name}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full text-zinc-600 text-sm font-medium transition-all hover:bg-zinc-900 hover:text-white active:scale-95 shadow-sm" 
              href="#"
            >
              #{tag.name} <span className="opacity-40 text-xs">{tag.count}</span>
            </a>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
