"use client";

import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
    return (
        <Section id="contact" className="bg-muted/30">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Contact Us</h2>
                <p className="text-xl text-muted-foreground">
                    Have a project in mind? We'd love to hear from you.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-bold">Get in Touch</h3>
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                            <Mail size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold mb-1">Email</h4>
                            <p className="text-muted-foreground">hello@lanix.com</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                            <Phone size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold mb-1">Phone</h4>
                            <p className="text-muted-foreground">+1 (555) 123-4567</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold mb-1">Office</h4>
                            <p className="text-muted-foreground">
                                123 Innovation Drive<br />
                                Tech City, TC 90210
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/50 focus:outline-none"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/50 focus:outline-none"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/50 focus:outline-none"
                                placeholder="Tell us about your project..."
                            />
                        </div>
                        <Button className="w-full">Send Message</Button>
                    </form>
                </div>
            </div>
        </Section>
    );
}
