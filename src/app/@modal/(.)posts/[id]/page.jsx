import PostDetail from '@/components/PostDetail';
import Modal from '@/components/Modal';
import { useMemo } from 'react';

export const fetchDataById = async (id) => {

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

  const id = useMemo(() => params.id, [params]);

  const data = await fetchDataById(id);
  return (
    <Modal>
      <PostDetail data={data} loading={false} />
    </Modal>
  );
}

export default PostPage;
