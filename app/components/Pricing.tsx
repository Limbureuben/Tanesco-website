import AnimatedSection from "../components/AnimatedSection";

const PLANS = [
  {
    name: "Silver",
    price: "9.99",
    featured: false,
    features: ["Basic pages", "Email support", "Analytics"],
  },
  {
    name: "Gold",
    price: "19.99",
    featured: true,
    features: ["Everything in Silver", "Priority support", "A/B tests"],
  },
  {
    name: "Platinum",
    price: "29.99",
    featured: false,
    features: ["Everything in Gold", "Custom integrations", "SLA"],
  },
];

export default function Pricing() {
  return (
    <AnimatedSection id="pricing" className="bg-neutral-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">Our Pricing</h2>
        <p className="mt-2 text-neutral-600 max-w-2xl">Simple, transparent plans designed to scale with you.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {PLANS.map((p) => (
            <PlanCard key={p.name} {...p} />)
          )}
        </div>
      </div>
    </AnimatedSection>
  );
}

function PlanCard({ name, price, featured, features }: { name: string; price: string; featured: boolean; features: string[] }) {
  return (
    <div
      className={`rounded-xl border p-6 shadow-sm bg-white ${
        featured ? "border-[var(--brand)] ring-1 ring-[var(--brand)]" : "border-neutral-200"
      }`}
    >
      <div className="flex items-baseline gap-2">
        <div className={`text-sm ${featured ? "text-[var(--brand)]" : "text-neutral-500"}`}>{name}</div>
        <div className="ml-auto text-3xl font-semibold text-neutral-900">
          <span className="text-base align-top mr-1">$</span>
          {price}
        </div>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-neutral-600">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <span className={`mt-1 h-2 w-2 rounded-full ${featured ? "bg-[var(--brand)]" : "bg-neutral-300"}`} />
            {f}
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className={`mt-6 inline-flex w-full items-center justify-center rounded-md px-4 py-2 font-medium shadow ${
          featured ? "bg-[var(--brand)] text-white hover:opacity-90" : "border border-neutral-200 text-neutral-900 hover:bg-neutral-50"
        }`}
      >
        Choose {name}
      </a>
    </div>
  );
}
