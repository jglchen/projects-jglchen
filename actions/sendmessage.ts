"use server";

import db from '@/lib/firestoreAdmin';
import { inquiryNoticeToAdmin } from './inquirynoticetoadmin';
import { inquiryAppreciate } from './inquiryappreciate';
import { ContactInputType } from '@/types/contactinput';

export async function sendMessage(formObj: ContactInputType, locale: string, msgAppreciate: string, headTitle: string){
    const {name, email,  message, subject,  phone } = formObj;

    const inquiryRef = db.collection('inquiries').doc(email);
    const doc = await inquiryRef.get();
    if (!doc.exists) {
        const clientData: {name: string; phone?: string;} = {name: name};
        if (phone){
            clientData.phone = phone;
        }
       const res = await inquiryRef.set(clientData);
    } else {
        const clientData = doc.data();
        if (!clientData?.phone && phone){
           const res = await inquiryRef.update({name: clientData?.name || name, phone});
        }
    }    
    
    const sendTime = new Date().toISOString();
    const msgObj: {name: string; message: string; subject?: string;  phone?: string; sendTime: string;} = {name, message, sendTime};
    if (subject){
        msgObj.subject = subject; 
    }
    if (phone){
        msgObj.phone = phone;
    }
    const res = await db.collection('inquiries').doc(email).collection('inbox').add(msgObj);

    //Send email to administor
    await inquiryNoticeToAdmin(formObj);

    //Send email to client for appreciation
    await inquiryAppreciate(formObj, locale, msgAppreciate, headTitle);

    return {status: "success"};
}