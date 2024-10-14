import '../cssReset.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles.css'

// */ admin pages
import AdminHome from './routes/admin/home.jsx'
import AdminMembers from './routes/admin/members.jsx'
import AdminTest from './routes/admin/test.jsx'
// import AdminQAmail from './routes/admin/QAmail.jsx'
// import AdminTravel from './routes/admin/travel.jsx'
// import AdminTravelTemplate from './routes/admin/travelTemplate.jsx'
// -- admin pages /*

// */ user pages
// import Login from './routes/user/login.jsx'
// import Signin from './routes/user/signin.jsx'
// import Userinfo from './routes/user/userInfo.jsx'
// import UserOrders from './routes/user/userOrders.jsx'
// import Contact from './routes/user/contact.jsx'
import FAQ from './routes/user/FAQ.jsx'
// -- user pages /*


function App() {
  const [count, setCount] = useState(0)

  return (
    // 版本問題，使用react-router-dom最新版路由結構
    // npm list react-router-dom: react-router-dom@6.27.0
    // BrowserRouter > Routes > Route element={別名}
    <BrowserRouter>
    <Routes>
      <Route path="/admin/home" element={<AdminHome />} exact />
      <Route path="/admin/members" element={<AdminMembers />} />
      <Route path="/admin/test" element={<AdminTest />} />
      {/* <Route path="/admin/qna" element={<AdminQAmail />} />
      <Route path="/admin/travel" element={<AdminTravel />} exact />
      <Route path="/admin/travletemplates" element={<AdminTravelTemplate />} /> */}

      {/* <Route path="/login" element={<Login />} exact />
      <Route path="/signin" element={<Signin />} exact />
      <Route path="/user/info" element={<Userinfo />} />
      <Route path="/user/info/:userid" element={<Userinfo />} />
      <Route path="/user/orders/:userid" element={<UserOrders />} />
      <Route path="/contactus" element={<Contact />} /> */}
      <Route path="/questions" element={<FAQ />} exact />
    </Routes>
    </BrowserRouter>
  )
}

export default App
