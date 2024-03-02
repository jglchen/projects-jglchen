import Link from 'next/link';

const TagButton = ({ href = "#0", text, blank }: { href?: string; text: string, blank?: boolean }) => {
  const regexp = /http(s)?:\/\//i;
  
  if (regexp.test(href)){
    return (
      <a
        href={href}
        className="bg-gray-light mb-3 mr-3 inline-flex items-center justify-center rounded-sm px-4 py-2 text-sm text-black duration-300 hover:bg-primary hover:text-white dark:bg-[#2C303B] dark:text-white dark:hover:bg-primary"
        target={blank ? '_blank': '_self'}
        >
        {text}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className="bg-gray-light mb-3 mr-3 inline-flex items-center justify-center rounded-sm px-4 py-2 text-sm text-black duration-300 hover:bg-primary hover:text-white dark:bg-[#2C303B] dark:text-white dark:hover:bg-primary"
      >
      {text}
    </Link>
  );
};

export default TagButton;
