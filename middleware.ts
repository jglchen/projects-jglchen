import createMiddleware from 'next-intl/middleware';
import langData from '@/configdata/langData';
const locales = langData.map(item => item.loc);
 
export default createMiddleware({
  // A list of all locales that are supported
  locales,
 
  // Used when no locale matches
  defaultLocale: locales[0]
});
 
export const config = {
  // Match only internationalized pathnames
  //matcher: ['/', '/(zh-tw|en)/:path*']
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
