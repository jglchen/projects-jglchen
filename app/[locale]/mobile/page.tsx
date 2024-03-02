import {unstable_setRequestLocale} from 'next-intl/server';
import {useTranslations} from 'next-intl';
import ComingPage from "@/components/ComingPage";

/*
export const metadata: Metadata = {
  title: "Blog Page - Solid SaaS Boilerplate",
  description: "This is Blog page for Solid Pro",
  // other metadata
};*/

type Props = {
  params: {locale: string};
};

const BlogPage = ({params: {locale}}: Props) => {
  unstable_setRequestLocale(locale);

  const t = useTranslations();
  const pagetitle = t('Navigation.Mobile')

  return (
    <ComingPage 
      pagetitle={pagetitle}
      locale={locale}
     />
  );  
};

export default BlogPage;
