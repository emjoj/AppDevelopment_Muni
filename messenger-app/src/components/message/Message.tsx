import React, {useEffect, useState} from 'react';
import { Component } from 'react';
import {conversationsState} from '../../store/atoms';
import {useRecoilState} from 'recoil';
import {useRecoilValue} from 'recoil';
import {messagesState} from '../../store/selectors';
import useSWR from 'swr';
import fetcher from '../../fetcher/fetcher';


// interface ConversationInterface {
//     id: number,
//     isActive: boolean,
//     isPinned: boolean,
//     updatedAt: string,
//     messages: [
//       {
//         id: number,
//         senderId: number,
//         content: string,
//         createdAt: string,
//         conversationId: number,
//         edited: boolean
//         delatedAt: string
//       }]
// }

export const Message = () => {
// const me = 
//     [
//         {"name": "Artur Towish", "time": "1h ago", "content": "Some sample message"},
//         {"name": "Nix Golddigger", "time": "2h ago", "content": "Second Some sample message"}   
//       ]

//     const [conversations, setConversations] = useState<ConversationInterface>();
//     //([["Artur Towish",1,"blabla"],["Nix Golddigger",2,"blabla"]]);
//     useEffect(() => {
//         async function getConversations() {
//             const conversationsRequest = await fetch("http://localhost:3000/api/conversation/recent");
//             const conversationsData = await conversationsRequest.json();
//             setConversations(conversationsData); 
//         };
//         getConversations();
//     }
//     )
const messages = useRecoilValue(messagesState);

const [conversations, setConversations] = useRecoilState(conversationsState);


  const { data, error }:any = useSWR('http://localhost:3000/api/conversation/recent', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
 // return <div>hello {}!</div>
if(conversations.isLoading){
const ApiConversations = data.map((p:any) => p) ;
setConversations({isLoading:false, data: ApiConversations})}

console.log(conversations.data)
  //console.log(conversations?.messages)
    return (
    //     me.map((me,i)=>
        
    //     <div className="message">
    //     <div className="message__picture">

    //         <img src={require("../assets/images/profile_pic.png").default} alt="Profile picture"/>
    //     </div>

    //     <span className="message__name">{me.name}</span>
    //     <small className="message__time">{me.time}</small>

    //     <span className="message__content">{me.content}</span>

    // </div>
    //     )
<>
    {conversations?.data.map((c:any) => 
    
    <div className="message">
        <div className="message__picture">
            <img src={require("../assets/images/profile_pic.png").default} alt="Profile picture"/>
        </div>

        <span className="message__name">{c?.conversation.isActive}</span>
        <small className="message__time">{c?.conversation.isActive}</small>

        <span className="message__content">{c?.conversation.isActive}</span>

    </div> 
        
    
     )}
    </>
        
    );
};