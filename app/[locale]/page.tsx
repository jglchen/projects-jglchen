import { Metadata } from "next";
import {unstable_setRequestLocale} from 'next-intl/server';
import Main from "@/components/Main";


type Props = {
  params: {locale: string};
};

/*
export const metadata: Metadata = {
  title: "Next.js Starter Template for SaaS Startups - Solid SaaS Boilerplate",
  description: "This is Home for Solid Pro",
  // other metadata
};*/


export default function Home({params: {locale}}: Props) {
  
  unstable_setRequestLocale(locale);
  
  
  return (
    <main>
      <Main 
        locale={locale}
      />
   </main>
  );
}
