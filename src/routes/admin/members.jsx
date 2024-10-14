// components/home.jsx
import React from 'react';
import Navbar from '../../components/admin/navbar.jsx';
import { DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";
import CustomTable from '../../components/admin/costomTable.jsx'; // 確保導入的是正確的路徑

const columns = ["User ID", "會員等級", "搭乘次數", "棄單次數", "註冊時間", "最新登入"];
const data = [
    {
        "User ID": 1,
        "會員等級": "VIP",
        "搭乘次數": "2",
        // 不同訂單日期計算次數
        "棄單次數": "0",
        // 訂單狀態計算超過發車日期狀態未匯款
        "註冊時間": "2024/06/28 09:00",
        "最新登入": "2024/11/13 16:30",
    },
];
const individualInformationColumns = ["User ID", "姓名", "Email", "手機", "生日", "縣市", "區/鄉/鎮/市", "詳細地址"];
const individualInformationData = [
    {
        "User ID": 1,
        "姓名": "林少晴",
        "Email": "onoyi17@gmail.com",
        "手機": "0912345678",
        "生日": "1997/02/22",
        "縣市": "台中市",
        "區/鄉/鎮/市": "南屯區",
        "詳細地址": "公益路二段51號18樓"
    },
];
const historyOrdersColumns = ["訂單編號", "訂單日期", "發車日期", "訂單狀態", "更新時間", "總金額($NT)"];
const historyOrdersData = [
    {
        "訂單編號": 1,
        "訂單日期": "2024/10/10",
        "發車日期": "2024/11/11",
        "訂單狀態": "已付款",
        "更新時間": "2024/10/11",
        "總金額($NT)": "4000",
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