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