import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';
import { ArrowRight, Search } from 'lucide-react';

export default function EssayPortal() {
  return (
    <div className="min-h-screen bg-[#f9f9fb] pt-32 pb-24">
      <main className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Header */}
        <header className="mb-20 max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-extrabold tracking-tighter mb-8 text-[#2d3338] leading-[1.05]"
          >
            Curated thoughts on the <span className="text-zinc-400">unseen.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[#596065] text-xl leading-relaxed font-light max-w-2xl"
          >
            A digital gallery for explorations in architectural philosophy, minimalist living, and the quiet geometry of our daily surroundings.
          </motion.p>
        </header>

        {/* Search & Filter Bar */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search essays..." 
              className="w-full bg-white border border-zinc-100 rounded-full pl-12 pr-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-200 transition-all shadow-sm"
            />
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
            {['All', 'Philosophy', 'Design', 'Technology', 'Life'].map((cat) => (
              <button key={cat} className="px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase bg-white border border-zinc-100 text-zinc-500 hover:text-zinc-900 hover:border-zinc-300 transition-all whitespace-nowrap">
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0px_30px_60px_rgba(45,51,56,0.08)] ${
                index % 3 === 1 ? 'lg:mt-12' : ''
              }`}
            >
              <Link to={`/essay/${post.id}`} className="block">
                <div className={`overflow-hidden ${
                  index % 4 === 0 ? 'aspect-[4/3]' : 
                  index % 4 === 1 ? 'aspect-[3/4]' :
                  index % 4 === 2 ? 'aspect-square' : 'aspect-[16/10]'
                }`}>
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-10">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">{post.category}</span>
                    <span className="text-[10px] font-medium text-zinc-400 uppercase tracking-wider">{post.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight mb-5 text-[#2d3338] group-hover:text-black transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-[#596065] leading-relaxed text-sm mb-8 font-light line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-[11px] font-bold tracking-widest uppercase text-zinc-900 group-hover:gap-3 transition-all">
                    READ ENTRY <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-24 flex justify-center">
          <button className="bg-[#2d3338] text-white px-12 py-5 rounded-xl text-xs font-bold tracking-[0.2em] uppercase hover:bg-black transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:translate-y-0">
            View More Essays
          </button>
        </div>
      </main>
    </div>
  );
}
