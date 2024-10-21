/* eslint-disable @next/next/no-page-custom-font */
'use client';
import Layout from './components/Layout';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Login from './components/login';

import ProtectedRoute from './components/ProtectedRoute';
import Registration from './components/Registration';
import BookingForm from './components/BookingForm';
import SidingLocation from'./Pages/SidingLocation';
import RakeDetails from './components/RakeDetails';
//import Title from './components/Title';
import ReportGeneration  from './components/ReportGeneration';
import AdminDashboard from './components/AdminDashboard';
import Shortestpathmap from './Pages/ShortpathPage';
import AdminDBPage from './Pages/AdminDBPage';
import  AdminCardView from './components/AdminAddCards';
import AdminViewUsers from './components/AdminViewUsers';
import AdminShowData from './Pages/AdminShowData';
import AdminViewBookings from './components/AdminViewBooking';
import AdminViewData from './Pages/AdminViewData';
import About from './components/About';
import GoogleChartGraph from './components/CoalDashbordAPI';
import CoalDashboardAPI from './components/CoalDashbordAPI';


const Home = () => {
  return (

      
    <BrowserRouter>
    <Layout/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Home" element={<HomePage/>}/>
        <Route path="/register" element={<Registration />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/siding-locator" element={<SidingLocation/>}/>
        <Route path="/HomePage" element={<ProtectedRoute><HomePage/></ProtectedRoute>}/>
        <Route path="/rake-cards" element={<RakeDetails />} />
        <Route path="/report-data" element={<ReportGeneration />} /> 
        <Route path="/scheduling" element={<Shortestpathmap/>} />
        <Route path='/forecasting' element={<CoalDashboardAPI/>}/>
        

      
        <Route path="/admin" element={<AdminDBPage/>} />
        <Route path="/admin/add-data" element={<AdminShowData/>} />
        <Route path='/admin/view-users' element={<AdminViewData/>}/>
        <Route path='/admin/view-bookings' element={<AdminViewBookings/>}/>
       
        

      </Routes>
     
    </BrowserRouter>

  );
};

export default Home;
