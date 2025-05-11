import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-200",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input hover:bg-accent-50 hover:text-accent-900 active:bg-accent-100 transition-all duration-200",
        secondary:
          "bg-secondary-500 text-secondary-50 hover:bg-secondary-600 active:bg-secondary-700 transition-all duration-200",
        ghost: "hover:bg-accent-50 hover:text-accent-900 active:bg-accent-100 transition-all duration-200",
        link: "underline-offset-4 hover:underline text-primary-600 hover:text-primary-700 active:text-primary-800",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends VariantProps<typeof buttonVariants>,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}

export interface LinkButtonProps
  extends VariantProps<typeof buttonVariants>,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
}

type ButtonComponentProps = (ButtonProps | LinkButtonProps) & {
  variant?: VariantProps<typeof buttonVariants>['variant']
  size?: VariantProps<typeof buttonVariants>['size']
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonComponentProps>(
  ({ className, variant, size, ...props }, ref) => {
    const isLink = 'href' in props
    
    const commonProps = {
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }

    if (isLink) {
      return (
        <a
          {...commonProps as React.AnchorHTMLAttributes<HTMLAnchorElement>}
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
        />
      )
    }

    return (
      <button
        {...commonProps as React.ButtonHTMLAttributes<HTMLButtonElement>}
        ref={ref as React.ForwardedRef<HTMLButtonElement>}
      />
    )
  }
)
Button.displayName = "Button"

export default Button
export { buttonVariants }
