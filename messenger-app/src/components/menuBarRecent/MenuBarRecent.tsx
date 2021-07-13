import React from 'react';
import { Component } from 'react';
import { isPropertySignature } from 'typescript';
import {IconPhone} from "../iconPhone/IconPhone";

export const MenuBarRecent = () => {
    const pic = 
    [
        {"path": "bubble_phone", "description": "Messages", "class":""},
        {"path": "moon_phone", "description": "Dark Mode", "class":""}
        
      ]

    return (
        <div className="menu-bar--recent">
            {pic.map((pic) =>
            <IconPhone path = {pic.path} description = {pic.description} class={pic.class}/>
                    )
            }
    </div>
    );
};