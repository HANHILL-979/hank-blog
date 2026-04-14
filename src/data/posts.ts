export interface Post {
  id: string;
  title: string;
  date: string;
  category: string;
  tags: string[];
  excerpt: string;
  content: string;
  image: string;
  author?: string;
}

export const posts: Post[] = [
  {
    id: 'opencode-antigravity-auth',
    title: 'Opencode Antigravity Auth 插件',
    date: '2026-03-30',
    category: '工具',
    tags: ['opencode', '插件', 'Google', 'OAuth', 'antigravity'],
    excerpt: '通过 Google OAuth 认证来访问 Antigravity 的配额，从而使用高级模型。',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcPAXrEO4MigOr-9Plczd3LQM5s-jLfakxtzb1PIvmJww7F9__y2cNHc7o2-NYyFxoghI6OTiNETdYfHDBTNXE9pHcORyiv5oxcBtUTjPEzI8SP5_9Ga2cTwyXgcCEd9XWv4LNUWOTKbLt5ZGaKneSBkYevZ8H94SHe4cfWBUlJJjr7CY7aYNGnFcr4vV40-v6rIkT-cuIhNa9RGzpCMKSUrNyjYcAGGGxqr4tM1Ut954t328jSl9MogDorhXK1uTw-bpOyMtoC6w',
    content: `在现代 AI 辅助开发中，获取稳定且高质量的模型访问至关重要。今天我要介绍一个实用的 Opencode 插件——**opencode-antigravity-auth**，它能让你通过 Google OAuth 认证来访问 Antigravity（Google 的 IDE）的配额，从而使用 Claude Opus 4.6、Gemini 3.1 Pro 等高级模型。`
  },
  {
    id: 'cet6-day-2',
    title: 'CET-6 Vocabulary Journal - Day 2',
    date: '2026-03-31',
    category: 'Foreign Language',
    tags: ['english', 'learning'],
    excerpt: 'Day 2 focuses on higher-level words that often appear in serious discussions.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzZmhE-6R79V2crpEoSQk9BVSZr3tM_xwjFSeayNm-Z6zUHigImZ_4TGtePVnV_iLdvry44ppZGPFxdDhVpJB74IGbsFVCFIBP4LYWQ1R3tqQPFrLfiqHFfz4-U63jp_KznGJAd_VP8y7wb5QMn2Jh78k4meSku-LTG8k_mVB2XOdq4eqZcEGtCLBPI2C5Vf10Kb5Yg8awzKagDmtGu0l8EjIT43od7KzJxj0QxGCl978jrtRNmF8MFJ6AIWISW_nbufryQ2FBqiQ',
    content: `This post continues my CET-6 vocabulary journal. Day 2 focuses on higher-level words that often appear in serious discussions, such as politics, education and social issues, as well as some useful vocabulary for academic writing.`
  },
  {
    id: 'obscure-love',
    title: 'Obscure Love - A Monologue',
    date: '2026-04-08',
    category: 'Thoughts',
    tags: ['life', 'thinking', 'love'],
    excerpt: 'Today, I cannot help but miss her. She stepped into my life and took my whole heart.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1XdGDB96dY3fHA7_WqKpCwyURcRDk0qx7KTjjRWuNL746Oz6u6-btxegUklh_4x9uKj5cB93NZ-V7xC9Agrn2A2IxlvpcuJNRwyHJsW4zQ2W7PVwUpIvUQ00pfBfyqMdPa8Aag70J0NDzT-aTfDuD6Pr3bX7qc_D7ZEsXJyZ-vRZAEdcP8jJAN2fFkjfAjoKwtoQ6Ffohj6OCCAkj82PAX-mjdjSbQVjPz0D3wvaWiPlXPgxcL6O-hRQhEJUYgt8SPBtk8eNOMbE',
    content: `Today, I cannot help but miss her. She stepped into my life and took my whole heart. The love I carry for her grows with every passing day.`
  },
  {
    id: 'architecture-resilience',
    title: 'The Architecture of Resilience',
    date: '2026-04-10',
    category: 'Architecture',
    tags: ['design', 'philosophy'],
    excerpt: 'Exploring the lifecycle of systems and the dynamics of oscillation in modern structures.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDtNkizfqswt_Dcl_AjwaI86DH-_KFBiwdvOd6fU3yegxZPsdWmzT4s2r_GstvunBfMSNLS5YPf6Uq5DT2eO_x-urEAqLo5sYoIaNtCqiSJ7HEfPdekZ4Zu-o0OsZhTOXaE7vjt0SKBlkAdOGbnBW5BD_3OdJL-Dr8fO8ZNA0y-YSRTxAX-eZYOT3DzjlMWR8oh3ueQM5uu2cp_qBd5bpEeCXA43g-HEmL_WEbxJ2klCpA2uElv_GyQ0wRrXI0ke8g7LZBJKE4yqs',
    content: `Every great innovation begins as an embryo—a fragile, undeveloped concept that contains the genetic blueprint for a future reality.`
  },
  {
    id: 'ai-dream',
    title: '从张雪到AI时代：一个普通人的梦想',
    date: '2026-03-31',
    category: 'Thoughts',
    tags: ['thinking', 'life', 'AI'],
    excerpt: '在我身上，我能看到很多中国企业、甚至整个商业世界里共同的气质：不服输、硬扛困难。',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeejvPC4TeHLk7iPXyCP_eKVtnOs7tp83FN9okEQAypiEHIqnWSvF6Syegt4Orb3Ga69SWFfiBXLBLnDxghtI3E-TyVjwQQfO5PWGgzDwdwL5mBbk5aaoql6JDXlJ_sCUpM8eTXQxp-g4Kw_XMtCJ_H1GmyprKQKKBCSWv2ta3ohE-o0OcZdJxfOrRAAJaf-rAtCwCTJEgkJWpmlYbEMEgqZQIOo-hP9yNanE8Q_CohezYdQIs2w0IByRKcGctEFePftylnCGI_f4',
    content: `今天看了张雪的故事，非常有震撼啊。People admire this founder — a man of humble, grassroots origins who remains deeply committed to technical excellence.`
  },
  {
    id: 'terminal-proxy',
    title: '终端接入大模型API的网络排坑记录',
    date: '2026-04-01',
    category: '技术笔记',
    tags: ['网络', '代理', 'Clash', 'TUN'],
    excerpt: '记录了完整的排查过程，包括使用 Proxifier 的尝试与踩坑，以及最终采用 Clash TUN 模式的解决方案。',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAT5f-PiXHMh-xO5oP0jDFlVQ-lReE2FnPRr9tQUNOWJHJrg3aRUfHYYlaJySNWH8nQfMvfMuBkD6xTU1-zkBSYkMz1KECe8Eq-9DGzCw_cVCLRb-jeOQDFEW8sUksN2vlKxIMKrHRqzMVhbsKAPL5_oXvySf8WuvH9Mmop0FI3XliJyuSaQR2k9kvs2-34Jnnx57TZTJwWfvSvnDP5WANSCrpVndsAuW8XzruFtVCOZ6f1hVcW2KsDRLS6GbG25H995BKaqkuEOWA',
    content: `日常开发中经常需要通过终端工具调用外部大模型 API。最近在使用 opencode 时遇到一个典型问题：浏览器能正常访问外网，但终端请求却持续报错。`
  }
];
