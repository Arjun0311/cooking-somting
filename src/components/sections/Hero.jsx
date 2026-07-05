import { motion } from "framer-motion";
import { ArrowRight,Sparkles,BrainCircuit,ShieldCheck,TrendingUp } from "lucide-react";

const bars=[35,48,42,64,58,82,95];

export default function Hero(){
return(
<section className="relative overflow-hidden bg-slate-950 pt-36 pb-28">
<div className="absolute inset-0 overflow-hidden">
<div className="absolute -left-40 -top-20 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[160px]"/>
<div className="absolute right-0 top-20 h-[420px] w-[420px] rounded-full bg-cyan-500/15 blur-[160px]"/>
<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:"linear-gradient(rgba(255,255,255,.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.8) 1px,transparent 1px)",backgroundSize:"42px 42px"}}/>
</div>

<div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.1fr_.9fr]">

<motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
<div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
<Sparkles size={16}/> AI Powered Emotional Intelligence
</div>

<h1 className="mt-8 text-5xl font-black leading-[1.05] text-white md:text-6xl xl:text-7xl">
Understand Yourself
<span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
One Journal at a Time
</span>
</h1>

<p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
Journal your thoughts, discover emotional patterns, and receive AI-powered insights while keeping your data private.
</p>

<div className="mt-10 flex flex-col gap-4 sm:flex-row">
<button className="group flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-4 font-semibold text-white hover:opacity-90">
Start Your Journey
<ArrowRight size={18} className="transition-transform group-hover:translate-x-1"/>
</button>

<button className="rounded-2xl border border-slate-700 bg-slate-900/50 px-8 py-4 text-slate-300 hover:border-violet-500 hover:text-white">
Learn More
</button>
</div>

<div className="mt-12 grid gap-4 sm:grid-cols-3">
{[
{I:ShieldCheck,t:"Private"},
{I:BrainCircuit,t:"AI Coach"},
{I:TrendingUp,t:"Mood Tracking"},
].map(({I,t})=>(
<div key={t} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
<I className="mb-3 text-violet-400" size={22}/>
<p className="font-medium text-white">{t}</p>
</div>
))}
</div>
</motion.div>

<motion.div initial={{opacity:0,x:40}} animate={{opacity:1,x:0}} transition={{duration:.7,delay:.2}}>
<div className="rounded-[32px] border border-white/10 bg-slate-900/70 p-6 shadow-2xl backdrop-blur-xl">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold text-white">MindMirror Dashboard</h3>
<span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs text-emerald-400">LIVE</span>
</div>

<div className="mt-6 rounded-3xl bg-slate-800/70 p-5">
<p className="text-sm text-slate-400">Today's Mood</p>
<h2 className="mt-2 text-5xl font-bold text-emerald-400">84%</h2>
<p className="mt-2 text-slate-300">😊 Calm & Focused</p>
</div>

<div className="mt-5 rounded-3xl bg-slate-800/70 p-5">
<p className="mb-4 text-sm text-slate-400">Weekly Trend</p>
<div className="flex h-28 items-end gap-2">
{bars.map((b,i)=><motion.div key={i} initial={{height:0}} animate={{height:`${b}%`}} transition={{delay:i*.08}} className="flex-1 rounded-t-xl bg-gradient-to-t from-violet-600 to-cyan-400"/>)}
</div>
</div>

<div className="mt-5 rounded-3xl bg-violet-500/10 p-5 border border-violet-500/20">
<h4 className="font-semibold text-violet-300">AI Reflection</h4>
<p className="mt-3 leading-7 text-slate-300">
You've maintained a positive emotional trend this week. Keep writing consistently.
</p>
</div>

</div>
</motion.div>

</div>
</section>
);
}
