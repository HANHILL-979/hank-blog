export default function Footer() {
  return (
    <footer className="w-full py-12 px-8 bg-[#f9f9fb] flex flex-col items-center gap-6 border-t border-zinc-100 font-sans text-[10px] tracking-widest uppercase">
      <div className="flex flex-wrap justify-center gap-8">
        <FooterLink label="Privacy Policy" />
        <FooterLink label="Terms of Service" />
        <FooterLink label="RSS Feed" />
        <FooterLink label="Contact" />
      </div>
      <p className="text-zinc-400">© 2024 Digital Curator Editorial. All rights reserved.</p>
    </footer>
  );
}

function FooterLink({ label }: { label: string }) {
  return (
    <a className="text-zinc-500 hover:text-zinc-900 hover:underline decoration-zinc-300 transition-opacity" href="#">
      {label}
    </a>
  );
}
