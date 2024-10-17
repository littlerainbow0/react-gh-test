import {Link} from "@nextui-org/react";

var userBiasNavText = ["管理帳戶", "檢視已預訂旅程"]

export default function UserNavbar() {
    // data: 在此func中指定一變數
    // {data}: 在React中才能使用"""解構賦值"""

    return (
        <ul>
            -&emsp;
            {userBiasNavText.map((elem, index) => (
            <Link key={index} href="" 
            className="font-titleFont ">
                {elem}&emsp;-&emsp;
            </Link>
            ))}
        </ul>
    )
}