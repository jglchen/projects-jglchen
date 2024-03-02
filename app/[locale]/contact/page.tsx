import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import Contact from "@/components/Contact";
import SectionHeader from "@/components/Common/SectionHeader";

type Props = {
  params: {locale: string};
};

/*
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};*/

const ContactPage = ({params: {locale}}: Props) => {
  unstable_setRequestLocale(locale);

  const t = useTranslations();
  /*
  return (
    <div className="pt-40 pb-20">
      <Contact 
        locale={locale} 
        />
    </div>
  );*/

  return (
    <div className="mx-auto mt-28 xl:mt-36">
      <div className="container">
        <SectionHeader
          headerInfo={{
            subtitle: t('ContactPage.pagetitle'),
            description: t('ContactPage.description'),
            }}
          />
        <section className="pb-20 pt-10">
          <div className="container">
            <Contact 
              locale={locale} 
            />
          </div>
        </section>
      </div> 
    </div>
  );




  return (
    <div className="pt-40 pb-20">
      <Contact 
        locale={locale} 
        />
    </div>
  );



};

export default ContactPage;
