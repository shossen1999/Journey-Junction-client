
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar/Navbar';
import Footer from '../pages/Footer/Footer';


const Root = () => {
    return (
        <div>
           <div>
           <Navbar></Navbar>
            <Outlet></Outlet>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default Root;