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
2. 
```
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

### Router
soit l'Url suivante: `http://localhost:3000/post/1?comment=2`<br/>
`?comment=2` : C'est la partie de l'URL qui spécifie les paramètres de requête. Les paramètres de requête sont utilisés pour transmettre des données supplémentaires avec une requête HTTP GET. Dans cet exemple, comment=2 indique qu'il y a un paramètre nommé comment avec la valeur 2. Cela pourrait être utilisé pour filtrer ou afficher des commentaires spécifiques liés à l'article ou au post identifié par 1.

```
    const data = router.query
    console.log(data) // {comment: '44', param: '8'}
    <h4>
      Current path is: {router.pathname}
      {/* Current path is: /posts/[param] */}
    </h4>
    <h4>
      Full path is: {router.asPath}
      {/* Full path is: /posts/8?comment=44 */}
    </h4>
```

1. Definir un chemin/route en utulisant router.push()
```
<button
  onClick={() => {
    router.push({ pathname: "/posts/[param]", query: { param: 1 } });
  }}
>
  Read more
</button>
```
2. Revenir au chemin/router precedante
```
 <button
  onClick={() => {
    router.back();
  }}
>
  Back
</button>
```
3. router.replace()
```
<button
  onClick={() => {
    router.replace('/');
  }}
>
  Home
</button>
```