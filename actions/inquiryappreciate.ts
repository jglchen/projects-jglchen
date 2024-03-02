"use server";

import { outlookTransporter, ADMINISTER_EMAIL, SENDER_MAIL_USER } from '@/lib/mailapi';
import { inquiryArreciateHTML } from '@/lib/smtpmailhttml';
import { ContactInputType } from '@/types/contactinput';

export async function inquiryAppreciate(formObj: ContactInputType, locale: string, msgAppreciate: string, headTitle: string){
    const {name, email,  message, subject,  phone } = formObj;

    //Send email to administor
    const emailTransporter = outlookTransporter;
    const senderMail = SENDER_MAIL_USER;

    // setup e-mail data, even with unicode symbols
    const mailOptions = {
        from: `"${headTitle} " <${senderMail}>`, // sender address (who sends)
        to: email, // list of receivers (who receives)
        subject: msgAppreciate, // Subject line
        html: inquiryArreciateHTML(formObj, locale, headTitle)
    };

    //Special code for Vercel
    await new Promise((resolve, reject) => {
        // verify connection configuration
        emailTransporter.verify(function (error: any, success: any) {
            if (error) {
                //console.log(error);
                reject(error);
            } else {
                //console.log("Server is ready to take our messages");
                resolve(success);
            }
        });
    });

    await new Promise((resolve, reject) => {
        // send mail
        emailTransporter.sendMail(mailOptions, (err: any, info: any) => {
            if (err) {
                //console.error(err);
                reject(err);
            } else {
                //console.log(info);
                resolve(info);
            }
        });
    });

}    