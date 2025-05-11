import * as React from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const Avatar = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
))
Avatar.displayName = "Avatar"

interface AvatarImageProps extends React.ComponentPropsWithoutRef<typeof Image> {
  className?: string
}

const AvatarImage = React.forwardRef<
  HTMLImageElement,
  AvatarImageProps
>(({ className, alt = "", ...props }, ref) => (
  <Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    alt={alt}
    {...props}
    fill
    sizes="100vw"
  />
))
AvatarImage.displayName = "AvatarImage"

const AvatarFallback = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = "AvatarFallback"

export { Avatar, AvatarImage, AvatarFallback }
