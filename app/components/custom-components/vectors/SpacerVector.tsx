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
      <path d="M166.322 1.30488C74.8684 -7.60793 18.5792 31.2511 0 53.6892V98.5H1271.82V55.8049C1254.32 33.8049 1195.62 -7.89512 1100.82 1.30488C1048.43 6.38941 997.796 19.8796 941.403 34.9044C870.248 53.8622 789.922 75.2633 685.322 85.3049C563.103 97.0379 429.837 62.6706 319.174 34.1322C260.065 18.889 207.405 5.30879 166.322 1.30488Z" />
    </svg>
  );
}
