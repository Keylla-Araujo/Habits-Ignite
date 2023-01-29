// Back-end API RESTful
// provê acesso a funcionalidades de criação remoção, alteração, através de rotas HTTP

import Fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'

const app = Fastify ()
const prisma = new PrismaClient()

app.register(cors)

/**
 * Método HTTP
 * Get - busca informação (apenas este funciona acessando pelo navegador)
 * Post - cria alguma coisa
 * Put - atualizar algum recurso por completo
 * Patch - atualizar informação específica de um recurso
 * Delete - deleta um recurso dentro do Back-end
 */

app.get('/hello', async () => {
    const habits = await prisma.habit.findMany()

    return habits
})

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP Server running!')
})