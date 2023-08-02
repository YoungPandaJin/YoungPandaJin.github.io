import React, {useState} from "react";
import { HiMenu } from "react-icons/hi";
import "./MenuButton.scss"
export interface IMenuButtonProps{
    menu: boolean, 
    setMenu: (menu: boolean) => void,
}


export default function MenuButton(props: IMenuButtonProps){
    return (
        <>
            <div 
                className={`menu-button ${props.menu && 'hideButton'}` } 
                onClick={() => props.setMenu(true)}>
		        <HiMenu />
	        </div>
        </>
    );
} 