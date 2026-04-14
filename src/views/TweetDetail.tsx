import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/posts';
import { useEffect, useState } from 'react';
import { 
  Layout, 
  BarChart3, 
  Sparkles, 
  CheckCircle2, 
  CreditCard, 
  Share2, 
  Quote, 
  Heart, 
  MessageSquare,
  Settings as SettingsIcon,
  HelpCircle,
  ArrowLeft,
  Bookmark,
  Download,
  Copy
} from 'lucide-react';

export default function TweetDetail() {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!post) return <div className="pt-32 px-12">Post not found</div>;

  return (
    <div className="min-h-screen bg-[#f5f5f7] antialiased">
      {/* Progress Bar */}
      <div className="fixed top-16 left-0 w-full h-1 z-50 bg-black/5">
        <motion.div 
          className="bg-[#1d1d1f] h-full"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <main className="max-w-4xl mx-auto pt-32 pb-24 px-6">
        {/* Back Navigation */}
        <Link to="/essays" className="inline-flex items-center gap-2 text-[#86868b] hover:text-[#1d1d1f] transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="text-sm font-medium">Back to Essays</span>
        </Link>

        {/* Article Header */}
        <header className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="bg-[#1d1d1f] text-white text-[10px] font-bold tracking-[0.05em] uppercase px-2 py-1 rounded-md">{post.category}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-black/10"></span>
            <span className="text-[#86868b] text-[10px] font-bold tracking-[0.05em] uppercase">{post.date}</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-[-0.022em] text-[#1d1d1f] leading-[1.1] mb-10"
          >
            {post.title}
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center overflow-hidden">
                <img src="https://lh3.googleusercontent.com/a/ACg8ocL_p_v_p_p_p_p_p_p_p_p_p_p_p_p_p_p_p_p_p_p_p_p=s96-c" alt="Author" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#1d1d1f]">Huang Qihong</p>
                <p className="text-[11px] text-[#86868b] font-medium uppercase tracking-wider">The Curator</p>
              </div>
            </div>
            <div className="h-8 w-[1px] bg-black/5"></div>
            <div className="flex gap-4">
              <button className="text-[#86868b] hover:text-[#1d1d1f] transition-colors"><Share2 className="w-4 h-4" /></button>
              <button className="text-[#86868b] hover:text-[#1d1d1f] transition-colors"><Bookmark className="w-4 h-4" /></button>
            </div>
          </motion.div>
        </header>

        {/* Hero Image */}
        <motion.figure 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-16 -mx-6 md:-mx-12 overflow-hidden rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
        >
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full aspect-[16/9] object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.figure>

        {/* Content */}
        <article className="max-w-3xl mx-auto mb-24">
          <div className="text-[#1d1d1f] text-lg md:text-xl leading-[1.6] font-normal space-y-8 tracking-[-0.011em]">
            {post.content.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </article>

        {/* Luminous Canvas Section */}
        <section className="bg-white rounded-[3rem] p-8 md:p-16 mb-24 shadow-[0_4px_24px_-1px_rgba(0,0,0,0.04)] border border-black/5">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-[-0.022em] text-[#1d1d1f] mb-2">Curate the Moment</h2>
              <p className="text-[#86868b] text-base font-normal">Transform this insight into a Luminous Canvas card.</p>
            </div>
            <button className="bg-[#f5f5f7] text-[#1d1d1f] px-8 py-4 rounded-2xl flex items-center gap-3 text-sm font-bold hover:bg-zinc-200 transition-all">
              <Share2 className="w-4 h-4" />
              Share Inspiration
            </button>
          </div>

          {/* Luminous Canvas Card - Apple Style */}
          <div className="relative group max-w-xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-zinc-100 to-zinc-200 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-[#fbfbfd] rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.12)] border border-black/5 flex flex-col min-h-[400px]">
              {/* Visual Side */}
              <div className="w-full h-48 relative">
                <img 
                  src={post.image} 
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/5 mix-blend-multiply"></div>
              </div>
              {/* Content Side */}
              <div className="p-10 flex flex-col justify-between flex-grow">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#1d1d1f] flex items-center justify-center">
                      <Sparkles className="text-white w-4 h-4" />
                    </div>
                    <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-[#1d1d1f]">The Curator</div>
                  </div>
                  <Quote className="text-black/5 w-8 h-8" />
                </div>
                
                <div className="my-8">
                  <blockquote className="text-xl md:text-2xl font-bold leading-tight text-[#1d1d1f] tracking-[-0.022em] mb-4">
                    "{post.excerpt}"
                  </blockquote>
                  <p className="text-[10px] text-[#86868b] font-bold tracking-[0.05em] uppercase">
                    {post.title}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-8 border-t border-black/5">
                  <span className="text-[10px] text-[#86868b]/40 font-mono tracking-widest uppercase">ID: {post.id.toUpperCase()}</span>
                  <div className="flex gap-4">
                    <Heart className="w-4 h-4 text-[#86868b] hover:text-red-500 transition-colors cursor-pointer" />
                    <MessageSquare className="w-4 h-4 text-[#86868b] hover:text-blue-500 transition-colors cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <button className="bg-[#1d1d1f] text-white px-10 py-4 rounded-2xl text-sm font-bold shadow-lg hover:bg-black transition-all flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download Card
            </button>
            <button className="bg-white text-[#1d1d1f] px-10 py-4 rounded-2xl text-sm font-bold border border-black/10 hover:bg-[#f5f5f7] transition-all flex items-center gap-2">
              <Copy className="w-4 h-4" />
              Copy Link
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
