const fastify = require('fastify')()
// const helmet = require('fastify-helmet')
const path = require('path')
const helmet = require('helmet')

// fastify.register(helmet)
// fastify.use(serveStatic(path.join(__dirname, 'src')))

fastify.register(require('fastify-static'), {
    root: path.join(__dirname, 'src')
    // prefix: '/public/', // optional: default '/'
})

// fastify.use(helmet.contentSecurityPolicy({
//     directives: {
//         // defaultSrc: ["'self'"]
//         // styleSrc: ["'self'", 'maxcdn.bootstrapcdn.com'],
//         // scriptSrc: ["'self' https://code.jquery.com/jquery-2.2.4.js"]
//         // scriptSrc: [`'self' 'https://code.jquery.com'`]
// // Content-Security - Policy: script-src 'self' https://apis.google.com
//     }
// }))


fastify.listen('5005', err => {
    console.log('Helmet testing server listening on', fastify.server.address().port)
})


