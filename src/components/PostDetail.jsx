

function PostDetail(props) {

  const { data ,loading} = props;
console.log(props)

  return (
    <>
      <div>
        {
          loading ? 'loading' : (
            <pre>
         <code>
            {
              JSON.stringify((data), null, 2)
            }
         </code>
        </pre>
          )
        }

      </div>
    </>
  );
}

export default PostDetail;
