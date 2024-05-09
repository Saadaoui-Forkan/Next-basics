import Link from "next/link"

function login() {
  return (
    <>
    <div>Login</div>
    <Link href={'/'}>
      <button>Back to home</button>
    </Link>
    </>
  )
}

export default login