import React from "react";
import Sidebar from "../components/AdminSidebar";
import AdminAddCards from "../components/AdminAddCards";
const AdminShowData = () =>{
    return (
        <div className="admin-db-page">
          <Sidebar />
          <div className="dashboard-content">
            <AdminAddCards />
          </div>
        </div>
      );
}
export default AdminShowData;