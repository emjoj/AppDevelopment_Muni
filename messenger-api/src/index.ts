import { PrismaClient } from "@prisma/client";
import express from "express";


const prisma = new PrismaClient();

const port: number = 3000;
const app = express();


app.use(express.json())

app.get('/api/conversation/:conversationId/messages', async (req, res) => {

  if (req.header("X-User") != null) {
    const conversationUserExist = await prisma.conversationUser.findMany({
      where: {
        conversationId: Number(req.params.conversationId),
        userId: Number(req.header("X-User"))
      }
    });

    if (conversationUserExist.length == 0) {
      res.status(404).json({ error: 'User or conversation does not exists' });
    };

    const messagesFromSender = await prisma.message.findMany({
      where: {
        conversationId: Number(req.params.conversationId),
        senderId: Number(req.header("X-User"))
      }
    })
    res.send(messagesFromSender);
  };

  const conversationExist = await prisma.conversation.findUnique({
    where: {
      id: Number(req.params.conversationId)
    }
  });

  if (conversationExist == null) {
    res.status(404).json({ error: 'Conversation does not exists' });
  }

  const messages = await prisma.message.findMany({
    where: {
      conversationId: Number(req.params.conversationId),
    }
  })
  res.send(messages);
});

app.get('/api/conversation/recent', async (req, res) => {

  const conversations10 = await prisma.conversation.findMany({
    orderBy: {
      updatedAt: 'desc'
    },
    take: 10,
    include: {
      messages: {
        orderBy: {
          id: 'desc',
        },
        take: 1,
      }
    }
  });
  res.send(conversations10);
});


app.post('/api/conversation/:conversationId/message', async (req, res) => {

  const conversationExist = await prisma.conversation.findUnique({
    where: {
      id: Number(req.params.conversationId),
    }
  });

  if (conversationExist == null) {
    res.status(404).json({ error: 'Conversation does not exists' });
  };

  const entry = req.body;

  const newMessage = await prisma.message.create({
    data: {
      senderId: entry.senderId,
      content: entry.content,
      conversationId: entry.conversationId
    }
  });

  await prisma.conversation.update({
    where: {
      id: conversationExist?.id
    },
    data: {
      updatedAt: newMessage.createdAt
    }
  });

  res.send({ message: "OK" })
});

app.post('/api/conversation', async (req, res) => {
  const newConversation = await prisma.conversation.create({
    data: {
    }
  });

  const entry = req.body;

  await prisma.conversationUser.create({
    data: {
      conversationId: Number(newConversation?.id),
      userId: entry.rightUserId
    }
  });

  await prisma.conversationUser.create({
    data: {
      conversationId: Number(newConversation?.id),
      userId: entry.leftUserId
    }
  });
  res.send({ conversation: "OK" });
});

app.get('/api/conversation/:conversationId', async (req, res) => {

  const conversation = await prisma.conversation.findFirst({
    where: {
      id: Number(req.params.conversationId),
    },
    include: {
      users: {
        include: {
          user: true
        }
      },
      messages: {
        orderBy: {
          id: 'desc',
        },
        take: 1
      }
    },
  });

  if (conversation == null) {
    res.status(404).json({ error: 'Conversation does not exists' });
  };
  res.send(conversation);

});

app.put('/api/conversation/:conversationId/message/:messageId', async (req, res) => {

  if (await verification(Number(req.params.conversationId), Number(req.params.messageId)) == false) {
    res.status(404).json({ error: 'Conversation or message does not exists' });
  };

  const updateMessage = await prisma.message.update({
    where: {
      id: Number(req.params.messageId)
    },
    data: {
      content: req.body.newContent,
      edited: true
    }
  });

  res.send(updateMessage);

});

app.delete('/api/conversation/:conversationId/message/:messageId', async (req, res) => {

  if (await verification(Number(req.params.conversationId), Number(req.params.messageId)) == false) {
    res.status(404).json({ error: 'Conversation or message does not exists' });
  };

  const deleteMessage = await prisma.message.update({
    where: {
      id: Number(req.params.messageId)
    },
    data: {
      content: "",
      delatedAt: new Date()

    },
  });

  res.send(deleteMessage);

});

async function verification(conversationId: any, messageId: any): Promise<boolean> {
  const conversationExist = await prisma.conversation.findUnique({
    where: {
      id: Number(conversationId)
    }
  });

  const messageExist = await prisma.message.findUnique({
    where: {
      id: Number(messageId)
    }
  });

  if (conversationExist == null || messageExist == null) {
    return new Promise((reject) => { reject(false); })
  } return new Promise((resolve) => { resolve(true); })
};


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
  const lastMessage = messagesFromRightUser.filter(m => m.id == messageLastId);
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
  });



