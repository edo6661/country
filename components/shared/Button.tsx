import { cn } from "@/lib/cn"
import { VariantProps, cva } from "class-variance-authority"

const buttonVariants = cva("shadow-sm shadow-black/30 disabled:cursor-not-allowed base-transition text-primaryWhite", {
  variants: {
    variant: {
      primary: "bg-primaryPurple hover:opacity-90 hover:bg-primaryPurple/80 rounded-[10px]",
      secondary: "bg-primaryGreen hover:opacity-85 hover:bg-primaryGreen/80 rounded-[50px] font-bold"
    },
    size: {
      md: "px-4 py-2 text-xs",
      lg: "px-5 py-2 text-[18px] font-medium",
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "lg"
  }
})

const Button = (
  { className, variant, size, ...props }: VariantProps<typeof buttonVariants> & React.HTMLAttributes<HTMLButtonElement>
) => {
  return <button {...props} className={cn(buttonVariants({ variant, size }), className)} />
}

export default Button