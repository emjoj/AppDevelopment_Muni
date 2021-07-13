import React from 'react';
import { Component } from 'react';
import {ConversationMessage} from './ConversationMessage';

interface ConversationMessagesInterface {
    messages: any
}

export const ConversationMessages: React.FC<ConversationMessagesInterface> = (props) => {

 

    return (
        <div className="conversation-messages">
            {props.messages.map((m:string) =>
            <ConversationMessage message={m}/>
            )};

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
    </div>
    );
};