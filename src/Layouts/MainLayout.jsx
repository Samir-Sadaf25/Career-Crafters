import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import Home from '../pages/Home';

const MainLayout = () => {
    return (
        <>
          <Navbar></Navbar>
          <Outlet>
            <Home></Home>
          </Outlet>
          <Footer></Footer>  
        </>
    );
};

export default MainLayout;