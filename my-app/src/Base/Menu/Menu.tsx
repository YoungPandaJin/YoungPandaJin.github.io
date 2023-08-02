import React from "react";
import {HiOutlineX} from "react-icons/hi";
import { NavLink } from "react-router-dom";
import "./Menu.scss"

export interface IMenuProps{
    menu: boolean, 
    setMenu: (menu: boolean) => void,
}

export default function Menu(props: IMenuProps){    
    const pages = [
        { text: "Home", link: "/" },
        { text: "Links", link: "/links" },
        { text: "About Me", link: "/aboutme" },
        { text: "Repositories", link: "/repositories" }
    ]

    return (
        <>
            <div className={`generalContainer ${!props.menu && "hide-menu"}`}> 
                <div className={"close-button-container"} onClick={() => props.setMenu(false)}>
                    <HiOutlineX className={"close-button"}/>
                </div>
                <div className={"item-menu"}>
                    {pages.map((data) => (
                        <NavLink
                            to={data.link} 
                            className={`item ${!props.menu && "disable"}`} 
                            onClick={() => props.setMenu(false)} 
                            key={data.text}>
                        {data.text}</NavLink>
                    ))}
                </div>
            </div>
        </>
    );
}