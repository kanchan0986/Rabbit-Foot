import { twMerge } from "tailwind-merge";

type SpacerVectorDoubleOrangeProps = {
  className?: string;
};

export default function SpacerVectorDoubleOrange({className}: SpacerVectorDoubleOrangeProps) {
    const styles = twMerge(`fill-rf-primary ${className}`);
  return (
    <svg       
        viewBox="0 0 1272 102"
        className={styles} 
        xmlns="http://www.w3.org/2000/svg">
        <rect width="1272" height="104" className='fill-rf-primary'/>
        <path d="M166.322 5.33734C74.8684 -3.57547 18.5792 45.2836 0 67.7217V103.533L1271.82 102.533V69.5324C1254.32 47.5324 1193.3 -7.16772 1098.5 2.03228C1046.11 7.11681 1000.89 18.5074 944.5 33.5322C873.345 52.49 789.922 64.2957 685.322 74.3373C563.103 86.0704 429.837 66.703 319.174 38.1647C260.065 22.9215 207.405 9.34125 166.322 5.33734Z" className='fill-rf-primary-200'/>
        <path d="M166.322 15.3371C74.8684 6.42429 18.5792 45.2833 0 67.7214V103.532H1271.82V69.8371C1254.32 47.8371 1195.62 6.1371 1100.82 15.3371C1048.43 20.4216 997.796 33.9118 941.403 48.9367C870.248 67.8945 789.922 89.2955 685.322 99.3371C563.103 111.07 429.837 76.7028 319.174 48.1645C260.065 32.9212 207.405 19.341 166.322 15.3371Z" className='fill-rf-white-100'/>
    </svg>
  )
}