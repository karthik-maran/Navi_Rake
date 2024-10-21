import React from "react";
import Sidebar from "../components/AdminSidebar";
import AdminViewUsers from "../components/AdminViewUsers";
const AdminViewData = () =>{
    return (
        <div className="admin-db-page">
          <Sidebar />
          <div className="dashboard-content">
            <AdminViewUsers />
          </div>
        </div>
      );
}
export default AdminViewData;