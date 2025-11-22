"use client";

import { Section } from "../ui/Section";

export default function AboutSection() {
    return (
        <Section id="about" className="bg-muted/30">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">About Us</h2>
                <p className="text-xl text-muted-foreground">
                    We are a team of passionate creators, developers, and strategists dedicated to building the future of the web.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                        At Lanix, our mission is to empower businesses with digital tools that drive growth and innovation. We believe in the power of technology to transform industries and improve lives.
                    </p>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Founded in 2025, we have quickly grown into a trusted partner for startups and enterprises alike. Our approach combines technical excellence with creative design to deliver products that stand out.
                    </p>
                </div>
                <div className="bg-muted rounded-2xl aspect-video relative overflow-hidden shadow-xl">
                    <img
                        src="/aboutusimage.jpeg"
                        alt="About Lanix Team"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </Section>
    );
}
