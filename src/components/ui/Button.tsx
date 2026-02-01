"use client";

import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-lg";

    const variants = {
      primary:
        "bg-fresh-500 text-white hover:bg-fresh-600 focus:ring-fresh-500 shadow-lg shadow-fresh-500/25 hover:shadow-fresh-600/30",
      secondary:
        "bg-navy-900 text-white hover:bg-navy-800 focus:ring-navy-500 shadow-lg shadow-navy-900/25",
      outline:
        "border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white focus:ring-navy-500",
      ghost:
        "text-navy-700 hover:bg-navy-100 hover:text-navy-900 focus:ring-navy-500",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps };
