import {useTranslations} from 'next-intl';
import menuData from './menuData';
import HeaderClient from "./HeaderClient";

const Header = ({locale}: {locale: string}) => {
  const t = useTranslations();

  const headerData = menuData.map(item => {
    if (item.path){
      return {...item, title: t(`Navigation.${item.title}`)};
    }

    const subMenu = item.submenu?.map(itm => ({...itm, title: t(`Navigation.${itm.title}`)}))
    return {...item,title: t(`Navigation.${item.title}`), submenu: subMenu};
  });

  const headTitle = t('Navigation.HeadTitle');

  return (
    <HeaderClient 
      headerData={headerData}
      headTitle={headTitle}
      locale={locale}
      />
  );
};

export default Header;
