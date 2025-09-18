"use client"

import { motion } from "framer-motion"
import { inter } from "@/utils/fonts"

export default function AnimatedText() {
    return (
        <div className="mt-6 mb-4 px-32 max-sm:px-4 flex flex-col items-center gap-6">
            {/* Tech Stack with same font as bio */}
            <div className="text-center">
                <h3 className={`!text-base max-sm:!text-sm !font-normal !tracking-normal ${inter} !leading-6`}>
                    <span>messing with </span>
                    <span>next.js, web designing, ml models, python, typescript</span>
                    <span> and some other tooling.</span>
                </h3>
            </div>

            {/* Enhanced Availability Status with better green dot */}
            <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
                <motion.h3 
                    className={`!text-base max-sm:!text-sm !font-normal !tracking-normal ${inter} !leading-6`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                >
                    <motion.span 
                        className="inline-flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
                    >
                        <motion.span 
                            className="relative mr-3"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ 
                                duration: 0.4, 
                                delay: 0.9, 
                                ease: "easeOut",
                                type: "spring",
                                stiffness: 200
                            }}
                        >
                            {/* Enhanced green dot with glow effect */}
                            <span className="w-3 h-3 bg-green-500 rounded-full block shadow-lg"></span>
                            <span className="absolute top-0 left-0 w-3 h-3 bg-green-400 rounded-full animate-ping"></span>
                            <span className="absolute top-0.5 left-0.5 w-2 h-2 bg-green-300 rounded-full opacity-60"></span>
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
                        >
                            Available for new opportunities
                        </motion.span>
                    </motion.span>
                </motion.h3>
            </motion.div>
        </div>
    )
}
