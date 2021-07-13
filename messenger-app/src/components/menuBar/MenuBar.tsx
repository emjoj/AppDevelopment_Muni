import React from 'react';
import { Component } from 'react';
import { isPropertySignature } from 'typescript';
import { IconPhone } from '../iconPhone/IconPhone';
import { MenuBarIcon } from '../menuBarIcon/MenuBarIcon';



export const MenuBar = () => {

    const picPhone = 
    [
        {"path": "photo_phone", "description": "Photo", "class":" photo"},
        {"path": "attachment_phone", "description": "File", "class":""},
        {"path": "people_phone", "description": "Contacts", "class":""},
        {"path": "moon_phone", "description": "Dark mode", "class":" dark-mode"}
        
      ];
      const picDesktop = 
      [
          {"path": "M", "description": "Menu", "class":" menu-bar__icon-m"},
          {"path": "bubble", "description": "Chat", "class":""},
          {"path": "people", "description": "Groups", "class":""},
          {"path": "moon", "description": "Dark mode", "class":"--dark-mode"}
          
        ]  

    return (
        <div className="menu-bar">
                    {picDesktop.map((pic) =>
            <MenuBarIcon path = {pic.path} description = {pic.description} class = {pic.class}/>
                    )
            };

        {picPhone.map((pic) =>
            <IconPhone path = {pic.path} description = {pic.description} class = {pic.class}/>
                    )
            };
        
    </div>
    );
};