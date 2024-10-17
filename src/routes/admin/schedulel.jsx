// components/home.jsx
import React from 'react';
import Navbar from '../../components/admin/navbar.jsx';
import CustomTable from '../../components/admin/costomTable.jsx'; // 確保導入的是正確的路徑

const columns = [
    "travelId", 
    "date", 
    "departureTime", 
    "routeName", 
    "templateTitle", 
    "status"];
const data = [
    {
        travelId: 1,
        date: "2024/11/13",
        departureTime: "09:00",
        routeName: "台中高雄",
        templateTitle: "日式甜點",
        status: "已過期"
        // 已過期, 即將到來
    }
];
const templateDetailColumns = [
    "templateId",
    "templateTitle",
    "routeName",
    "themeName",
    "menuName1",
    "menuName2",
];
const templateDetailData = [
    {
        templateId:1,
        templateTitle:"日式甜點",
        routeName:"台中高雄",
        themeName:"日式",
        menuName1:"日式練切",
        menuName2:"日式團子",
    }
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