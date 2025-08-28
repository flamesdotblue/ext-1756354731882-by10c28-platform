import Hero from './components/Hero';
import Programs from './components/Programs';
import WhyUs from './components/WhyUs';
import CTA from './components/CTA';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-[Inter]">
      <Hero />
      <Programs />
      <WhyUs />
      <CTA />
      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} AstraWay Travel Co. All rights reserved.
      </footer>
    </div>
  );
}
