import { motion } from "motion/react";
import type React from "react";
import { twMerge } from "tailwind-merge";
import { useMediaQuery } from "~/hooks/useMediaQuery";

type SlideInRightProps = {
    className?: string;
    children: React.ReactNode;
    delay?: number;
    customScreenSize?: string;
}

export default function SlideInRight({className, children, delay, customScreenSize}: SlideInRightProps) {
  // Hook to check if the screen size matches the given custom size or defaults to laptop size (≥ 992px)
  const isLaptop = useMediaQuery( customScreenSize || "(min-width: 992px)");

  // Animation variant for fade-in (no horizontal movement)
  const fadeInVariant = {
    initial: { opacity: 0, x: 0 },
    animate: { opacity: 1, x: 0 },
  };

  // Animation variant for slide-in from the right
  const slideInVariant = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
  };

  // If a custom screen size is provided, animate immediately
  return customScreenSize ? (
    <motion.div
        initial="initial"
        animate="animate"
        className={twMerge(className)}
        key={isLaptop ? "large" : "small"} // important to remount the variant
        variants={isLaptop ? slideInVariant : fadeInVariant}
        transition={{duration: 0.5, ease: 'easeIn', delay: delay || 0}}
    >
        {children}
    </motion.div>
  )  : (
    // If no custom screen size, animate only when element comes into view
    <motion.div
        initial="initial"
        whileInView="animate"
        className={twMerge(className)}
        key={isLaptop ? "large" : "small"} // important to remount the variant
        variants={isLaptop ? slideInVariant : fadeInVariant}
        transition={{duration: 0.5, ease: 'easeIn', delay: delay || 0}}
        viewport={{ once: true, amount: 0.5 }}
    >
        {children}
    </motion.div>
  )
}