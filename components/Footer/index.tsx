import {useTranslations} from 'next-intl';
import FooterClient from "./FooterClient";

const Footer = ({locale}: {locale: string}) => {
  const t = useTranslations();

  const footerPage = {
    headTitle: t('Navigation.HeadTitle'),
    titleDecr: t('HomePage.footersub'),
    contact: t('Navigation.Contact'),
    quicklink: t('Navigation.QuickLink'),
    support: t('Navigation.Support'),
    Home: t('Navigation.Home'),
    Contact: t('Navigation.Contact'),
    Projects: t('Navigation.Projects'),
    Skills: t('Navigation.Skills'),
    Blog: t('Navigation.Blog'),
    Mobile: t('Navigation.Mobile'),
    CloseQRCode: t('ContactPage.CloseQRCode'),
  };

  return (
    <FooterClient 
      footerPage={footerPage}
      locale={locale}
      />
  );
};

export default Footer;
