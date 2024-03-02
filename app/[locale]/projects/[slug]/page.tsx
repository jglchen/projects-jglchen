import { allProjects } from 'contentlayer/generated';
import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import ProjectDescr from "@/components/Projects/ProjectDescr";
import ProjectSidebar from "@/components/Projects/ProjectSidebar";
import { getTagList } from "@/actions/gettaglist";

type Props = {
    params: {
        slug: string;
        locale: string;
    };
};

export const generateStaticParams = async ({ params: {locale} }: Props) => 
    allProjects
        .filter(item => item.locale === locale)
        .map((post) => ({ slug: post._raw.flattenedPath.replace(`_${locale}`,'') }));

export const generateMetadata = ({ params: {slug, locale} }: Props) => {
    const post = allProjects
        .filter(item => item.locale === locale)
        .find((post) => post._raw.flattenedPath.replace('projects/','').replace(`_${locale}`,'') === slug)
            
    //if (!post) throw new Error(`Post not found for slug: ${slug}`)
    if (!post) return null;
    
    return { 
        title: post.title,
        description: post.description,
    }
}

export const revalidate = 3600 * 6;

/*
async function getTagList() {
  
    const domainUrl = process.env.NODE_ENV === 'production' ? process.env.PRO_URL: process.env.DEV_URL;
    const res = await fetch(domainUrl+'/api/taglist', {method: 'GET', next: { revalidate: 3600 }});
    
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json();
}*/

function NoNamedWork({slug}: {slug: string;}){
    const t = useTranslations('ProjectPage');

    return (
        <div className="mx-auto max-w-c-1280 px-4 md:px-8 2xl:px-0">
            <div className="container">
                <section className="overflow-hidden pb-[120px] pt-[180px]">
                    <div className="container">
                        <div className="text-2xl text-black dark:text-white">
                        {t('nonamedwork',{slug: slug})}
                        </div>
                    </div>
                </section>
            </div> 
        </div>
    );    
}


export default async function ProjectPage({ params: {slug, locale} }: Props){

    unstable_setRequestLocale(locale);

    const post = allProjects
        .filter(item => item.locale === locale)
        .find((post) => post._raw.flattenedPath.replace('projects/','').replace(`_${locale}`,'') === slug);
    
    //if (!post) throw new Error(`Post not found for slug: ${slug}`);
    if (!post) {
        return (
            <NoNamedWork 
                slug={slug}
                />
        );    
    }

    const tagList = await getTagList();

    return (
        <div className="mx-auto max-w-c-1280 px-4 md:px-8 2xl:px-0">
            <div className="container">
                <section className="overflow-hidden pb-[120px] pt-[180px]">
                    <div className="container">
                        <div className="-mx-4 flex flex-wrap">
                            <div className="w-full px-4 lg:w-8/12">
                                <ProjectDescr 
                                    project={post}
                                    locale={locale}
                                    />
                            </div>
                            <div className="w-full px-4 lg:w-4/12">
                                <ProjectSidebar 
                                    slug={slug}
                                    locale={locale}
                                    tagList={tagList}
                                    />
                            </div>
                        </div>
                    </div>
                </section>
            </div> 
        </div>

    );    

}
