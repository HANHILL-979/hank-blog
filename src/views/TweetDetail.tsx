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
  HelpCircle
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
    <div className="min-h-screen bg-[#f9f9fb] flex">
      {/* SideNavBar */}
      <aside className="fixed left-0 top-16 h-[calc(100vh-64px)] w-72 bg-white border-r border-zinc-100 p-8 hidden lg:flex flex-col gap-y-8 z-40">
        <div>
          <h3 className="text-[10px] tracking-[0.2em] uppercase text-zinc-400 mb-2 font-bold">Reading Progress</h3>
          <p className="text-[#2d3338] font-bold text-lg">12 min read</p>
          <div className="w-full bg-zinc-100 h-1.5 mt-4 rounded-full overflow-hidden">
            <motion.div 
              className="bg-[#2d3338] h-full"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </div>

        <nav className="flex flex-col gap-2">
          {[
            { icon: Layout, label: 'Introduction', active: true },
            { icon: BarChart3, label: 'Analysis', active: false },
            { icon: Sparkles, label: 'Synthesis', active: false },
            { icon: CheckCircle2, label: 'Conclusion', active: false },
          ].map((item) => (
            <button 
              key={item.label}
              className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                item.active ? 'bg-zinc-100 text-[#2d3338] font-bold' : 'text-zinc-400 hover:bg-zinc-50 hover:text-zinc-600'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm tracking-tight">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-4">
          <button className="bg-gradient-to-br from-[#5f5e60] to-[#2d3338] text-white py-4 px-6 rounded-2xl flex items-center justify-center gap-3 text-sm font-bold shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
            <CreditCard className="w-4 h-4" />
            Generate Tweet Card
          </button>
          
          <div className="pt-6 mt-4 border-t border-zinc-100 flex flex-col gap-2">
            <button className="flex items-center gap-4 p-2 text-zinc-400 hover:text-zinc-900 transition-colors">
              <SettingsIcon className="w-4 h-4" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Settings</span>
            </button>
            <button className="flex items-center gap-4 p-2 text-zinc-400 hover:text-zinc-900 transition-colors">
              <HelpCircle className="w-4 h-4" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Help</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-0 lg:ml-72 pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          {/* Article Header */}
          <header className="mb-20">
            <div className="mb-10 flex items-center gap-6">
              <span className="bg-zinc-900 text-white text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-md">{post.category}</span>
              <span className="text-zinc-400 text-[10px] font-bold tracking-[0.2em] uppercase">{post.date}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#2d3338] leading-[1.05] mb-10">
              {post.title}.
            </h1>
            <p className="text-2xl text-zinc-500 font-light italic leading-relaxed border-l-4 border-zinc-200 pl-10 py-2">
              "Design is not just what it looks like and feels like. Design is how it works, and how it breathes within the landscape."
            </p>
          </header>

          {/* Hero Image */}
          <figure className="mb-20 -mx-6 md:-mx-12 lg:-mx-20 overflow-hidden rounded-3xl shadow-2xl">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full aspect-[21/9] object-cover hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
          </figure>

          {/* Content */}
          <article className="prose prose-zinc prose-xl max-w-none mb-32">
            <div className="text-zinc-600 leading-[1.8] font-light space-y-10">
              {post.content.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </article>

          {/* Luminous Canvas Section */}
          <section className="bg-zinc-100 rounded-[3rem] p-10 md:p-20 mb-32">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16">
              <div>
                <h2 className="text-4xl font-bold tracking-tight text-[#2d3338] mb-4">Curate the Moment</h2>
                <p className="text-zinc-500 text-lg font-light">Transform this insight into a Luminous Canvas card for your social gallery.</p>
              </div>
              <button className="bg-white text-[#2d3338] px-10 py-5 rounded-2xl flex items-center gap-4 text-sm font-bold shadow-sm hover:shadow-xl transition-all">
                <Share2 className="w-5 h-5" />
                Share Inspiration
              </button>
            </div>

            {/* Luminous Canvas Card */}
            <div className="relative group max-w-2xl mx-auto">
              <div className="absolute -inset-2 bg-gradient-to-r from-zinc-200 to-zinc-400 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-white/80 backdrop-blur-3xl rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/50 flex flex-col md:flex-row min-h-[450px]">
                {/* Visual Side */}
                <div className="w-full md:w-1/2 relative h-64 md:h-auto">
                  <img 
                    src={post.image} 
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-zinc-900/10 mix-blend-multiply"></div>
                </div>
                {/* Content Side */}
                <div className="w-full md:w-1/2 p-12 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center">
                        <Sparkles className="text-white w-5 h-5" />
                      </div>
                      <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-zinc-900">The Curator</div>
                    </div>
                    <Quote className="text-zinc-200 w-10 h-10" />
                  </div>
                  
                  <div className="my-10">
                    <blockquote className="text-2xl md:text-3xl font-bold leading-tight text-[#2d3338] tracking-tight mb-6">
                      "{post.excerpt}"
                    </blockquote>
                    <p className="text-[10px] text-zinc-400 font-bold tracking-[0.2em] uppercase">
                      {post.title}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-10 border-t border-zinc-100">
                    <span className="text-[10px] text-zinc-300 font-mono tracking-widest uppercase">ID: {post.id.toUpperCase()}</span>
                    <div className="flex gap-6">
                      <Heart className="w-5 h-5 text-zinc-300 hover:text-red-400 transition-colors cursor-pointer" />
                      <MessageSquare className="w-5 h-5 text-zinc-300 hover:text-blue-400 transition-colors cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-6">
              <button className="bg-[#2d3338] text-white px-12 py-5 rounded-2xl text-sm font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                Download Card
              </button>
              <button className="bg-white text-[#2d3338] px-12 py-5 rounded-2xl text-sm font-bold border border-zinc-100 hover:bg-zinc-50 transition-all">
                Copy Link
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
