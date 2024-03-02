import Link from 'next/link';

const ProjectTagButton = ({ href = "#0", text, blank }: { href?: string; text: string, blank?: boolean }) => {
  const regexp = /http(s)?:\/\//i;

  if (regexp.test(href)){
     return (
        <a
          href={href}
          className="mb-3 mr-3 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-whited duration-300 hover:bg-gray-light hover:text-gray-dark"
          target={blank ? '_blank': '_self'}
          >
          {text}
        </a>
     );
  }

  return (
    <Link
      href={href}
      className="mb-3 mr-3 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white duration-300 hover:bg-gray-light hover:text-gray-dark"
      >
      {text}
    </Link>
  );
}  

export default ProjectTagButton;

