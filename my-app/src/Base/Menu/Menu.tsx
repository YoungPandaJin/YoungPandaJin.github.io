import React from "react";
import {HiOutlineX} from "react-icons/hi";
import { NavLink } from "react-router-dom";

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
        {props.menu &&
            <div className="generalContainer"> 
                <div className="xButton" 
                    onClick={() => props.setMenu(false)}>
                    <HiOutlineX/>
                </div>
                <div className='menuItems'>
                    {pages.map((data) => (
                        <NavLink
                            to={data.link} 
                            className="item" 
                            onClick={() => props.setMenu(false)} 
                            key={data.text}>
                        {data.text}</NavLink>
                    ))}
                </div>
            </div>

        }
        </>
    );
}