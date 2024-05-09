import Link from "next/link";
import { useRouter } from "next/router";

function index() {
  const router = useRouter();
  return (
    <div>
      <h1>Posts list</h1>
      <button
        onClick={() => {
          router.push({ pathname: "/posts/[param]", query: { param: 1 } });
        }}
      >
        Read more
      </button>
    </div>
  );
}

export default index;
