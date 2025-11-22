"use client";

import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
    {
        title: "EcoFin Dashboard",
        category: "FinTech",
        description: "A comprehensive financial analytics dashboard for sustainable investments.",
        image: "bg-emerald-500/10", // Placeholder class
        tags: ["React", "Next.js", "Tailwind"],
    },
    {
        title: "Urban Pulse",
        category: "Smart City",
        description: "Real-time city monitoring system for traffic and utility management.",
        image: "bg-blue-500/10", // Placeholder class
        tags: ["TypeScript", "WebSockets", "D3.js"],
    },
    {
        title: "HealthConnect",
        category: "Healthcare",
        description: "Telemedicine platform connecting patients with specialists worldwide.",
        image: "bg-sky-500/10", // Placeholder class
        tags: ["WebRTC", "Node.js", "MongoDB"],
    },
];

export default function ProjectsSection() {
    return (
        <Section id="projects" className="py-20">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Completed Projects</h2>
                <p className="text-xl text-muted-foreground">
                    Explore some of our recent work delivering impact and innovation.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-lg transition-all hover:border-primary/50"
                    >
                        {/* Project Image Placeholder */}
                        <div className={`h-48 w-full ${project.image} relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20 font-bold text-4xl">
                                {project.title[0]}
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                                    {project.category}
                                </span>
                                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>

                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                                View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
