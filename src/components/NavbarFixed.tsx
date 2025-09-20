'use client';

import React, { useState, useEffect } from 'react';
import { useDarkMode } from '@/hooks/useDarkMode';
import AnimatedClock from './AnimatedClockNew';
import { cn } from '@/lib/utils';

const Navbar = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-5 left-0 right-0 z-50 transition-all duration-300"
            )}
        >
            <div
                className={cn(
                    "w-sm lg:container mx-auto transition-all duration-500 ease-in-out",
                    scrolled ? "max-w-2xl lg:max-w-4xl" : ""
                )}
            >
                <nav
                    className={cn(
                        "flex items-center justify-between",
                        "mx-6 sm:mx-8 md:mx-12 lg:mx-16",
                        "px-6 py-4",
                        "backdrop-blur-md bg-white/20 dark:bg-black/20",
                        "border border-white/30 dark:border-gray-700/30",
                        "rounded-2xl shadow-lg",
                        "transition-all duration-300"
                    )}
                >
                    {/* Left Section - Profile */}
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-3">
                            <div className="relative">
                                <img 
                                    src="/space.jpeg" 
                                    alt="Profile" 
                                    width={40} 
                                    height={40}
                                    className="rounded-full border-2 border-white/50 dark:border-gray-600/50"
                                />
                            </div>
                            <span 
                                className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                                style={{ 
                                    fontFamily: "'Dancing Script', cursive",
                                    fontWeight: 700
                                }}
                            >
                                MANI
                            </span>
                        </div>
                    </div>

                    {/* Center Section - Clock */}
                    <div className="hidden md:flex items-center justify-center">
                        <div className="px-4 py-2 bg-white/10 dark:bg-black/10 rounded-lg backdrop-blur-sm border border-white/20 dark:border-gray-600/20">
                            <AnimatedClock />
                        </div>
                    </div>

                    {/* Right Section - Navigation */}
                    <div className="flex items-center space-x-1 sm:space-x-2">
                        {/* Navigation Links - Desktop */}
                        <div className="hidden md:flex items-center space-x-6 mr-4">
                            <a 
                                href="/"
                                className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                Home
                            </a>
                            <a 
                                href="/about"
                                className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                About
                            </a>
                            <a 
                                href="/projects"
                                className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                Projects
                            </a>
                            <a 
                                href="/blogs"
                                className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                Blogs
                            </a>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center space-x-2">
                            <a
                                href="/"
                                className="p-2 rounded-lg hover:bg-white/10 dark:hover:bg-black/10 transition-colors"
                                title="Home"
                            >
                                <HomeIcon className="w-4 h-4" />
                            </a>
                            
                            <a
                                href="https://drive.google.com/file/d/1IeUeUBTRQpYJC9zFKA18QJ3vvKuUyUeb/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg hover:bg-white/10 dark:hover:bg-black/10 transition-colors"
                                title="Resume"
                            >
                                <FileIcon className="w-4 h-4" />
                            </a>
                            
                            <a
                                href="https://github.com/devxMani"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg hover:bg-white/10 dark:hover:bg-black/10 transition-colors"
                                title="GitHub"
                            >
                                <GitHubIcon className="w-4 h-4" />
                            </a>
                            
                            <a
                                href="https://x.com/devxMani"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg hover:bg-white/10 dark:hover:bg-black/10 transition-colors"
                                title="X (Twitter)"
                            >
                                <TwitterIcon className="w-4 h-4" />
                            </a>
                            
                            <a
                                href="https://www.linkedin.com/in/mani-7b5058253/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg hover:bg-white/10 dark:hover:bg-black/10 transition-colors"
                                title="LinkedIn"
                            >
                                <LinkedInIcon className="w-4 h-4" />
                            </a>
                            
                            <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-2" />
                            
                            <button
                                onClick={toggleDarkMode}
                                className="p-2 rounded-lg hover:bg-white/10 dark:hover:bg-black/10 transition-colors"
                                title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                            >
                                {isDarkMode ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

// Simple icon components to avoid dependency issues
const HomeIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);

const FileIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

const GitHubIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const SunIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const MoonIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
);

export default Navbar;