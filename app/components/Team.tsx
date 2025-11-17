import AnimatedSection from "../components/AnimatedSection";
import Image from "next/image";
import { Linkedin, Twitter, Mail } from "lucide-react";

const TEAM = [
  {
    name: "Asha M.",
    role: "Design Lead",
    photo: "/profile.jpeg",
  },
  {
    name: "Daniel K.",
    role: "Frontend Engineer",
    photo: "/profile.jpeg",
  },
  {
    name: "Lina O.",
    role: "Product Manager",
    photo: "/profile.jpeg",
  },
  {
    name: "Peter N.",
    role: "Backend Engineer",
    photo: "/profile.jpeg",
  },
];

export default function Team() {
  return (
    <AnimatedSection id="team" className="container mx-auto px-4 py-16 md:py-24">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">Our Team</h2>
      <p className="mt-2 text-neutral-600">A multidisciplinary team aligned on outcomes.</p>

      <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {TEAM.map((m) => (
          <div
            key={m.name}
            className="group rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="relative mx-auto h-20 w-20">
              <Image
                src={m.photo}
                alt={m.name}
                fill
                className="rounded-full object-cover"
                sizes="80px"
              />
              <span className="absolute -bottom-1 -right-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--brand)] text-white text-xs shadow">
                {m.name.split(" ")[0][0]}
              </span>
            </div>
            <div className="mt-4 text-center">
              <div className="font-medium text-neutral-900">{m.name}</div>
              <div className="text-sm text-neutral-600">{m.role}</div>
            </div>
            <div className="mt-4 flex items-center justify-center gap-3 text-neutral-500">
              <a href="#" aria-label="LinkedIn" className="hover:text-[var(--brand)]"><Linkedin size={18} /></a>
              <a href="#" aria-label="Twitter" className="hover:text-[var(--brand)]"><Twitter size={18} /></a>
              <a href="#" aria-label="Email" className="hover:text-[var(--brand)]"><Mail size={18} /></a>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
