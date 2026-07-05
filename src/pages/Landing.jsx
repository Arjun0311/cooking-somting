import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import DashboardShowcase from "../components/sections/DashboardShowcase";
import Testimonials from "../components/sections/Testimonials";
import FAQ from "../components/sections/FAQ";
import Footer from "../components/layout/Footer";

export default function Landing() {
  return (
    <main className="bg-slate-950 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <DashboardShowcase />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
