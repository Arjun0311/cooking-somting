import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is MindMirror free to use?",
    answer: "Yes. You can journal, track moods, and receive basic AI insights with the free plan.",
  },
  {
    question: "Is my journal private?",
    answer: "Absolutely. Your journal entries are securely stored and only accessible by you.",
  },
  {
    question: "How does AI analyze my journal?",
    answer: "MindMirror identifies emotional patterns and provides personalized reflections using AI.",
  },
  {
    question: "Can I access MindMirror on mobile?",
    answer: "Yes. MindMirror is fully responsive and works on phones, tablets, and desktops.",
  },
  {
    question: "Can I export my journal?",
    answer: "Yes. You'll be able to export your journal entries in future updates.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-slate-950 px-6 py-28">
      <div className="mx-auto max-w-4xl">

        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="mb-16 text-center"
        >
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            Frequently Asked
            <span className="block bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Everything you need to know before starting your mental wellness journey.
          </p>
        </motion.div>

        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-semibold text-white">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-violet-400" : "text-slate-400"
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{height:0,opacity:0}}
                      animate={{height:"auto",opacity:1}}
                      exit={{height:0,opacity:0}}
                      transition={{duration:.3}}
                    >
                      <p className="px-6 pb-6 leading-8 text-slate-400">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
