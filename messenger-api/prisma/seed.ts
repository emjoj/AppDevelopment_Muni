import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const anna = await prisma.user.upsert({
    where: { 
        id: 2 },
    update: {},
    create: {
      firstName: `Anna`,
      lastName: 'Black',
    },
  })

  const alex = await prisma.user.upsert({
    where: { 
        id: 1 },
    update: {},
    create: {
      firstName: `Alex`,
      lastName: 'Cooper',
    },
  })}