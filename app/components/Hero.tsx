"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "../components/AnimatedSection";

export default function Hero() {
  return (
    <AnimatedSection className="relative overflow-hidden">
      <div className="relative h-[70vh] min-h-[480px] w-full">
        <Image
          src="/backgroundimage.jpeg"
          alt="Modern office background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 h-full">
          <div className="container mx-auto h-full px-4">
            <div className="flex h-full flex-col items-start justify-center text-white">
              <motion.h1
                className="text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                Web Development
              </motion.h1>
              <motion.p
                className="mt-4 text-base md:text-lg text-white/80 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                We build fast, modern and reliable web experiences for businesses that want results.
              </motion.p>
              <motion.div
                className="mt-8 flex items-center gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <a href="#contact" className="px-5 py-2.5 rounded-md bg-[var(--brand)] text-white font-medium hover:opacity-90 transition-colors">Get Started</a>
                <a href="#services" className="px-5 py-2.5 rounded-md border border-white/20 hover:bg-white/10 transition-colors">Learn More</a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
