import {
  BrainCircuit,
  Globe,
  Mail,
  Phone,
  User,
} from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-slate-800 bg-slate-950 px-6 py-16">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-4">

        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500">
              <BrainCircuit className="text-white" size={24} />
            </div>

            <div>
              <h2 className="text-xl font-bold text-white">MindMirror</h2>
              <p className="text-sm text-slate-400">AI Wellness Platform</p>
            </div>
          </div>

          <p className="mt-6 leading-7 text-slate-400">
            Understand your emotions, build healthier habits, and grow every day with AI-powered journaling.
          </p>
        </div>

        <div>
          <h3 className="mb-5 font-semibold text-white">Product</h3>

          <ul className="space-y-3 text-slate-400">
            <li><a href="#features" className="hover:text-white">Features</a></li>
            <li><a href="#dashboard" className="hover:text-white">Dashboard</a></li>
            <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-semibold text-white">Company</h3>

          <ul className="space-y-3 text-slate-400">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white">Support</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-semibold text-white">Connect</h3>

          <div className="flex gap-4">
            {[Globe, User, Mail, Phone].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="rounded-xl bg-slate-900 p-3 text-slate-300 transition hover:bg-violet-600 hover:text-white"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          <p className="mt-8 text-sm text-slate-500">
            © 2026 MindMirror AI. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
