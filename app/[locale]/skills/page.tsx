import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import { allProjects } from 'contentlayer/generated';
import Skills from "@/components/Skills";
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

const SkillList = ({params: {locale}}: Props) => {
    unstable_setRequestLocale(locale);

    const t = useTranslations();

    const projects = allProjects.filter(item => item.locale === locale).sort(
      (a, b) => b.priority - a.priority
    );
  
    return (
      <div className="mx-auto mt-28 xl:mt-36">
        <div className="container">
          <SectionHeader
            headerInfo={{
              subtitle: t('SkillsPage.title'),
              description: t('SkillsPage.description'),
              }}
            />
          <section className="pb-20 pt-20">
            <div className="container">
              <Skills 
                projects={projects}
                locale={locale}
                />
            </div>
          </section>
       </div> 
      </div>
    );

};    

export default SkillList;
