import { Projects } from 'contentlayer/generated';
import dynamic from 'next/dynamic'; 
const ProjectItem = dynamic(() => import('./ProjectItem'), { ssr: false });

const ProjectsDisplay = ({ projects, locale }: { projects: Projects[]; locale:string; }) => {
    return (
        
        <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 xl:gap-10">
            {projects.map((project) => 
                <ProjectItem 
                    key={project._id}
                    project={project} 
                    locale={locale}
                    />
        
            )}
            </div>
        </div>
    );
} 

export default ProjectsDisplay;

