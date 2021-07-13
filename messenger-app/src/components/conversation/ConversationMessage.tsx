import React from 'react';
import { Component } from 'react';

interface ConversationMessageInterface {
    message: string
}

export const ConversationMessage: React.FC<ConversationMessageInterface> = (props) => {


    return (
        
        <div className="conversation-message">
            <p className="conversation-message__text desktop">{props.message}</p>
        </div>
    );
};