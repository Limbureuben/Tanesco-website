"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
import { Button } from "./ui/Button";

export default function Footer() {
    return (
        <footer className="bg-muted/30 border-t border-border pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="space-y-4">
                        <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                                Lanix
                            </span>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Empowering businesses with next-generation digital solutions. We build the future of web and mobile experiences.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Facebook size={20} />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter size={20} />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram size={20} />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin size={20} />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-foreground mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#about" className="text-muted-foreground hover:text-primary text-sm">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" className="text-muted-foreground hover:text-primary text-sm">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="text-muted-foreground hover:text-primary text-sm">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="text-muted-foreground hover:text-primary text-sm">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-foreground mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-primary text-sm">
                                    Web Development
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-primary text-sm">
                                    Mobile Apps
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-primary text-sm">
                                    UI/UX Design
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-primary text-sm">
                                    Cloud Solutions
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-foreground mb-4">Newsletter</h3>
                        <p className="text-muted-foreground text-sm mb-4">
                            Subscribe to our newsletter for the latest updates and insights.
                        </p>
                        <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 bg-background border border-border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                            <Button size="sm" className="rounded-full w-10 h-10 p-0 flex items-center justify-center">
                                <Send size={16} />
                            </Button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-muted-foreground text-sm">
                        © {new Date().getFullYear()} Lanix Inc. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-muted-foreground hover:text-primary text-sm">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary text-sm">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
