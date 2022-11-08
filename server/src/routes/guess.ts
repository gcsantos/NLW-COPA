import { FastifyInstance } from "fastify"
import { z } from "zod"
import { prisma } from "../lib/prisma"
import { authenticate } from "../plugins/authenticate"

export async function guessRouts(fastify: FastifyInstance) {
    fastify.get('/guesses/count', async () => {
        const count = await prisma.guess.count()
        return { count }
    })

    fastify.post('/pools/:poolId/games/:gameId/guesses', {
        onResponse: [authenticate]
    }, async (request, reply) => {
        const createGuessParams = z.object({
            poolId: z.string(),
            gameId: z.string(),
        })

        const createGuessBody = z.object({
            firstTeaPonts: z.number(),
            secondTeaPonts: z.number(),
        })

        const { poolId, gameId } = createGuessParams.parse(request.params)
        const { firstTeaPonts, secondTeaPonts } = createGuessBody.parse(request.body)

        return {
            poolId,
            gameId,
            firstTeaPonts,
            secondTeaPonts
        }


    })

}