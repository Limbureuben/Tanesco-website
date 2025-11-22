"use client";

import { Section } from "../ui/Section";
import { Zap, Shield, Smartphone, Globe, BarChart, Layers } from "lucide-react";

const features = [
    {
        icon: Zap,
        title: "Lightning Fast",
        description: "Optimized for speed and performance. We ensure your application loads instantly and runs smoothly.",
    },
    {
        icon: Shield,
        title: "Secure by Design",
        description: "Enterprise-grade security built-in from day one. We protect your data and your users.",
    },
    {
        icon: Smartphone,
        title: "Mobile First",
        description: "Responsive designs that look and feel amazing on every device, from phones to large desktops.",
    },
    {
        icon: Globe,
        title: "Global Scale",
        description: "Built to handle millions of users. Our architecture scales effortlessly as your business grows.",
    },
    {
        icon: BarChart,
        title: "Data Driven",
        description: "Integrated analytics and insights to help you make informed decisions and optimize growth.",
    },
    {
        icon: Layers,
        title: "Modern Stack",
        description: "Leveraging the latest technologies like Next.js, React, and Tailwind CSS for future-proof solutions.",
    },
];

export default function Features() {
    return (
        <Section className="bg-muted/30">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Everything you need to <span className="text-primary">succeed</span>
                </h2>
                <p className="text-muted-foreground text-lg">
                    We provide a comprehensive suite of tools and services to help you build, launch, and grow your digital presence.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-background p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors hover:shadow-lg hover:shadow-primary/5 group"
                    >
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                            <feature.icon size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
