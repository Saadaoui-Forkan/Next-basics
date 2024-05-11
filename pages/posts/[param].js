import Link from "next/link";
import { useRouter } from "next/router";

function PostId() {
  const router = useRouter();
  const data = router.query;
  // console.log(data); // {comment: '44', param: '8'}
  const { param } = router.query;
  return (
    <>
      <div>Posts</div>
      <h2>
        Post {param} comment: {data.comment}
      </h2>
      <h4>
        Current path is: {router.pathname}
        {/* Current path is: /posts/[param] */}
      </h4>
      <h4>
        Full path is: {router.asPath}
        {/* Full path is: /posts/8?comment=44 */}
      </h4>
      <button
        onClick={() => {
          router.back();
        }}
      >
        Back
      </button>
      <button
        onClick={() => {
          router.replace('/');
        }}
      >
        Home
      </button>
    </>
  );
}

export default PostId;
