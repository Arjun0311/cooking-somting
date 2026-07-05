import { motion } from "framer-motion";
import {
  BrainCircuit,
  NotebookPen,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "AI Emotional Insights",
    description:
      "Receive intelligent emotional analysis and personalized reflections from your journal entries.",
  },
  {
    icon: NotebookPen,
    title: "Smart Journaling",
    description:
      "A distraction-free writing experience designed to build a consistent journaling habit.",
  },
  {
    icon: TrendingUp,
    title: "Mood Analytics",
    description:
      "Visualize emotional trends and discover how your mood evolves over time.",
  },
  {
    icon: ShieldCheck,
    title: "Private & Secure",
    description:
      "Your journal remains encrypted and accessible only to you.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-slate-950 px-6 py-28">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            FEATURES
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            Everything You Need
            <span className="block bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              To Grow Every Day
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            MindMirror combines AI, journaling and analytics into one beautiful experience.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-violet-500/40"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10">
                  <Icon size={30} className="text-violet-400 transition group-hover:scale-110" />
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {feature.description}
                </p>

                <div className="mt-8 text-sm font-medium text-violet-400">
                  Learn More →
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
