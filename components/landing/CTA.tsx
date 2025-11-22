"use client";

import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <Section className="py-20">
            <div className="bg-primary rounded-3xl p-8 md:p-12 text-center text-primary-foreground relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

                <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to start your next project?</h2>
                    <p className="text-primary-foreground/80 text-xl mb-10">
                        Let's collaborate to build something extraordinary. Our team is ready to bring your vision to life.
                    </p>
                    <Button size="lg" variant="secondary" className="text-primary font-bold">
                        Get in Touch
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            </div>
        </Section>
    );
}
