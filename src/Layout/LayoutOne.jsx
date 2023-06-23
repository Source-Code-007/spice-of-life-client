import Nav from '../Components/Header/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import ScrollToTop from '../Components/HelpingCompo/ScrollToTop';
import ToTop from '../HelpingCompo/ToTop';


const LayoutOne = () => {
    return (
        <>
            <ScrollToTop>
                <Nav></Nav>
                <Outlet></Outlet>
                <Footer></Footer>
                <ToTop></ToTop>
            </ScrollToTop>
        </>
    );
};

export default LayoutOne;