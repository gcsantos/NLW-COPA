import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient()

async function main() {
    const user = await prisma.user.create({
        data: {
            name: 'John Doe',
            email: 'john.doe@hotmail.com',
            avatarUrl: '',
        }
    })


    const pool = await prisma.poll.create({
        data: {
            title: 'Exemplo Poll',
            code: 'bol123',
            ownerId: user.id,

            participants: {
                create: {
                    userId: user.id
                }
            }
        }
    })
}

main()