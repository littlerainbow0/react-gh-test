import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// --*/ admin pages
import AdminHome from './routes/admin/home.jsx'
// --- admin pages /*

function App() {
  const [count, setCount] = useState(0)

  return (
    <AdminHome></AdminHome>
  )
}

export default App
