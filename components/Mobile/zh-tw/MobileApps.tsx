import Link from "next/link";
import mobileData from '@/configdata/mobileData';

const MobileApps = () => {
    return (
        <div className="text-justify dark:text-body-color-dark mb-12 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl">
            <p>
            <strong>iOS</strong> and <strong>Android</strong> 行動應用程式已交付. 
            這些應用程式是使用<strong>React Native</strong> 開發的，任何有興趣的人都可以使用<a className='text-primary' href={mobileData.ios} target='_blank' rel='noreferrer'>iOS Simulator Build</a> 和 <a className='text-primary' href={mobileData.android} target='_blank' rel='noreferrer'>Android Internal Distribution Build</a>來測試開發版本。
            如果發現連結檔案儲存已過期，請<Link className='text-primary' href='/zh-tw/contact'>聯絡我們</Link>索取建置檔案。
            </p>
        </div>
    )

};

export default MobileApps;
