import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Designer",
    text: "MindMirror helped me understand my emotions better. The AI insights are surprisingly accurate and genuinely useful.",
  },
  {
    name: "Arjun Patel",
    role: "Software Engineer",
    text: "Journaling every day has become effortless. I love the clean interface and the mood tracking dashboard.",
  },
  {
    name: "Emily Carter",
    role: "University Student",
    text: "The AI reflections motivate me to keep writing. It's like having a personal wellness companion.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-950 px-6 py-28">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            TESTIMONIALS
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            Loved by People
            <span className="block bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Around the World
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Join thousands building healthier habits with AI-powered journaling.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-violet-500/40"
            >
              <Quote className="mb-5 text-violet-400" size={34} />

              <div className="mb-5 flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="leading-8 text-slate-300">
                "{item.text}"
              </p>

              <div className="mt-8 border-t border-slate-800 pt-5">
                <h3 className="font-semibold text-white">{item.name}</h3>
                <p className="text-sm text-slate-400">{item.role}</p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
