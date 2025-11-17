import Image from "next/image";
import AnimatedSection from "../components/AnimatedSection";

export default function About() {
  return (
    <AnimatedSection id="about" className="bg-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative rounded-lg overflow-hidden shadow-sm">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/aboutusimage.jpeg"
                alt="Team collaborating in modern office"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">Welcome to Our Site</h2>
            <p className="mt-3 text-neutral-600">
              We craft clean, modern and effective digital products. Our focus is on
              usability, performance and results. From branding to engineering, we
              deliver end‑to‑end solutions.
            </p>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              <Feature title="Our Mission" desc="Deliver quality and value with every project." />
              <Feature title="Our Vision" desc="Build products people love to use." />
              <Feature title="Our Objective" desc="Create measurable impact for clients." />
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-md border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="text-sm font-semibold text-neutral-900">{title}</div>
      <div className="mt-1 text-sm text-neutral-600">{desc}</div>
      <button className="mt-3 inline-flex items-center rounded-md border border-neutral-200 px-3 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50">
        Read More
      </button>
    </div>
  );
}
