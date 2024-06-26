import Link from "next/link";

function index({ posts }) {
  return (
    <div>
      <h1>Posts list</h1>
      {
        posts.map(post => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))
      }
    </div>
  );
}

export default index;

export async function getStaticProps() {
  const data = await fetch(`http://localhost:3000/api/post`);
  const posts = await data.json();
  return {
    props: {
      posts
    }
  };
}