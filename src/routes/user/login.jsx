// components/home.jsx
import React from 'react';
import './login.css';

// */ Componenets
import RadiusCard from '../../components/user/radiusCard.jsx'
// -- Componenets /*

const columns = [
    "userId",
    "email",
    "passwords"
];
const data = [
    {
        userId: 1,
        email: "onoyi17@gmail.com",
        passwords: "00000000"
    },
];

var cardBody = {
    title: "會員登入",
    items: [
        {
            tag: "input",
            subtitle: "帳號",
            inputType: "text",
            value: "honey@gmail.com",
            placeholderWords: "",
            readOnly: true,
        },
        {
            tag: "input",
            subtitle: "密碼",
            inputType: "password",
            value: "",
            placeholderWords: "請輸入密碼",
            readOnly: false,
        },
        {
            tag: "input",
            subtitle: "密碼",
            inputType: "password",
            value: "",
            placeholderWords: "請再次輸入密碼",
            readOnly: false,
        },
    ],
}

const login = () => {
    return (
        <div className='main'>
            <RadiusCard data={cardBody} />
        </div>
    )
}

export default login;