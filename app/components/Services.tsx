import AnimatedSection from "../components/AnimatedSection";
import { Code2, Palette, Rocket, ShieldCheck, Smartphone, Zap } from "lucide-react";

const SERVICES = [
  { icon: Palette, title: "Brand & UI Design", desc: "Visual identities and design systems that scale." },
  { icon: Code2, title: "Web Engineering", desc: "Robust full‑stack apps with modern architectures." },
  { icon: Smartphone, title: "Mobile", desc: "Cross‑platform apps that feel native and fast." },
  { icon: ShieldCheck, title: "Security", desc: "Best practices, audits, and compliance readiness." },
  { icon: Zap, title: "Performance", desc: "Speed optimizations and Core Web Vitals excellence." },
  { icon: Rocket, title: "Growth", desc: "Analytics, A/B testing, and iteration to impact." },
];

export default function Services() {
  return (
    <AnimatedSection id="services" direction="right" className="container mx-auto px-4 py-8 md:py-12">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">Services</h2>
      <p className="mt-2 text-neutral-600 max-w-2xl">End‑to‑end capabilities to launch and grow your product.</p>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SERVICES.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group rounded-xl border border-neutral-200 bg-white p-5 transition hover:shadow-sm"
          >
            <Icon className="h-6 w-6 text-[var(--brand)]" />
            <div className="mt-3 font-medium text-neutral-900">{title}</div>
            <div className="text-sm text-neutral-600 mt-1">{desc}</div>
            <div className="mt-4 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent opacity-0 group-hover:opacity-100 transition" />
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
