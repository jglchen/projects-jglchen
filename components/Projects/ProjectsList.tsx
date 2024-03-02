"use client";

import { Projects } from 'contentlayer/generated';
import { useSearchParams } from 'next/navigation';
import ProjectsDisplay from './ProjectsDisplay';

const ProjectsList = ({ projects, nowork, locale }: { projects: Projects[]; nowork: string; locale:string; }) => {
    const searchParams = useSearchParams();
    const tag = searchParams.get('tag');
  
    if (tag){
        const projectsTag =  projects.filter(project => project.tags?.includes(tag));
        if (!projectsTag.length) {
            return <div className="text-2xl text-black dark:text-white">{nowork}</div>;
        } 

        return (
            <ProjectsDisplay 
            projects={projectsTag}
            locale={locale}
           />

        );
    } 
    
    return (
        <ProjectsDisplay 
            projects={projects}
            locale={locale}
           />
    );
};

export default ProjectsList;
