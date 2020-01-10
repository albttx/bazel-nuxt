import { Nuxt, Builder } from 'nuxt'

import express from 'express'
import session from 'express-session'

// import bodyParser from 'body-parser'
// import cookieParser from 'cookie-parser'

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
app.set('port', port)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
    session({
        secret: '5685E737-B4D5-463B-A2A0-79CBD6ED8DDA',
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 60000, httpOnly: false }
    })
)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
    // Init Nuxt.js
    const nuxt = new Nuxt(config)

    // Build only in dev mode
    if (config.dev) {
        const builder = new Builder(nuxt)
        await builder.build()
    } else {
        await nuxt.ready()
    }

    // Give nuxt middleware to express
    app.use(nuxt.render)

    // Listen the server
    app.listen(port, host)
}
start()
