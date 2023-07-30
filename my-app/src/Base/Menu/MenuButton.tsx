import React, {useState} from "react";
import { HiMenu } from "react-icons/hi";

export interface IMenuButtonProps{
    menu: boolean, 
    setMenu: (menu: boolean) => void,
}


export default function MenuButton(props: IMenuButtonProps){
    return (
        <>
        {props.menu && 
            <div 
                className={'menu'} 
                onClick={() => props.setMenu(true)}>
		        <HiMenu />
	        </div>}
        </>
    );
} 
