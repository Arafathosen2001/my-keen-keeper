import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Component/NavBar/NavBar';
import Footer from '../Component/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;