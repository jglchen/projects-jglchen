import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import { allProjects } from 'contentlayer/generated';
import ProjectsList from '@/components/Projects/ProjectsList';
import SectionHeader from "@/components/Common/SectionHeader";


type Props = {
    params: {locale: string};
};
  
  /*
  import { Metadata } from "next";
  
  export const metadata: Metadata = {
    title: "Blog Page | Free Next.js Template for Startup and SaaS",
    description: "This is Blog Page for Startup Nextjs Template",
    // other metadata
  };*/
  
const ProjectWorks = ({params: {locale}}: Props) => {
  unstable_setRequestLocale(locale);

  const t = useTranslations();
  const pageTitle = t('ProjectPage.title')

  const projects = allProjects.filter(item => item.locale === locale).sort(
    (a, b) => b.priority - a.priority
  );

  return (
 
    <div className="mx-auto max-w-c-1280 px-4 md:px-8 2xl:px-0 mt-28 xl:mt-36">
      <div className="container">
        <SectionHeader
          headerInfo={{
            subtitle: t('ProjectPage.title'),
            description: t('ProjectPage.description'),
            }}
        />
        <section className="pb-20 pt-20">
          <div className="container">
          <ProjectsList 
            projects={projects}
            nowork={t('ProjectPage.nowork')}
            locale={locale}
            />

          </div>
        </section>
       </div> 
    </div>
  );

};

export default ProjectWorks;
