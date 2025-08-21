'use client';
import React, { useState } from 'react'
import { I_About } from '@/types/project'
import { bricolage_grotesque } from '@/utils/fonts'
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { Badge, Separator } from '@radix-ui/themes'
import Title from '@/components/ui/Title';


const About = () => {
    const [isMore, setIsMore] = useState<boolean>(false);
    return (
        <div className='w-full px-64 max-[1285px]:px-52 max-lg:px-4 max-sm:px-5 flex flex-col items-center mt-4 pb-8'>
            <Title title='The Evolution of My Tech Journey' />

            <div className="w-full pl-36 pr-28 max-sm:px-2">

                {data.slice(0, 3).map((item, idx) => (
                    <div key={idx}>
                        <h1 className={`text-2xl max-sm:text-xl mt-8 font-medium ${bricolage_grotesque}`}>{item.year}</h1>
                        <div className="flex pl-2 mt-4">
                            <div className={`w-full flex flex-col gap-3`}>

                                {item.events.map((event, idx) => (
                                    <div key={idx} className={`flex items-center gap-2 ${bricolage_grotesque}`}>
                                        <span><Separator orientation='horizontal' size='1' className='w-8 bg-black dark:bg-gray-400' /></span>
                                        <span className='text-[15px] max-sm:text-sm dark:text-[#dfdede]'>{event}</span>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                ))}

                <div className={`flex justify-center mt-5 ${isMore ? 'hidden' : 'block'}`}>
                    <Badge color="gray" variant="solid" highContrast onClick={() => setIsMore(true)} className={`text-xs max-sm:text-[10px] w-20 flex items-center text-center dark:hover:bg-gray-300 py-1 px-2 cursor-pointer hover:bg-gray-800 ${bricolage_grotesque}`}>
                        <span>See More</span>
                        <span className='!ml-[-3px] mt-[1px]'>
                            <ChevronDownIcon className='h-3 w-3 dark:!text-black !text-white  shrink-0 text-muted-foreground transition-transform duration-200' />
                        </span>
                    </Badge>
                </div>

                {
                    isMore && data.slice(3).map((item, idx) => (
                        <div key={idx}>
                            <h1 className={`text-2xl mt-8 font-medium ${bricolage_grotesque}`}>{item.year}</h1>
                            <div className="flex pl-2 mt-4">
                                <div className={`w-full flex flex-col gap-3 ${bricolage_grotesque}`}>

                                    {item.events.map((event, idx) => (
                                        <div key={idx} className={`flex items-center gap-2 ${bricolage_grotesque}`}>
                                            <span><Separator orientation='horizontal' size='1' className='w-8 bg-black dark:bg-gray-400' /></span>
                                            <span className='text-[15px] dark:text-[#dfdede]'>{event}</span>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                    ))
                }


                <div className={`flex justify-center mt-5 ${isMore ? 'block' : 'hidden'}`}>
                    <Badge color="gray" variant="solid" highContrast onClick={() => setIsMore(false)} className={`text-xs max-sm:text-[10px] w-20 flex items-center text-center dark:hover:bg-gray-300 py-1 px-2 cursor-pointer hover:bg-gray-800 ${bricolage_grotesque}`}>
                        <span>See Less</span>
                        <span className='!ml-[-3px] mt-[1px]'>
                            <ChevronDownIcon className='rotate-180 h-3 w-3 dark:!text-black !text-white shrink-0 text-muted-foreground transition-transform duration-200' />
                        </span>
                    </Badge>
                </div>
            </div>
        </div>
    )
}

export default About


const data: I_About[] = [
    {
        year: 2025,
        events: [
            "Building something new this year—stay tuned."
        ]
    },
    {
        year: 2024,
        events: [
            "Dove deep into web development, mastered cutting-edge technologies, and built more than 10 projects. 🚀",
            "Started my journey in Web3 development, learning about decentralized applications and embracing blockchain technology. ⛓",
            "Got the chance to join the Google Machine Learning Project as a Prompt Engineer—helping build prompts and train their ML models, and received a stipend for those contributions.",
            "Joined GSSOC EXT 24, where I contributed to full-stack development and machine learning projects, submitting over 100 PRs. I also contributed to Hacktoberfest during that time",
        ]
    },
    {
        year: 2023,
        events: [
            
            
            " Shifted my focus towards understanding both frontend and backend development, diving deep into the core technologies behind them. 🚀", 
            " Explored the Linux terminal and command-line tools to strengthen my fundamentals, while also venturing into AI and machine learning—broadening my perspective on modern computing. 💻"
        ]
    },
    {
        year: 2022,
        events: [
            "I joined B.Tech in Computer Science and, in the beginning, explored a variety of technologies and programming languages—including blockchain and cryptocurrency—broadening my understanding of the latest trends in tech. 📜",
            
        ]
    },
    
    {
        year: 2019,
        events: [
            "Completed 10th grade, Like any curious engineer, I spent my teenage years exploring, tinkering, and experimenting with technology. 🏍️" 
        ]
    },
    
    {
        year: 2013,
        events: [
            "Started watching cricket and became an instant fan of a young Virat Kohli, sparking my passion for the sport. 🔥"
        ]
    },
   
    {
        year: 2009,
        events: [
            "I used a computer for the first time playing different games like Road Rash, GTA Vice City, San Andreas, and IGI. That was the beginning of my curiosity about the world of computers.  💻",
            "Back then, I saw computers only as gaming machines—little did I know they would become such an important part of my future."
        ]
    },
];
