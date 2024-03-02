"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import contactData from "@/configdata/contactData";
import InputError from '../Utils/InputError';
import { ErrorsType } from '@/types/errorstype';
import { ContactInputType } from '@/types/contactinput';
import validateContactInputClient from '@/validate/contactinput-client';
import { sendMessage } from '@/actions/sendmessage';

type Props = {
  contactPage: {
    title: string;
    Name: string;
    Email: string;
    Subject: string;
    Phone: string
    Message: string;
    SendMsg: string;
    SendingMsg: string;
    SendMsgSuccess: string;
    FieldRequied: string;
    NameMax: string;
    EmailMax: string;
    EmailNotValid: string;
    FindUs: string;
    MsgAppreciate: string;
    OpenQRCode: string;
    CloseQRCode: string;
    HeadTitle: string;
  };
  locale: string;
};


const ContactClient = ({contactPage, locale}: Props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<ErrorsType>({});
  const [showQRCode, setShowQRCode] = useState(false);
  
  /**
   * Source: https://www.joshwcomeau.com/react/the-perils-of-rehydration/
   * Reason: To fix rehydration error
   */
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  
  useEffect(() => {
    if (success){
      setTimeout(() => {
        setSuccess(false);
      }, 5000)
    }
  },[success]);
  
  if (!hasMounted) {
    return null;
  }
  
  const formReset = () => {
    setName('');
    setEmail('');
    setSubject('');
    setPhone('');
    setMessage('');
  };
  
  
  const submitForm = async (e: any) => {
    e.preventDefault();

    setErrors({});

    const formObj: ContactInputType = {
      name,
      email,
      message,
    }

    if (subject){
      formObj.subject = subject;
    }
    if (phone){
      formObj.phone = phone;
    }
  
    const validateResult = validateContactInputClient(formObj, {
      FieldRequied: contactPage.FieldRequied,
      NameMax: contactPage.NameMax,
      EmailMax: contactPage.EmailMax,
      EmailNotValid: contactPage.EmailNotValid
    });
    if (!validateResult.valid){
      const errorMsg = validateResult.errorMsg;
      setErrors(errorMsg as ErrorsType);
      return; 
    }

    setPending(true);
    
    const result = await sendMessage(formObj, locale, contactPage.MsgAppreciate, contactPage.HeadTitle);
    
    setPending(false);
    if (result.status === 'success'){
      formReset();
      setSuccess(true);
    }
  } 

  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <section id="support" className="px-4 md:px-8 2xl:px-0">
        <div className="mx-auto max-w-c-1390 relative pt-10 px-7.5 lg:px-15 xl:px-20 overflow-hidden">
          <div className="absolute -z-1 rounded-lg left-0 top-0 w-full h-full bg-gradient-to-t from-[#fff] to-[#dee7ff47] dark:bg-gradient-to-t dark:from-[#24283E] dark:to-[#252A42]"></div>
          <div className="absolute -z-1 bottom-[-255px] left-0 w-full h-full">
            <Image
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="/images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>


          <div className="flex flex-wrap md:flex-nowrap flex-col-reverse md:flex-row gap-8 xl:gap-20 md:justify-between">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-3/5 lg:w-3/4 shadow-solid-8 rounded-lg bg-white dark:bg-black dark:border dark:border-strokedark p-7.5 xl:p-15"
            >
              <h2 className="text-black dark:text-white text-3xl xl:text-sectiontitle2 font-semibold mb-15">
                {contactPage.title}
              </h2>

              <form
                onSubmit={submitForm}
              >
                <div className="flex flex-col lg:flex-row lg:justify-between gap-7.5 lg:gap-14 mb-7.5">
                  <div className="w-full lg:w-1/2">
                    <input
                      type="text"
                      placeholder={contactPage.Name}
                      onChange={e => setName(e.target.value)}
                      value={name}
                      className="w-full bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white pb-3.5"
                      required
                    />
                    <InputError messages={errors.name} className="mt-2" />
                  </div>
                  
                  <div className="w-full lg:w-1/2">
                    <input
                      type="email"
                      placeholder={contactPage.Email}
                      onChange={e => setEmail(e.target.value)}
                      value={email}
                      className="w-full bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white pb-3.5"
                      required
                    />
                    <InputError messages={errors.email} className="mt-2" />
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:justify-between gap-7.5 lg:gap-14 mb-12.5">
                  <div className="w-full lg:w-1/2">
                    <input
                      type="text"
                      placeholder={contactPage.Subject}
                      onChange={e => setSubject(e.target.value)}
                      value={subject}
                      className="w-full bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white pb-3.5"
                    />
                    <InputError messages={errors.subject} className="mt-2" />
                  </div>
                  <div className="w-full lg:w-1/2">
                    <input
                      type="text"
                      placeholder={contactPage.Phone}
                      onChange={e => setPhone(e.target.value)}
                      value={phone}
                      className="w-full bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white pb-3.5"
                    />
                    <InputError messages={errors.phone} className="mt-2" />
                  </div>
                </div>

                <div>
                  <textarea
                    placeholder={contactPage.Message}
                    onChange={e => setMessage(e.target.value)}
                    value={message}
                    rows={4}
                    className="w-full bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white"
                    required
                  ></textarea>
                </div>
                <div className="flex mb-11.5">
                  <InputError messages={errors.message} className="w-full mt-2" />
                </div>
 
                <div className="flex flex-wrap xl:justify-between ">
                  {/*
                  <div className="flex mb-4 md:mb-0">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mt-2"
                      required
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="max-w-[425px] flex cursor-pointer select-none pl-5 text-sm"
                    >
                      {contactPage.AgreeTerm}
                    </label>
                  </div>
                  */}
                  
                  <button 
                    aria-label="send message" 
                    disabled={pending}
                    className="inline-flex items-center gap-2.5 bg-black hover:bg-blackho ease-in-out duration-300 dark:bg-btndark font-medium text-white rounded-full px-6 py-3">
                    {pending ? contactPage.SendingMsg: contactPage.SendMsg}
                    
                    <svg
                      className={`fill-white ${pending ? 'hidden': ''}`}
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                        fill=""
                      />
                    </svg>

                    <svg className={`fill-white ${pending ? '': 'hidden'}`}
                      xmlns="http://www.w3.org/2000/svg" 
                      height="32" 
                      width="32"
                      viewBox="0 0 32 32" 
                      >
                        <rect width="32" height="32" fill="none"></rect>
                        <circle cx="16" cy="16" r="2"></circle>
                        <circle cx="8" cy="16" r="2"></circle>
                        <circle cx="24" cy="16" r="2"></circle>
                    </svg>

                  </button>
                </div>

                <div className="text-xl text-[#2d3748] dark:text-[#edf2f7] py-2 px-4">
                  {success ? contactPage['SendMsgSuccess']: ''}
                </div>

              </form>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-2/5 lg:w-[26%] md:p-7.5 xl:pt-15"
            >
              <h2 className="text-black dark:text-white text-3xl xl:text-sectiontitle2 font-semibold mb-12.5">
                {contactPage.FindUs}
              </h2>

              {/* 
              <div className="mb-7 5">
                <h4 className="font-medium text-black dark:text-white text-metatitle3 mb-4">
                  Our Loaction
                </h4>
                <p>290 Maryam Springs 260, Courbevoie, Paris, France</p>
              </div>
              */}
              <div className="mb-7 5">
                <h4 className="font-medium text-black dark:text-white text-metatitle3 mb-4">
                  {contactPage.Email}
                </h4>
                <p>
                  <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
                </p>
              </div>
              <div className="mb-7 5">
                <h4 className="font-medium text-black dark:text-white text-metatitle3 mb-4">
                  WhatsApp
                </h4>
                {/* 
                <p>
                  <a href="#">{contactData.whatsapp}</a>
                </p>
                */}
                <div className="cursor-pointer" onClick={() => setShowQRCode(status => !status)}>
                {showQRCode ? contactPage.CloseQRCode: contactPage.OpenQRCode}
                </div>
                {showQRCode && 
                <div className="relative aspect-[502/497] mt-2">
                  <Image src={contactData.whatsapp} alt="image" fill />
                </div>
                }
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default ContactClient;
