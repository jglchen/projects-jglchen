import {unstable_setRequestLocale} from 'next-intl/server';
import {useTranslations} from 'next-intl';
import Mobile from '@/components/Mobile';
import SectionHeader from "@/components/Common/SectionHeader";

/*
export const metadata: Metadata = {
  title: "Blog Page - Solid SaaS Boilerplate",
  description: "This is Blog page for Solid Pro",
  // other metadata
};*/

type Props = {
  params: {locale: string};
};

const MobilePage = ({params: {locale}}: Props) => {
  unstable_setRequestLocale(locale);

  const t = useTranslations();
  const pagetitle = t('Navigation.Mobile')

  return (
    <div className="mx-auto mt-28 xl:mt-36">
      <div className="container">
        <SectionHeader
          headerInfo={{
            subtitle: t('MobilePage.title'),
            }}
          />
        <section className="pb-20 pt-10">
          <div className="container">
            <Mobile 
              locale={locale} 
            />
          </div>
        </section>
      </div> 
    </div>
  );
  
};

export default MobilePage;
