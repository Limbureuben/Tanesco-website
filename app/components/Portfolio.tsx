import AnimatedSection from "../components/AnimatedSection";
import Image from "next/image";

const PROJECTS = [
  {
    title: "Nova CMS",
    tag: "Web App",
    image: "/completedwork.jpeg",
  },
  {
    title: "Atlas Mobile",
    tag: "Mobile",
    image: "/completedwork.jpeg",
  },
  {
    title: "Pulse Analytics",
    tag: "Dashboard",
    image: "/completedwork.jpeg",
  },
];

export default function Portfolio() {
  return (
    <AnimatedSection id="portfolio" direction="left" className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Completed projects</h2>
          <p className="mt-3 text-white/70 max-w-xl">A showcase of our successfully delivered solutions across web, mobile, and analytics.</p>
        </div>
        <a href="#contact" className="hidden md:inline-flex text-sm text-sky-400 hover:text-sky-300">Start a project →</a>
      </div>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {PROJECTS.map((p) => (
          <article
            key={p.title}
            className="group rounded-2xl border border-white/10 overflow-hidden bg-white/5 hover:bg-white/10 shadow-lg/30 hover:shadow-xl transition-transform transition-shadow duration-300 transform hover:-translate-y-1"
          >
            <div className="aspect-video relative">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover opacity-90 group-hover:opacity-100 transition-transform duration-300 group-hover:scale-[1.03]"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
            <div className="p-4">
              <div className="text-xs uppercase tracking-wide text-white/60">{p.tag}</div>
              <h3 className="mt-1 font-semibold text-lg">{p.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
