import { motion } from "motion/react";
import Cloud from "./Cloud";
import Star from "./Star";

type SkyProps = {
  className?: string;
}

// Sky component renders animated clouds and stars using Framer Motion
export default function Sky({className}: SkyProps) {

  return (
    <div className="absolute inset-0 size-full overflow-hidden">
      {/* Cloud animation moving horizontally across the screen */}
      <motion.div
        key='clouds'
        initial="initial"
        whileInView="animate"
        variants={{
          initial: { opacity: 0, x: 300 },
          animate: { opacity: [0, 1, 1, 0], x: -300 },
        }}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Multiple cloud instances positioned at different coordinates */}
        <Cloud className={`top-30 left-20 ${className}`}/>
        <Cloud className={`top-100 left-40 ${className}`}/>
        <Cloud className={`top-20 left-110 ${className}`}/>
        <Cloud className={`top-135 left-130 ${className}`}/>
        <Cloud className={`top-65 left-210 ${className}`}/>
        <Cloud className={`top-120 left-280 ${className}`}/>
        <Cloud className={`top-25 left-300 ${className}`}/>
        <Cloud className={`top-95 left-350 ${className}`}/>
        <Cloud className={`top-50 left-380 ${className}`}/>
        <Cloud className={`top-125 left-400 ${className}`}/>
      </motion.div>

      {/* Star animations: fade and scale in/out at different positions with alternative sets having staggered delays to perform twinkling effect */}

      <motion.div
        key="star-1"
        className="absolute top-20 left-20"
        initial="initial"
        whileInView="animate"
        variants={{
          initial: { opacity: 0, scale: 0 },
          animate: { opacity: [0, 1, 1, 0], scale: [0, 1, 1, 0] },
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          delay: 4,
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Star className={className}/>
      </motion.div>

      <motion.div
        key="star-2"
        className="absolute top-80 left-10"
        initial="initial"
        whileInView="animate"
        variants={{
          initial: { opacity: 0, scale: 0 },
          animate: { opacity: [0, 1, 1, 0], scale: [0, 1, 1, 0] },
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop"
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Star className={className}/>
      </motion.div>
      
      <motion.div
        key="star-3"
        className="absolute top-120 left-40"
        initial="initial"
        whileInView="animate"
        variants={{
          initial: { opacity: 0, scale: 0 },
          animate: { opacity: [0, 1, 1, 0], scale: [0, 1, 1, 0] },
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          delay: 4,
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Star className={className}/>
      </motion.div>
      
      <motion.div
        key="star-4"
        className="absolute top-40 left-50"
        initial="initial"
        whileInView="animate"
        variants={{
          initial: { opacity: 0, scale: 0 },
          animate: { opacity: [0, 1, 1, 0], scale: [0, 1, 1, 0] },
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop"
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Star className={className}/>
      </motion.div>
      
      <motion.div
        key="star-5"
        className="absolute top-8 left-70"
        initial="initial"
        whileInView="animate"
        variants={{
          initial: { opacity: 0, scale: 0 },
          animate: { opacity: [0, 1, 1, 0], scale: [0, 1, 1, 0] },
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          delay: 4,
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Star className={className}/>
      </motion.div>
      
      <motion.div
        key="star-6"
        className="absolute top-68 left-80"
        initial="initial"
        whileInView="animate"
        variants={{
          initial: { opacity: 0, scale: 0 },
          animate: { opacity: [0, 1, 1, 0], scale: [0, 1, 1, 0] },
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop"
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Star className={className}/>
      </motion.div>

      <motion.div
        key="star-7"
        className="absolute top-100 left-70"
        initial="initial"
        whileInView="animate"
        variants={{
          initial: { opacity: 0, scale: 0 },
          animate: { opacity: [0, 1, 1, 0], scale: [0, 1, 1, 0] },
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          delay: 4,
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Star className={className}/>
      </motion.div>
      
      <motion.div
        key="star-8"
        className="absolute top-130 left-100"
        initial="initial"
        whileInView="animate"
        variants={{
          initial: { opacity: 0, scale: 0 },
          animate: { opacity: [0, 1, 1, 0], scale: [0, 1, 1, 0] },
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop"
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Star className={className}/>
      </motion.div>

      <motion.div
        key="star-9"
        className="absolute top-25 left-120"
        initial="initial"
        whileInView="animate"
        variants={{
          initial: { opacity: 0, scale: 0 },
          animate: { opacity: [0, 1, 1, 0], scale: [0, 1, 1, 0] },
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          delay: 4,
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Star className={className}/>
      </motion.div>
      
      <motion.div
        key="star-10"
        className="absolute top-70 left-140"
        initial="initial"
        whileInView="animate"
        variants={{
          initial: { opacity: 0, scale: 0 },
          animate: { opacity: [0, 1, 1, 0], scale: [0, 1, 1, 0] },
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop"
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Star className={className}/>
      </motion.div>

      <motion.div
        key="star-11"
        className="absolute top-115 left-150"
        initial="initial"
        whileInView="animate"
        variants={{
          initial: { opacity: 0, scale: 0 },
          animate: { opacity: [0, 1, 1, 0], scale: [0, 1, 1, 0] },
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          delay: 4,
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Star className={className}/>
      </motion.div>
      
      <motion.div
        key="star-12"
        className="absolute top-140 left-180"
        initial="initial"
        whileInView="animate"
        variants={{
          initial: { opacity: 0, scale: 0 },
          animate: { opacity: [0, 1, 1, 0], scale: [0, 1, 1, 0] },
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop"
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Star className={className}/>
      </motion.div>

      <motion.div
        key="star-13"
        className="absolute top-32 left-180"
        initial="initial"
        whileInView="animate"
        variants={{
          initial: { opacity: 0, scale: 0 },
          animate: { opacity: [0, 1, 1, 0], scale: [0, 1, 1, 0] },
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          delay: 4,
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Star className={className}/>
      </motion.div>
      
      <motion.div
        key="star-14"
        className="absolute top-40 left-235"
        initial="initial"
        whileInView="animate"
        variants={{
          initial: { opacity: 0, scale: 0 },
          animate: { opacity: [0, 1, 1, 0], scale: [0, 1, 1, 0] },
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop"
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Star className={className}/>
      </motion.div>

      <motion.div
        key="star-15"
        className="absolute top-65 left-200"
        initial="initial"
        whileInView="animate"
        variants={{
          initial: { opacity: 0, scale: 0 },
          animate: { opacity: [0, 1, 1, 0], scale: [0, 1, 1, 0] },
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          delay: 4,
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Star className={className}/>
      </motion.div>
      
      <motion.div
        key="star-16"
        className="absolute top-22 left-280"
        initial="initial"
        whileInView="animate"
        variants={{
          initial: { opacity: 0, scale: 0 },
          animate: { opacity: [0, 1, 1, 0], scale: [0, 1, 1, 0] },
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop"
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Star className={className}/>
      </motion.div>

      <motion.div
        key="star-17"
        className="absolute top-100 left-270"
        initial="initial"
        whileInView="animate"
        variants={{
          initial: { opacity: 0, scale: 0 },
          animate: { opacity: [0, 1, 1, 0], scale: [0, 1, 1, 0] },
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          delay: 4,
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Star className={className}/>
      </motion.div>
      
      <motion.div
        key="star-18"
        className="absolute top-120 left-230"
        initial="initial"
        whileInView="animate"
        variants={{
          initial: { opacity: 0, scale: 0 },
          animate: { opacity: [0, 1, 1, 0], scale: [0, 1, 1, 0] },
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop"
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Star className={className}/>
      </motion.div>

      <motion.div
        key="star-19"
        className="absolute top-135 left-300"
        initial="initial"
        whileInView="animate"
        variants={{
          initial: { opacity: 0, scale: 0 },
          animate: { opacity: [0, 1, 1, 0], scale: [0, 1, 1, 0] },
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          delay: 4,
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Star className={className}/>
      </motion.div>
      
      <motion.div
        key="star-20"
        className="absolute top-70 left-260"
        initial="initial"
        whileInView="animate"
        variants={{
          initial: { opacity: 0, scale: 0 },
          animate: { opacity: [0, 1, 1, 0], scale: [0, 1, 1, 0] },
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop"
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Star className={className}/>
      </motion.div>

      <motion.div
        key="star-21"
        className="absolute top-45 left-315"
        initial="initial"
        whileInView="animate"
        variants={{
          initial: { opacity: 0, scale: 0 },
          animate: { opacity: [0, 1, 1, 0], scale: [0, 1, 1, 0] },
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          delay: 4,
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Star className={className}/>
      </motion.div>
      
      <motion.div
        key="star-22"
        className="absolute top-20 left-360"
        initial="initial"
        whileInView="animate"
        variants={{
          initial: { opacity: 0, scale: 0 },
          animate: { opacity: [0, 1, 1, 0], scale: [0, 1, 1, 0] },
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop"
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Star className={className}/>
      </motion.div>

      <motion.div
        key="star-23"
        className="absolute top-90 left-340"
        initial="initial"
        whileInView="animate"
        variants={{
          initial: { opacity: 0, scale: 0 },
          animate: { opacity: [0, 1, 1, 0], scale: [0, 1, 1, 0] },
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          delay: 4,
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Star className={className}/>
      </motion.div>
      
      <motion.div
        key="star-24"
        className="absolute top-125 left-360"
        initial="initial"
        whileInView="animate"
        variants={{
          initial: { opacity: 0, scale: 0 },
          animate: { opacity: [0, 1, 1, 0], scale: [0, 1, 1, 0] },
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop"
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Star className={className}/>
      </motion.div>

      <motion.div
        key="star-25"
        className="absolute top-6 left-220"
        initial="initial"
        whileInView="animate"
        variants={{
          initial: { opacity: 0, scale: 0 },
          animate: { opacity: [0, 1, 1, 0], scale: [0, 1, 1, 0] },
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          delay: 4,
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Star className={className}/>
      </motion.div>

    </div>
  );
}