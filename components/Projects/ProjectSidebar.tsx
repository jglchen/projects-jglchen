import {useTranslations} from 'next-intl';
import { allProjects } from 'contentlayer/generated';
import RelatedWork from './RelatedWork';
import TagButton from "../Utils/TagButton";


const ProjectSidebar = ({slug, locale, tagList}: {slug: string; locale: string; tagList: string[];}) => {
    const t = useTranslations();
  
    const keySlugElms = slug.split('-');  
    const _id = 'projects/'+slug+(locale !== 'en' ? `_${locale}`:'')+'.mdx';
    const relatedWorks = allProjects.filter(item => item.locale === locale && item._id !== _id)
                          .map(project => {
                            const keyElms = project._raw.sourceFileName.replace('_'+locale, '')
                                              .replace('.mdx','').split('-');
                          
                            let score = 0;  
                            for (let elm of keyElms) {
                                if (keySlugElms.includes(elm)){
                                  score += 3;
                                }
                            }                 

                            return  {
                               title: project.title,
                               siteimg: `/images/projects/${project.siteimg}`,
                               mobileimg: project.mobileimg ? `/images/projects/${project.mobileimg}`:'',
                               url: `/${locale}${project.url.replace('_'+locale,'')}`,
                               score
                            };                
                          }).sort(
                            (a, b) => b.score - a.score
                          ).slice(0, 3);

    return (
      <>
      <div className="shadow-three mb-10 rounded-sm bg-white dark:bg-[#221822] dark:shadow-none">
        <h3 className="border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
          {t('ProjectPage.RelatedWorks')}
        </h3>
        <ul className="p-8">
          {relatedWorks.map(work => 
           (<li key={work.url}  className="mb-6 border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10">
            <RelatedWork
              title={work.title}
              siteimg={work.siteimg}
              mobileimg={work.mobileimg}
              url={work.url}
            />
           </li>)

          )}
        </ul>
      </div>
      <div className="shadow-three dark:bg-[#221822] mb-10 rounded-sm bg-white dark:shadow-none">
        <h3 className="border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
          {t('ProjectPage.PopularTags')}
        </h3>
        <div className="flex flex-wrap px-6 py-6">
        {tagList.slice(0,6).map((item, index) =>
           <TagButton
            key={index} 
            text={item.replace(/_/g,' ')} 
            href={`/${locale}/projects?tag=${item}`}
            />
          )}  
        </div>
      </div>
      </>
    );
}  

export default ProjectSidebar;
