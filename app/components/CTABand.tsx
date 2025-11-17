import AnimatedSection from "../components/AnimatedSection";

export default function CTABand() {
  return (
    <AnimatedSection className="bg-[var(--brand)] text-[var(--brand-foreground)]">
      <div className="container mx-auto px-4 py-12 md:py-16 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Ready to grow your business?</h3>
        <p className="mt-2 opacity-90">Let’s build a site that looks great and performs even better.</p>
        <a
          href="#contact"
          className="mt-6 inline-block rounded-md bg-white px-5 py-2.5 font-medium text-neutral-900 shadow hover:bg-neutral-100"
        >
          Call To Action
        </a>
      </div>
    </AnimatedSection>
  );
}
