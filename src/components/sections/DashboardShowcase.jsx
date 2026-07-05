import { motion } from "framer-motion";
import { Activity, BrainCircuit, CalendarDays, TrendingUp } from "lucide-react";

const stats=[
{icon:Activity,label:"Emotion Score",value:"84%",color:"text-emerald-400"},
{icon:TrendingUp,label:"Weekly Growth",value:"+18%",color:"text-cyan-400"},
{icon:CalendarDays,label:"Journal Streak",value:"31 Days",color:"text-violet-400"},
];

export default function DashboardShowcase(){
return(
<section id="dashboard" className="bg-slate-950 px-6 py-28">
<div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

<motion.div initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
<span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">DASHBOARD</span>

<h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
Powerful AI
<span className="block bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
Insights at a Glance
</span>
</h2>

<p className="mt-6 text-lg leading-8 text-slate-400">
Track your emotional wellbeing, discover patterns and receive AI-powered reflections from every journal entry.
</p>

<div className="mt-10 space-y-5">
{stats.map((s)=>{
const Icon=s.icon;
return(
<div key={s.label} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
<div className="flex items-center gap-4">
<div className="rounded-xl bg-violet-500/10 p-3">
<Icon className={s.color} size={22}/>
</div>
<div>
<h3 className="font-semibold text-white">{s.label}</h3>
<p className="text-sm text-slate-400">Live Analytics</p>
</div>
</div>
<span className={`text-xl font-bold ${s.color}`}>{s.value}</span>
</div>
);
})}
</div>
</motion.div>

<motion.div initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
<div className="rounded-[32px] border border-white/10 bg-slate-900/70 p-6 shadow-2xl backdrop-blur-xl">

<div className="rounded-3xl bg-slate-800/70 p-6">
<p className="text-sm text-slate-400">Overall Wellness</p>
<h2 className="mt-3 text-6xl font-black text-emerald-400">84%</h2>

<div className="mt-6 h-3 rounded-full bg-slate-700 overflow-hidden">
<motion.div initial={{width:0}} whileInView={{width:"84%"}} viewport={{once:true}} transition={{duration:1}}
className="h-full rounded-full bg-gradient-to-r from-violet-600 to-cyan-400"/>
</div>
</div>

<div className="mt-6 rounded-3xl border border-violet-500/20 bg-violet-500/10 p-6">
<div className="flex items-center gap-3">
<BrainCircuit className="text-violet-400"/>
<h3 className="font-semibold text-white">AI Reflection</h3>
</div>

<p className="mt-4 leading-7 text-slate-300">
Your recent journal entries show improved emotional stability and increased positivity. Keep writing consistently to build stronger self-awareness.
</p>
</div>

</div>
</motion.div>

</div>
</section>
)}
