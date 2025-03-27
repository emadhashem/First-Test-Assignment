import React from "react";
import { cn } from "@/lib/utils";

interface YellowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, YellowButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "font-normal text-base rounded-[10px] transition-colors w-full cursor-pointer",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "YellowButton";

export default Button;
