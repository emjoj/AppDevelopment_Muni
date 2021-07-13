import {atom} from "recoil";
import {ConversationInterface} from '../models/conversationsInferface';

interface ConversationView{
    isLoading: boolean,
    data: ConversationInterface[]
}

export const conversationsState = atom<ConversationView>({
    key:"conversations",
    default:{isLoading: true, data:[]} 
    
});

export default conversationsState;