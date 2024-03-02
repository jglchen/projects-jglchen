import { ContactInputType } from '@/types/contactinput';

export function inquiryNoticeHTML(formObj: ContactInputType): string{
    const {name, email, message, subject, phone } = formObj;
    
    const htmlStr =  
    `
    <html>
    <body style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';">
    <div style="color: #111827; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">
    <div style="width: 100%; @media (min-width: 640px) { max-width: 36rem; border-radius: 0.5rem;} margin-top: 1.5rem;padding-left: 1.5rem;padding-right: 1.5rem;padding-left: 1rem;padding-right: 1rem;background-color: #ffffff;box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);overflow: hidden;">
    <div style="margin-bottom: 1rem;font-weight: 700;font-size: 1.25rem;line-height: 1.75rem;color: #4B5563;">
    There is an inquiry from potential client.
    </div>
    <div style="margin-bottom: 1rem;font-size: 1rem;line-height: 1.5rem;color: #4B5563;">
    ${name} from <a href="mailto:${email}">${email}</a>${phone ? " (phone: "+ phone + ")": ''}
    </div>
    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
    ${subject ? "<div style='margin-bottom: 1rem;font-size: 1rem;line-height: 1.5rem;color: #4B5563;'Subject: " +  subject + "</div>": ''}
    <div style="margin-bottom: 1rem;font-size: 1rem;line-height: 1.5rem;color: #4B5563;">
    ${message}
    </div>
    </div>
    </div>
    </body>
    </html>
    `;
  
    return htmlStr;
}

export function inquiryArreciateHTML(formObj: ContactInputType, locale: string, headTitle: string): string{
    const {name, email, message, subject,  phone } = formObj;

    const htmlStr =  
    `
    <html>
    <body style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';">
    <div style="color: #111827; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">
    <div style="width: 100%; @media (min-width: 640px) { max-width: 36rem; border-radius: 0.5rem;} margin-top: 1.5rem;padding-left: 1.5rem;padding-right: 1.5rem;padding-left: 1rem;padding-right: 1rem;background-color: #ffffff;box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);overflow: hidden;">
    <div style="margin-bottom: 1rem;font-size: 1rem;line-height: 1.5rem;color: #4B5563;">
    ${locale === 'zh-tw' ? name+"君：": "Dear "+name+","}
    </div>
    <div style="margin-bottom: 1rem;font-size: 1rem;line-height: 1.5rem;color: #4B5563;">
    ${locale === 'zh-tw' ? "感謝您的留言，我會在最短的時間與您聯絡。": "Thank you for your message, I will contact you in the shortest possible time."}
    </div>
    <div style="margin-bottom: 1rem;font-size: 1rem;line-height: 1.5rem;color: #4B5563;">
    ${locale === 'zh-tw' ? "謝謝": "Best regards."}
    </div>
    <div style="margin-bottom: 1rem;font-size: 1rem;line-height: 1.5rem;color: #4B5563;">
    ${headTitle}
    </div>
    </div>
    </div>
    </body>
    </html>
    `;
  
    return htmlStr;
}
