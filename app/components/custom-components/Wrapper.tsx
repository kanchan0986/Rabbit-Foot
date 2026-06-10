import React from "react";
import { twMerge } from "tailwind-merge";

type WrapperProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Wrapper({ children, className }: WrapperProps) {
  const styles = twMerge(` py-4 ${className}`);
  return (
    <div className={styles}>
      <div className="w-11/12 mx-auto">{children}</div>
    </div>
  );
}
