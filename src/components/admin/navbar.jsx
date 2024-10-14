import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";

// /* icons: https://react-icons.github.io/react-icons/icons/bs/
import { BsCalendar2Range } from "react-icons/bs";
import { BsCalendar2Week } from "react-icons/bs";
import { BsJournals } from "react-icons/bs";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { BsWindowPlus } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsEnvelopeAt } from "react-icons/bs";
// -- icons /*

// /* icon指定統一格式
import { IconContext } from "react-icons";
// -- icon指定統一格式 */

// tailwind設定: https://www.creative-tim.com/twcomponents/cheatsheet/
// flex-col = flex-direction: column;

const navText = [
  {icon: <BsCalendar2Range />,
   item: "訂單管理"},
  {icon: <BsCalendar2Week />,
   item: "訂位狀態"},
  {icon: <BsJournals />,
   item: "旅程管理"},
  {icon: <BsJournalBookmarkFill />,
   item: "旅程範本"},
  {icon: <BsWindowPlus />,
   item: "最新消息"},
  {icon: <BsFillPeopleFill />,
   item: "會員管理"},
  {icon: <BsEnvelopeAt />,
   item: "會員諮詢"},
]

// 側邊欄內容
const Sidebar = () => {
  return (
    <IconContext.Provider value={{ size: 20, color: "#000000" }}>
      <div className="flex flex-col w-64 p-10 h-screen " style={{ backgroundColor: 'rgba(75, 0, 130, 0.5)' }}>
        <Link href="#" className="">
          <span className="text-h3 font-title font-bold mb-10">
            後臺管理
          </span>
        </Link>
        {/* function() => () 這個等於有callback
            = function() {return} */}
        {navText.map((elem,index)=>(
        <div className="flex items-center mb-2" key={index}>
          {elem.icon}
          <Link href="#" className="ml-3">{elem.item}</Link>
        </div>
        ))}
      </div>
    </IconContext.Provider>
  );

};

export default function App() {
  return (
      <Sidebar />
  );
}
