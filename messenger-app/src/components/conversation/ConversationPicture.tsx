import React from 'react';
import { Component } from 'react';

interface ConversationPictureInterface {
    class:string
}

export const ConversationPicture: React.FC<ConversationPictureInterface> = (props) => {

    return (
        <div className={`conversation-picture${props.class }`}>
            <img className="" src={require("../assets/images/profile_pic.png").default} alt="Profile picture"/> 
        </div>
    );
};