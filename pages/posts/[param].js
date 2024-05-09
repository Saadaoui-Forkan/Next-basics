import Link from "next/link"
import { useRouter } from "next/router"

function PostId() {
    const router = useRouter()
    const { param } = router.query
  return (
    <>
        <div>Posts</div>
        <h2 >
            Post {param}
        </h2>
    </>
  )
}

export default PostId