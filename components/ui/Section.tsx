"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils"; // Assuming I might need a utils file, but for now I'll just use template literals or create a simple utility if needed.
// Actually, I don't have lib/utils yet. I'll stick to template literals for now or create a simple helper.

interface SectionProps extends HTMLMotionProps<"section"> {
    containerClassName?: string;
    delay?: number;
}

export function Section({ children, className, containerClassName, delay = 0, ...props }: SectionProps) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={`py-20 ${className || ""}`}
            {...props}
        >
            <div className={`container mx-auto px-6 ${containerClassName || ""}`}>
                {children as React.ReactNode}
            </div>
        </motion.section>
    );
}
