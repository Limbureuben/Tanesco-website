import AnimatedSection from "../components/AnimatedSection";
import Image from "next/image";

const PROJECTS = [
  {
    title: "Kinondoni Openspace Management",
    tag: "Web App",
    image: "/aruevent.png",
    description: "Platform to manage and monitor public open spaces for Kinondoni municipality.",
    client: "Enterprise",
    year: "2024",
  },
  {
    title: "House Management System",
    tag: "Web App",
    image: "/aruevent.png",
    description: "System for tracking tenants, payments, and maintenance for residential properties.",
    client: "Real Estate",
    year: "2025",
  },
  {
    title: "Jerusalem Children's Home",
    tag: "Web App",
    image: "/aruevent.png",
    description: "Digital presence and management tools for a children's home and donations.",
    client: "Non-Profit",
    year: "2025",
  },
];

export default function Portfolio() {
  return (
    <AnimatedSection 
      id="portfolio" 
      direction="left" 
      className="container mx-auto px-4 py-8 md:py-12"
    >
      <div className="flex items-end justify-between gap-4 mb-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
            Our Completed Projects
          </h2>
          <p className="mt-2 text-white/70 max-w-xl text-sm md:text-base">
            A selection of real solutions we’ve built for municipalities, real estate and non‑profits.
          </p>
        </div>
        <a 
          href="#contact" 
          className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors group"
        >
          Start a project 
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {PROJECTS.map((p) => (
          <article
            key={p.title}
            className="group rounded-xl border border-white/10 overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] hover:from-white/10 hover:to-white/5 backdrop-blur-sm shadow-lg hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-500 hover:-translate-y-2"
          >
            {/* Compact Image */}
            <div className="aspect-[2/1] relative overflow-hidden">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              
              {/* Floating year badge */}
              <span className="absolute top-3 right-3 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/20">
                {p.year}
              </span>
            </div>

            {/* Compact Content */}
            <div className="p-4">
              {/* Header with tag */}
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400">
                  {p.tag}
                </span>
                <div className="h-1 w-1 rounded-full bg-white/30" />
                <span className="text-[10px] font-medium uppercase tracking-wide text-white/50">
                  {p.client}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-bold text-base mb-1.5 group-hover:text-sky-400 transition-colors duration-300">
                {p.title}
              </h3>

              {/* Description - compact */}
              <p className="text-xs leading-relaxed text-white/60 line-clamp-2">
                {p.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}