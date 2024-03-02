import { Projects } from 'contentlayer/generated';
import {useTranslations} from 'next-intl';
import TagButton from "../Utils/TagButton";
import ProjectTagButton from "../Utils/ProjectTagButton";
import Image from "next/image";

type Props = {
  project: Projects;
  locale: string;
}

const ProjectDescr = ({project, locale}: Props) => {
    const { title, description, siteurl, appurl, source, nativepub, nativesource, siteimg, mobileimg, docker, tags, body } = project;
    const t = useTranslations();

    function getStyledHtml(str: string){
      str = str.replace(/<a /g, '<a class="text-[#0070f3] no-underline hover:underline" target="_blank" ');
      str = str.replace(/<ol/g, '<ol class="list-decimal list-inside mb-2"');
      str = str.replace(/<ul/g, '<ul class="list-disc list-inside mb-2"');
      str = str.replace(/<li/g, '<li class="mb-2"');
      str = str.replace(/<p/g, '<p class="mb-4"');
      return str;
    }
    
    return (
      <div>
        <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
          {title}
        </h1>
        <div className="mb-4 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
         {siteurl && <TagButton text={t('ProjectPage.ViewSite')} href={siteurl} blank/>}
         {appurl && <TagButton text={t('ProjectPage.ViewApp')} href={appurl} blank/>}
         {source && <TagButton text={t('ProjectPage.GitHub')} href={source} blank/>}
         {nativepub && <TagButton text={t('ProjectPage.Expo')} href={nativepub} blank/>}
         {nativesource && <TagButton text={t('ProjectPage.GitHubMobile')} href={nativesource} blank/>}
        </div>
        
        {docker && docker.split(' | ').length < 2 &&
        <div className="mb-4 items-center font-bold border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
        Docker: {docker}
        </div>
        }
        {docker && docker.split(' | ').length > 1 &&
        <div className="mb-4 items-center font-bold border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
        Docker:<br/>
        {docker.split(' | ').map((item, index) => <div key={index}>{item}</div>)}
        </div>
        }
        <div className="mb-4 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
        {tags?.map((tag, i) => 
          <ProjectTagButton 
            key={i}
            text={tag.replace(/_/g, ' ')}
            href={`/${locale}/projects?tag=${tag}`}
            />
        )}
       </div>

        <div>
          <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
            {description}
          </p>
          {siteimg && mobileimg &&
          <div className="mb-10 w-full flex justify-between">
            <div className="w-[75%] rounded">
              <a href={siteurl || appurl} target='_blank' rel="noreferrer">
              <div className="relative aspect-[97/60] w-full">
                <Image
                  src={`/images/projects/${siteimg}`}
                  alt="siteimage"
                  fill
                  className="h-full w-full object-cover object-center"
                />
              </div>
              </a>
            </div>
            <div className="w-[24%] rounded">
              <a href={nativepub} target='_blank' rel="noreferrer">
              <div className="relative aspect-[27/54] w-full">
                <Image
                  src={`/images/projects/${mobileimg}`}
                  alt="siteimage"
                  fill
                  className="h-full w-full object-cover object-center"
                />
              </div>
              </a>
            </div>
          </div>
          }
         {siteimg && !mobileimg &&
          <div className="mb-10 w-full overflow-hidden rounded">
            <a href={siteurl || appurl} target='_blank' rel="noreferrer">
              <div className="relative aspect-[97/60] w-full sm:aspect-[97/48]">
                <Image
                  src={`/images/projects/${siteimg}`}
                  alt="siteimage"
                  fill
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </a>
          </div>
          }
          
          <div className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: getStyledHtml(body.html) }}
            />
        
        </div>
      </div>

    );
};  


export default ProjectDescr;
  