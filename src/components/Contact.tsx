"use client";

import React from 'react'
import { Link } from '@radix-ui/themes'
import { FaXTwitter } from "react-icons/fa6";
import { bricolage_grotesque } from '@/utils/fonts';
import { SiLivechat } from "react-icons/si";
import Title from './ui/Title';

const Contact = () => {
    return (
        <div className='w-full px-64 max-[1285px]:px-52 max-lg:px-4 max-sm:px-2 flex flex-col items-center mt-6 pb-8'>
            <Title title='Get in Touch' />

            <div className={`w-full flex flex-col gap-3 mt-6 px-36 max-sm:px-4 ${bricolage_grotesque}`}>
                <div>
                    <h2 className='text-lg max-sm:text-base'>Have a Question? Let&apos;s Chat!</h2>
                </div>
                <div className='flex gap-3 mt-2'>
                    <Link href="https://cal.com/mani-zzbm9w/secret" target="_blank">
                        <button className='bg-[#4ADE80] text-black py-2 px-3 rounded-md flex items-center gap-2 text-sm max-sm:text-xs hover:bg-[#42bc6f]'>
                            <SiLivechat className='h-[18px] w-[18px]' /> Book a meet
                        </button>
                    </Link>

                    <Link href="https://x.com/devxMani" target="_blank">
                        <button className='bg-[#1D9BF0] text-white py-2 px-3 rounded-md flex items-center gap-2 text-sm max-sm:text-xs hover:bg-[#2e7bae]'>
                            <FaXTwitter className='h-[18px] w-[18px]' /> Chat on Twitter
                        </button>
                    </Link>
                </div>

                <div className='mt-6'>
                    <h2 className='text-lg text-start max-sm:text-base'>Reach Out via Email</h2>
                </div>

                <div className="w-full flex justify-center">
                    <div className='text-center py-4'>
                        <p className='text-sm text-gray-600 dark:text-gray-400'>
                            Feel free to reach out directly at{' '}
                            <a href="mailto:chandramanigupta2003@gmail.com" className='text-blue-500 hover:underline'>
                                chandramanigupta2003@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact