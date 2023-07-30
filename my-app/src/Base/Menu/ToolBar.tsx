import React from "react"
import MenuButton from "./MenuButton"
import BGM from "../Music/BGM"

export interface IToolBarProps{
    menu: boolean,
    setMenu: (menu: boolean) => void,
}

export default function(props: IToolBarProps){
    return(
        <>
            <div className="ToolBarContainer">
                <MenuButton menu={props.menu} setMenu={props.setMenu}/>
                <BGM menu={props.menu}/>
            </div>
        </>
    );
}

