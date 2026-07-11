import { motion } from "motion/react";
import type React from "react";
import { twMerge } from "tailwind-merge";

type FadeInProps = {
    className?: string;
    children: React.ReactNode;
    delay?: number;
    inView?: boolean;
}

export default function FadeIn({className, children, delay, inView}: FadeInProps) {
  // If inView is explicitly set to false, animate immediately
  return inView === false ? (
    <motion.div
        initial="initial"
        animate="animate"
        className={twMerge(className)}
        variants={{
            initial: {opacity: 0},
            animate: {opacity: 1}
        }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: delay || 0 }}
    >
        {children}
    </motion.div>
  ) : (
    // If inView is not false, animate when scrolled into view
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