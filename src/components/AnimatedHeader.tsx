"use client"

import * as React from "react"
import { motion, Variants } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string
  duration?: number
  delay?: number
  replay?: boolean
  className?: string
  textClassName?: string
  underlineClassName?: string
  underlineGradient?: string
  underlineHeight?: string
  underlineOffset?: string
}

const AnimatedHeader = React.forwardRef<HTMLDivElement, AnimatedHeaderProps>(
  ({
    text,
    duration = 0.5,
    delay = 0.1,
    replay = true,
    className,
    textClassName,
    underlineClassName,
    underlineGradient = "from-blue-500 via-purple-500 to-pink-500",
    underlineHeight = "h-1",
    underlineOffset = "-bottom-2",
    ...props
  }, ref) => {
    const letters = Array.from(text)

    const container: Variants = {
      hidden: { 
        opacity: 0 
      },
      visible: (i: number = 1) => ({
        opacity: 1,
        transition: { 
          staggerChildren: duration, 
          delayChildren: i * delay 
        }
      })
    }

    const child: Variants = {
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 200
        }
      },
      hidden: {
        opacity: 0,
        y: 20,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 200
        }
      }
    }

    const lineVariants: Variants = {
      hidden: {
        width: "0%",
        left: "50%"
      },
      visible: {
        width: "100%",
        left: "0%",
        transition: {
          delay: letters.length * delay,
          duration: 6.9,
          ease: "easeOut"
        }
      }
    }

    return (
      <div 
        ref={ref} 
        className={cn("flex flex-col items-center justify-center gap-2", className)}
        {...props}
      >
        <div className="relative">
          <motion.div
            style={{ display: "flex", overflow: "hidden" }}
            variants={container}
            initial="hidden"
            animate={replay ? "visible" : "hidden"}
            className={cn("text-4xl font-bold text-center font-texturina text-white", textClassName)}
          >
            {letters.map((letter, index) => (
              <motion.span key={index} variants={child}>
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className={cn(
              "absolute",
              underlineHeight,
              underlineOffset,
              "bg-gradient-to-r",
              underlineGradient,
              underlineClassName
            )}
          />
        </div>
      </div>
    )
  }
)
AnimatedHeader.displayName = "AnimatedHeader"

export { AnimatedHeader }
