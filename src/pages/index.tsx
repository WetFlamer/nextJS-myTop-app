
import { Inter } from 'next/font/google';
import { Htag } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export default function Home(): JSX.Element {
  
  return (
    <div>
      <Htag tag='h1'>Текст</Htag>
    </div>
  );
}
