import {Link} from "@nextui-org/react";

export default function UserNavbar({data}) {
    // data: 在此func中指定一變數
    // {data}: 在React中才能使用"""解構賦值"""

    return (
        <ul>
            {data.map((elem, index) => (
            <Link key={index} href="" className="">
                {elem}
            </Link>
            ))}
        </ul>
    )
}