import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Addedit from './pages/Addedit';
import View from './pages/View';
import About from './pages/About';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Components/Header';
import { Link } from 'react-router-dom';
import "./Components/Header.css"

function App() {
  const [activeTab,setActiveTab]=useState("Home")
  return (
    <BrowserRouter>
      {/* <div className='App'> */}
        <Header />
        <Link to="/add">
          <button id='button' className={`${activeTab === "AddContact" ? "active" : ""}`}
            onClick={() => setActiveTab("AddContact")}>
            <b>ADD CUSTOMER</b>
          </button>
        </Link>
        <ToastContainer position='top-center' />
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route path='/add' Component={Addedit} />
          <Route path='/update/:id' Component={Addedit} />
          <Route path='/view/:id' Component={View} />
          <Route path='/about' Component={About} />
        </Routes>
      {/* </div> */}
    </BrowserRouter >
  );
}

export default App;
