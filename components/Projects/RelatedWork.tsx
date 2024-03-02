import Image from "next/image";
import Link from "next/link";

const RelatedWork = ({
  title,
  siteimg,
  mobileimg,
  url,
}: {
  title: string;
  siteimg: string;
  mobileimg?: string;
  url: string;
}) => {
  
  return (
    <div className="flex items-center lg:block xl:flex">
      <Link href={url}>
        <div className="mr-5 lg:mb-3 xl:mb-0">
          <div className="relative h-[60px] w-[70px] overflow-hidden rounded-md sm:h-[75px] sm:w-[85px]">
            <Image src={siteimg} alt={title} fill />
          </div>
        </div>
      </Link>
      <Link href={url}>
        <div className="w-full">
          <h5
            className="mb-[6px] block text-base font-medium leading-snug text-black hover:text-primary dark:text-white dark:hover:text-primary"
            >
            {title}
          </h5>
        </div>
      </Link>
    </div>
  );
  
  /*
  return (
    <div className="flex items-center lg:block xl:flex">
      <div className="mr-5 lg:mb-3 xl:mb-0">
        <div className="relative h-[60px] w-[70px] overflow-hidden rounded-md sm:h-[75px] sm:w-[85px]">
          <Link href={url}>
            <Image src={siteimg} alt={title} fill />
          </Link>
        </div>
      </div>
      <div className="w-full">
        <h5>
          <Link
            href={url}
            className="mb-[6px] block text-base font-medium leading-snug text-black hover:text-primary dark:text-white dark:hover:text-primary"
          >
            {title}
          </Link>
        </h5>
      </div>
    </div>
  );*/
};

export default RelatedWork;
