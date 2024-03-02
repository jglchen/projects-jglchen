import nodemailer from 'nodemailer';
import getConfig from "next/config";
const { serverRuntimeConfig } = getConfig();

export const ADMINISTER_EMAIL: string = serverRuntimeConfig.ADMINISTER_EMAIL;
export const SENDER_MAIL_HOST: string = serverRuntimeConfig.SENDER_MAIL_HOST;
export const SENDER_MAIL_PORT: number = parseInt(serverRuntimeConfig.SENDER_MAIL_PORT);
export const SENDER_MAIL_USER: string = serverRuntimeConfig.SENDER_MAIL_USER;
export const SENDER_USER_PASSWORD: string = serverRuntimeConfig.SENDER_USER_PASSWORD;
export const SECURE_CONNECTION: boolean = serverRuntimeConfig.SECURE_CONNECTION;
export const TLS_CIPHERS: string = serverRuntimeConfig.TLS_CIPHERS;


interface MailTransportType {
     host: string;
     secureConnection: boolean;
     port: number;
     tls: {
        ciphers: string;
     }
     auth: {
        user: string;
        pass: string;
     }
}

//Outlook
export const outlookTransporter = nodemailer.createTransport({
    host: SENDER_MAIL_HOST, // hostname
    secureConnection: SECURE_CONNECTION, // TLS requires secureConnection to be false
    port: SENDER_MAIL_PORT, // port for secure SMTP
    tls: {
        ciphers:TLS_CIPHERS
    },
    auth: {
        user: SENDER_MAIL_USER,
        pass: SENDER_USER_PASSWORD
    }
} as MailTransportType);