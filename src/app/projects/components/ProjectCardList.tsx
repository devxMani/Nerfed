'use client'

import { Project } from '@/types/project';
import ProjectCard from './ProjectCard';
import Title from '@/components/ui/Title';
import { useState } from 'react';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { Badge } from '@radix-ui/themes';
import { bricolage_grotesque } from '@/utils/fonts';


const ProjectCardList = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 6);
  };

  return (
    <div className='w-full h-fit px-64 max-[1025px]:px-4 max-[1285px]:px-40 max-lg:px-0 max-sm:px-4 flex flex-col items-center mt-4 pb-8'>
      <Title title='Proof of Work' />

      <div className="flex w-full flex-col gap-4 lg:flex-row mt-4 px-32 max-lg:px-0 max-sm:px-0 flex-wrap items-center ml-14 max-sm:ml-0 max-lg:ml-0 max-[350px]:mr-5 max-[321px]:mr-10">
        {data.slice(0, visibleProjects).map((project: Project, idx: number) => (
          <ProjectCard
            key={idx}
            logo={project.logo}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            link={project.link}
            source={project.source}
          />
        ))}
      </div>
      {visibleProjects < data.length && (
        <Badge color="gray" variant="solid" highContrast onClick={loadMoreProjects} className={`text-xs max-sm:text-[10px] flex items-center text-center dark:hover:bg-gray-300 py-1 px-2 cursor-pointer hover:bg-gray-800 mt-6 ${bricolage_grotesque}`}>
          <span>Load More</span>
          <span className='!ml-[-3px] mt-[1px]'>
            <ChevronDownIcon className='h-3 w-3 dark:!text-black !text-white  shrink-0 text-muted-foreground transition-transform duration-200' />
          </span>
        </Badge>
      )}
    </div>
  )
}

export default ProjectCardList;

const data: Project[] = [
  {
    logo: '/saloon-5.png',
    title: "StoryForge AI",
    description: "Developed a full stack platform for creating interactive, AI-generated adventure stories enabling users to create and explore interactive stories.",
    techStack: ["React", "Python", "Fast API", "Openai API", "PostgreSQL", "JwtAuth", "Docker"],
    link: "https://enrich-salon.fardeen.tech",
    source: "https://github.com/devxMani/StoryForge-AI",
  },
  {
    logo: '/flick-ai.png',
    title: "Peeklink",
    description: "Peeklink is a simple web tool that lets you preview how your website or project link will look across multiple social media platforms.",
    techStack: ["Next.js", "Typescript", "Open graph", "X metadata", "Vercel",],
    link: "https://peek-link.vercel.app/",
    source: "https://github.com/devxMani/Peek-link",
  },
  {
    logo: '/token-2.png',
    title: "Apple iphone 15 site",
    description: "This is a clone website of the iPhone 15 Pro, featuring 3D models and dynamic animations that bring the device to life. The smooth interactions and immersive visuals replicate the experience of a real product site.",
    techStack: ["React", "Tailwind CSS", "GSAP", "Three.js",],
    link: "https://apple-i-phone-15-site.vercel.app/",
    source: "https://github.com/devxMani/Apple-iPhone-15-site",
  },
  {
    logo: "/anon-4.png",
    title: "Codify",
    description: "Codify transforms your source code into stunning, shareable images with customizable themes, fonts, and backgrounds—perfect for developers and tutorials.",
    techStack: ["Next.js", "Typescript", "Radix UI", "Tailwind CSS", "Javascript",],
    link: "https://codify-code.vercel.app/",
    source: "https://github.com/devxMani/Codify",
  },
  {
    logo: "/chat-icon.png",
    title: "The Chat Haven",
    description: "The Chat Haven is a chat application that allows users to create & join room and send & receive messages in real-time.",
    techStack: ["Next.js", "Node.js", "WebSockets", "TypeScript", "Tailwind CSS"],
    link: "https://chathaven.fardeen.tech",
    source: "https://github.com/Fardeen26/chat-app",
  },
  {
    logo: "/book-1.png",
    title: "X Sentiment Analyzer",
    description: "An AI-powered platform that turns real-time social media data into actionable sentiment insights, sentiment analysis dashboard that leverages X API to analyze real time public opinion on companies, products, or topics.",
    techStack: ["React", "Python", "Twitter API", "Shadcn", "Chartjs",],
    link: "https://github.com/devxMani/X-sentiment-analyzer",
    source: "https://github.com/devxMani/X-sentiment-analyzer",
  },
  {
    logo: '/credit-buddy.svg',
    title: "Credit Buddy",
    description: "Credit Buddy simplifies credit card queries with AI-powered insights, offering quick and reliable solutions for users to manage their finances better and make informed decisions effortlessly.",
    techStack: ["Next.js", "Puppeteer", "Google Gemini", "TypeScript"],
    link: "https://credit-buddy.fardeen.tech",
    source: "https://github.com/Fardeen26/gen-ai",
  },
  {
    logo: '/codify.png',
    title: "Codify",
    description: "Codify transforms your source code into stunning, shareable images with customizable themes, fonts, and backgrounds—perfect for developers and tutorials.",
    techStack: ["Next.js", "TypeScript", "Shadcn", "Tailwind CSS"],
    link: "https://codify.fardeen.tech",
    source: "https://github.com/Fardeen26/Codify",
  },
  {
    logo: '/memehub.png',
    title: "MemeHub",
    description: "MemeHub is a meme generator that allows users to create and share memes with a user-friendly interface and a wide range of templates.",
    techStack: ["Next.js", "Typescript", "framer-motion", "Tailwind CSS", "Magic UI"],
    link: "https://www.memehub.mom/",
    source: "https://github.com/Fardeen26/meme-generator",
  },
  {
    logo: '/malfoy.png',
    title: "SaaS Landing Page",
    description: "Crafted this high-conversion SaaS landing page for a startup, focusing on clean design, user experience, and optimized performance to drive user engagement.",
    techStack: ["Next.js", "TypeScript", "Shadcn", "motion", "Tailwind CSS"],
    link: "https://malfoy.fardeen.tech",
    source: "https://github.com/Fardeen26/malfoy",
  },
  {
    logo: '/top-50.png',
    title: "Life50",
    description: "Life50 curates the top 50 life-changing books, habits, tools, and more—chosen by the internet and you. Share, upvote, and add what has transformed your life to inspire others.",
    techStack: ["Next.js", "Supabase", "TypeScript", "Zod", "Tailwind CSS"],
    link: "https://life50.fardeen.tech",
    source: "https://github.com/Fardeen26/life50",
  },
  {
    logo: '/sumzsvg.svg',
    title: "SumZ - Article Summarizer",
    description: "SumZ is an article summarizer that quickly generates concise summaries of lengthy articles, helping users grasp key points efficiently. It's designed for speed and accuracy with user-friendly interface.",
    techStack: ["React", "Redux", "Open AI", "Tailwind CSS"],
    link: "https://sumz.fardeen.tech/",
    source: "https://github.com/Fardeen26/Article-Summarizer",
  },
];
