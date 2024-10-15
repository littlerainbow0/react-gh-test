// components/home.jsx
import React from 'react';
import Navbar from '../../components/admin/navbar.jsx';
import CustomTable from '../../components/admin/costomTable.jsx'; // 確保導入的是正確的路徑

const columns = [
    "userId",
    "orderId",
    "travelId", 
    "templateTitle", 
    "status",
    "routeName", 
    "people",
    "seatsId",
    "date", 
    "departureTime", 
    "orderStatus",
    "menuName1",
    "menuName2",
    "updateTime", 
    "totalAmount"
];
const data = [
    {
        userId:1,
        orderId:1,
        travelId:1, 
        templateTitle:"日式甜點", 
        status:"即將到來",
        // 已過期, 即將到來
        routeName:"台中高雄", 
        people:3,
        seatsId:[A1,A2,A3],
        date:"2024/11/13", 
        departureTime:"09:00", 
        orderStatus:"已付款",
        // 已付款 / 未付款 / 已取消 / 棄單
        menuName1:"日式練切",
        menuName2:"日式團子",
        updateTime: "2024/10/11",
        totalAmount: "4000",
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