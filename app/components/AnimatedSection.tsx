"use client";

import { motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  direction?: "up" | "down" | "left" | "right";
};

export default function AnimatedSection({ children, className, id, direction = "up" }: Props) {
  const axis = direction === "left" || direction === "right" ? "x" : "y";
  const offset = direction === "up" || direction === "left" ? 40 : -40;

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, [axis]: offset }}
      whileInView={{ opacity: 1, [axis]: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
