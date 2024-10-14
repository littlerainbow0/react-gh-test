import '../cssReset.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles.css'

// --*/ admin pages
import AdminHome from './routes/admin/home.jsx'
import AdminMembers from './routes/admin/members.jsx'
// --- admin pages /*

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
    </Routes>
    </BrowserRouter>
  )
}

export default App
