import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='max-w-[1200px] mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;