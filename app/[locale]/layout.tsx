import { ReactNode } from 'react';
import {notFound} from 'next/navigation';
import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';
import langData from '@/configdata/langData';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import "../globals.css";

import ToasterContext from "../context/ToastContext";

// Can be imported from a shared config
const locales = langData.map(lang => lang.loc);

type Props = {
  children: ReactNode;
  params: {locale: string};
}

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params: {locale}
}: Omit<Props, 'children'>) {
  const t = await getTranslations({locale, namespace: 'HomePage'});

  return {
    title: t('title'),
    description: t('description'),
    icons: {
      icon: {
        //url: "/images/favicon.ico",
        url: "/images/profile.jpg",
        type: "image/png",
      },
      shortcut: { url: "/images/profile.jpg", type: "image/png" },
    },
  };
}

export default async function LocaleLayout({children, params: {locale}}: Props) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();

  unstable_setRequestLocale(locale);
  
  return (
    <html suppressHydrationWarning lang={locale}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
  
      <body className={`dark:bg-black`}>
        <Providers>
            <Lines />
            <Header locale={locale} />
            <ToasterContext />
            {children}
            <Footer locale={locale} />
            <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "../providers";

