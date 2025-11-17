import Image from "next/image";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

export default function Footer() {
  return (
    <AnimatedSection className="bg-neutral-50">
      <div className="container mx-auto px-4 py-14 text-sm text-neutral-600">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Image src="/logo.png" alt="Logo" width={140} height={36} className="h-9 w-auto" />
            <p className="mt-3 max-w-xs">We design and build modern websites and apps that convert and scale.</p>
            <div className="mt-4 flex items-center gap-3">
              <a href="#" aria-label="Twitter" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 hover:text-[var(--brand)]"><Twitter size={16} /></a>
              <a href="#" aria-label="LinkedIn" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 hover:text-[var(--brand)]"><Linkedin size={16} /></a>
              <a href="#" aria-label="Facebook" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 hover:text-[var(--brand)]"><Facebook size={16} /></a>
              <a href="#" aria-label="Email" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 hover:text-[var(--brand)]"><Mail size={16} /></a>
            </div>
          </div>

          <div>
            <div className="text-neutral-900 font-semibold">Company</div>
            <ul className="mt-3 space-y-2">
              <li><a href="#about" className="hover:text-neutral-900">About</a></li>
              <li><a href="#services" className="hover:text-neutral-900">Services</a></li>
              <li><a href="#portfolio" className="hover:text-neutral-900">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-neutral-900">Contact</a></li>
            </ul>
          </div>

          <div>
            <div className="text-neutral-900 font-semibold">Services</div>
            <ul className="mt-3 space-y-2">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Mobile Apps</li>
              <li>Performance & SEO</li>
            </ul>
          </div>

          <div>
            <div className="text-neutral-900 font-semibold">Contact</div>
            <ul className="mt-3 space-y-2">
              <li>1st Floor, Example Street</li>
              <li>Dar es Salaam</li>
              <li>+255 700 000 000</li>
              <li>hello@example.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 h-px bg-neutral-200" />
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div> {new Date().getFullYear()} Lanix. All rights reserved.</div>
          <div className="text-xs">Made with <span className="text-[var(--brand)]">♥</span> in Tanzania</div>
        </div>
      </div>
    </AnimatedSection>
  );
}
