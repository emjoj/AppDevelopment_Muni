import React from 'react';
import { Component } from 'react';

interface MenuBarIconInterface {
    path:string
    description: string
    class:string
}

export const MenuBarIcon: React.FC<MenuBarIconInterface> = (props) => {

    return (
        <div className= {`menu-bar__icon${props.class }`}>
        <a href="#" className="">
            <img src={require("../assets/images/"+ props.path +".png").default} alt={props.description}/>
        </a>
    </div>
    );
};