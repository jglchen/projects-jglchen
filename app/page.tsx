import {redirect} from 'next/navigation';
import langData from '@/configdata/langData';
const defaultDirec = '/'+langData[0].loc;

// This page only renders when the app is built statically (output: 'export')
export default function RootPage() {
  redirect(defaultDirec);
}
