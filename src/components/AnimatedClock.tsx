'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const AnimatedClock: React.FC = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const formatTime = (date: Date) => {
        const hours = date.getHours().toString().padStart(2, '0')
        const minutes = date.getMinutes().toString().padStart(2, '0')
        const seconds = date.getSeconds().toString().padStart(2, '0')
        return { hours, minutes, seconds }
    }

    const { hours, minutes, seconds } = formatTime(time)

    const digitVariants = {
        initial: { y: 15, opacity: 0, scale: 0.9 },
        animate: { y: 0, opacity: 1, scale: 1 },
        exit: { y: -15, opacity: 0, scale: 0.9 }
    }

    const DigitDisplay: React.FC<{ digit: string; index: number; shouldAnimate?: boolean }> = ({ digit, index, shouldAnimate = false }) => (
        <div className="relative overflow-hidden w-[14px] h-[20px] flex items-center justify-center">
            {shouldAnimate ? (
                // @ts-expect-error - React version conflict
                <AnimatePresence mode="wait">
                    {/* @ts-expect-error - React version conflict */}
                    <motion.span
                        key={`${digit}-${index}`}
                        variants={digitVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            duration: 0.3,
                            ease: [0.4, 0, 0.2, 1]
                        }}
                        className="absolute text-sm font-mono font-bold text-black dark:text-white"
                    >
                        {digit}
                    </motion.span>
                </AnimatePresence>
            ) : (
                <span className="text-sm font-mono font-bold text-black dark:text-white">
                    {digit}
                </span>
            )}
        </div>
    )

    const Separator: React.FC = () => (
        <motion.span
            animate={{ 
                opacity: [1, 0.3, 1],
                scale: [1, 0.8, 1]
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            className="text-sm font-mono font-bold text-black dark:text-white mx-1"
        >
            :
        </motion.span>
    )

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center bg-black/10 dark:bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-lg"
        >
            <div className="flex items-center space-x-0.5">
                {/* @ts-expect-error - React version conflict */}
                <DigitDisplay digit={hours[0]} index={0} shouldAnimate={false} />
                {/* @ts-expect-error - React version conflict */}
                <DigitDisplay digit={hours[1]} index={1} shouldAnimate={false} />
            </div>
            {/* @ts-expect-error - React version conflict */}
            <Separator />
            <div className="flex items-center space-x-0.5">
                {/* @ts-expect-error - React version conflict */}
                <DigitDisplay digit={minutes[0]} index={2} shouldAnimate={false} />
                {/* @ts-expect-error - React version conflict */}
                <DigitDisplay digit={minutes[1]} index={3} shouldAnimate={false} />
            </div>
            {/* @ts-expect-error - React version conflict */}
            <Separator />
            <div className="flex items-center space-x-0.5">
                {/* @ts-expect-error - React version conflict */}
                <DigitDisplay digit={seconds[0]} index={4} shouldAnimate={true} />
                {/* @ts-expect-error - React version conflict */}
                <DigitDisplay digit={seconds[1]} index={5} shouldAnimate={true} />
            </div>
            <motion.span
                initial={{ opacity: 0, x: 5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
                className="ml-2 text-base font-mono font-normal text-black/70 dark:text-white/70"
            >
                IST
            </motion.span>
        </motion.div>
    )
}

export default AnimatedClock