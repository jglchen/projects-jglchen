import NotFound from '@/components/Not-Found';
import {unstable_setRequestLocale} from 'next-intl/server';

type Props = {
  params: {locale: string};
};

export default function CatchAllPage({params: {locale}}: Props) {
  unstable_setRequestLocale(locale);

  return <NotFound locale={locale} />;
}
