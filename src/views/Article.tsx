import { motion } from 'motion/react';
import { Share2, Bookmark, Link as LinkIcon, Copy, Sparkles, ShieldCheck, Zap, AlertTriangle, Layers, Cpu } from 'lucide-react';
import { useEffect, useState, ReactNode } from 'react';

export default function Article() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-8"
    >
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full z-[60]">
        <div 
          className="h-0.5 bg-zinc-900 transition-all duration-100 ease-out" 
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Article Header */}
      <header className="pt-16 md:pt-24 mb-12">
        <div className="mb-6 flex gap-2">
          <span className="bg-zinc-100 text-zinc-500 text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border border-zinc-200/50">
            工具
          </span>
          <span className="bg-zinc-100 text-zinc-500 text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border border-zinc-200/50">
            开发环境
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-zinc-900 tracking-tighter leading-[0.95] mb-12">
          Opencode Antigravity <br />
          <span className="text-zinc-400">Auth 插件.</span>
        </h1>
        
        <div className="flex flex-wrap items-center gap-8 py-6 border-t border-zinc-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-zinc-200 overflow-hidden ring-2 ring-zinc-50 ring-offset-2">
              <img 
                alt="Author" 
                className="w-full h-full object-cover" 
                src="/avatar.jpg"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-zinc-900">Curator Editorial</p>
              <p className="text-xs text-zinc-500">Tech & Tools Division</p>
            </div>
          </div>
          <div className="h-8 border-l border-zinc-100 hidden sm:block"></div>
          <div>
            <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mb-0.5">Published</p>
            <p className="text-sm text-zinc-500">Mar 30, 2026</p>
          </div>
          <div className="h-8 border-l border-zinc-100 hidden sm:block"></div>
          <div>
            <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mb-0.5">Reading Time</p>
            <p className="text-sm text-zinc-500">10 min read</p>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="mb-20 w-full aspect-[21/10] rounded-2xl overflow-hidden shadow-2xl relative">
        <img 
          alt="Physics Visualization" 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[2s] ease-out" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcPAXrEO4MigOr-9Plczd3LQM5s-jLfakxtzb1PIvmJww7F9__y2cNHc7o2-NYyFxoghI6OTiNETdYfHDBTNXE9pHcORyiv5oxcBtUTjPEzI8SP5_9Ga2cTwyXgcCEd9XWv4LNUWOTKbLt5ZGaKneSBkYevZ8H94SHe4cfWBUlJJjr7CY7aYNGnFcr4vV40-v6rIkT-cuIhNa9RGzpCMKSUrNyjYcAGGGxqr4tM1Ut954t328jSl9MogDorhXK1uTw-bpOyMtoC6w"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 pb-32">
        {/* Sidebar Meta */}
        <aside className="hidden md:block md:col-span-3 sticky top-32 h-fit space-y-16">
          <nav>
            <h4 className="text-[10px] font-bold tracking-[0.25em] uppercase text-zinc-400 mb-8">Table of Contents</h4>
            <ul className="space-y-6 text-sm">
              <li><a className="text-zinc-900 font-semibold border-l-2 border-zinc-900 pl-4" href="#intro">主要功能</a></li>
              <li><a className="text-zinc-500 hover:text-zinc-900 pl-4 border-l-2 border-transparent transition-all" href="#install">安装步骤</a></li>
              <li><a className="text-zinc-500 hover:text-zinc-900 pl-4 border-l-2 border-transparent transition-all" href="#models">模型参考</a></li>
              <li><a className="text-zinc-500 hover:text-zinc-900 pl-4 border-l-2 border-transparent transition-all" href="#config">配置示例</a></li>
              <li><a className="text-zinc-500 hover:text-zinc-900 pl-4 border-l-2 border-transparent transition-all" href="#troubleshoot">故障排除</a></li>
              <li><a className="text-zinc-500 hover:text-zinc-900 pl-4 border-l-2 border-transparent transition-all" href="#warning">重要警告</a></li>
            </ul>
          </nav>
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.25em] uppercase text-zinc-400 mb-6">Share</h4>
            <div className="flex gap-5">
              <Share2 className="text-zinc-400 cursor-pointer hover:text-zinc-900 transition-colors w-5 h-5" />
              <Bookmark className="text-zinc-400 cursor-pointer hover:text-zinc-900 transition-colors w-5 h-5" />
              <LinkIcon className="text-zinc-400 cursor-pointer hover:text-zinc-900 transition-colors w-5 h-5" />
            </div>
          </div>
        </aside>

        {/* Body Text */}
        <div className="md:col-span-9 space-y-16">
          <section id="intro">
            <p className="text-[1.375rem] leading-[1.7] text-zinc-600 font-light">
              在现代 AI 辅助开发中，获取稳定且高质量的模型访问至关重要。今天我要介绍一个实用的 Opencode 插件——<span className="text-zinc-900 font-medium">opencode-antigravity-auth</span>，它能让你通过 Google OAuth 认证来访问 Antigravity（Google 的 IDE）的配额，从而使用 Claude Opus 4.6、Gemini 3.1 Pro 等高级模型。
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-12">
              <FeatureCard 
                icon={<Zap className="w-6 h-6" />}
                title="多模型支持"
                desc="通过 Google OAuth 访问 Claude Opus 4.6、Sonnet 4.6 和 Gemini 3.1 Pro/Flash"
              />
              <FeatureCard 
                icon={<Layers className="w-6 h-6" />}
                title="多账户管理"
                desc="支持添加多个 Google 账户，配额耗尽时自动轮换"
              />
              <FeatureCard 
                icon={<Sparkles className="w-6 h-6" />}
                title="思维模型支持"
                desc="支持 Claude 和 Gemini 3 的扩展思维功能，可配置思维预算"
              />
              <FeatureCard 
                icon={<ShieldCheck className="w-6 h-6" />}
                title="自动恢复"
                desc="自动处理会话错误和工具故障，保证开发连续性"
              />
            </div>
          </section>

          <section id="install" className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900">安装步骤</h2>
            <div className="space-y-6">
              <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100">
                <h3 className="font-bold text-zinc-900 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-zinc-900 text-white text-[10px] flex items-center justify-center">1</span>
                  自动安装（推荐）
                </h3>
                <p className="text-sm text-zinc-500 mb-4">将以下命令粘贴到任何 LLM 代理（Claude Code、OpenCode、Cursor 等）中：</p>
                <div className="bg-zinc-900 p-4 rounded-xl font-mono text-xs text-zinc-300 overflow-x-auto">
                  <code>Install the opencode-antigravity-auth plugin and add the Antigravity model definitions to ~/.config/opencode/opencode.json by following: https://raw.githubusercontent.com/NoeFabris/opencode-antigravity-auth/dev/README.md</code>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm">
                <h3 className="font-bold text-zinc-900 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-zinc-200 text-zinc-900 text-[10px] flex items-center justify-center">2</span>
                  手动安装
                </h3>
                <ol className="list-decimal list-inside space-y-4 text-sm text-zinc-600">
                  <li>在 <code className="bg-zinc-100 px-1 rounded">~/.config/opencode/opencode.json</code> 中添加插件配置。</li>
                  <li>运行 <code className="bg-zinc-100 px-1 rounded">opencode auth login</code> 登录 Google 账户。</li>
                  <li>选择 "Configure models in opencode.json" 自动配置所有模型。</li>
                </ol>
              </div>
            </div>
          </section>

          <section id="models" className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900">模型参考</h2>
            <div className="overflow-hidden rounded-2xl border border-zinc-100">
              <table className="w-full text-sm text-left">
                <thead className="bg-zinc-50 text-zinc-500 uppercase text-[10px] font-bold tracking-widest">
                  <tr>
                    <th className="px-6 py-4">模型</th>
                    <th className="px-6 py-4">变体</th>
                    <th className="px-6 py-4">说明</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  <TableRow model="antigravity-gemini-3-pro" variant="low, high" desc="Gemini 3 Pro 支持思维" />
                  <TableRow model="antigravity-gemini-3-flash" variant="min, low, med, high" desc="Gemini 3 Flash 支持思维" />
                  <TableRow model="antigravity-claude-sonnet-4-6" variant="—" desc="Claude Sonnet 4.6" />
                  <TableRow model="antigravity-claude-opus-4-6-thinking" variant="low, max" desc="Claude Opus 4.6 支持扩展思维" />
                </tbody>
              </table>
            </div>
          </section>

          <section id="config" className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900">完整配置示例</h2>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden relative group">
              <div className="flex items-center justify-between px-6 py-4 bg-zinc-800/50 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                  <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                  <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold ml-4">opencode.json</span>
                </div>
                <button className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 hover:text-white transition-colors uppercase tracking-widest">
                  <Copy className="w-3 h-3" />
                  <span>Copy</span>
                </button>
              </div>
              <div className="p-8 overflow-x-auto">
                <pre className="font-mono text-sm leading-relaxed text-zinc-300">
                  <code>{`{
  "plugin": ["opencode-antigravity-auth@latest"],
  "provider": {
    "google": {
      "models": {
        "antigravity-gemini-3-pro": {
          "name": "Gemini 3 Pro (Antigravity)",
          "variants": {
            "low": { "thinkingLevel": "low" },
            "high": { "thinkingLevel": "high" }
          }
        },
        "antigravity-claude-opus-4-6-thinking": {
          "name": "Claude Opus 4.6 Thinking (Antigravity)",
          "variants": {
            "low": { "thinkingConfig": { "thinkingBudget": 8192 } },
            "max": { "thinkingConfig": { "thinkingBudget": 32768 } }
          }
        }
      }
    }
  }
}`}</code>
                </pre>
              </div>
            </div>
          </section>

          <section id="troubleshoot" className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900">故障排除</h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-100 flex items-start gap-4">
                <Cpu className="w-5 h-5 text-zinc-900 mt-1" />
                <div>
                  <h4 className="font-bold text-zinc-900">快速重置</h4>
                  <p className="text-sm text-zinc-500">大多数问题可以通过删除账户文件并重新登录解决：<code className="bg-zinc-200 px-1 rounded ml-1">rm ~/.config/opencode/antigravity-accounts.json</code></p>
                </div>
              </div>
              <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-100 flex items-start gap-4">
                <AlertTriangle className="w-5 h-5 text-zinc-900 mt-1" />
                <div>
                  <h4 className="font-bold text-zinc-900">常见错误</h4>
                  <p className="text-sm text-zinc-500">403 权限拒绝通常是因为需要在 Google Cloud Console 中启用 Gemini for Google Cloud API。</p>
                </div>
              </div>
            </div>
          </section>

          <section id="warning" className="p-10 bg-red-50 border border-red-100 rounded-2xl space-y-4">
            <div className="flex items-center gap-3 text-red-600">
              <AlertTriangle className="w-6 h-6" />
              <h2 className="text-2xl font-bold tracking-tight">重要警告</h2>
            </div>
            <p className="text-red-700/80 leading-relaxed font-medium">
              使用此插件可能违反 Google 的服务条款。一些用户报告了他们的 Google 账户被禁止或影子禁止（无明确通知的限制访问）。
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-red-700/70">
              <li>这是一个未经 Google 认可的非官方工具</li>
              <li>你的账户可能被暂停或永久禁止</li>
              <li>你需要承担使用此插件的所有风险</li>
            </ul>
          </section>

          <footer className="pt-16 border-t border-zinc-100">
            <div className="bg-zinc-900 p-10 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <h4 className="text-xl font-bold text-white mb-2">想要了解更多？</h4>
                <p className="text-zinc-400">访问 GitHub 仓库获取最新更新和社区支持。</p>
              </div>
              <button className="bg-white text-zinc-900 px-8 py-4 rounded-full font-bold text-sm hover:bg-zinc-200 active:scale-[0.98] transition-all shrink-0">
                访问 GitHub
              </button>
            </div>
          </footer>
        </div>
      </div>
    </motion.div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-zinc-50 p-8 rounded-2xl flex flex-col justify-between h-52 border border-zinc-100 hover:bg-zinc-100 transition-colors">
      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-zinc-900 text-lg">{title}</h3>
        <p className="text-sm text-zinc-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function TableRow({ model, variant, desc }: { model: string, variant: string, desc: string }) {
  return (
    <tr className="hover:bg-zinc-50 transition-colors">
      <td className="px-6 py-4 font-mono text-xs text-zinc-900">{model}</td>
      <td className="px-6 py-4 text-zinc-500">{variant}</td>
      <td className="px-6 py-4 text-zinc-600">{desc}</td>
    </tr>
  );
}
