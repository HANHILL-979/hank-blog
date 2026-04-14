import { motion } from 'motion/react';
import { Brain, Users, Download, Mail } from 'lucide-react';

export default function Profile() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-screen-2xl mx-auto px-8"
    >
      {/* Hero Section */}
      <header className="relative pt-24 pb-12 md:pt-40 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 mb-8 bg-zinc-100 px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-zinc-900 animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">中共预备党员 | 海南大学</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-zinc-900 leading-[0.9] mb-8">
              黄其宏 <br />
              <span className="text-zinc-300">Huang Qihong.</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-light max-w-xl leading-relaxed">
              Ni parachute on my heart. 电子科学与技术专业，专注于系统集成与IC设计。
            </p>
          </div>
          <div className="md:col-span-5 relative group">
            <div className="aspect-[4/5] rounded-xl overflow-hidden bg-zinc-100 grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB61iG6Z2_ptTI2l2wfdgxchhB6St7dQTQ2TZyjNd237T-AqathyjTpw0Um7raCNVY3XqoH52v5L-28XAjuGjPjh1RSDSA2cgFTMiwUHlKJNp6k3Rqz8qzi13MALzq1uLE7HxkdWpH5xQDyeQXNM8Tzgb3-wz1FWYQMs61icl3uyIGzXWMmwgnCl3fwAc6CShA2DvYPM2xL24o9ulpyl7nPpzJjps1dfv2bT1brNyG5i_QWROXO9I2JGTjXZUh8D0hqmGl5Ych9iC0"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block">
              <div className="text-4xl font-bold text-zinc-900">3.8<span className="text-sm font-medium text-zinc-400 ml-1">/ 4.0</span></div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mt-1">GPA Academic Excellence</div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <section className="space-y-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-bold tracking-tight mb-4">核心身份与定位</h2>
            <div className="w-12 h-1 bg-zinc-900 mb-8"></div>
            <p className="text-zinc-500 leading-relaxed">
              作为一名中共预备党员与海南大学电子学子，我致力于将理论深度与工程实践完美融合。在高压环境下保持冷静，在复杂系统中寻找最优解。
            </p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-8 bg-zinc-50 rounded-xl">
              <div className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">Identity 01</div>
              <h3 className="text-xl font-bold mb-3">多维竞赛先锋</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">TI杯、IC设计等多项省级以上竞赛获奖经历，具备极强的突击攻关能力与技术敏感度。</p>
            </div>
            <div className="p-8 bg-zinc-50 rounded-xl">
              <div className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">Identity 02</div>
              <h3 className="text-xl font-bold mb-3">系统架构思维</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">从TPMS传感器融合到SoC芯片设计，具备全栈硬件系统开发经验与前瞻性技术视野。</p>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-2">深度项目复盘</h2>
              <p className="text-zinc-500">Editorial review of significant engineering milestones.</p>
            </div>
            <div className="text-xs font-bold uppercase tracking-widest text-zinc-900 border-b border-zinc-900 pb-1 cursor-pointer hover:opacity-70">
              View All Archives
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="TPMS 汽车胎压监测系统"
              desc="集成传感器数据融合算法，优化低功耗无线传输协议，实现高精度实时监测。在恶劣环境下保持0.1%数据漂移精度。"
              tags={['MCU', 'BLE 5.0']}
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuB19RvRE_VCFHquhXT-V0PtsTmXVy-PpFHr91Llibh8oaCNj5e2DHy0_VUgFOxXvnImrdJsrAu0gd7SSOy5ErZwYlue057SLztYSLH3BQuepQan5Pl4AHVl1dxjDNG5ZLQmVlGKAg2pBUhOKJ6BKXsMAwGTNPaIpG5aHwJUdl5lHTQtgAZ9Qo9AkWPlfRP7XLVWbVXO6hddcxxby_zyznr0ZTv4dJSl-dUexHLB7VznbxM9ElW4KeLfXoZm9hxRn2rHfxxJv-xBEK4"
            />
            <ProjectCard 
              title="IC Design 芯片设计实验"
              desc="基于180nm工艺的全加器与SRAM版图设计。完成从RTL到GDSII的完整流片准备流程，优化关键路径时延。"
              tags={['Verilog', 'Cadence']}
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuCfjyfeMZcNa-n6sghUGY-iFNJlk5VuScLBIJ_9f7idNQrBGZs9PqXmDj3vOqhKlJrKg2J70lw2omjnawl4e3we90jBR-aEUoFLsMz8EdQmmUoopNCAECELt51WIY9-UPXojr9OqO1DShPEOR06njsuAbVidgU_xmlsZBwPBiysaJVShuyrOktWB6AzP4T44VgoZEmPmYYWNiLbyCyvbIM3UBz3tWWaQW16LNxRGev9GuPnQLp0SRefQSBHHUN_h_I5fb2wYTqaOVk"
              className="lg:translate-y-12"
            />
            <ProjectCard 
              title="TI Cup 省级一等奖方案"
              desc="高速信号采集与处理系统。采用FPGA+MCU架构，成功解决400MHz宽带信号的实时解调与抗干扰难题。"
              tags={['FPGA', 'DSP']}
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuAdbtDrbxLUnWJSKit4pVCTTxTxeOnUDGgztN3uoi9IJIjEGXHI8ebtYZw321I9SeS_b9nlOLtAc5OxVE6Rdl9TCszWT0qDL3Yycx47K3fvOp0YeUKuQ9JsOUmFgFnujZAeUFibcd5OBEqwvR9USINy2rqjeEIJg5EugnXa9Kdmw8n6dM-krLs2gGqoZ4UdunrljwtVKFttmYEnQkS01-CHr3n0UideVfyylbKRZYqbUvvSvn2JNgBGzlRYuqtZb3zSeh_1yYliDAs"
            />
          </div>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 pt-24 border-t border-zinc-100">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-8">Technical Stack</h3>
            <div className="space-y-6">
              <SkillBar label="Embedded Development" level="Advanced" width="90%" />
              <SkillBar label="Analog/Digital IC" level="Proficient" width="85%" />
              <SkillBar label="System Integration" level="Expert" width="95%" />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-8">Comprehensive Quality</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <Brain className="text-zinc-900 w-6 h-6" />
                <div>
                  <h4 className="font-bold">抗压与自驱</h4>
                  <p className="text-sm text-zinc-500">在极端ddl下依然能保持高效产出，对前沿技术有近乎偏执的探索欲。</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Users className="text-zinc-900 w-6 h-6" />
                <div>
                  <h4 className="font-bold">团队协作力</h4>
                  <p className="text-sm text-zinc-500">多次担任竞赛队长，协调资源、把控进度，具备极强的沟通与共事能力。</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="py-32 text-center">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-12 opacity-10">THE DIGITAL CURATOR</h2>
          <p className="text-2xl font-light italic text-zinc-500 max-w-2xl mx-auto mb-12">
            "技术是理性的表达，设计是情感的寄托。在电子的丛林中寻找最纯粹的律动。"
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-zinc-900 text-white px-10 py-4 rounded-xl font-medium hover:bg-zinc-800 transition-all flex items-center gap-2">
              <Download className="w-4 h-4" /> Download CV
            </button>
            <button className="bg-zinc-100 text-zinc-900 px-10 py-4 rounded-xl font-medium hover:bg-zinc-200 transition-all flex items-center gap-2">
              <Mail className="w-4 h-4" /> Contact Me
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

function ProjectCard({ title, desc, tags, img, className = "" }: { title: string, desc: string, tags: string[], img: string, className?: string }) {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="aspect-video bg-zinc-100 mb-6 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
        <img className="w-full h-full object-cover" src={img} referrerPolicy="no-referrer" />
      </div>
      <span className="text-[10px] font-bold uppercase tracking-tighter text-zinc-400 mb-2">Project Archive</span>
      <h4 className="text-xl font-bold mb-3">{title}</h4>
      <p className="text-sm text-zinc-500 leading-relaxed mb-6">{desc}</p>
      <div className="mt-auto flex gap-3">
        {tags.map(tag => (
          <span key={tag} className="px-3 py-1 bg-zinc-100 text-[10px] font-medium rounded-full">{tag}</span>
        ))}
      </div>
    </div>
  );
}

function SkillBar({ label, level, width }: { label: string, level: string, width: string }) {
  return (
    <div className="group">
      <div className="flex justify-between mb-2">
        <span className="font-bold">{label}</span>
        <span className="text-xs text-zinc-400">{level}</span>
      </div>
      <div className="h-1 bg-zinc-100 overflow-hidden rounded-full">
        <div className="h-full bg-zinc-900 transition-all duration-1000 group-hover:bg-zinc-700" style={{ width }}></div>
      </div>
    </div>
  );
}
