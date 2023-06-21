import React from 'react';
import Nav from '../Components/Header/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import ScrollToTop from '../Components/HelpingCompo/ScrollToTop';

const LayoutOne = () => {
    return (
        <>
            <ScrollToTop>
                <Nav></Nav>
                <Outlet></Outlet>
                <Footer></Footer>
            </ScrollToTop>
        </>
    );
};

export default LayoutOne;