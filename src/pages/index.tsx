
import { Inter } from 'next/font/google';
import { Button, Htag, Paragraph, Tag } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export default function Home(): JSX.Element {
  
  return (
    <>
      <Htag tag='h1'>Текст</Htag>
      <Button appearance='primary'>Кнопка</Button>
      <Button appearance='ghost' arrow='down'>Кнопка 2</Button>
      <Paragraph size='14'>Хеллоу ворлд</Paragraph>
      <Paragraph>Хеллоу ворлд2</Paragraph>

      <Paragraph size='18'>Хеллоу ворлд3</Paragraph>
      <Tag size='s'>ghost</Tag>
<Tag size='m' color='red'>Маленький</Tag>
<Tag size='s' color='green'>Средний</Tag>
<Tag size='s' color='primary'>Средний</Tag>


    </>
  );
}
