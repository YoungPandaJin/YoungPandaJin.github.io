import React, { ReactNode } from 'react';
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import ToolBar from "../Menu/ToolBar"
import Menu from "../Menu/Menu"
import HomePage from '../../Pages/HomePage/Homepage';

export default function SiteRouter(){
    const [menu, setMenu] = React.useState(false);

    const header = (): ReactNode => {
        return (
            <>
                <ToolBar menu={menu} setMenu={setMenu}/>
                <Menu menu={menu} setMenu={setMenu}/>
                <Outlet/>
            </>
        );
    };


    return (
        <>
        {header()}
        <Routes> 
            <Route index element={<HomePage />}/>
        </Routes>

        </>

    )


}