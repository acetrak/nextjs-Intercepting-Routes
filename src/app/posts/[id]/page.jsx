import PostDetail from '@/components/PostDetail';
import { useMemo } from 'react';

export  const fetchDataById = async (id) => {

  return new Promise(resolve => {
    setTimeout(() => {

      resolve({
        id,
        name: 'xxx',
        age: 34,
      });
    }, 2000);
  });

};

async function PostPage(props) {

  const { params } = props;

  const id = useMemo(()  => params.id, [params]);

  const data = await fetchDataById(id)
  return <PostDetail data={data} loading={false}/>;
}

export default PostPage
