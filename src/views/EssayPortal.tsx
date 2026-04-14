import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';
import { ArrowRight, Search, Share2, Bookmark, Heart } from 'lucide-react';

export default function EssayPortal() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] pt-24 pb-20 antialiased">
      <main className="max-w-7xl mx-auto px-6 w-full">
        {/* Header */}
        <header className="mb-12 max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold tracking-[-0.022em] mb-4 text-[#1d1d1f] leading-[1.1]"
          >
            Curated thoughts on the <span className="text-[#86868b]/40">unseen.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[#86868b] text-lg md:text-xl font-normal leading-snug max-w-xl"
          >
            A digital gallery for explorations in architectural philosophy and the quiet geometry of our daily surroundings.
          </motion.p>
        </header>

        {/* Refined Apple-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {posts.map((post, index) => {
            // Define layout patterns based on index
            const isFeature = index === 0;
            const colSpan = isFeature ? 'md:col-span-8' : 'md:col-span-4';
            
            return (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className={`${colSpan} group relative bg-white rounded-[2.5rem] overflow-hidden shadow-[0_4px_24px_-1px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.12)] transition-all duration-500 border border-black/5 flex flex-col ${isFeature ? 'md:flex-row' : ''}`}
              >
                <Link to={`/essay/${post.id}`} className={`flex h-full w-full ${isFeature ? 'flex-col md:flex-row' : 'flex-col'}`}>
                  <div className={`${isFeature ? 'md:w-1/2 aspect-square md:aspect-auto' : 'aspect-[4/3]'} overflow-hidden`}>
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className={`p-8 md:p-10 ${isFeature ? 'md:w-1/2' : ''} flex flex-col justify-center`}>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-[0.05em] text-[#86868b]/70">{post.category}</span>
                      <span className="w-1 h-1 rounded-full bg-[#86868b]/30"></span>
                      <span className="text-[11px] font-medium text-[#86868b]/70">{post.date.split('-').slice(1).join('/')}</span>
                    </div>
                    <h2 className={`${isFeature ? 'text-2xl md:text-3xl' : 'text-xl'} font-bold tracking-[-0.022em] mb-4 leading-tight text-[#1d1d1f]`}>
                      {post.title}
                    </h2>
                    <p className="text-[#86868b] leading-relaxed text-[14px] mb-8 font-normal line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="bg-[#1d1d1f] text-white px-5 py-2 rounded-full text-[13px] font-semibold hover:bg-black transition-colors flex items-center gap-2">
                        Read Entry <ArrowRight className="w-4 h-4" />
                      </div>
                      <div className="flex gap-2">
                        <button className="text-[#86868b] hover:text-[#1d1d1f] transition-colors p-2 bg-black/5 rounded-full">
                          <Share2 className="w-4 h-4" />
                        </button>
                        <button className="text-[#86868b] hover:text-[#1d1d1f] transition-colors p-2 bg-black/5 rounded-full">
                          <Bookmark className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>

        {/* Apple-style "View More" */}
        <div className="mt-16 flex justify-center">
          <button className="bg-white border border-black/10 text-[#1d1d1f] px-8 py-3 rounded-full text-[14px] font-semibold hover:bg-black hover:text-white transition-all duration-300 shadow-[0_4px_24px_-1px_rgba(0,0,0,0.04)]">
            View All Essays
          </button>
        </div>
      </main>
    </div>
  );
}
