"use client";

import { Section } from "../ui/Section";
import { Star } from "lucide-react";

const testimonials = [
    {
        quote: "Lanix transformed our digital presence. Their attention to detail and design expertise is unmatched.",
        author: "Sarah Johnson",
        role: "CEO, TechFlow",
        rating: 5,
    },
    {
        quote: "Working with the Lanix team was a game-changer. They delivered a stunning product ahead of schedule.",
        author: "Michael Chen",
        role: "CTO, Innovate Inc",
        rating: 5,
    },
    {
        quote: "The best agency we've worked with. Professional, creative, and technically brilliant.",
        author: "Emily Davis",
        role: "Marketing Director, GrowthCo",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <Section>
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
                <p className="text-muted-foreground text-lg">
                    Don't just take our word for it. Here's what our clients have to say.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-card p-8 rounded-2xl border border-border shadow-sm">
                        <div className="flex gap-1 mb-6 text-yellow-500">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} size={18} fill="currentColor" />
                            ))}
                        </div>
                        <p className="text-lg mb-6 italic text-foreground/80">"{testimonial.quote}"</p>
                        <div className="flex items-center gap-4">
                            <img
                                src="/profile.jpeg"
                                alt={testimonial.author}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                                <div className="font-bold">{testimonial.author}</div>
                                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section >
    );
}
