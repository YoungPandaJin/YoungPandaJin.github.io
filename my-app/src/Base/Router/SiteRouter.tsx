import React from 'react';
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import ToolBar from "../Menu/ToolBar"
import Menu from "../Menu/Menu"

export default function SiteRouter(){
    const [menu, setMenu] = React.useState(false);


    return (
        <>
            <ToolBar menu={menu} setMenu={setMenu}/>
            <Menu menu={menu} setMenu={setMenu}/>
            <Outlet/>
        </>

    )


}