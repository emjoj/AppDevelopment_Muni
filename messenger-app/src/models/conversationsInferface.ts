export interface ConversationInterface {
    conversation:{

    id: number,
    isActive: boolean,
    isPinned: boolean,
    updatedAt: string,
    messages: [
      {
        id: number,
        senderId: number,
        content: string,
        createdAt: string,
        conversationId: number,
        edited: boolean
        delatedAt: string
      }]
    }
}