import { ActionFunction, LoaderFunction } from '@remix-run/node';
import { Form, Link, useLoaderData } from '@remix-run/react';
import { testData } from 'utils/testData';

interface DataType {
  title: string;
  content: string;
}

// サーバー側の処理(GETなどデータをローディングする)
export const loader: LoaderFunction = async ({ params }): Promise<DataType> => {
  console.log('ローダー', params);
  const data = testData;
  return data;
};

// サーバー側の処理(post, putなどリクエストが必要)
export const action: ActionFunction = async ({ request }) => {
  // フォームデータの取得
  await request.formData();
  // const name = formData.get('name');

  return new Response('form submitted successfully', { status: 200 });
};

export default function Test() {
  // サーバー側からのデータを取得
  const data = useLoaderData<DataType>();
  console.log('サーバー側からのデータ', data);

  return (
    <div>
      <h1>テストページ</h1>
      <ul>
        <li>{data.title}</li>
      </ul>
      <div>
        <Form method='post'>
          <input type='text' name='name' />
          <button type='submit'>保存</button>
        </Form>
      </div>

      <Link to='/'>
        <button className='red-300'>トップへ</button>
      </Link>
    </div>
  );
}
