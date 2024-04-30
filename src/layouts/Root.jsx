import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar/Navbar';
import Footer from '../pages/Footer/Footer';

const Root = () => {
    return (
        // px-4 md:px-8 lg:px-12
        <div className="px-4 md:px-6 lg:px-8">
            <div>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;
