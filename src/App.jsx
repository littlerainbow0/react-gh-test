// import React, { Component } from 'react';

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Facilities from '/src/routes/admin/Facilities';
import Trip from '/src/routes/admin/Trip.jsx'; // 根據你的文件結構調整路徑
import Header from '/src/components/admin/Header.jsx';


// --*/ admin pages
// import AdminHome from './routes/admin/home.jsx'
// --- admin pages /*

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
          <Route path="/" component={Header} exact/>
          <Route path="/Facilities" component={Facilities} exact/>
          <Route path="/Trip" component={Trip} exact/>
    </div>
  )
}

export default App;
