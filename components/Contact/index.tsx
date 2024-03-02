import {useTranslations} from 'next-intl';
import ContactClient from "./ContactClient";

const Contact = ({locale}: {locale: string;}) => {
  const t = useTranslations();

  const contactPage = {
    title: t('ContactPage.title'),
    Name: t('ContactPage.Name'),
    Email: t('ContactPage.Email'),
    Subject: t('ContactPage.Subject'),
    Phone: t('ContactPage.Phone'),
    Message: t('ContactPage.Message'),
    SendMsg: t('ContactPage.SendMsg'),
    SendingMsg: t('ContactPage.SendingMsg'),
    SendMsgSuccess: t('ContactPage.SendMsgSuccess'),
    FieldRequied: t('ContactPage.FieldRequied'),
    NameMax: t('ContactPage.NameMax'),
    EmailMax: t('ContactPage.EmailMax'),
    EmailNotValid: t('ContactPage.EmailNotValid'),
    FindUs: t('ContactPage.FindUs'),
    MsgAppreciate: t('ContactPage.MsgAppreciate'),
    OpenQRCode: t('ContactPage.OpenQRCode'),
    CloseQRCode: t('ContactPage.CloseQRCode'),
    HeadTitle:  t('Navigation.HeadTitle'),
  }


  return (
    <ContactClient 
      contactPage={contactPage}
      locale={locale}
      />
  );
};

export default Contact;
