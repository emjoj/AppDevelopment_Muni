import React from 'react';
import { Component } from 'react';

interface IconPhoneInterface {
    path:string
    description: string
    class:string
}

export const IconPhone: React.FC<IconPhoneInterface> = (props) => {
    return (
        <div className="icon-phone">
        <a href="#" className="">
            <img className="icon-phone__circle" src={require("../assets/images/menu_circle.png").default} alt={props.description}/>
            <img className={`icon-phone__pic${props.class}`}  src={require("../assets/images/"+ props.path +".png").default} alt={props.description}/>
            <span className="icon-phone__description">{props.description}</span>
        </a>
    </div>
    );
};