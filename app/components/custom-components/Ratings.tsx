import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

type RatingsProps = {
    star: number;
    className?: string;
}

export default function Ratings({star, className}: RatingsProps) {
  const styles = twMerge(`flex items-center gap-x-2 ${className}`);
  let stars = star || 0
  let ratings;

  if (stars >= 0 && stars < 1) {
    ratings = ( 
      <div className={styles}>
        {Array.from({length: 5}, (_, idx) => <IoStarOutline key={idx} className='stroke-amber-400'/>)}
      </div>
    )
  } else if (stars >= 1 && stars < 1.5) {
    ratings = ( 
      <div className={styles}>
        <IoStar className='fill-amber-400 stroke-amber-400'/>
        {Array.from({length: 4}, (_, idx) => <IoStarOutline key={idx} className='stroke-amber-400'/>)}
      </div>
    )
  } else if (stars >= 1.5 && stars < 2) {
    ratings = ( 
      <div className={styles}>
        <IoStar className='fill-amber-400 stroke-amber-400'/>
        <IoStarHalf className='fill-amber-400 stroke-amber-400'/>
        {Array.from({length: 3}, (_, idx) => <IoStarOutline key={idx} className='stroke-amber-400'/>)}
      </div>
    )
  } else if (stars >= 2 && stars < 2.5) {
    ratings = ( 
      <div className={styles}>
        {Array.from({length: 2}, (_, idx) => <IoStar key={idx} className='fill-amber-400 stroke-amber-400'/>)}
        {Array.from({length: 3}, (_, idx) => <IoStarOutline key={idx} className='stroke-amber-400'/>)}
      </div>
    )
  } else if (stars >= 2.5 && stars < 3) {
    ratings = ( 
      <div className={styles}>
        {Array.from({length: 2}, (_, idx) => <IoStar key={idx} className='fill-amber-400 stroke-amber-400'/>)}
        <IoStarHalf className='fill-amber-400 stroke-amber-400'/>
        {Array.from({length: 2}, (_, idx) => <IoStarOutline key={idx} className='stroke-amber-400'/>)}
      </div>
    )
  } else if (stars >= 3 && stars < 3.5) {
    ratings = ( 
      <div className={styles}>
        {Array.from({length: 3}, (_, idx) => <IoStar key={idx} className='fill-amber-400 stroke-amber-400'/>)}
        {Array.from({length: 2}, (_, idx) => <IoStarOutline key={idx} className='stroke-amber-400'/>)}
      </div>
    )
  } else if (stars >= 3.5 && stars < 4) {
    ratings = ( 
      <div className={styles}>
        {Array.from({length: 3}, (_, idx) => <IoStar key={idx} className='fill-amber-400 stroke-amber-400'/>)}
        <IoStarHalf className='fill-amber-400 stroke-amber-400'/>
        <IoStarOutline className='stroke-amber-400'/>
      </div>
    )
  } else if (stars >= 4 && stars < 4.5) {
    ratings = ( 
      <div className={styles}>
        {Array.from({length: 4}, (_, idx) => <IoStar key={idx} className='fill-amber-400 stroke-amber-400'/>)}
        <IoStarOutline className='stroke-amber-400'/>
      </div>
    )
  } else if (stars >= 4.5 && stars < 5) {
    ratings = ( 
      <div className={styles}>
        {Array.from({length: 4}, (_, idx) => <IoStar key={idx} className='fill-amber-400 stroke-amber-400'/>)}
        <IoStarHalf className='fill-amber-400 stroke-amber-400'/>
      </div>
    )
  } else {
    ratings = ( 
      <div className={styles}>
        {Array.from({length: 5}, (_, idx) => <IoStar key={idx} className='fill-amber-400'/>)}
      </div>
    )
  }

  return ratings
  
}