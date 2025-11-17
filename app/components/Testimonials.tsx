import AnimatedSection from "../components/AnimatedSection";

const TESTIMONIALS = [
  {
    quote:
      "They delivered beyond expectations. The site is fast, beautiful, and converts.",
    name: "Fatma A.",
    title: "CEO, Kisiwa Labs",
  },
  {
    quote:
      "A reliable partner who understands both design and engineering tradeoffs.",
    name: "John D.",
    title: "CTO, Orbit Health",
  },
];

export default function Testimonials() {
  return (
    <AnimatedSection id="testimonials" direction="right" className="container mx-auto px-4 py-16 md:py-24">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Testimonials</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {TESTIMONIALS.map((t, i) => (
          <figure
            key={i}
            className="rounded-xl border border-white/10 bg-white/5 p-6"
          >
            <blockquote className="text-white/90">“{t.quote}”</blockquote>
            <figcaption className="mt-4 text-sm text-white/60">
              — {t.name}, {t.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </AnimatedSection>
  );
}
