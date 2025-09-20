'use client';

import React, { useState, useEffect } from 'react';
// @ts-expect-error React version conflicts 
import { Link, Separator, Tooltip } from '@radix-ui/themes';
// @ts-expect-error React version conflicts
import { GitHubLogoIcon, SunIcon, MoonIcon, FileIcon, LinkedInLogoIcon, HomeIcon } from '@radix-ui/react-icons';
import { usePathname } from 'next/navigation';
// @ts-expect-error React version conflicts
import { FaXTwitter } from 'react-icons/fa6';
import { useDarkMode } from '@/hooks/useDarkMode';
import AnimatedClock from './AnimatedClockNew';
import { cn } from '@/lib/utils';
// @ts-expect-error React version conflicts
import NextLink from 'next/link';
// @ts-expect-error React version conflicts
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
        // @ts-expect-error React version conflicts
        <header
            className={cn(
                "fixed top-5 left-0 right-0 z-50 transition-all duration-300"
            )}
        >
            {/* @ts-expect-error React version conflicts */}
            <div
                className={cn(
                    "w-sm lg:container mx-auto transition-all duration-500 ease-in-out",
                    scrolled ? "max-w-2xl lg:max-w-4xl" : ""
                )}
            >
                {/* @ts-expect-error React version conflicts */}
                <nav
                    className={cn(
                        "flex items-center justify-between",
                        "rounded-2xl px-6 py-3",
                        "bg-white/10 dark:bg-black/10 backdrop-blur-xl",
                        "border border-white/20 dark:border-white/10",
                        "shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]",
                        "backdrop-saturate-150"
                    )}
                >
                    {/* Left side - Profile and Name */}
                    {/* @ts-expect-error React version conflict */}
                    <NextLink
                        href="/"
                        className="text-lg font-bold relative group flex items-center gap-3 ml-2"
                    >
                        {/* @ts-expect-error React version conflicts */}
                        <div className="w-12 h-12">
                            {/* @ts-expect-error React version conflict */}
                            <Image
                                src="/space.jpeg"
                                alt="Profile"
                                width={48}
                                height={48}
                                className="rounded-full w-12 h-12 object-cover"
                            />
                        </div>
                        {/* @ts-expect-error React version conflicts */}
                        <span className="font-['Nothing_You_Could_Do'] text-xl md:text-3xl text-black dark:text-white">MANI</span>
                    </NextLink>

                    {/* Center - Clock */}
                    {/* @ts-expect-error React version conflicts */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <AnimatedClock />
                    </div>

                    {/* Right side - Navigation and Theme Toggle */}
                    {/* @ts-expect-error React version conflicts */}
                    <div className="flex items-center space-x-6 mr-2">

                        {/* @ts-expect-error React version conflicts */}
                        <Separator orientation='vertical' size={{ sm: '1', lg: '2', xl: '2' }} className='bg-black dark:bg-gray-400' />

                        {/* @ts-expect-error React version conflicts */}
                        <Link href="/" underline='none'>
                            {/* @ts-expect-error React version conflicts */}
                            <Tooltip content="Home">
                                {/* @ts-expect-error React version conflicts */}
                                <div className='hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300'>
                                    {/* @ts-expect-error React version conflicts */}
                                    <HomeIcon className={`w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white ${pathname == '/' ? 'dark:!text-[#FFC83D] !text-[#cc9e2b]' : ''}`} />
                                </div>
                            </Tooltip>
                        </Link>

                        {/* @ts-expect-error React version conflicts */}
                        <Link href="https://drive.google.com/file/d/1IeUeUBTRQpYJC9zFKA18QJ3vvKuUyUeb/view?usp=sharing" target='_blank' underline='none'>
                            {/* @ts-expect-error React version conflicts */}
                            <Tooltip content="Resume">
                                {/* @ts-expect-error React version conflicts */}
                                <div className='hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300'>
                                    {/* @ts-expect-error React version conflicts */}
                                    <FileIcon className='w-[19px] h-[19px] max-sm:h-[15px] max-sm:w-[15px] text-black dark:text-white' />
                                </div>
                            </Tooltip>
                        </Link>

                        {/* @ts-expect-error React version conflicts */}
                        <Link href="https://github.com/devxMani" target='_blank'>
                            {/* @ts-expect-error React version conflicts */}
                            <Tooltip content="Github">
                                {/* @ts-expect-error React version conflicts */}
                                <div className='hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300'>
                                    {/* @ts-expect-error React version conflicts */}
                                    <GitHubLogoIcon className='w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white' />
                                </div>
                            </Tooltip>
                        </Link>

                        {/* @ts-expect-error React version conflicts */}
                        <Link href="https://x.com/devxMani" target='_blank'>
                            {/* @ts-expect-error React version conflicts */}
                            <Tooltip content="X">
                                {/* @ts-expect-error React version conflicts */}
                                <div className='hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300'>
                                    {/* @ts-expect-error React version conflicts */}
                                    <FaXTwitter className='w-[17px] h-[17px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white' />
                                </div>
                            </Tooltip>
                        </Link>

                        {/* @ts-expect-error React version conflicts */}
                        <Link href="https://www.linkedin.com/in/mani-7b5058253/" target='_blank'>
                            {/* @ts-expect-error React version conflicts */}
                            <Tooltip content="Linkedin">
                                {/* @ts-expect-error React version conflicts */}
                                <div className='hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300'>
                                    {/* @ts-expect-error React version conflicts */}
                                    <LinkedInLogoIcon className='w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white' />
                                </div>
                            </Tooltip>
                        </Link>

                        {/* @ts-expect-error React version conflicts */}
                        <Separator orientation='vertical' size={{ sm: '1', lg: '2', xl: '2' }} className='bg-black dark:bg-gray-400' />

                        {/* @ts-expect-error React version conflicts */}
                        <div className='hover:px-3 max-sm:hover:px-2 py-2.5 rounded-full transition-all duration-300 cursor-pointer' onClick={toggleDarkMode}>
                            {/* @ts-expect-error React version conflicts */}
                            <div className='flex items-center'>
                                {/* @ts-expect-error React version conflicts */}
                                <button>
                                    {/* @ts-expect-error React version conflicts */}
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