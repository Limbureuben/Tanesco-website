"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Section } from "../../components/ui/Section";

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-20">
                <Section className="bg-muted/30">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
                        <p className="text-xl text-muted-foreground">
                            We are a team of passionate creators, developers, and strategists dedicated to building the future of the web.
                        </p>
                    </div>
                </Section>

                <Section>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                At Lanix, our mission is to empower businesses with digital tools that drive growth and innovation. We believe in the power of technology to transform industries and improve lives.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Founded in 2023, we have quickly grown into a trusted partner for startups and enterprises alike. Our approach combines technical excellence with creative design to deliver products that stand out.
                            </p>
                        </div>
                        <div className="bg-muted rounded-2xl aspect-square relative overflow-hidden shadow-xl">
                            <img
                                src="/aboutusimage.jpeg"
                                alt="About Lanix Team"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </div >
    );
}
