import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../componenets/Footer/Footer';
import Navbar from '../componenets/Navbar/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;