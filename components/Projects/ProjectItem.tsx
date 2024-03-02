import { Projects } from 'contentlayer/generated';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectItem = ({ project, locale }: { project: Projects; locale:string; }) => {
  const { title, description, siteimg, tags, url } = project;
  const detailUrl = `/${locale}${url.replace('_'+locale,'')}`;
  let tagIndex = 0;
  if (tags && tags.length){
     tagIndex = Math.floor(Math.random() * tags.length);
  }
  
  return (
    <>
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
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="animate_top bg-white dark:bg-blacksection rounded-lg shadow-solid-8"
      >
        <Link
          href={detailUrl}
          className="relative block aspect-[37/22] w-full"
        >
          {tags && tags.length &&
          <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
            {tags[tagIndex].replace(/_/g, ' ')}
          </span>
          }
          <Image src={`/images/projects/${siteimg}`} alt="image" fill />
        </Link>
          
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href={detailUrl}
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {title}
            </Link>
          </h3>
          <p className="text-base font-medium text-body-color">
            {description}
          </p>
        </div>
      </motion.div>
     
    </>
  );
};

export default ProjectItem;
