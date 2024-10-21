
import React from 'react';
import Sidebar from '../components/AdminSidebar';
import AdminDashboard from '../components/AdminDashboard';
import '../Styles/AdminDBPage.css';  // Add custom styling here

const AdminDBPage = () => {
  return (
    <div className="admin-db-page">
      <Sidebar />
      <div className="dashboard-content">
        <AdminDashboard />
      </div>
    </div>
  );
};

export default AdminDBPage;
