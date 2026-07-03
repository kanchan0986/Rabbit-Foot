import { motion } from "motion/react";
import type React from "react";
import { twMerge } from "tailwind-merge";

type SlideInUpProps = {
    className?: string;
    children: React.ReactNode;
    delay?: number;
}

export default function SlideInUp({className, children, delay}: SlideInUpProps) {
  return (
    <motion.div
        initial="initial"
        whileInView="animate"
        className={twMerge(className)}
        variants={{
            initial: {opacity: 0, y: 100},
            animate: {opacity: 1, y: 0}
        }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: delay || 0 }}
        viewport={{ once: true, amount: 0.5 }}
    >
        {children}
    </motion.div>
  )
}