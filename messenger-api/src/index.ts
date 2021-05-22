import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {

               //--Used to create data start--

  //const user1 = {firstName:"Alex",lastName: "Cooper" };
  //const user2 = {firstName:"Anna", lastName: "Black",};
  //const message1 = { senderId:1,text: "Hey", };
  //const message2 = {senderId:2,: "calm down", };
  //await prisma.message.create({ data:message2  });
  //await prisma.message.update({ where: { id: 4 }, data: { conversationId: 1}, })
  //const dates = allMessages.map(d => d.createdAt);

                //--Used to create data end--
 

    const allMessages = await prisma.message.findMany();
    const messagesFrom1 = allMessages.filter(m => m.senderId == 1);
    const lastId = Math.max(...messagesFrom1.map(user => user.id));
    const lastMessage = messagesFrom1.filter(m=> m.id==lastId);
    const textLastMessage = lastMessage.map(m => m.text);
    
  console.log(lastMessage);  
  console.log(textLastMessage);

}
  
  main()
    .catch((e) => {
      throw e
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
  
