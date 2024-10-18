import { Link } from "@nextui-org/react";
import { div } from "framer-motion/client";

var userBiasNavText = ["管理帳戶", "檢視已預訂旅程"]

export default function UserNavbar() {
    // data: 在此func中指定一變數
    // {data}: 在React中才能使用"""解構賦值"""

    return (
        <div>
            <h3 className="font-titleFont text-h3 font-bold m-20">
                Hello! 您好
            </h3>
            <nav className="bg-dark">
                <ul className="p-3">
                    {userBiasNavText.map((elem, index) => (
                        <Link key={index} href=""
                            className="font-titleFont text-p-1 font-bold text-lightyellow">
                            &emsp;{elem}&emsp;&emsp;
                        </Link>
                    ))}
                </ul>
            </nav>
        </div>
    )
}