import React, { type ElementType } from "react";
import { twMerge } from "tailwind-merge";

type WrapperProps = {
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
  id?: string;
};

export default function Wrapper({ children, className, as: Component = 'div', id, ...props }: WrapperProps) {
  const styles = twMerge(`py-4 ${className}`);
  return (
    <Component className={styles} {...props} id={id}>
      <div className="w-11/12 mx-auto">{children}</div>
    </Component>
  );
}
