import {useTranslations } from 'next-intl';
import dynamic from "next/dynamic";

type Props = {
    locale?: string;
};
  

const Mobile = ({locale}: Props) => {
  const t = useTranslations();
  const mainTitle =  t('HomePage.description');
  const MobileApps = dynamic(() => import(`./${locale}/MobileApps`));

  return (
    <>
      <div className="mx-auto max-w-[800px] text-center px-4 md:px-8 2xl:px-0">
        <MobileApps />               
      </div>
    </>
  );


};

export default Mobile;
