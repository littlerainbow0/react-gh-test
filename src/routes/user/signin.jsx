// components/home.jsx
import React from 'react';
import Navbar from '../../components/admin/navbar.jsx';
import { DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";
import CustomTable from '../../components/admin/costomTable.jsx'; // 確保導入的是正確的路徑

const columns = ["userId", "name", "email", "phone", "birth", "county", "dist", "address"];
const data = [
    {
        userId: 1,
        name: "林少晴",
        email: "onoyi17@gmail.com",
        phone: "0912345678",
        birth: "1997/02/22",
        county: "台中市",
        dist: "南屯區",
        address: "公益路二段51號18樓"
    },
];

const AdminMember = () => {
    return (
        <div className="flex flex-row">
            <Navbar />
            <div className='flex-col ml-10'>
            <h1>admin/home</h1>
            <CustomTable columns={columns} data={data} />
            <CustomTable columns={individualInformationColumns} data={individualInformationData}></CustomTable>
            <CustomTable columns={historyOrdersColumns} data={historyOrdersData}></CustomTable>
            </div>

        </div>
    );
};

export default AdminMember;