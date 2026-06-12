import React, { type ElementType } from "react";
import { twMerge } from "tailwind-merge";

type WrapperProps = {
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
};

export default function Wrapper({ children, className, as: Component = 'div', ...props }: WrapperProps) {
  const styles = twMerge(`py-4 ${className}`);
  return (
    <Component className={styles} {...props}>
      <div className="w-11/12 mx-auto">{children}</div>
    </Component>
  );
}
