import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 font-label uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground",
        light: "bg-surface text-foreground hover:bg-gold hover:text-foreground",
        outline: "border border-current bg-transparent hover:bg-surface/10",
        ghost: "bg-transparent text-foreground hover:text-secondary",
        icon: "size-10 bg-transparent text-current hover:text-secondary",
      },
      size: {
        default: "h-12 px-6 text-[0.68rem] tracking-[0.18em]",
        sm: "h-9 px-4 text-[0.62rem] tracking-[0.16em]",
        icon: "size-10 p-0",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({ className, variant, size, asChild, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}