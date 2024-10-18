// components/home.jsx
import React from 'react';
import Navbar from '../../components/admin/navbar.jsx';
import CustomTable from '../../components/admin/customTable.jsx'; // 確保導入的是正確的路徑
import RouteName from '../../components/admin/routeName.jsx'
import FilterCard from '../../components/admin/card_filter.jsx'

const filterCardName = [
    {
        dessertType:"歐式",
        imgSrc:"../../assets/images/dessert_lemoncake.png",
    },
    {
        dessertType:"日式",
        imgSrc:"../../assets/images/dessert_lemoncake.png",
    },
    {
        dessertType:"台式",
        imgSrc:"../../assets/images/dessert_lemoncake.png",
    },
]

const columns = [
    "templateId",
    "templateTitle",
    "routeName",
    "themeName",
    "themeImg"];
const data = [
    {
        templateId: 1,
        templateTitle : "日式甜點",
        routeName: "台中高雄",
        themeName: "日式",
        // 日式甜點, 台式甜點, 歐式甜點
        themeImg: ".png",
    }
];
const detailColumns = [
    "templateId",
    "themeName",
    "menuName1",
    "menuContent1",
    "menuName2",
    "menuContent2",
    "activityName1",
    "activityName2",
    "activityName3",
    "activityName4",
]
const detailData = [
    {
        templateId: 1,
        themeName: "日式",
        menuName1:"日式練切",
    menuContent1:"煎茶、柚香練切、星空羊羹",
    menuName2:"日式團子",
    menuContent2:"焙茶、醬油團子、櫻餅、蕨餅",
    activityName1:"Y",
    activityName2:"N",
    activityName3:"Y",
    activityName4:"N"
    }
];
const modalColumns = [
    "templateId",
    "themeName",
    "themeImg",
    "templateTitle",
    "templateSubtitle",
    "templateDescrpition",
    "routeName",
    "activityName",
    "activityChecked",
    "menuName",
    "menuChecked"
];
const modalData = [{
    templateId: 1,
    themeName: "日式",
    themeImg: ".png",
    templateTitle: "日式甜點",
    templateSubtitle: "西部一日遊",
    templateDescrpition: "行程文案",
    routeName: "台中高雄",
    activityName: ["現場演奏", "手做活動", "品酒會", "桌邊魔術"],
    activityChecked: [1, 0, 1, 0],
    menuName: ["日式練切", "日式團子", "日式和菓子"],
    // 篩選出日式tag的菜單名稱
    menuChecked: [1,1,0]
},
];

const AdminHome = () => {
    return (
        <div className="flex flex-row">
            <Navbar />
            <div className='ml-10 text-left w-full'>
            <RouteName/>
            <FilterCard data={filterCardName} />
            <CustomTable columns={columns} data={data} />
            </div>
        </div>
    );
};

export default AdminHome;