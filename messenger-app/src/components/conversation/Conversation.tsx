import React from 'react';
import { Component } from 'react';
import {ConversationPicture} from './ConversationPicture';
import {ConversationMessages} from './ConversationMessages';
import { ConversationMessage } from './ConversationMessage';

export const Conversation = () => {

    const chat = 
    [
        {"class": "conversation-messages conversation--received", "messages": ["Ahojky","cauky","Some sample message"]},
        {"class": "conversation-messages",  "messages": ["Ahojky","cauky","Second Some sample message"]}   
      ]

    return (
        <div className="conversation">

        <ConversationPicture class=" conversation--received"></ConversationPicture>
        
        <ConversationMessages messages={chat[0].messages}> </ConversationMessages>
        {/* <div className="conversation-message">
            <p className="conversation-message__text desktop">Ahojky</p>
        </div>
        <div className="conversation-message">
            <p className="conversation-message__text desktop">Cawky</p>
        </div>
        <div className="conversation-message conversation-message--phone1">
            <p className="conversation-message__text">Some very long sample message that takes more space
            </p>
        </div> */}

        <ConversationMessages messages={chat[1].messages}></ConversationMessages>
        {/* <div className="conversation-messages">
            <div className="conversation-message">
                <p className="conversation-message__text desktop">Ahojky</p>
            </div>
            <div className="conversation-message">
                <p className="conversation-message__text desktop">Ahojky</p>
            </div>
            <div className="conversation-message conversation-message--phone2">
                <p className="conversation-message__text">Sample message that takes more space</p>
            </div>
        </div> */}

        <ConversationPicture class=""></ConversationPicture>

    </div>
    );
};