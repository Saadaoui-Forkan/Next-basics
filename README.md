### Executer le projet automatiquement dans le navigateur
package.json:
```
"dev": "open http://localhost:3000 && next dev"
```

### Creer une nouvelle route
pages/routeName
```
function login() {
  return (
    <div>Login</div>
  )
}

export default login
```

### Creer des liens
```
    import Link from "next/link"

    <Link href={'/login'}>
        Login
    </Link>
```

### Dynamic Routes
la route principale ce trouve dans le fichier index, l'obtension des auters routes se fait par l'ajout du nom du route

```
http://localhost:3000/posts/create
```
1. creer un dossier posts
2. creer un fichier index.js
3. creer un fichier create.js

```
http://localhost:3000/posts/${variable}
```
1. creer un fichier [param].js
2. ```
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

```