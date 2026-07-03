import { motion } from "motion/react";
import type React from "react";
import { twMerge } from "tailwind-merge";
import { useMediaQuery } from "~/hooks/useMediaQuery";

type SlideInRightProps = {
    className?: string;
    children: React.ReactNode;
    delay?: number;
}

export default function SlideInRight({className, children, delay}: SlideInRightProps) {
  const isLaptop = useMediaQuery("(min-width: 992px)");

  const fadeInVariant = {
    initial: { opacity: 0, x: 0 },
    animate: { opacity: 1, x: 0 },
  };

  const slideInVariant = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
  };

  return (
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