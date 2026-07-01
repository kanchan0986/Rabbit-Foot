import { motion } from "motion/react";
import type { IconType } from "react-icons/lib";
import { twMerge } from "tailwind-merge";

type OrbitingIconsWheelProps = {
    centralImage: string;
    Icon_1: IconType;
    Icon_2: IconType;
    Icon_3: IconType;
    Icon_4: IconType;
    className?: string;
};

export default function OrbitingIconsWheel({className, centralImage, Icon_1, Icon_2, Icon_3, Icon_4}: OrbitingIconsWheelProps) {
    const styles = twMerge(`flex size-65 justify-center items-center relative outline-2 -outline-offset-4 outline-rf-primary rounded-full xl:size-95 xl:outline-3 ${className}`);
  return (
    <div className={styles}>
      {/* background which blocks the outline with its width and height and also rotates */}
      <motion.div
        className="absolute top-[50%] left-0 translate-y-[-50%] w-full h-20 bg-rf-white-100 xl:h-45"
        animate={{ rotate: -360 }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        }}
      ></motion.div>
      {/* Wrapper of the icon boxes which itself rotates anticlock wise */}
      <motion.div
        className="absolute z-1"
        animate={{ rotate: -360 }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        }}
      >
        {/* individual icon boxes which rotates clockwise */}
        <motion.div
          className="absolute top-10 -left-3 size-12 bg-orange-500 border-4 border-white p-2 rounded-full z-10 flex justify-center items-center xl:size-14 xl:border-7"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          }}
        >
          <Icon_1 className="size-6 fill-rf-white-100 xl:size-7" />
        </motion.div>
        {/* individual icon boxes which rotates clockwise */}
        <motion.div
          className="absolute top-10 -right-3 size-12 bg-blue-500 border-4 border-white p-2 rounded-full z-10 flex justify-center items-center xl:size-14 xl:border-7"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          }}
        >
          <Icon_2 className="size-6 stroke-rf-white-100 xl:size-7" />
        </motion.div>
        {/* individual icon boxes which rotates clockwise */}
        <motion.div
          className="absolute bottom-10 -left-3 size-12 bg-yellow-500 border-4 border-white p-2 rounded-full z-10 flex justify-center items-center xl:size-14 xl:border-7"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          }}
        >
          <Icon_3 className="size-6 fill-rf-white-100 xl:size-7" />
        </motion.div>
        {/* individual icon boxes which rotates clockwise */}
        <motion.div
          className="absolute bottom-10 -right-3 size-12 bg-orange-500 border-4 border-white p-2 rounded-full z-10 flex justify-center items-center xl:size-14 xl:border-7"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          }}
        >
          <Icon_4 className="size-6 fill-rf-white-100 xl:size-7" />
        </motion.div>
        {/* empty box to adjust the size with respect to the central background image */}
        <div className="relative size-60 rounded-full xl:size-84" />
      </motion.div>
      {/* central background image */}
      <div className="relative bg-cover bg-center bg-no-repeat size-60 rounded-full xl:size-89" style={{backgroundImage: `url('${centralImage}')`}}/>
    </div>
  );
}
