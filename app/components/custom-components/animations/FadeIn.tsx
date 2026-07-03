import { motion } from "motion/react";
import type React from "react";
import { twMerge } from "tailwind-merge";

type FadeInProps = {
    className?: string;
    children: React.ReactNode;
    delay?: number;
}

export default function FadeIn({className, children, delay}: FadeInProps) {
  return (
    <motion.div
        initial="initial"
        whileInView="animate"
        className={twMerge(className)}
        variants={{
            initial: {opacity: 0},
            animate: {opacity: 1}
        }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: delay || 0 }}
        viewport={{ once: true, amount: 0.5 }}
    >
        {children}
    </motion.div>
  )
}