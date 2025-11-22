"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Section } from "../../components/ui/Section";
import { Code, Smartphone, Palette, Cloud, Database, Lock } from "lucide-react";

const services = [
    {
        icon: Code,
        title: "Web Development",
        description: "Custom web applications built with React, Next.js, and Node.js.",
    },
    {
        icon: Smartphone,
        title: "Mobile Development",
        description: "Native and cross-platform mobile apps for iOS and Android.",
    },
    {
        icon: Palette,
        title: "UI/UX Design",
        description: "User-centric design that ensures intuitive and engaging experiences.",
    },
    {
        icon: Cloud,
        title: "Cloud Solutions",
        description: "Scalable cloud infrastructure and DevOps services.",
    },
    {
        icon: Database,
        title: "Data Analytics",
        description: "Turn data into actionable insights with our analytics solutions.",
    },
    {
        icon: Lock,
        title: "Cybersecurity",
        description: "Protect your digital assets with our comprehensive security audits.",
    },
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-20">
                <Section className="bg-muted/30">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
                        <p className="text-xl text-muted-foreground">
                            Comprehensive digital solutions tailored to your business needs.
                        </p>
                    </div>
                </Section>

                <Section>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="p-8 rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-lg group">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                                    <service.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-muted-foreground">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
