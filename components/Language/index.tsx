import { useRouter, usePathname } from 'next/navigation';
import langData from "@/configdata/langData";


type Props = {
  locale: string;
}

export default function LanguageChanger({locale} : Props) {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(pathname.replace(locale, e.currentTarget.value));
  };

  return (
    <select value={locale} onChange={handleChange} className="bg-transparent border-2 border-gray-900 dark:border-gray-50 rounded-sm">
      {langData.map(item => 
          (<option key={item.id} value={item.loc}>
            {item.description}
          </option>)
      )}
    </select>
  );
}