// components/home.jsx
import React from 'react';

// */ Componenets
import UserBiasNav from '../../components/user/userBiasNav.jsx'
import RadiusCard from '../../components/user/radiusCard.jsx'
// -- Componenets /*

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
        userId: 1,
        orderId: 1,
        travelId: 1,
        templateTitle: "日式甜點",
        status: "即將到來",
        // 已過期, 即將到來
        routeName: "台中高雄",
        people: 3,
        seatsId: ["A1", "A2", "A3"],
        date: "2024/11/13",
        departureTime: "09:00",
        orderStatus: "已付款",
        // 已付款 / 未付款 / 已取消 / 棄單
        menuName1: "日式練切",
        menuName2: "日式團子",
        updateTime: "2024/10/11",
        totalAmount: "4000",
    }
];

const AdminHome = () => {
    return (
        <div>
            <div id="banner">
                <h3 className="font-titleFont text-h3 font-bold m-20">
                    Hello! 蜂鳴號
                </h3>
                <nav className='m-10'>
                    <UserBiasNav />
                </nav>
            </div>
            <div id="mainbody">

            </div>
        </div>
    );
};

export default AdminHome;