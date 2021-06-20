import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function main() {

  

   await prisma.user.create({

    data: {
      firstName: `Anna`,
      lastName: 'Black'
    }
  })

   await prisma.user.create({
  
      data:{
      firstName: `Alex`,
      lastName: 'Cooper'
      
    }
  })


const message1 = await prisma.message.upsert({
  where: { 
    id: 1 },
update: {},
create: {
  senderId:1,
  content: "Hello",
  conversationId:1
}
})

const message2 = await prisma.message.upsert({
  where: { 
    id: 2 },
update: {},
create: {
  senderId:1,
  content: "Hello",
  conversationId:1
}
})

const message3 = await prisma.message.upsert({
  where: { 
    id: 3 },
update: {},
create: {
  senderId:1,
  content: "Hello",
  conversationId:1
}
})

const message4 = await prisma.message.upsert({
  where: { 
    id: 4 },
update: {},
create: {
  senderId:1,
  content: "Hello",
  conversationId:1
}
})

const message5 = await prisma.message.upsert({
  where: { 
    id: 5 },
update: {
  content:"???"
},
create: {
  senderId:1,
  content: "How are you",
  conversationId:1
}
})

const message6 = await prisma.message.upsert({
  where: { 
    id: 6 },
update: {},
create: {
  senderId:2,
  content: "Calm down",
  conversationId:1
}
})

const message7 = await prisma.message.upsert({
  where: { 
    id: 7 },
update: {},
create: {
  senderId:1,
  content: "Calm down",
  conversationId:1
}
})

const conversation1 = await prisma.conversation.upsert({
  where: { 
    id: 1 },
update: {},
create: {
}
})

const conversationUser1 = await prisma.conversationUser.upsert({
  where: { 
    id: 1 },
update: {},
create: {
  conversationId: 1,
  userId: 1
}
})

const conversationUser2 = await prisma.conversationUser.upsert({
  where: { 
    id: 2 },
update: {},
create: {
  conversationId: 1,
  userId: 2
}
})

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

}






