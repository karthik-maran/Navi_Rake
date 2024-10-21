import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Layout = ({ children }) => {
  const location = useLocation();
  
  // List of routes where NavBar should not appear
  const hideNavBarRoutes = ['/admin','/admin/add-data','/admin/view-bookings','/admin/view-users',];

  const shouldShowNavBar = !hideNavBarRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavBar && <NavBar />}
      <div>{children}</div>
    </>
  );
};

export default Layout;
