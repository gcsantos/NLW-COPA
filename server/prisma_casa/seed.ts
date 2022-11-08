import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

async function main() {
    const user = await prisma.user.create({
        data: {
            name: 'Guilherme Cintra',
            email: 'guilhermecs02@hotmail.com',
            avatarUrl: '',
        }
    })


    const pool = await prisma.poll.create({
        data: {
            title: 'Bolão Teste',
            code: 'TESTE01',
            ownerId: user.id,

            participants: {
                create: {
                    userId: user.id
                }
            }
        }
    })

    await prisma.game.create({
        data: {
            date: '2022-12-03T23:30:00.147Z',
            firstTeamCountryCode: 'BR',
            secondTeamCountryCode: 'DE',

        }
    })

    await prisma.game.create({
        data: {
            date: '2022-11-03T23:30:00.147Z',
            firstTeamCountryCode: 'AR',
            secondTeamCountryCode: 'BR',

            guesses: {
                create: {
                    firtsTeamPoints: 2,
                    secondTeamPoints: 1,

                    participant: {
                        connect: {
                            userId_pollId: {
                                userId: user.id,
                                pollId: pool.id,
                            }
                        }
                    }
                }
            }

        },
    })
}

main()