'use client';

import React, { useState, useEffect } from 'react';
import { Link, Separator, Tooltip } from '@radix-ui/themes';
import { GitHubLogoIcon, SunIcon, MoonIcon, FileIcon, LinkedInLogoIcon, HomeIcon } from '@radix-ui/react-icons';
import { usePathname } from 'next/navigation';
import { FaXTwitter } from 'react-icons/fa6';
import { useDarkMode } from '@/hooks/useDarkMode';
import AnimatedClock from './AnimatedClockNew';
import { cn } from '@/lib/utils';
import NextLink from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const pathname = usePathname();
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
                        "rounded-2xl px-4 py-2",
                        "bg-white/80 dark:bg-background/80 backdrop-blur-lg",
                        "border border-primary/5 dark:border-primary/10",
                        "shadow-[0_5px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_5px_30px_rgba(255,255,255,0.02)]"
                    )}
                >
                    {/* Left side - Profile and Name */}
                    {/* @ts-expect-error React version conflict */}
                    <NextLink
                        href="/"
                        className="text-lg font-bold relative group flex items-center gap-2"
                    >
                        <div className="w-12 h-12">
                            {/* @ts-expect-error React version conflict */}
                            <Image
                                src="https://pbs.twimg.com/profile_images/1855984842327109632/malfoy.png"
                                alt="Profile"
                                width={48}
                                height={48}
                                className="rounded-full w-12 h-12 object-cover"
                            />
                        </div>
                        <span className="font-['Nothing_You_Could_Do'] text-xs md:text-2xl text-black dark:text-white">MANI</span>
                    </NextLink>

                    {/* Center - Clock */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <AnimatedClock />
                    </div>

                    {/* Right side - Navigation and Theme Toggle */}
                    <div className="flex items-center space-x-2">
                        <NextLink href="/about" className="hidden md:block hover:underline font-mono text-sm dark:text-gray-100 text-black">
                            about
                        </NextLink>
                        <NextLink href="/projects" className="hidden md:block hover:underline font-mono text-sm dark:text-gray-100 text-black">
                            projects
                        </NextLink>
                        <NextLink href="/blogs" className="hidden md:block hover:underline font-mono text-sm dark:text-gray-100 text-black">
                            blogs
                        </NextLink>

                        <Separator orientation='vertical' size={{ sm: '1', lg: '2', xl: '2' }} className='bg-black dark:bg-gray-400' />

                        <Link href="/" underline='none'>
                            <Tooltip content="Home">
                                <div className='hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300'>
                                    <HomeIcon className={`w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white ${pathname == '/' ? 'dark:!text-[#FFC83D] !text-[#cc9e2b]' : ''}`} />
                                </div>
                            </Tooltip>
                        </Link>

                        <Link href="https://drive.google.com/file/d/1IeUeUBTRQpYJC9zFKA18QJ3vvKuUyUeb/view?usp=sharing" target='_blank' underline='none'>
                            <Tooltip content="Resume">
                                <div className='hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300'>
                                    <FileIcon className='w-[19px] h-[19px] max-sm:h-[15px] max-sm:w-[15px] text-black dark:text-white' />
                                </div>
                            </Tooltip>
                        </Link>

                        <Link href="https://github.com/devxMani" target='_blank'>
                            <Tooltip content="Github">
                                <div className='hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300'>
                                    <GitHubLogoIcon className='w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white' />
                                </div>
                            </Tooltip>
                        </Link>

                        <Link href="https://x.com/devxMani" target='_blank'>
                            <Tooltip content="X">
                                <div className='hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300'>
                                    <FaXTwitter className='w-[17px] h-[17px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white' />
                                </div>
                            </Tooltip>
                        </Link>

                        <Link href="https://www.linkedin.com/in/mani-7b5058253/" target='_blank'>
                            <Tooltip content="Linkedin">
                                <div className='hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300'>
                                    <LinkedInLogoIcon className='w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white' />
                                </div>
                            </Tooltip>
                        </Link>

                        <Separator orientation='vertical' size={{ sm: '1', lg: '2', xl: '2' }} className='bg-black dark:bg-gray-400' />

                        <div className='hover:px-3 max-sm:hover:px-2 py-2.5 rounded-full transition-all duration-300 cursor-pointer' onClick={toggleDarkMode}>
                            <div className='flex items-center'>
                                <button>
                                    {isDarkMode ? <MoonIcon className='w-[18px] h-[18px] max-sm:w-[14px] max-sm:h-[14px]' /> : <SunIcon className='w-5 h-5 max-sm:w-[15px] max-sm:h-[15px]' />}
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
