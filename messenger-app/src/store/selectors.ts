import {selector} from 'recoil';
import {conversationsState} from './atoms';

export const  messagesState = selector({
    key:'MessagesState',
    get:({ get }) => {
        const conversations = get(conversationsState);
        const messages = [conversations.data.map((p)=>
            p.conversation)]

    return messages;        
    }
})