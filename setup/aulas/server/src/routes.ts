import { FastifyInstance } from "fastify"
import { prisma } from "./lib/prisma"

/**
 * Método HTTP
 * Get - busca informação (apenas este funciona acessando pelo navegador)
 * Post - cria alguma coisa
 * Put - atualizar algum recurso por completo
 * Patch - atualizar informação específica de um recurso
 * Delete - deleta um recurso dentro do Back-end
 */

export async function appRoutes(app: FastifyInstance) {
    app.get('/hello', async () => {
        const habits = await prisma.habit.findMany()
    
        return habits
    })
}
