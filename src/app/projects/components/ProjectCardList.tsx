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
    logo: '/credit-buddy.svg', //flick-ai.png
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
    logo: "/codify.png",
    title: "Codify",
    description: "Codify transforms your source code into stunning, shareable images with customizable themes, fonts, and backgrounds—perfect for developers and tutorials.",
    techStack: ["Next.js", "Typescript", "Radix UI", "Tailwind CSS", "Javascript",],
    link: "https://codify-code.vercel.app/",
    source: "https://github.com/devxMani/Codify",
  },
  {
    logo: "/flick-ai.png",// /chat-icon.png
    title: "X sentiment analyzer",
    description: "An AI-powered platform that turns real-time social media data into actionable sentiment insights, sentiment analysis dashboard that leverages X API to analyze real time public opinion on companies, products, or topics.",
    techStack: ["React", "Python", "Twitter API", "Shadcn", "Chartjs",],
    link: "https://x-sentiment-analyzer.vercel.app/",
    source: "https://github.com/devxMani/X-sentiment-analyzer",
  },
  {
    logo: "/book-1.png",
    title: "2025 Calender",
    description: "2025 Calender is a web application designed to create and manage calendar events for the year 2025. It allows users to add, edit, and delete events, and view the calendar in a grid view or list view. Seamlessly",
    techStack: ["Next,js", "Javascript", "Node.js", "PostgreSQL", "CSS",],
    link: "https://github.com/devxMani/2025-Calender",
    source: "https://github.com/devxMani/2025-Calender",
  },
  {
    logo: '/anon-4.png',// /anon-4.png /credit-buddy.svg
    title: "ASCII motion",
    description: "An Add-On for Terminal that generates video that converts video files into colored ASCII art and plays them in real-time. Full-color ASCII art conversion using RGB values, playback controls (play, pause, speed adjustment) ",
    techStack: ["Python", "OpenCV"],
    link: "https://github.com/devxMani/ASCII-Motion",
    source: "https://github.com/devxMani/ASCII-Motion",
  },
  {
    logo: '/codify.png',
    title: "Building",
    description: " # Explore.. Project is in Developement if you want to explore other projects make sure to check github repos for different techstacks projects and add ons on different platforms make sure to exlpore github ",
    techStack: ["Next.js", "TypeScript", "Shadcn", "Tailwind CSS"],
    link: "https://github.com/devxMani",
    source: "https://github.com/devxMani",
  },
  {
    logo: '/memehub.png',
    title: "Building",
    description: " # Explore.. Project is in Developement if you want to explore other projects make sure to check github repos for different techstacks projects and add ons on different platforms make sure to exlpore github.",
    techStack: ["Next.js", "Typescript", "framer-motion", "Tailwind CSS", "Magic UI"],
    link: "https://github.com/devxMani",
    source: "https://github.com/devxMani",
  },
  {
    logo: '/malfoy.png',
    title: "Building",
    description: " # Explore.. Project is in Developement if you want to explore other projects make sure to check github repos for different techstacks projects and add ons on different platforms make sure to exlpore github.",
    techStack: ["Next.js", "TypeScript", "Shadcn", "motion", "Tailwind CSS"],
    link: "https://github.com/devxMani",
    source: "https://github.com/devxMani",
  },
  
];
