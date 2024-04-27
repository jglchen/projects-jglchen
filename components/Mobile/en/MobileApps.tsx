import Link from "next/link";
import mobileData from '@/configdata/mobileData';


const MobileApps = () => {
    return (
        <div className="text-justify dark:text-body-color-dark mb-12 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl">
            <p>
            <strong>iOS</strong> and <strong>Android</strong> mobile apps are delivered. 
            The apps are developed with <strong>React Native</strong>, anyone who is interested can test the development builds with <a className='text-primary' href={mobileData.ios} target='_blank' rel='noreferrer'>iOS Simulator Build</a> and <a className='text-primary' href={mobileData.android} target='_blank' rel='noreferrer'>Android Internal Distribution Build</a>.
            If the build storage link has expired, please <Link className='text-primary' href='/en/contact'>contact us</Link> to request build files.
            </p>
        </div>
    )

};

export default MobileApps;