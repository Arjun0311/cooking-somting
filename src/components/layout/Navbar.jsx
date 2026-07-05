import { useEffect, useState } from "react";
import { Menu, X, BrainCircuit, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Dashboard", href: "#dashboard" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled
        ? "border-b border-white/10 bg-slate-950/80 backdrop-blur-2xl shadow-lg shadow-black/20"
        : "bg-transparent"
    }`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="/" className="group flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 via-fuchsia-600 to-cyan-500 shadow-lg shadow-violet-600/30 transition duration-300 group-hover:scale-105">
            <BrainCircuit size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight text-white">MindMirror</h1>
            <p className="text-xs text-slate-400">AI Wellness Platform</p>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href}
              className="relative text-sm font-medium text-slate-300 transition hover:text-white after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-violet-400 after:transition-all hover:after:w-full">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button className="rounded-xl px-5 py-2.5 text-sm font-medium text-slate-300 hover:text-white">Login</button>
          <button className="group flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white">
            Get Started
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1"/>
          </button>
        </div>

        <button onClick={()=>setMenuOpen(!menuOpen)} className="lg:hidden rounded-xl p-2 text-white">
          {menuOpen ? <X size={28}/> : <Menu size={28}/>}
        </button>
      </div>

      <div className={`overflow-hidden transition-all duration-300 lg:hidden ${menuOpen?"max-h-96":"max-h-0"}`}>
        <div className="border-t border-white/10 bg-slate-950/95 backdrop-blur-xl px-6 py-6">
          {navLinks.map((link)=>(
            <a key={link.name} href={link.href} onClick={()=>setMenuOpen(false)}
              className="block rounded-xl px-4 py-4 text-slate-300 hover:bg-slate-900 hover:text-white">
              {link.name}
            </a>
          ))}
          <button className="mt-4 w-full rounded-xl border border-slate-700 py-3 text-slate-300">Login</button>
          <button className="mt-3 w-full rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 py-3 font-semibold text-white">Get Started</button>
        </div>
      </div>
    </header>
  );
}
