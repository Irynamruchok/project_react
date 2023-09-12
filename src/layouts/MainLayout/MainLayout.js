
import React from 'react';


import css from './MainLayout.module.css'
import Header from "../../components/Header/Header";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div className={css.Background}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;