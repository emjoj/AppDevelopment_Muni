import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {

               //--Used to create data start--

  //const user1 = {firstName:"Alex",lastName: "Cooper" };
  //const user2 = {firstName:"Anna", lastName: "Black",};
  //const message1 = { senderId:1,text: "Hey", };
  //const message2 = {senderId:2,: "calm down", };
  //const conversationUser1 = {conversationId:1,userId:2, };
  //await prisma.user.create({ data:user2  });
  //await prisma.message.create({ data:message2  });
  //await prisma.message.update({ where: { id: 6 }, data: { content: "calm down"}, })
  //const dates = allMessages.map(d => d.createdAt);
  //const allusers = await prisma.conversationUser.findMany();
  //console.log(allusers);

              //--Used to create data finish--
    
    const messagesFromRightUser = await prisma.message.findMany({
      where: {
        senderId: 1
      }
    }
    );
    const messageLastId = Math.max(...messagesFromRightUser.map(user => user.id));
    const lastMessage = messagesFromRightUser.filter(m=> m.id==messageLastId);
    const textLastMessage = lastMessage.map(m => m.content);
  
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
  
