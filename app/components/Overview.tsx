import AnimatedSection from "../components/AnimatedSection";

export default function Overview() {
  return (
    <AnimatedSection id="overview" className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">Who we are</h2>
          <p className="mt-3 text-neutral-600">
            We are a team of designers and engineers dedicated to crafting delightful digital products.
            Our approach blends strategy, design, and engineering to ship dependable experiences.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Stat kpi="8+" label="Years experience" />
          <Stat kpi="50+" label="Projects delivered" />
          <Stat kpi="98%" label="Client satisfaction" />
        </div>
      </div>
    </AnimatedSection>
  );
}

function Stat({ kpi, label }: { kpi: string; label: string }) {
  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-4 text-center">
      <div className="text-2xl font-semibold text-neutral-900">{kpi}</div>
      <div className="text-xs text-neutral-600 mt-1">{label}</div>
    </div>
  );
}

