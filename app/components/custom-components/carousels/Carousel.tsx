import Wrapper from '../Wrapper';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { FaCircle  } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useMediaQuery } from '~/hooks/useMediaQuery';
import type { Card, Gallery, Testimonial } from './CarouselItem';
import CarouselItem from './CarouselItem';
import { twMerge } from "tailwind-merge";

type CarouselProps = {
  carousel: Card[] | Testimonial[] | Gallery[]
}

export default function Carousel({carousel}: CarouselProps) {
  
  const [currentIndex, setCurrentIndex] = useState<number>(0); // Tracks the current index of the carousel
  const [isForward, setIsForward] = useState<boolean>(true); // Tracks the direction of the carousel
  const isTablet = useMediaQuery("(min-width: 640px)");
  const isLaptop = useMediaQuery("(min-width: 992px)");
  const isDesktop = useMediaQuery("(min-width: 1280px)");
  const [isInteracting, setIsInteracting] = useState<boolean>(false); // Tracks the user interference

  /* --------------------------- Auto-Advance Logic --------------------------- */
  useEffect(() => {
    if(isInteracting) return; // stop the auto-advance feature if interacting

    setIsForward(true); // keeps the auto-advance initially and always forward moving

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carousel.length); // keeps changing every 5 seconds
    }, 5000);

    return () => clearInterval(timer);

  }, [isInteracting])

  const handleLeftMovement = () => { 
    setCurrentIndex((prev) => (prev - 1 + carousel.length) % carousel.length); // When moving left, the index decreases by 1 and adding "carousel.length" to prevent negative values. "% carousel.length" wraps around so if you go left from the first item, it jumps to the last item
    setIsForward(false); // marks the direction as backward (left)
   } 

  const handleRightMovement = () => { 
    setCurrentIndex((prev) => (prev + 1) % carousel.length);  // When moving right, the index increases by 1. "% carousel.length" ensures wrapping around so if you go right from the last item, it jumps back to the first
    setIsForward(true); // marks the direction as forward (right)
   }

  const handlePagination = (index: number) => { 
    setCurrentIndex(index % carousel.length) // Updates the current slide to the one the user clicked. "% carousel.length" ensures the index to stay within bounds of carousel length
    index > currentIndex ? setIsForward(true) : setIsForward(false) // if clicked index is greater than current index then go forward else go backward
   }

  return (
    <Wrapper as={'section'} className='[&>div]:w-full sm:px-10 relative'>
      <div 
        className="flex flex-col"
        onMouseEnter={() => setIsInteracting(true)}
        onMouseLeave={() => setIsInteracting(false)}
      >
        {/* carousel bounding box */}
        <AnimatePresence>
          <div className="relative max-h-138 w-full overflow-hidden z-1 p-5">
            {/* carousel container */}
            <motion.ul 
              className="relative flex justify-center gap-x-4"
              key={currentIndex} // re-trigger animation
              initial="initial"
              animate="animate"
              exit="exit"
              variants={
                isForward
                  ? {
                      initial: { opacity: 0.5, x: 100 },
                      animate: { opacity: 1, x: 0 },
                      exit: { opacity: 0.5, x: -100 },
                    }
                  : {
                      initial: { opacity: 0.5, x: -100 },
                      animate: { opacity: 1, x: 0 },
                      exit: { opacity: 0.5, x: 100 },
                    }
              }
              transition={{ duration: 0.6, ease: "easeIn" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0}}
              onDragEnd={(_, info) => {
                // mobile swipe logic
                const swipe = info.offset.x;
                const speed = info.velocity.x;
                if(swipe > 50 && speed > 500){
                  handleLeftMovement();
                }else if(swipe < -50 && speed < -500){
                  handleRightMovement()
                }
              }}
            >
              {(isDesktop ? [0, 1, 2, 3] : isLaptop ? [0, 1, 2] : isTablet ? [0, 1] : [0]).map(offset => { // changing the array as per devices sizes while following mobile first approach
                const idx = (currentIndex + offset) % carousel.length; // set current index at the first offset then second index at second position then third at the third position then rotate the loop
                const carouselItem = carousel[idx];
                return (
                  // carousel items
                  <li key={idx} className={twMerge(`w-full sm:w-1/2 2xmd:w-1/3 xl:w-1/4 flex flex-col bg-rf-white-100 p-4 rounded-2xl shadow-[0px_0px_6px_rgba(0,0,0,0.15)] hover:shadow-[0px_0px_10px_rgba(0,0,0,0.25)] border group ${ carouselItem.type === "gallery" ? "transition-colors duration-300 ease-in bg-rf-secondary/70 xl:bg-rf-white-100 xl:border-rf-secondary/70 hover:bg-rf-secondary/70" : ""}`)}>
                    <CarouselItem carouselItem={carouselItem} />
                  </li>
                )
              })}
            </motion.ul>
          </div>
        </AnimatePresence>
        {/* navigation arrows */}
        <div className="hidden sm:flex absolute size-full top-0 left-0">
          <FaAngleLeft className='absolute size-12 2xmd:size-15 top-50 -left-6 2xmd:-left-8 z-1 bg-rf-primary-200 text-rf-secondary shadow hover:shadow-xl hover:text-rf-white-100 hover:bg-rf-primary rounded-full p-4 active:shadow active:p-3 transition-all duration-100 ease-in 2xmd:cursor-pointer' onClick={handleLeftMovement}/>
          <FaAngleRight className='absolute size-12 2xmd:size-15 top-50 -right-6 2xmd:-right-8 z-1 bg-rf-primary-200 text-rf-secondary shadow hover:shadow-xl hover:text-rf-white-100  hover:bg-rf-primary rounded-full p-4 active:shadow active:p-3 transition-all duration-100 ease-in 2xmd:cursor-pointer' onClick={handleRightMovement}/>
        </div>
        {/* pagination dots */}
        <ul className="relative flex justify-center gap-x-2 mt-4 z-1">
          {carousel.map((_, index) => {
            return (
              <li className='flex items-center 2xmd:cursor-pointer' key={index} onClick={() => handlePagination(index)}>
                {index === currentIndex 
                  ? <div className="border-3 p-1 border-rf-primary rounded-full">
                      <FaCircle className='fill-rf-secondary size-2'/>
                    </div>
                  : <FaCircle className='fill-rf-grey-100/40 size-2'/>}
              </li>
            )
          })}
        </ul>
      </div>
    </Wrapper>
  )
}