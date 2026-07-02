import { twMerge } from "tailwind-merge";

type SpacerVectorProps = {
  className?: string;
};

export default function SpacerVector({ className }: SpacerVectorProps) {
  const styles = twMerge(`fill-rf-primary ${className}`);
  return (
    <svg
      viewBox="0 0 1272 95"
      className={styles}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1272 61.5225C1254.5 39.6341 1195.79 -1.85448 1100.98 7.29883C1048.58 12.3576 997.935 25.7791 941.534 40.7275C870.369 59.5891 790.032 80.8814 685.417 90.8721C563.181 102.545 429.897 68.3524 319.219 39.959C260.102 24.7931 207.434 11.2824 166.345 7.29883C74.8788 -1.5687 18.5818 37.0928 0 59.417V0H1272V61.5225Z" className="fill-transparent" />
      <path d="M166.345 7.29863C74.8788 -1.56895 18.5818 37.0928 0 59.417V104H1272V61.522C1254.5 39.6336 1195.79 -1.85468 1100.98 7.29863C1048.58 12.3573 997.935 25.7791 941.534 40.7276C870.369 59.5892 790.032 80.8816 685.417 90.8722C563.181 102.546 429.897 68.3528 319.218 39.9594C260.102 24.7935 207.434 11.2822 166.345 7.29863Z" />
    </svg>
  );
}
