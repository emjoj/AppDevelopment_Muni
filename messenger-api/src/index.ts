import { PrismaClient } from "@prisma/client";
import express from "express";
import bodyParser from "body-parser";

const prisma = new PrismaClient();

const port:number = 3000;
const app = express();


app.use(bodyParser.json())

app.get('/api/conversation/:conversationId/messages/author/:userId', async (req,res)=>{

  const conversationUserExist = await prisma.conversationUser.findMany({
    where:{
      conversationId: Number(req.params.conversationId),
      userId: Number(req.params.userId)

    }
  });

  if(conversationUserExist.length == 0){
    res.status(404).json({ error: 'Sender or conversation does not exists'});
  }
  else{
   const messagesFromSender = await prisma.message.findMany({
     where:{
       conversationId: Number(req.params.conversationId),
       senderId: Number(req.params.userId)
    }
  }
  )
   res.status(200).send(JSON.stringify(messagesFromSender));
  }
});

app.get('/api/conversation/:conversationId/messages', async (req,res)=>{

  const conversationUserExist = await prisma.conversationUser.findMany({
    where:{
      conversationId: Number(req.params.conversationId),
      userId: Number(req.header("X-User"))

    }
  });

  console.log(conversationUserExist.length)

  if(conversationUserExist.length == 0){
    res.status(404).json({ error: 'User or conversation does not exists'});
  }

  else {
  const messages = await prisma.message.findMany({
    where:{
      conversationId: Number(req.params.conversationId),
      
  }})
  res.status(200).send(JSON.stringify(messages));
}
})

app.get('/api/conversation/recent', async (req,res)=>{
  
      const conversations10 = await prisma.conversation.findMany({
        //orderBy:{
          //messages:{

          //}
       // }
       take:10,
        select: {
          id: true,
          isActive:true,
          isPinned:true,
              messages:{
                orderBy: {
                  id: 'desc',
                },
                take: 1,
                select:{
                  id:true,
                  createdAt:true,
                  content:true,
  }}}
      })
      res.status(200).send(JSON.stringify(conversations10));
    }),
      

app.post('/api/conversation/:conversationId/message', async (req,res)=>{

  const conversationExist = await prisma.conversation.findMany({
    where:{
      id: Number(req.params.conversationId),
    }
  });

  if(conversationExist.length == 0){
    res.status(404).json({ error: 'Conversation does not exists'});
  }else{
  
  const entry = req.body;

  await prisma.message.create({ 
    data:{
      senderId: entry.senderId,
      content: entry.content,
      conversationId: entry.conversationId
    }
    })
  res.status(200).send("Ok")
  }
});

app.post('/api/conversation', async (req,res)=>{  
  await prisma.conversation.create({ 
    data:{ 
    }
    });

  const entry = req.body;

  const lastConversationId = await prisma.conversation.findFirst({
    orderBy: {
      id: "desc"
    },
    select:{
      id:true
    }
  });

  console.log((lastConversationId?.id))

 await prisma.conversationUser.create({ 
    data:{
    conversationId: Number(lastConversationId?.id),
    userId: entry.rightUserId
    }
    });
    
  await prisma.conversationUser.create({ 
    data:{
      conversationId: Number(lastConversationId?.id),
      userId: entry.leftUserId
    }
    });
  
  res.status(200).send("Ok");
});

app.get('/api/conversation/:conversationId', async (req,res)=>{

  const conversationExist = await prisma.conversation.findMany({
    where:{
      id: Number(req.params.conversationId),
    }
  });

  if(conversationExist.length == 0 ){
    res.status(404).json({ error: 'Conversation does not exists'});
  }else{

const getConversation = await prisma.conversation.findFirst({
  where: {
    id: Number(req.params.conversationId),
  },
  select: {
    id: true,
    isActive:true,
    isPinned:true,
    users: {
      select: {
        user:{
        }
      },
    },
    
    messages:{
      orderBy: {
        id: 'desc',
      },
      take: 1,
      select:{
        id:true,
        createdAt:true,
        content:true,
      }
    }
  },
});
  res.status(200).send(JSON.stringify(getConversation));
}
});

app.put('/api/conversation/:conversationId/message/:messageId', async (req,res)=>{

  const conversationExist = await prisma.conversation.findMany({
    where:{
      id: Number(req.params.conversationId),
      
    }
  });

  const messageExist = await prisma.message.findMany({
    where:{
      id: Number(req.params.messageId),
    }
  });

  if(conversationExist.length == 0 || messageExist.length==0){
    res.status(404).json({ error: 'Conversation or message does not exists'});
    
  }else{  
    
  const updateMessage = await prisma.message.update({
    where: {
      id: Number(req.params.messageId)
    },
    data: {
      content: req.body.newContent,
    
    },
  });
  console.log(updateMessage);
  res.status(200).send(JSON.stringify(updateMessage));
}
  });



app.delete('/api/conversation/:conversationId/message/:messageId', async (req,res)=>{
  const conversationExist = await prisma.conversation.findMany({
    where:{
      id: Number(req.params.conversationId),
    }
  });

  const messageExist = await prisma.message.findMany({
    where:{
      id: Number(req.params.messageId),
    }
  });

  if(conversationExist.length == 0 || messageExist.length==0){
    res.status(404).json({ error: 'Conversation or message does not exists'});
    
  }else{  

  const deleteMessage = await prisma.message.update({
    where: {
      id: Number(req.params.messageId)
    },
    data: {
      content: "",
    },
  });
  console.log(deleteMessage);
  res.status(200).send(JSON.stringify(deleteMessage));
}
  });

 //async function  verification(conversationId: any,messageId:any): Promise<any> {
 //   const conversationExist = await prisma.conversation.findMany({
 //     where:{
 //       id: Number(conversationId)
 //     }
 //   });
  
//    const messageExist = await prisma.message.findMany({
//      where:{
//        id: Number(messageId)
//      }
//    });

//    if(conversationExist.length == 0 || messageExist.length==0){
//      return Promise.resolve(true)}
//      else{
//        return Promise.reject(false)
//      }}


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
  //const allusers = await prisma.message.findMany();
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
  
  //console.log(lastMessage);  
  //console.log(textLastMessage);
  
  console.log(`Messenger is listening on port ${port}`)

  app.listen(port);

}
  
  main()
    .catch((e) => {
      throw e
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
  
function reply(arg0: string): any {
  throw new Error("Function not implemented.");
}

