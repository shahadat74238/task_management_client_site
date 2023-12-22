import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { Toaster } from 'react-hot-toast';
import Footer from '../Footer/Footer';

const Layout = () => {
   return (
      <div>
         <Navbar />
         <Outlet />
         <Footer />
         <Toaster />
      </div>
   );
};

export default Layout;