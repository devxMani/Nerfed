import { Project } from '@/types/project';
import Title from '@/components/ui/Title';
import ProjectCard from '@/app/projects/components/ProjectCard';


const AddOnProjects = () => {
    return (
        <div className='w-full h-fit px-64 max-[1025px]:px-4 max-[1285px]:px-40 max-lg:px-0 max-sm:px-4 flex flex-col items-center mt-8 pb-8'>
            <Title title='Add-Ons' />

            <div className="flex w-full flex-col gap-4 lg:flex-row mt-4 px-32 max-lg:px-0 max-sm:px-0 flex-wrap items-center ml-14 max-sm:ml-0 max-lg:ml-0 max-[350px]:mr-5 max-[321px]:mr-10">
                {data.map((project: Project, idx: number) => (
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

        </div>
    )
}

export default AddOnProjects;

const data: Project[] = [
    {
        logo: '/book-1.png',
        title: "2025 Calender",
        description: "2025 Calender is a web application designed to create and manage calendar events for the year 2025.",
        techStack: ["Next,js", "Javascript", "Node.js", "PostgreSQL", "CSS",],
        link: "https://github.com/devxMani/2025-Calender",
        source: "#",
    },
    {
        logo: '/anon-4.png',
        title: "ASCII motion",
        description: "An Add-On for Terminal that generates video that converts video files into colored ASCII art and plays them in real-time.",
        techStack: ["Python", "OpenCV",],
        link: "https://github.com/devxMani/ASCII-Motion",
        source: "#",
    }
];
