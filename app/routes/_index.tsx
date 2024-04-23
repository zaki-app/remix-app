import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Remix' },
    { name: 'description', content: '一から作るRemixアプリ' },
  ];
};

export default function Index() {
  console.log('remix');
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1 className='bg-red-300'>
        これはcreate-remixを使用しない一から作成するRemixアプリです!!
      </h1>
    </div>
  );
}
