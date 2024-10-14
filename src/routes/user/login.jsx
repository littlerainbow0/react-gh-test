// components/home.jsx
import React from 'react';
import Navbar from '../../components/admin/navbar.jsx';
import { DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";
import CustomTable from '../../components/admin/costomTable.jsx'; // 確保導入的是正確的路徑

const columns = [
    "userId",
    "email",
    "passwords"
];
const data = [
    {
        userId:1,
        email:"onoyi17@gmail.com",
        passwords:"00000000"
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