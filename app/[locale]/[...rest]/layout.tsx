import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';
import langData from '@/configdata/langData';
import {ReactNode} from 'react';
//import "@/styles/index.css";
import "../../globals.css";

type Props = {
    children: ReactNode;
    params: {locale: string};
};

const locales = langData.map(lang => lang.loc);
  
export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params: {locale}
}: Omit<Props, 'children'>) {
  const t = await getTranslations({locale, namespace: 'NotFoundPage'});

  return {
    title: t('title'),
    description: t('description'),
  };
}
 
export default function NotFoundLayout({
    children,
    params: {locale}
}: Props) {
    unstable_setRequestLocale(locale);
  
    // URL -> /shop/shoes/nike-air-max-97
    // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }
    return <>{children}</>
}