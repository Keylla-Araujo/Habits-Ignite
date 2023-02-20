// Back-end API RESTful
// provê acesso a funcionalidades de criação remoção, alteração, através de rotas HTTP

import Fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from './routes'

const app = Fastify ()

app.register(cors)
app.register(appRoutes)

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP Server running!')
})