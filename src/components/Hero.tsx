import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="mb-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative group cursor-pointer overflow-hidden rounded-[2rem] bg-white shadow-[0_40px_80px_rgba(0,0,0,0.03)]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 p-10 lg:p-16 z-10 flex flex-col justify-center">
            <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase mb-6 block">Featured Essay</span>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter text-zinc-900 mb-8 leading-[1.05] -ml-1">
              Architecture of Resilience
            </h1>
            <p className="text-lg text-zinc-500 leading-relaxed mb-10 max-w-md">
              Exploring the symbiotic relationship between structural permanence and the ephemeral nature of urban existence.
            </p>
            <div className="flex items-center gap-6">
              <button className="px-8 py-3 bg-zinc-900 text-white rounded-full font-medium transition-transform active:scale-95 hover:bg-zinc-800">
                Read Essay
              </button>
              <span className="text-sm text-zinc-400 font-medium tracking-tight">12 Min Read</span>
            </div>
          </div>
          <div className="lg:col-span-7 h-[500px] lg:h-[700px] relative overflow-hidden">
            <img 
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-110 hover:grayscale-0 transition-all duration-700 ease-out scale-105 group-hover:scale-100" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDtNkizfqswt_Dcl_AjwaI86DH-_KFBiwdvOd6fU3yegxZPsdWmzT4s2r_GstvunBfMSNLS5YPf6Uq5DT2eO_x-urEAqLo5sYoIaNtCqiSJ7HEfPdekZ4Zu-o0OsZhTOXaE7vjt0SKBlkAdOGbnBW5BD_3OdJL-Dr8fO8ZNA0y-YSRTxAX-eZYOT3DzjlMWR8oh3ueQM5uu2cp_qBd5bpEeCXA43g-HEmL_WEbxJ2klCpA2uElv_GyQ0wRrXI0ke8g7LZBJKE4yqs"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent hidden lg:block"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
