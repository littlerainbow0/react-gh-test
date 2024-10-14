// components/home.jsx
import React from 'react';
import Navbar from '../../components/admin/navbar.jsx';
import CustomTable from '../../components/admin/customTable.jsx'; // 確保導入的是正確的路徑

const columns = ["Name", "Age", "Email","hi"];
const data = [
  { Name: "Alice", Age: 25, Email: "alice@example.com" },
  { Name: "Bob", Age: 30, Email: "bob@example.com" },
];

const AdminHome = () => {
    return (
        <div className="flex flex-row">
            <Navbar />
            <h1>Admin Home</h1>
            <CustomTable columns={columns} data={data} />
        </div>
    );
};

export default AdminHome;