# formulario-1

> Vue 3

> Vuex Store

> modules

> dispatch, commit, getters, rootGetters, rootState, state (examples can be found at Tareas.module.js)

> firebase --> Realtime Database --> udemy-api

> Auth using email --> leo@leo.com - 123456

> Store

> Route

> handlers

> nanoid

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Refresh 404 error

See [HTML5 History Mode](https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations)

when try to go directly to a specific route like vue.leovidal.es/about

History de vue, tira un 404.

Solución:

Agregar archivo a su carpeta "public" con el siguiente nombre: _redirects

El código de este archivo será: /* /index.html  200

Compilar nuevamente con npm run build y subir proyecto a Netlify.

## .htaccess (for apache server)
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
